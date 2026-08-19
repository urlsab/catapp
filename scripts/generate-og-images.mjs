/**
 * Generates 1200×630 Open Graph PNG images for each article.
 * Uses sharp + inline SVG (gradient + Catapp branding, no Hebrew to avoid font issues).
 * Output: public/og/<slug>.png
 * Run: node scripts/generate-og-images.mjs
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, '..', 'public', 'og');

mkdirSync(OUT_DIR, { recursive: true });

// Article gradient colors (from Tailwind class → hex)
const articles = [
  { slug: 'accessibility',            from: '#1e3a8a', via: '#1e40af', to: '#312e81', icon: '♿' },
  { slug: 'web-accessibility-guide',  from: '#064e3b', via: '#115e59', to: '#14532d', icon: '🔓' },
  { slug: 'hi-tech-web-development',  from: '#7c2d12', via: '#991b1b', to: '#881337', icon: '🚀' },
  { slug: 'web-design',               from: '#831843', via: '#6b21a8', to: '#4c1d95', icon: '🎨' },
  { slug: 'ai-web-development',       from: '#164e63', via: '#1e40af', to: '#0c4a6e', icon: '🤖' },
  { slug: 'lawyer-websites',          from: '#0f172a', via: '#1f2937', to: '#18181b', icon: '⚖️' },
];

function makeSvg(from, via, to) {
  return `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${from}"/>
      <stop offset="50%" style="stop-color:${via}"/>
      <stop offset="100%" style="stop-color:${to}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="150" cy="630" r="450" fill="rgba(255,255,255,0.04)"/>
  <circle cx="1050" cy="0" r="380" fill="rgba(255,255,255,0.04)"/>
  <rect x="80" y="200" width="1040" height="230" rx="24" fill="rgba(0,0,0,0.35)"/>
  <rect x="80" y="30" width="200" height="60" rx="14" fill="rgba(26,121,246,0.92)"/>
  <text x="180" y="72" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="bold" fill="white" text-anchor="middle">Catapp</text>
  <text x="600" y="340" font-family="Arial Black, Arial, sans-serif" font-size="52" font-weight="900" fill="white" text-anchor="middle">catapp.it.com</text>
  <text x="600" y="400" font-family="Arial, Helvetica, sans-serif" font-size="26" fill="rgba(255,255,255,0.65)" text-anchor="middle">Web Development &amp; SEO</text>
  <text x="600" y="570" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="rgba(255,255,255,0.4)" text-anchor="middle">Israel | React | TypeScript | Vite</text>
</svg>`;
}

async function main() {
  const { default: sharp } = await import('sharp');
  let count = 0;
  for (const art of articles) {
    const svg = makeSvg(art.from, art.via, art.to);
    const outPath = join(OUT_DIR, `${art.slug}.png`);
    await sharp(Buffer.from(svg)).png().toFile(outPath);
    console.log(`✓ ${art.slug}.png`);
    count++;
  }
  console.log(`\n✨ Generated ${count} OG images in public/og/`);
}

main().catch((err) => {
  console.error('⚠️  OG image generation failed (non-fatal):', err.message);
  process.exit(0); // non-fatal — build continues
});
