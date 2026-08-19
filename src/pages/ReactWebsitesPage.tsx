import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Code2, Zap, TrendingUp, Shield, Phone } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'ביצועים מהירים פי 10',
    description: 'React טוען רק מה שצריך — Virtual DOM ו-lazy loading מבטיחים טעינה מהירה, ציון Lighthouse גבוה ו-Core Web Vitals ירוקים, בניגוד ל-WordPress שנטען עם עשרות תוספים.',
  },
  {
    icon: Shield,
    title: 'אבטחה ויציבות גבוהה',
    description: 'בניית Front-End מופרד מ-Back-End מצמצמת משטחי תקיפה. אין WordPress עם פלאגינים שמתעדכנים ומשנים — קוד נקי שאתם שולטים בו.',
  },
  {
    icon: TrendingUp,
    title: 'SEO מתקדם עם Prerender',
    description: 'בניית אתר React עם prerender סטטי מייצרת HTML מלא לכל עמוד — גוגל רואה תוכן שלם, סורק אותו מהר ומדרג גבוה.',
  },
  {
    icon: Code2,
    title: 'גמישות ללא גבולות',
    description: 'כל פיצ\'ר שתחשבו עליו ניתן למימוש — אנימציות, לוחות מחוונים, ממשקי AI, אינטגרציות API. React מוגבל רק ביצירתיות.',
  },
];

const comparison = [
  { feature: 'מהירות טעינה', react: '< 1.5s', wordpress: '3–8s', wix: '4–10s' },
  { feature: 'ציון Lighthouse', react: '90–100', wordpress: '50–70', wix: '40–65' },
  { feature: 'אבטחה', react: 'גבוהה מאוד', wordpress: 'דורש עדכונים תמידיים', wix: 'תלוי בפלטפורמה' },
  { feature: 'התאמה אישית', react: 'ללא גבולות', wordpress: 'מוגבל לתבניות', wix: 'מוגבל מאוד' },
  { feature: 'SEO', react: 'מלא עם prerender', wordpress: 'טוב עם Yoast', wix: 'בסיסי' },
];

const includes = [
  'בניית Front-End ב-React עם TypeScript',
  'Vite build — בילד מהיר ובאנדל קטן',
  'Tailwind CSS — עיצוב מהיר ורספונסיבי',
  'Prerender HTML סטטי לכל עמוד (SEO)',
  'Lazy loading תמונות ורכיבים',
  'React Router לניווט מהיר ללא רענון',
  'Framer Motion לאנימציות חלקות',
  'פריסה ל-Vercel עם CI/CD',
  'SEO מלא: meta, schema, sitemap',
  'Core Web Vitals מותאמים',
];

const faqs = [
  { q: 'האם React טוב ל-SEO?', a: 'כן — כשבונים נכון. בניית אתר React עם prerender (כמו שאנחנו עושים) מייצרת HTML סטטי מלא לכל עמוד. גוגל סורק אותו כמו כל אתר סטטי.' },
  { q: 'מה ההבדל בין React ל-WordPress?', a: 'WordPress הוא CMS שדורש שרת ו-PHP, מאט עם תוספים ודורש תחזוקה שוטפת. React הוא ספריית Front-End — מהיר, גמיש, בלי צורך ב-DB לאתר תדמית.' },
  { q: 'האם לקוח יכול לנהל תוכן בעצמו?', a: 'כן — ניתן לשלב Headless CMS כמו Contentful, Sanity או Strapi עם React. הלקוח מנהל תוכן בממשק ידידותי, ה-Front-End נשאר מהיר.' },
  { q: 'כמה עולה בניית אתר React?', a: 'בניית אתר תדמית ב-React מתחיל מ-5,000 ₪. פרויקטים מורכבים עם Headless CMS, אנימציות וממשקים מתקדמים — מ-10,000 ₪.' },
  { q: 'האם React מתאים לחנויות אינטרנטיות?', a: 'בהחלט. React עם Stripe API, Supabase DB וממשק ניהול עגלת קניות הוא פתרון חנות מהיר, בטוח וניתן להתאמה מלאה.' },
];

const ReactWebsitesPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div dir="rtl" className="max-w-4xl mx-auto px-4 py-16 mt-16">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
        <Link to="/" className="hover:text-[#1a79f6] transition-colors">בית</Link>
        <span>/</span>
        <span className="text-gray-300">בניית אתרי React</span>
      </nav>

      {/* H1 Hero */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a79f6]/10 border border-[#1a79f6]/30 text-[#1a79f6] text-sm font-medium mb-6">
          <Code2 className="w-4 h-4" />
          טכנולוגיה מתקדמת
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          בניית אתרים בהתאמה אישית עם React
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
          אתרים מהירים, גמישים ומאובטחים עם React ו-TypeScript — הבידול האמיתי בעולם הבנייה האינטרנטית.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/quote" className="bg-[#1a79f6] hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
            לקבלת הצעת מחיר
          </Link>
          <Link to="/portfolio" className="border border-[#1a79f6] text-[#1a79f6] hover:bg-[#1a79f6]/10 px-8 py-3 rounded-xl font-bold text-lg transition-all">
            לדוגמאות אתרי React
          </Link>
        </div>
      </div>

      {/* Benefits */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          למה React עדיף לעסק שלכם?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="rounded-2xl border border-[#1a79f6]/30 bg-white/5 backdrop-blur-sm p-6">
              <div className="flex items-start gap-4">
                <b.icon className="w-7 h-7 text-[#1a79f6] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{b.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{b.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          React vs WordPress vs Wix
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-[#1a79f6]/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#1a79f6]/20 text-white">
                <th className="p-4 text-right font-bold">פיצ'ר</th>
                <th className="p-4 text-center font-bold text-[#1a79f6]">React (Catapp)</th>
                <th className="p-4 text-center font-bold text-gray-300">WordPress</th>
                <th className="p-4 text-center font-bold text-gray-300">Wix</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={i} className={`border-t border-white/10 ${i % 2 === 0 ? 'bg-white/5' : 'bg-transparent'}`}>
                  <td className="p-4 text-gray-300 font-medium">{row.feature}</td>
                  <td className="p-4 text-center text-green-400 font-bold">{row.react}</td>
                  <td className="p-4 text-center text-gray-400">{row.wordpress}</td>
                  <td className="p-4 text-center text-gray-400">{row.wix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* What's included */}
      <section className="mb-16 rounded-2xl border border-[#1a79f6]/30 bg-white/5 backdrop-blur-sm p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
          הטכנולוגיות שאנחנו עובדים איתן
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {includes.map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-200">
              <CheckCircle className="w-5 h-5 text-[#1a79f6] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Pricing */}
      <section className="mb-16 rounded-2xl border border-[#1a79f6]/50 bg-[#1a79f6]/5 p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">מחיר בניית אתר React</h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
          <div className="rounded-xl bg-white/5 border border-white/10 px-6 py-4">
            <div className="text-[#1a79f6] font-bold text-lg mb-1">אתר תדמית React</div>
            <div className="text-white text-2xl font-bold">מ-5,000 ₪</div>
          </div>
          <div className="relative rounded-xl bg-[#1a79f6]/20 border border-[#1a79f6]/40 px-6 py-4">
            <div className="absolute -top-3 right-1/2 translate-x-1/2 bg-[#1a79f6] text-white text-xs px-3 py-1 rounded-full font-bold">עם CMS</div>
            <div className="text-[#1a79f6] font-bold text-lg mb-1">React + Headless CMS</div>
            <div className="text-white text-2xl font-bold">מ-8,000 ₪</div>
          </div>
          <div className="rounded-xl bg-white/5 border border-white/10 px-6 py-4">
            <div className="text-[#1a79f6] font-bold text-lg mb-1">SaaS / אפליקציה</div>
            <div className="text-white text-2xl font-bold">מ-10,000 ₪</div>
          </div>
        </div>
        <Link to="/pricing" className="inline-block bg-white/10 hover:bg-white/20 border border-[#1a79f6]/40 text-white px-8 py-3 rounded-xl font-bold text-lg transition-all">
          למחירון המלא ←
        </Link>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          שאלות נפוצות — בניית אתרי React
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-2xl border border-[#1a79f6]/30 bg-white/5 backdrop-blur-sm">
              <button
                className="w-full flex items-center justify-between p-5 text-right focus:outline-none"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                aria-expanded={openFaq === idx}
              >
                <span className="text-white font-bold text-lg">{faq.q}</span>
                <span className={`text-[#1a79f6] transition-transform duration-200 ml-3 ${openFaq === idx ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 text-gray-300 leading-relaxed">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Related articles */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-white mb-4">מאמרים קשורים</h2>
        <div className="flex flex-wrap gap-3">
          <Link to="/articles/hi-tech-web-development" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">פיתוח אתרים בהייטק ←</Link>
          <Link to="/articles/ai-web-development" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">AI בפיתוח אתרים ←</Link>
          <Link to="/articles/accessibility" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">נגישות אתרים ←</Link>
          <Link to="/business-websites" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">בניית אתרים לעסקים ←</Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center rounded-2xl border border-[#1a79f6]/30 bg-[#1a79f6]/5 p-10">
        <Phone className="w-10 h-10 text-[#1a79f6] mx-auto mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">רוצים אתר React לעסק שלכם?</h2>
        <p className="text-gray-300 mb-6 max-w-lg mx-auto">שיחת ייעוץ בחינם + הצעת מחיר תוך 24 שעות. ראינו עשרות עסקים שעברו ל-React ולא חזרו לאחור.</p>
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

export default ReactWebsitesPage;
