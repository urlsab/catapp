/**
 * Generates public/sitemap.xml automatically from:
 * - hard-coded static routes
 * - article slugs + dates extracted from src/data/articles.ts
 * Run: node scripts/generate-sitemap.mjs
 * Add to package.json "prebuild" so it runs before every build.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://catapp.it.com';
const TODAY = new Date().toISOString().split('T')[0];

// Extract article slugs and dateModified from articles.ts
const articlesSource = readFileSync(
  join(__dirname, '..', 'src', 'data', 'articles.ts'),
  'utf-8'
);
const slugMatches = [...articlesSource.matchAll(/^\s+slug:\s+'([^']+)'/gm)].map(m => m[1]);
const dateModMatches = [...articlesSource.matchAll(/dateModified:\s+'([^']+)'/g)].map(m => m[1]);
const datePubMatches = [...articlesSource.matchAll(/datePublished:\s+'([^']+)'/g)].map(m => m[1]);

const staticRoutes = [
  { loc: '/',                  lastmod: TODAY,       changefreq: 'weekly',  priority: '1.0' },
  { loc: '/web-development',  lastmod: TODAY,       changefreq: 'monthly', priority: '0.9' },
  { loc: '/business-websites',lastmod: TODAY,       changefreq: 'monthly', priority: '0.9' },
  { loc: '/landing-pages',    lastmod: TODAY,       changefreq: 'monthly', priority: '0.9' },
  { loc: '/react-websites',   lastmod: TODAY,       changefreq: 'monthly', priority: '0.9' },
  { loc: '/pricing',          lastmod: TODAY,       changefreq: 'monthly', priority: '0.9' },
  { loc: '/portfolio',        lastmod: TODAY,       changefreq: 'monthly', priority: '0.8' },
  { loc: '/portfolio/refael-law',  lastmod: TODAY,  changefreq: 'monthly', priority: '0.8' },
  { loc: '/portfolio/atliz',       lastmod: TODAY,  changefreq: 'monthly', priority: '0.8' },
  { loc: '/portfolio/or-benji',    lastmod: TODAY,  changefreq: 'monthly', priority: '0.8' },
  { loc: '/portfolio/meirav-dula', lastmod: TODAY,  changefreq: 'monthly', priority: '0.8' },
  { loc: '/about-full',       lastmod: TODAY,       changefreq: 'monthly', priority: '0.7' },
  { loc: '/testimonials',     lastmod: TODAY,       changefreq: 'monthly', priority: '0.7' },
  { loc: '/contact',          lastmod: TODAY,       changefreq: 'monthly', priority: '0.8' },
  { loc: '/faq',              lastmod: TODAY,       changefreq: 'monthly', priority: '0.7' },
  { loc: '/articles',         lastmod: TODAY,       changefreq: 'weekly',  priority: '0.9' },
  { loc: '/quote',            lastmod: TODAY,       changefreq: 'monthly', priority: '0.8' },
];

const articleRoutes = slugMatches.map((slug, i) => ({
  loc: `/articles/${slug}`,
  lastmod: dateModMatches[i] || TODAY,
  changefreq: 'monthly',
  priority: '0.7',
}));

const allRoutes = [...staticRoutes, ...articleRoutes];

const urlEntries = allRoutes.map(r => `  <url>
    <loc>${SITE_URL}${r.loc}</loc>
    <lastmod>${r.lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>
`;

writeFileSync(join(__dirname, '..', 'public', 'sitemap.xml'), xml, 'utf-8');
console.log(`✓ Sitemap generated with ${allRoutes.length} URLs`);
