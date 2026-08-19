// scripts/prerender.mjs
//
// פותר את הבעיה הקריטית: כרגע vercel.json מנתב כל נתיב (/pricing, /portfolio וכו')
// לאותו index.html, כך שבוט שלא מריץ JavaScript (כמו רוב בוטי ה-AI: GPTBot,
// PerplexityBot, ולעיתים גם סורקי SEO קלאסיים) רואה תוכן זהה בכל עמוד באתר.
//
// הסקריפט הזה, שרץ אחרי "vite build", פותח כל נתיב בדפדפן headless אמיתי,
// ממתין שה-JS ירוץ (usePageSeo יעדכן title/meta/schema), ואז שומר את ה-HTML
// המלא כקובץ סטטי בנתיב המתאים (dist/pricing/index.html וכו').
//
// Vercel מגיש קבצים סטטיים קיימים לפני שהוא מפעיל rewrites, כך שברגע
// שהקבצים האלה קיימים ב-dist, כל בוט (עם JS או בלי) יקבל HTML נכון ומלא
// לכל עמוד - בלי לשנות שום דבר ב-vercel.json.
//
// הפעלה חד-פעמית:
//   npm install --save-dev puppeteer serve
//   node scripts/prerender.mjs
//
// כדי שזה ירוץ אוטומטית בכל דיפלוי, הוסיפו ל-package.json:
//   "scripts": { "postbuild": "node scripts/prerender.mjs" }

import { execSync, spawn } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, '..', 'dist');
const PORT = 4173;

// קורא slugs של מאמרים מקובץ המקור כדי שנתיב חדש יתוסף אוטומטית
const articlesSource = readFileSync(join(__dirname, '..', 'src', 'data', 'articles.ts'), 'utf-8');
const articleSlugs = [...articlesSource.matchAll(/^\s+slug:\s+'([^']+)'/gm)].map((m) => m[1]);

// כל הנתיבים הציבוריים באתר (בהתאם ל-App.tsx / sitemap.xml)
const ROUTES = [
  '/',
  '/pricing',
  '/portfolio',
  '/about-full',
  '/testimonials',
  '/contact',
  '/faq',
  '/articles',
  '/quote',
  '/business-websites',
  '/landing-pages',
  '/react-websites',
  '/web-development',
  '/portfolio/refael-law',
  '/portfolio/atliz',
  '/portfolio/or-benji',
  '/portfolio/meirav-dula',
  ...articleSlugs.map((slug) => `/articles/${slug}`),
];

async function main() {
  if (!existsSync(DIST_DIR)) {
    console.error('❌ תיקיית dist לא נמצאה - הריצו קודם: npm run build');
    process.exit(1);
  }

  // מגישים את ה-build המקומי כדי שהדפדפן יוכל לטעון אותו
  const serveProcess = spawn('npx', ['serve', DIST_DIR, '-l', String(PORT), '-s'], {
    stdio: 'ignore',
    shell: true,
  });

  await new Promise((r) => setTimeout(r, 2000)); // המתנה לעליית השרת

  // @sparticuz/chromium מספק Chromium סטטי שעובד ב-Vercel/Lambda ללא תלויות מערכת
  const isVercel = !!process.env.VERCEL;
  let browser;
  if (isVercel) {
    const chromium = (await import('@sparticuz/chromium')).default;
    const { default: puppeteerCore } = await import('puppeteer-core');
    browser = await puppeteerCore.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });
  } else {
    const { default: puppeteer } = await import('puppeteer');
    browser = await puppeteer.launch({ headless: true });
  }

  try {
    for (const route of ROUTES) {
      const page = await browser.newPage();
      const url = `http://localhost:${PORT}${route}`;
      await page.goto(url, { waitUntil: 'networkidle0' });

      // ודאו שה-hook usePageSeo כבר עדכן את ה-<head> לפני צילום ה-HTML
      await page.waitForSelector('script[data-page-schema]', { timeout: 5000 }).catch(() => {});

      const html = await page.content();
      await page.close();

      const outDir = route === '/' ? DIST_DIR : join(DIST_DIR, route.slice(1));
      mkdirSync(outDir, { recursive: true });
      writeFileSync(join(outDir, 'index.html'), html, 'utf-8');
      console.log(`✅ נוצר HTML סטטי עבור ${route}`);
    }
  } finally {
    await browser.close();
    serveProcess.kill();
  }

  console.log(`\n✨ סיום - ${ROUTES.length} נתיבים כוללים כעת HTML סטטי ומלא לבוטים.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
