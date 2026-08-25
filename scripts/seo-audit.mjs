// scripts/seo-audit.mjs
//
// Reads every index.html in dist/ after prerender and verifies:
//   - title, description, canonical present
//   - exactly one H1
//   - no duplicate titles/descriptions across pages
//   - all JSON-LD schemas are valid JSON
//
// Exit code 1 on any critical failure.

import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, '..', 'dist');

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

  // — canonical
  if (!html.includes('rel="canonical"')) {
    warnings.push('missing canonical link');
  }

  // — H1 count
  const h1Count = (html.match(/<h1[\s>]/g) || []).length;
  if (h1Count === 0) {
    errors.push('no <h1> found');
  } else if (h1Count > 1) {
    warnings.push(`${h1Count} <h1> elements (expected 1)`);
  }

  // — JSON-LD validity
  const jsonLdBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  for (const [, raw] of jsonLdBlocks) {
    try {
      JSON.parse(raw);
    } catch {
      errors.push('invalid JSON-LD schema');
    }
  }

  criticalCount += errors.length;
  warningCount += warnings.length;
  pageResults.push({ pagePath, errors, warnings });
}

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
console.log('');

if (criticalCount > 0) {
  console.error(`Build failed — fix the ${criticalCount} SEO error(s) above.\n`);
  process.exit(1);
}
