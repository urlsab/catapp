// scripts/routes.mjs
// Single source of truth for all public routes.
// Used by: generate-sitemap.mjs, prerender.mjs, seo-audit.mjs
//
// ⚠️  Update `lastmod` manually when content changes meaningfully — NOT on every deploy.

import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

export const STATIC_ROUTES = [
  { loc: '/',                  lastmod: '2026-08-25', changefreq: 'weekly',  priority: '1.0' },
  { loc: '/pricing',           lastmod: '2026-08-25', changefreq: 'monthly', priority: '0.9' },
  { loc: '/business-websites', lastmod: '2026-08-25', changefreq: 'monthly', priority: '0.9' },
  { loc: '/faq',               lastmod: '2026-08-25', changefreq: 'monthly', priority: '0.7' },
  { loc: '/articles',          lastmod: '2026-08-25', changefreq: 'weekly',  priority: '0.9' },
  { loc: '/portfolio',         lastmod: '2026-08-25', changefreq: 'monthly', priority: '0.8' },
  { loc: '/landing-pages',     lastmod: '2026-06-01', changefreq: 'monthly', priority: '0.9' },
  { loc: '/react-websites',    lastmod: '2026-06-01', changefreq: 'monthly', priority: '0.9' },
  { loc: '/web-development',   lastmod: '2026-06-01', changefreq: 'monthly', priority: '0.9' },
  { loc: '/about-full',        lastmod: '2026-06-01', changefreq: 'monthly', priority: '0.7' },
  { loc: '/testimonials',      lastmod: '2026-07-01', changefreq: 'monthly', priority: '0.7' },
  { loc: '/contact',           lastmod: '2026-05-01', changefreq: 'monthly', priority: '0.8' },
  { loc: '/quote',             lastmod: '2026-05-01', changefreq: 'monthly', priority: '0.8' },
  { loc: '/website-for-lawyers',  lastmod: '2026-08-25', changefreq: 'monthly', priority: '0.8' },
  { loc: '/website-for-doctors',       lastmod: '2026-08-26', changefreq: 'monthly', priority: '0.8' },
  { loc: '/ai-website-development',     lastmod: '2026-08-26', changefreq: 'monthly', priority: '0.9' },
  { loc: '/ai-ready-websites',           lastmod: '2026-08-26', changefreq: 'monthly', priority: '0.9' },
];

function readArticleRoutes() {
  const src = readFileSync(join(ROOT, 'src/data/articles.ts'), 'utf-8');
  const slugs = [...src.matchAll(/^\s+slug:\s+'([^']+)'/gm)].map((m) => m[1]);
  const dates = [...src.matchAll(/dateModified:\s+'([^']+)'/g)].map((m) => m[1]);
  return slugs.map((slug, i) => ({
    loc: `/articles/${slug}`,
    lastmod: dates[i] ?? '2026-05-01',
    changefreq: 'monthly',
    priority: '0.7',
  }));
}

function readPortfolioRoutes() {
  const src = readFileSync(join(ROOT, 'src/data/case-studies.ts'), 'utf-8');
  const slugs = [...src.matchAll(/^\s+slug:\s+'([^']+)'/gm)].map((m) => m[1]);
  return slugs.map((slug) => ({
    loc: `/portfolio/${slug}`,
    lastmod: '2026-05-01',
    changefreq: 'yearly',
    priority: '0.8',
  }));
}

/** Full route objects — used for sitemap generation. */
export function buildAllRoutes() {
  return [...STATIC_ROUTES, ...readArticleRoutes(), ...readPortfolioRoutes()];
}

/** URL paths only — used for prerender and seo-audit. */
export function buildAllPaths() {
  return buildAllRoutes().map((r) => r.loc);
}
