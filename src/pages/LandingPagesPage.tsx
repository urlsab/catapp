import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, FileText, Zap, Target, TrendingUp, Phone } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'ממוקד ומניע לפעולה',
    description: 'דף נחיתה מתמקד במטרה אחת בלבד — להניע את המבקר לפעולה מיידית: שיחה, טופס, רכישה. ללא הסחות דעת.',
  },
  {
    icon: Zap,
    title: 'עולה מהר, ממיר מהר',
    description: 'בניית דף נחיתה לוקחת 1–2 שבועות. מתאים לקמפיינים, מוצרים חדשים, אירועים ומבצעים.',
  },
  {
    icon: TrendingUp,
    title: 'ROI גבוה מפרסום',
    description: 'כשאתם מפרסמים בגוגל Ads או Facebook — דף נחיתה ייעודי מכפיל את אחוז ההמרה לעומת אתר כללי.',
  },
  {
    icon: FileText,
    title: 'תוכן מקצועי ומשכנע',
    description: 'כותרת חזקה, הוכחות חברתיות, יתרונות ברורים ו-CTA שמייצר פניות — הכל בעמוד אחד ממוקד.',
  },
];

const includes = [
  'עיצוב ייחודי ומותאם לקמפיין / מוצר',
  'כותרת ראשית (H1) ממוקדת לחיפוש',
  'סעיפי יתרונות עם אייקונים',
  'ביקורות / המלצות לקוחות',
  'טופס פנייה מהיר',
  'כפתור WhatsApp בולט',
  'מותאם לכל המכשירים (Mobile-First)',
  'מהירות טעינה מקסימלית',
  'פיקסל פייסבוק / Google Analytics',
  'A/B testing מוכן לביצוע',
];

const faqs = [
  { q: 'מה ההבדל בין דף נחיתה לאתר תדמית?', a: 'אתר תדמית הוא רב-עמודי ומציג את העסק בשלמותו. דף נחיתה הוא עמוד אחד ממוקד למטרה אחת — המרה. בדרך כלל יעיל יותר לקמפיינים ממומנים.' },
  { q: 'כמה עולה בניית דף נחיתה?', a: 'מחיר דף נחיתה לעסק מתחיל מ-2,000 ₪. בהתאם למורכבות העיצוב, אינטגרציות ומספר הגרסאות.' },
  { q: 'כמה זמן לוקח לבנות דף נחיתה?', a: 'בדרך כלל 1–2 שבועות מרגע אישור הבריף. לקמפיינים דחופים — ניתן גם מהר יותר.' },
  { q: 'האם ניתן לקדם דף נחיתה בגוגל?', a: 'כן. דף נחיתה שבנוי נכון עם SEO טכני, מהירות ותוכן ממוקד יכול לדרג בתוצאות האורגניות. גם לפרסום ממומן — ציון איכות גבוה.' },
  { q: 'האם אפשר לשנות את הדף אחרי ההשקה?', a: 'בהחלט. אנחנו עובדים עם מערכת גמישה שמאפשרת שינויים מהירים — בדיוק כשצריך לתת מענה לנתוני קמפיין.' },
];

const LandingPagesPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div dir="rtl" className="max-w-4xl mx-auto px-4 py-16 mt-16">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
        <Link to="/" className="hover:text-[#1a79f6] transition-colors">בית</Link>
        <span>/</span>
        <span className="text-gray-300">בניית דפי נחיתה</span>
      </nav>

      {/* H1 Hero */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a79f6]/10 border border-[#1a79f6]/30 text-[#1a79f6] text-sm font-medium mb-6">
          <Target className="w-4 h-4" />
          המרה גבוהה
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          בניית דפי נחיתה לעסקים
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
          דף נחיתה ממוקד שהופך מבקרים לפניות — לקמפיינים ממומנים, מוצרים חדשים ואירועים.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/quote" className="bg-[#1a79f6] hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
            לקבלת הצעת מחיר
          </Link>
          <Link to="/portfolio" className="border border-[#1a79f6] text-[#1a79f6] hover:bg-[#1a79f6]/10 px-8 py-3 rounded-xl font-bold text-lg transition-all">
            לתיק עבודות
          </Link>
        </div>
      </div>

      {/* Benefits */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          למה לבחור בדף נחיתה?
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

      {/* What's included */}
      <section className="mb-16 rounded-2xl border border-[#1a79f6]/30 bg-white/5 backdrop-blur-sm p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
          מה כולל דף נחיתה מקצועי?
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
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">מחיר דף נחיתה לעסק</h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
          <div className="rounded-xl bg-white/5 border border-white/10 px-6 py-4">
            <div className="text-[#1a79f6] font-bold text-lg mb-1">דף נחיתה בסיסי</div>
            <div className="text-white text-2xl font-bold">מ-2,000 ₪</div>
            <div className="text-gray-400 text-sm mt-1">עיצוב, טופס, mobile</div>
          </div>
          <div className="relative rounded-xl bg-[#1a79f6]/20 border border-[#1a79f6]/40 px-6 py-4">
            <div className="absolute -top-3 right-1/2 translate-x-1/2 bg-[#1a79f6] text-white text-xs px-3 py-1 rounded-full font-bold">מומלץ</div>
            <div className="text-[#1a79f6] font-bold text-lg mb-1">דף נחיתה מורחב</div>
            <div className="text-white text-2xl font-bold">מ-3,500 ₪</div>
            <div className="text-gray-400 text-sm mt-1">אנימציות + SEO מלא</div>
          </div>
        </div>
        <Link to="/pricing" className="inline-block bg-white/10 hover:bg-white/20 border border-[#1a79f6]/40 text-white px-8 py-3 rounded-xl font-bold text-lg transition-all">
          למחירון המלא ←
        </Link>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          שאלות נפוצות — דפי נחיתה
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

      {/* Related */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-white mb-4">קשור גם לזה</h2>
        <div className="flex flex-wrap gap-3">
          <Link to="/business-websites" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">בניית אתרים לעסקים ←</Link>
          <Link to="/articles/web-design" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">עיצוב אתרים ←</Link>
          <Link to="/pricing" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">מחירון מלא ←</Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center rounded-2xl border border-[#1a79f6]/30 bg-[#1a79f6]/5 p-10">
        <Phone className="w-10 h-10 text-[#1a79f6] mx-auto mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">מוכנים להתחיל?</h2>
        <p className="text-gray-300 mb-6 max-w-lg mx-auto">דף נחיתה שעולה לאוויר תוך שבועיים — הצעת מחיר בחינם ללא התחייבות.</p>
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

export default LandingPagesPage;
