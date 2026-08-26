import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Search, FileCode, User, MessageCircle, Network, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: FileCode,
    title: 'Structured Data — Schema.org מלא',
    desc: 'כל עמוד מכיל JSON-LD מדויק: Organization, Service, Article, BreadcrumbList, FAQPage ו-Person. מנועי AI ומנועי חיפוש יכולים להבין את הקשרים בין הישויות באתר.',
  },
  {
    icon: FileCode,
    title: 'HTML סמנטי — לא רק DIVs',
    desc: 'שימוש ב-main, article, section, nav, header, footer ו-aside עם roles נכונים. מבנה כותרות H1–H6 לוגי. כך AI יכול "לקרוא" את האתר כמו מסמך — לא כקוד.',
  },
  {
    icon: Search,
    title: 'Entity Clarity — ברור מי אתם ומה אתם עושים',
    desc: 'שם העסק, תחום העיסוק, מיקום, שירותים ואנשי קשר — מוצהרים מפורשות בקוד ובתוכן. Google ו-AI מחפשים ישויות ברורות, לא טקסט מעורפל.',
  },
  {
    icon: User,
    title: 'E-E-A-T — ניסיון, מומחיות, סמכות, אמינות',
    desc: 'מחבר ברור לכל מאמר, תאריכי פרסום ועדכון, קישורים לפרופילים חיצוניים, Person schema עם @id. AI לא מצטט מקורות אנונימיים.',
  },
  {
    icon: MessageCircle,
    title: 'FAQs בסכמה — תשובות שAI יכול לצטט',
    desc: 'שאלות ותשובות נפוצות עם FAQPage schema מאפשרות ל-AI ולגוגל להציג תשובות ישירות. תוכן שמנוסח כשאלה-ותשובה מקבל עדיפות בתצוגות AI.',
  },
  {
    icon: Network,
    title: 'Internal Linking — מבנה ידע, לא פאזל',
    desc: 'קישורים פנימיים ממוקדי anchor text ובמבנה היררכי ברור עוזרים לmנועי AI להבין את הקשרים בין עמודים וליצור "knowledge graph" של האתר.',
  },
  {
    icon: Zap,
    title: 'Core Web Vitals — מהירות כגורם דירוג',
    desc: 'LCP < 2.5s, CLS < 0.1, INP < 200ms. מנועי AI ו-Google מעדיפים אתרים מהירים. אתר איטי לא רק פוגע בחוויה — הוא מאותת על טכנולוגיה ישנה.',
  },
  {
    icon: Shield,
    title: 'נגישות — נגיש לאנשים ולרובוטים',
    desc: 'תגי alt מדויקים, תיוגי ARIA, ניווט מקלדת מלא. נגישות טובה היא גם SEO טוב: alt text איכותי משפר הבנה של תמונות על ידי AI ומנועי חיפוש.',
  },
];

const geoChecklist = [
  { item: 'Organization schema עם @id ייחודי', done: true },
  { item: 'Person schema לכל כותב עם @id', done: true },
  { item: 'Article schema עם headline, datePublished, dateModified, author', done: true },
  { item: 'BreadcrumbList בכל עמוד', done: true },
  { item: 'FAQPage schema בעמודי שאלות ושירות', done: true },
  { item: 'Service schema לכל שירות', done: true },
  { item: 'canonical URL מדויק בכל עמוד', done: true },
  { item: 'HTML lang attribute נכון', done: true },
  { item: 'Open Graph + Twitter Cards', done: true },
  { item: 'Sitemap.xml עדכני', done: true },
  { item: 'robots.txt נכון', done: true },
  { item: 'HTTPS + Core Web Vitals', done: true },
];

const faqs = [
  {
    q: 'מה זה GEO ולמה זה חשוב?',
    a: 'GEO (Generative Engine Optimization) הוא אופטימיזציה לאתרים כדי שיופיעו בתשובות של AI כמו ChatGPT, Google AI Overview ו-Perplexity. בניגוד ל-SEO קלאסי שמתמקד בדירוג, GEO מתמקד בלהיות מקור שAI בוחר לצטט.',
  },
  {
    q: 'האם אתר React יכול להיות AI-ready?',
    a: 'כן — בתנאי שנבנה נכון. אתר React עם prerendering, Structured Data, HTML סמנטי ו-E-E-A-T ברור הוא אתר שmנועי AI יכולים לסרוק ולהבין. הבעיה מתחילה כשאתר React לא מבצע prerender ו-Googlebot רואה דף ריק.',
  },
  {
    q: 'כמה זמן לוקח לבנות אתר AI-ready?',
    a: 'כשהתשתית נכונה מהיסוד — Structured Data, HTML סמנטי, E-E-A-T — אין "שלב נוסף". ב-Catapp כל אתר שאנחנו בונים מיושם עם כל הדרישות הללו כחלק מתהליך הפיתוח הסטנדרטי.',
  },
  {
    q: 'מה ההבדל בין SEO רגיל ל-GEO?',
    a: 'SEO רגיל מכוון לדירוג בתוצאות החיפוש הקלאסיות. GEO מכוון לכך ש-AI יבחר לצטט אתכם כמקור. שניהם דורשים תוכן איכותי, אמין ומובנה — אבל GEO שם דגש מיוחד על בהירות ישויות, מקורות מהימנים ו-E-E-A-T.',
  },
  {
    q: 'האם כל אתר שבונים ב-Catapp הוא AI-ready?',
    a: 'כן. כל אתר שאנחנו בונים כולל Structured Data מלא, HTML סמנטי, prerendering, E-E-A-T ו-Core Web Vitals גבוהים. אלה לא "אופציות" — הם חלק מהבסיס של כל פרויקט.',
  },
];

const AiReadyWebsitesPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div dir="rtl" className="max-w-4xl mx-auto px-4 py-16 mt-16">

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
        <Link to="/" className="hover:text-[#1a79f6] transition-colors">בית</Link>
        <span>/</span>
        <Link to="/ai-website-development" className="hover:text-[#1a79f6] transition-colors">בניית אתרים עם AI</Link>
        <span>/</span>
        <span className="text-gray-300">אתרים מוכנים לעידן ה-AI</span>
      </nav>

      {/* H1 Hero */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a79f6]/10 border border-[#1a79f6]/30 text-[#1a79f6] text-sm font-medium mb-6">
          <Search className="w-4 h-4" />
          GEO — AI Search Optimization
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          בניית אתרים מוכנים לעידן החיפוש החדש
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-4">
          ChatGPT, Perplexity ו-Google AI Overview מחפשים מקורות מהימנים לצטט. אתר AI-ready הוא אתר שמנועי חיפוש ו-AI יכולים לקרוא, להבין ולבחור לצטט.
        </p>
        <p className="text-sm text-gray-500 max-w-xl mx-auto mb-8">
          לא מדובר בטרנד — זו הכיוון שהחיפוש האינטרנטי הולך אליו. כל אתר שאנחנו בונים ב-Catapp כולל את כל הדרישות כחלק מתהליך הפיתוח הסטנדרטי.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/quote" className="bg-[#1a79f6] hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
            לקבלת הצעת מחיר
          </Link>
          <Link to="/portfolio" className="border border-[#1a79f6] text-[#1a79f6] hover:bg-[#1a79f6]/10 px-8 py-3 rounded-xl font-bold text-lg transition-all">
            לתיק עבודות ←
          </Link>
        </div>
      </div>

      {/* 8 features */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          מה הופך אתר ל-AI-ready?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-[#1a79f6]/30 bg-white/5 backdrop-blur-sm p-6">
              <div className="flex items-start gap-4">
                <f.icon className="w-7 h-7 text-[#1a79f6] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-bold text-base mb-2">{f.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GEO checklist */}
      <section className="mb-16 rounded-2xl border border-[#1a79f6]/30 bg-white/5 backdrop-blur-sm p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
          AI-Ready Checklist — מה כלול בכל אתר של Catapp
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {geoChecklist.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle className="w-4 h-4 text-[#1a79f6] flex-shrink-0" />
              <span className="text-gray-300 text-sm">{item.item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          שאלות נפוצות — GEO ו-AI Search
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-2xl border border-[#1a79f6]/30 bg-white/5 backdrop-blur-sm">
              <button
                className="w-full flex items-center justify-between p-5 text-right focus:outline-none"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                aria-expanded={openFaq === idx}
              >
                <span className="text-white font-bold text-base">{faq.q}</span>
                <span className={`text-[#1a79f6] transition-transform duration-200 ml-3 flex-shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 text-gray-300 text-sm leading-relaxed">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Internal links */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-white mb-4">עמודים קשורים</h2>
        <div className="flex flex-wrap gap-3">
          <Link to="/ai-website-development" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">בניית אתרים עם AI ←</Link>
          <Link to="/web-development" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">פיתוח Web ←</Link>
          <Link to="/articles/react-seo-guide" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">SEO לאתרי React ←</Link>
          <Link to="/articles/website-seo-from-day-one" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">SEO מהיום הראשון ←</Link>
          <Link to="/faq" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">שאלות נפוצות ←</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center rounded-2xl border border-[#1a79f6]/30 bg-[#1a79f6]/5 p-10">
        <Search className="w-10 h-10 text-[#1a79f6] mx-auto mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">בנו אתר שגם AI ירצה לצטט</h2>
        <p className="text-gray-300 mb-6 max-w-lg mx-auto">כל אתר שבונים ב-Catapp כולל Structured Data, E-E-A-T ו-Core Web Vitals — מוכן לעידן החיפוש החדש.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/quote" className="bg-[#1a79f6] hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-lg">
            לקבלת הצעת מחיר בחינם
          </Link>
          <a href="https://wa.me/972556611594" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-xl font-bold text-xl transition-all">
            WhatsApp ←
          </a>
        </div>
      </section>

    </div>
  );
};

export default AiReadyWebsitesPage;
