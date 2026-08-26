// scripts/seo-audit.mjs
//
// Reads every index.html in dist/ after prerender and verifies:
//   - title, description, canonical (value-correct), robots
//   - OG tags: og:title, og:description, og:url, og:image
//   - Twitter Cards: twitter:card, twitter:title, twitter:description, twitter:image
//   - exactly one H1
//   - no duplicate titles/descriptions across pages
//   - all JSON-LD schemas are valid JSON
//   - Article schema fields on /articles/* pages
//   - every expected route (from routes.mjs) was actually prerendered
//
// Exit code 1 on any critical failure.

import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildAllPaths } from './routes.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, '..', 'dist');
const SITE_URL = 'https://catapp.it.com';

if (!existsSync(DIST_DIR)) {
  console.error('❌ dist/ not found — run npm run build first');
  process.exit(1);
}

function collectHtmlFiles(dir, acc = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) collectHtmlFiles(full, acc);
    else if (entry.name === 'index.html') acc.push(full);
  }
  return acc;
}

const files = collectHtmlFiles(DIST_DIR);
const seenTitles = new Map();       // title → path
const seenDescriptions = new Map(); // description → path
const pageResults = [];
let criticalCount = 0;
let warningCount = 0;

for (const filePath of files) {
  const html = readFileSync(filePath, 'utf-8');
  const pagePath =
    filePath.replace(DIST_DIR, '').replace(/\\/g, '/').replace(/\/index\.html$/, '') || '/';

  const errors = [];
  const warnings = [];

  // — title
  const titleMatch = html.match(/<title>([^<]*)<\/title>/);
  if (!titleMatch || !titleMatch[1].trim()) {
    errors.push('missing or empty <title>');
  } else {
    const t = titleMatch[1].trim();
    if (seenTitles.has(t)) {
      warnings.push(`duplicate title (same as ${seenTitles.get(t)})`);
    } else {
      seenTitles.set(t, pagePath);
    }
  }

  // — meta description
  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]*)"/);
  if (!descMatch || !descMatch[1].trim()) {
    errors.push('missing or empty meta description');
  } else {
    const d = descMatch[1].trim();
    if (seenDescriptions.has(d)) {
      warnings.push(`duplicate description (same as ${seenDescriptions.get(d)})`);
    } else {
      seenDescriptions.set(d, pagePath);
    }
  }

  // — canonical (presence + correct URL)
  const canonicalMatch = html.match(/rel="canonical"\s+href="([^"]*)"/);
  if (!canonicalMatch) {
    warnings.push('missing canonical link');
  } else {
    const expectedCanonical = `${SITE_URL}${pagePath === '/' ? '/' : pagePath}`;
    if (canonicalMatch[1] !== expectedCanonical) {
      warnings.push(`canonical mismatch: got "${canonicalMatch[1]}", expected "${expectedCanonical}"`);
    }
  }

  // — robots
  if (!html.includes('name="robots"')) {
    warnings.push('missing robots meta tag');
  }

  // — OG tags
  for (const prop of ['og:title', 'og:description', 'og:url', 'og:image']) {
    if (!html.includes(`property="${prop}"`)) {
      warnings.push(`missing <meta property="${prop}">`);
    }
  }

  // — Twitter Cards
  for (const name of ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image']) {
    if (!html.includes(`name="${name}"`)) {
      warnings.push(`missing <meta name="${name}">`);
    }
  }

  // — H1 count (strip noscript fallback blocks — they're non-JS crawler content, not real page structure)
  const htmlWithoutNoscript = html.replace(/<noscript[\s\S]*?<\/noscript>/gi, '');
  const h1Count = (htmlWithoutNoscript.match(/<h1[\s>]/g) || []).length;
  if (h1Count === 0) {
    errors.push('no <h1> found');
  } else if (h1Count > 1) {
    warnings.push(`${h1Count} <h1> elements (expected 1)`);
  }

  // — JSON-LD validity (regex allows data-page-schema and other attributes)
  const jsonLdBlocks = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  const parsedSchemas = [];
  for (const [, raw] of jsonLdBlocks) {
    try {
      parsedSchemas.push(JSON.parse(raw));
    } catch {
      errors.push('invalid JSON-LD schema');
    }
  }


  // — Article schema fields on /articles/* pages
  if (pagePath.startsWith('/articles/') && !pagePath.endsWith('/articles/')) {
    const articleSchema = parsedSchemas.find(
      (s) => s['@type'] === 'Article' || s['@type'] === 'BlogPosting'
    );
    if (!articleSchema) {
      errors.push('missing Article/BlogPosting JSON-LD schema on article page');
    } else {
      for (const field of ['headline', 'datePublished', 'dateModified', 'author', 'publisher', 'mainEntityOfPage']) {
        if (!articleSchema[field]) {
          warnings.push(`Article schema missing field: ${field}`);
        }
      }
    }
  }

  criticalCount += errors.length;
  warningCount += warnings.length;
  pageResults.push({ pagePath, errors, warnings });
}

// ─── Route coverage check ─────────────────────────────────────────────────
const expectedPaths = buildAllPaths();
const renderedPaths = new Set(
  files.map((f) =>
    f.replace(DIST_DIR, '').replace(/\\/g, '/').replace(/\/index\.html$/, '') || '/'
  )
);
const missingRoutes = expectedPaths.filter((p) => !renderedPaths.has(p));

// ─── Report ───────────────────────────────────────────────────────────────
console.log('\n🔍 SEO Audit\n' + '─'.repeat(60));

const failingPages = pageResults.filter((r) => r.errors.length > 0 || r.warnings.length > 0);
const okPages = pageResults.filter((r) => r.errors.length === 0 && r.warnings.length === 0);

for (const { pagePath, errors, warnings } of failingPages) {
  console.log(`\n  📄 ${pagePath}`);
  for (const e of errors) console.log(`     ❌ ${e}`);
  for (const w of warnings) console.log(`     ⚠️  ${w}`);
}

console.log('\n' + '─'.repeat(60));
console.log(`  ✅ Passed:   ${okPages.length} / ${files.length} pages`);
if (warningCount > 0) console.log(`  ⚠️  Warnings: ${warningCount}`);
if (criticalCount > 0) console.log(`  ❌ Errors:   ${criticalCount}`);

if (missingRoutes.length > 0) {
  console.log(`\n  🗺️  Missing prerendered files for ${missingRoutes.length} route(s):`);
  for (const r of missingRoutes) console.log(`     ❌ ${r}`);
  criticalCount += missingRoutes.length;
}

console.log('');

if (criticalCount > 0) {
  console.error(`Build failed — fix the ${criticalCount} SEO error(s) above.\n`);
  process.exit(1);
}
