/**
 * Generates public/sitemap.xml from the central route registry in routes.mjs.
 * lastmod values are maintained there — update them when content changes.
 */
import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildAllRoutes } from './routes.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://catapp.it.com';

const allRoutes = buildAllRoutes();

const urlEntries = allRoutes
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.loc}</loc>
    <lastmod>${r.lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>
`;

writeFileSync(join(__dirname, '..', 'public', 'sitemap.xml'), xml, 'utf-8');
console.log(`✓ Sitemap generated: ${allRoutes.length} URLs`);
