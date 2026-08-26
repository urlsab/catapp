import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Zap, Bot, Shield, Search, Star, Code2 } from 'lucide-react';

const pipeline = [
  { step: 'AI', label: 'יצירת קוד ואפיון מהיר' },
  { step: 'מפתח', label: 'בדיקה, התאמה ואחריות' },
  { step: 'SEO', label: 'Technical SEO מובנה' },
  { step: 'נגישות', label: 'עמידה בתקן ישראלי 5568' },
  { step: 'ביצועים', label: 'Core Web Vitals גבוהים' },
  { step: 'QA', label: 'בדיקות על כל המכשירים' },
  { step: 'Production', label: 'אתר שעובד באמת' },
];

const comparison = [
  { feature: 'יצירת קוד', auto: 'AI אוטומטי — מהיר', catapp: 'AI + מפתח מנוסה' },
  { feature: 'תכנון', auto: 'Template / prompt', catapp: 'אפיון אמיתי לפי הצורך' },
  { feature: 'קוד', auto: 'גנרי וחוזר', catapp: 'מותאם לפרויקט' },
  { feature: 'SEO', auto: 'בסיסי בלבד', catapp: 'Technical SEO מלא' },
  { feature: 'בדיקות', auto: 'מוגבלות', catapp: 'QA על כל מכשיר ודפדפן' },
  { feature: 'ביצועים', auto: 'לא מובטחים', catapp: 'Core Web Vitals מובנה' },
  { feature: 'נגישות', auto: 'לא תמיד מלאה', catapp: 'עמידה בתקן ישראלי 5568' },
  { feature: 'פונקציונליות', auto: 'מוגבלת', catapp: 'מערכות Web מותאמות' },
  { feature: 'אחריות', auto: 'אין אחריות מקצועית', catapp: 'מפתח שאחראי על התוצאה' },
];

const benefits = [
  {
    icon: Zap,
    title: 'מהירות AI עם דיוק אנושי',
    desc: 'אנחנו משתמשים בכלי AI לקיצור זמני פיתוח — אבל כל קוד, עיצוב ו-SEO עוברים בדיקה והתאמה של מפתח Full Stack מנוסה. התוצאה: מהיר יותר בלי לוותר על איכות.',
  },
  {
    icon: Search,
    title: 'SEO טכני מלא — לא פלט אוטומטי',
    desc: 'AI יכול לייצר תוכן גנרי. מפתח מנוסה יודע לבנות מבנה URL, breadcrumbs, schema.org ו-canonical נכון — כך שגוגל יבין ויאנדקס כל עמוד.',
  },
  {
    icon: Shield,
    title: 'אבטחה ונגישות — לא כולל "out of the box"',
    desc: 'קוד שנוצר ב-AI לא מובטח שיעמוד בתקני נגישות WCAG 2.1 / תקן 5568 או ב-OWASP Top 10. אנחנו בודקים ומוודאים שניהם לפני כל עלייה לאוויר.',
  },
  {
    icon: Bot,
    title: 'AI בתהליך — לא AI במקום המפתח',
    desc: 'GitHub Copilot, Claude ו-AI Code Review מאפשרים לנו לפתח מהר יותר. אבל ההחלטות על ארכיטקטורה, UX, ביצועים ואחריות — נשארות עם מפתח אנושי.',
  },
  {
    icon: Code2,
    title: 'קוד מותאם — לא template',
    desc: 'אתר שנוצר ע"י AI בלבד מבוסס על תבניות וחזרות. אתר שנבנה עם AI ומפתח מנוסה הוא קוד נקי, מותאם אישית ופשוט לתחזוקה לאורך שנים.',
  },
  {
    icon: Star,
    title: 'Core Web Vitals — לא מקרה',
    desc: 'ציוני LCP, CLS ו-INP גבוהים הם תוצאה של החלטות פיתוח מכוונות: תמונות מאופטמלות, JavaScript מינימלי, CSS נקי ו-CDN מוגדר נכון. AI לבד לא מבטיח זאת.',
  },
];

const faqs = [
  {
    q: 'האם AI כבר יכול לבנות אתר לבד?',
    a: 'AI יכול לייצר קוד בסיסי ב-Vite, React או HTML תוך דקות. אבל אתר production שמדורג בגוגל, נגיש, מהיר ומאובטח — עדיין דורש מפתח שמבין מה הוא בונה ולמה. AI מהיר את הבנייה; הוא לא מחליף את השיקול הדעת.',
  },
  {
    q: 'כמה AI-assisted development מקצר את זמן הפיתוח?',
    a: 'בפרויקטים שלנו, שימוש בכלי AI לקידוד, QA ותיעוד קיצר זמני פיתוח בצורה משמעותית — בפועל לפי מורכבות הפרויקט. דף נחיתה שלוקח 5-7 ימים ללא AI — יכול להסתיים ב-2-3 ימים. אנחנו לא מפרסמים מספרים ספציפיים כי כל פרויקט שונה.',
  },
  {
    q: 'האם אתר AI-assisted עולה פחות?',
    a: 'לעיתים כן — כי שעות פיתוח פחותות משפיעות על המחיר. אבל הגורם הגדול יותר הוא מורכבות הפרויקט, לא כמות ה-AI בו. הצעת מחיר תמיד ניתנת לפי הפרויקט הספציפי.',
  },
  {
    q: 'מה הסיכון של אתר שנבנה ב-AI בלבד?',
    a: 'קוד גנרי שלא מתאים לצרכים, SEO לקוי, פגיעויות אבטחה שלא זוהו, ביצועים ירודים וקוד קשה לתחזוקה. אין "מפתח שאחראי" — כך שכל תיקון עתידי יצריך הבנה מחדש של הקוד שנוצר.',
  },
  {
    q: 'האם Catapp משתמשים ב-AI?',
    a: 'כן. GitHub Copilot, Claude ו-AI Code Review הם חלק מתהליך העבודה שלנו. הם עוזרים לנו לפתח מהר יותר ולהתמקד בהחלטות שדורשות מומחיות אנושית: ארכיטקטורה, UX, SEO ואבטחה.',
  },
];

const AiWebDevelopmentPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div dir="rtl" className="max-w-4xl mx-auto px-4 py-16 mt-16">

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
        <Link to="/" className="hover:text-[#1a79f6] transition-colors">בית</Link>
        <span>/</span>
        <Link to="/web-development" className="hover:text-[#1a79f6] transition-colors">פיתוח Web</Link>
        <span>/</span>
        <span className="text-gray-300">בניית אתרים עם AI</span>
      </nav>

      {/* H1 Hero */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a79f6]/10 border border-[#1a79f6]/30 text-[#1a79f6] text-sm font-medium mb-6">
          <Bot className="w-4 h-4" />
          AI-Accelerated Development
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          בניית אתרים עם AI
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-4">
          AI נותן לנו מהירות. מפתח מנוסה נותן לכם אתר שעובד.
        </p>
        <p className="text-base text-gray-400 max-w-xl mx-auto leading-relaxed mb-8">
          אנחנו משלבים כלי AI בתהליך הפיתוח כדי לקצר זמנים — אבל כל קוד, SEO, נגישות, אבטחה וביצועים עוברים בדיקה והתאמה אנושית לפני כל עלייה לאוויר.
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

      {/* Pipeline */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          התהליך: AI → מפתח → Production
        </h2>
        <div className="relative">
          <div className="flex flex-wrap justify-center gap-3">
            {pipeline.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="rounded-xl border border-[#1a79f6]/40 bg-[#1a79f6]/10 px-4 py-3 text-center min-w-[100px]">
                  <div className="text-[#1a79f6] font-bold text-sm mb-1">{item.step}</div>
                  <div className="text-gray-400 text-xs leading-tight">{item.label}</div>
                </div>
                {i < pipeline.length - 1 && (
                  <span className="text-[#1a79f6]/50 text-xl font-light">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          מה מקבלים כשמשתמשים ב-AI עם מפתח מנוסה?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {benefits.map((b, i) => (
            <div key={i} className="rounded-2xl border border-[#1a79f6]/30 bg-white/5 backdrop-blur-sm p-6">
              <div className="flex items-start gap-4">
                <b.icon className="w-7 h-7 text-[#1a79f6] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-bold text-base mb-2">{b.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
          מה ההבדל בין אתר שנבנה ב-AI לבין אתר שנבנה בעזרת AI?
        </h2>
        <div className="rounded-2xl border border-[#1a79f6]/30 bg-white/5 backdrop-blur-sm overflow-hidden">
          <div className="grid grid-cols-3 bg-[#1a79f6]/20 px-4 py-3 text-center">
            <div className="text-gray-400 text-xs font-semibold uppercase tracking-wide text-right">נושא</div>
            <div className="text-gray-300 text-sm font-bold">AI אוטומטי</div>
            <div className="text-[#1a79f6] text-sm font-bold">Catapp + AI</div>
          </div>
          {comparison.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 px-4 py-3 text-sm gap-2 ${i % 2 === 0 ? 'bg-white/0' : 'bg-white/5'}`}>
              <div className="text-gray-400 text-right font-medium text-xs sm:text-sm">{row.feature}</div>
              <div className="text-center text-gray-400 text-xs sm:text-sm leading-snug flex items-center justify-center">
                <span className="text-red-400 ml-1">✗</span> {row.auto}
              </div>
              <div className="text-center text-gray-200 text-xs sm:text-sm leading-snug flex items-center justify-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-[#1a79f6] flex-shrink-0" /> {row.catapp}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          שאלות נפוצות — בניית אתרים עם AI
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
          <Link to="/web-development" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">פיתוח Web בהתאמה אישית ←</Link>
          <Link to="/react-websites" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">בניית אתרי React ←</Link>
          <Link to="/business-websites" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">בניית אתרים לעסקים ←</Link>
          <Link to="/articles/ai-web-development" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">AI בפיתוח אתרים ←</Link>
          <Link to="/pricing" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">מחירון ←</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center rounded-2xl border border-[#1a79f6]/30 bg-[#1a79f6]/5 p-10">
        <Bot className="w-10 h-10 text-[#1a79f6] mx-auto mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">המהירות של AI. הדיוק של מפתח אנושי.</h2>
        <p className="text-gray-300 mb-6 max-w-lg mx-auto">הצעת מחיר בחינם תוך 24 שעות. נסביר בדיוק כיצד AI ישפר את הפרויקט שלכם.</p>
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

export default AiWebDevelopmentPage;
