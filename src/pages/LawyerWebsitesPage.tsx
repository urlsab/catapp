import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Scale, Search, Shield, FileText, Phone, Users } from 'lucide-react';

const whyUnique = [
  {
    icon: Scale,
    title: 'אמינות ומוניטין — לא עיצוב בלבד',
    desc: 'מבקר שמחפש עורך דין קונה אמון לפני הכל. האתר צריך לשדר ניסיון, הישגים ושקיפות — לא רק עיצוב נאה. כל רכיב בדף מחושב: צבעים, גופן, שפה ואיכות הצילומים.',
  },
  {
    icon: FileText,
    title: 'תחומי עיסוק — עמוד נפרד לכל תחום',
    desc: 'חיפוש "עורך דין גירושין" שונה לחלוטין מ"עורך דין נדל"ן". אתר חכם מפרט כל תחום עיסוק בעמוד נפרד עם תוכן ממוקד — כך גוגל מדרג אתכם על כל ביטוי.',
  },
  {
    icon: Search,
    title: 'SEO לחיפושים משפטיים',
    desc: '"עורך דין [תחום] [עיר]" — כך אנשים מחפשים. בונים את מבנה ה-URL, H1, meta ו-LegalService schema כדי שכל תחום עיסוק ייצג אתכם בגוגל בחיפוש הנכון.',
  },
  {
    icon: Shield,
    title: 'טופס ייעוץ ראשוני — ממיר מבקרים ללקוחות',
    desc: 'הכניסה לתהליך משפטי מאתגרת רגשית. טופס ייעוץ קצר ולא מאיים, יחד עם הסבר מה קורה אחרי, מגדיל את שיעור הפנייה משמעותית.',
  },
  {
    icon: Users,
    title: 'ניהול מוניטין — המלצות והישגים',
    desc: 'לקוחות מרוצים ממליצים? תוצאות מרשימות? חשוב להציג אותם נכון — בלי הבטחות לא מוסריות, אבל בצורה שמחזקת אמון. האתר יודע לעשות את ההבדל.',
  },
  {
    icon: Phone,
    title: 'נגישות ומהירות — הלקוח צריך להגיע אליכם בקלות',
    desc: 'לחצן WhatsApp בולט, מספר טלפון לחיץ בנייד, וכתובת ממשית — אלה הגורמים שמשנים בין פניה לאבדן לקוח.',
  },
];

const siteStructure = [
  { page: 'עמוד בית', desc: 'H1 ממוקד, תחומי עיסוק, CTA לייעוץ, המלצה אחת בולטת' },
  { page: 'אודות / פרופיל', desc: 'השכלה, ניסיון, חברות בלשכה, גישה אישית — מה מבדיל את המשרד' },
  { page: 'תחומי עיסוק', desc: 'עמוד ראשי + עמוד ייעודי לכל תחום (גירושין, נדל"ן, פלילי וכו\')' },
  { page: 'תוצאות ולקוחות', desc: 'תיאורי מקרים מוצלחים ללא הבטחות, המלצות לקוחות עם שמות' },
  { page: 'בלוג משפטי', desc: 'מאמרים על זכויות, תהליכים ותיקוני חוק — מושך תנועה אורגנית' },
  { page: 'צור קשר', desc: 'טופס ייעוץ ראשוני, ווצ\'אפ, טלפון, כתובת ושעות קבלה' },
];

const faqs = [
  {
    q: 'מה ההבדל בין אתר לעורך דין לאתר עסקי רגיל?',
    a: 'אתר לעורך דין דורש טיפול מיוחד ב-3 תחומים: (1) אמינות — עיצוב שמשדר סמכות ומוניטין ולא רק נראות; (2) SEO משפטי — מיקוד בביטויים כמו "עורך דין [תחום] [עיר]" עם LegalService schema; (3) ציות לאתיקה — ניסוח זהיר של הישגים והמלצות לפי כללי לשכת עורכי הדין.',
  },
  {
    q: 'כמה עולה בניית אתר למשרד עורכי דין?',
    a: 'אתר לעורך דין עצמאי עולה מ-5,000 ₪. משרד עם מספר עורכי דין ועמודי תחומי עיסוק מרובים — מ-8,000 ₪. המחיר כולל עיצוב, פיתוח, SEO טכני, LegalService schema ותמיכה.',
  },
  {
    q: 'כמה זמן לוקח לבנות אתר לעורך דין?',
    a: 'אתר בסיסי מוכן תוך 2-3 שבועות. אתר מורכב עם עמודי תחומי עיסוק ובלוג — 3-5 שבועות. לוח הזמנים נקבע מראש ומוגש בדיוק.',
  },
  {
    q: 'האם האתר יקודם בגוגל?',
    a: 'כן. כל אתר כולל: LegalService schema, LocalBusiness schema, מבנה URL נכון לכל תחום עיסוק, canonical, sitemap, Core Web Vitals גבוהים ו-prerender לאינדוקס מלא. קידום SEO פעיל (בניית קישורים, מאמרים) הוא שירות נוסף.',
  },
  {
    q: 'האם ניתן להציג המלצות ותוצאות של תיקים?',
    a: 'כן, בצורה זהירה. ניתן להציג המלצות לקוחות עם שמות ואישורם. תיאורי תיקים מוצלחים — מותר, אך ללא הבטחת תוצאה. אנו מכירים את כללי הלשכה ומנסחים את התוכן בהתאם.',
  },
];

const LawyerWebsitesPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div dir="rtl" className="max-w-4xl mx-auto px-4 py-16 mt-16">

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
        <Link to="/" className="hover:text-[#1a79f6] transition-colors">בית</Link>
        <span>/</span>
        <Link to="/business-websites" className="hover:text-[#1a79f6] transition-colors">בניית אתרים לעסקים</Link>
        <span>/</span>
        <span className="text-gray-300">בניית אתר לעורך דין</span>
      </nav>

      {/* H1 Hero */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a79f6]/10 border border-[#1a79f6]/30 text-[#1a79f6] text-sm font-medium mb-6">
          <Scale className="w-4 h-4" />
          מיועד למשרדי עורכי דין
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          בניית אתר לעורך דין
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
          אתר שמשדר סמכות ואמינות, מדורג בגוגל על "עורך דין [תחום] [עיר]", ומניע פניות מלקוחות חדשים — לא אתר עוד תבנית.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/quote" className="bg-[#1a79f6] hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
            לקבלת הצעת מחיר
          </Link>
          <Link to="/portfolio/refael-law" className="border border-[#1a79f6] text-[#1a79f6] hover:bg-[#1a79f6]/10 px-8 py-3 rounded-xl font-bold text-lg transition-all">
            ראו Case Study אמיתי ←
          </Link>
        </div>
      </div>

      {/* Why different */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
          למה אתר לעורך דין שונה מכל אתר עסקי?
        </h2>
        <p className="text-gray-400 text-center mb-8 max-w-xl mx-auto">
          לקוח שמחפש עורך דין נמצא בסיטואציה רגישה. הוא לא קונה מוצר — הוא בוחר את מי שייצג את האינטרסים שלו. האתר צריך לשקף את זה.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {whyUnique.map((item, i) => (
            <div key={i} className="rounded-2xl border border-[#1a79f6]/30 bg-white/5 backdrop-blur-sm p-6">
              <div className="flex items-start gap-4">
                <item.icon className="w-7 h-7 text-[#1a79f6] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Site structure */}
      <section className="mb-16 rounded-2xl border border-[#1a79f6]/30 bg-white/5 backdrop-blur-sm p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
          מה מבנה האתר הנכון למשרד עו"ד?
        </h2>
        <div className="space-y-3">
          {siteStructure.map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1a79f6]/20 border border-[#1a79f6]/40 flex items-center justify-center text-[#1a79f6] font-bold text-sm">
                {i + 1}
              </div>
              <div>
                <span className="text-white font-semibold">{item.page}</span>
                <span className="text-gray-400 text-sm"> — {item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEO section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
          SEO לעורכי דין — איך מגיעים לעמוד הראשון?
        </h2>
        <div className="rounded-2xl border border-[#1a79f6]/30 bg-white/5 backdrop-blur-sm p-6 space-y-4 text-gray-300 leading-relaxed">
          <p>
            חיפושים כמו <strong className="text-white">"עורך דין גירושין תל אביב"</strong> או <strong className="text-white">"עורך דין נדל"ן ראשון לציון"</strong> הם חיפושי כוונה גבוהה — המחפש רוצה לפנות עכשיו. כדי להופיע בהם צריך שילוב של שלושה גורמים:
          </p>
          <ul className="space-y-2">
            {[
              'עמוד ייעודי לכל תחום עיסוק עם H1 ממוקד, תוכן ייחודי ו-URL נכון',
              'LegalService + LocalBusiness schema שמספרים לגוגל בדיוק מה אתם ואיפה',
              'Google Business Profile מקושר לאתר עם קטגוריות, שעות וביקורות',
              'Core Web Vitals גבוהים — אתר שנטען מהיר מדורג גבוה יותר',
              'תוכן שעונה לשאלות אמיתיות: "כמה עולה גירושין?", "מה זכויותיי בתאונת עבודה?"',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#1a79f6] flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Case study */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
          פרויקט לדוגמה: רפאל סבג, עו"ד
        </h2>
        <Link
          to="/portfolio/refael-law"
          className="group block rounded-2xl border border-[#1a79f6]/40 bg-[#1a79f6]/5 p-6 hover:border-[#1a79f6]/70 transition-all"
        >
          <div className="text-[#1a79f6] text-xs font-bold uppercase tracking-wide mb-2">Case Study</div>
          <h3 className="text-white font-bold text-xl mb-3 group-hover:text-[#1a79f6] transition-colors">
            בניית אתר לעורך דין — רפאל סבג
          </h3>
          <p className="text-gray-300 leading-relaxed mb-3">
            רפאל ניהל משרד מצליח אך ללא נוכחות דיגיטלית. בנינו אתר תדמית ב-React עם SEO ממוקד לחיפושים משפטיים, כפתור WhatsApp בולט, LegalService schema ו-Core Web Vitals ירוקים. הפניות מגוגל התחילו להגיע תוך חודשיים.
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            {['React', 'TypeScript', 'LegalService Schema', 'LocalBusiness Schema', 'SEO'].map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">{t}</span>
            ))}
          </div>
          <span className="text-[#1a79f6] text-sm font-medium">לקריאת כל ה-Case Study ←</span>
        </Link>
      </section>

      {/* Pricing */}
      <section className="mb-16 rounded-2xl border border-[#1a79f6]/50 bg-[#1a79f6]/5 p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">מחירון בניית אתר לעורך דין</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
          <div className="rounded-xl bg-white/5 border border-white/10 p-5">
            <div className="text-[#1a79f6] font-bold mb-1">עורך דין עצמאי</div>
            <div className="text-white text-2xl font-bold mb-2">מ-5,000 ₪</div>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>✓ עמוד בית + אודות + צור קשר</li>
              <li>✓ עד 3 עמודי תחומי עיסוק</li>
              <li>✓ SEO + LegalService schema</li>
              <li>✓ טופס ייעוץ ראשוני</li>
            </ul>
          </div>
          <div className="rounded-xl bg-[#1a79f6]/20 border border-[#1a79f6]/40 p-5 relative">
            <div className="absolute -top-3 right-4 bg-[#1a79f6] text-white text-xs px-3 py-1 rounded-full font-bold">מומלץ</div>
            <div className="text-[#1a79f6] font-bold mb-1">משרד עם מספר תחומים</div>
            <div className="text-white text-2xl font-bold mb-2">מ-8,000 ₪</div>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>✓ כל מה שבחבילה הבסיסית</li>
              <li>✓ 5+ עמודי תחומי עיסוק</li>
              <li>✓ בלוג משפטי + מאמרים</li>
              <li>✓ Google Business Profile setup</li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <Link to="/pricing" className="text-[#1a79f6] hover:underline text-sm">למחירון המלא ←</Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          שאלות נפוצות — בניית אתר לעורך דין
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
          <Link to="/business-websites" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">בניית אתרים לעסקים ←</Link>
          <Link to="/website-for-doctors" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">בניית אתר לרופא ←</Link>
          <Link to="/pricing" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">מחירון בניית אתרים ←</Link>
          <Link to="/portfolio" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">תיק עבודות ←</Link>
          <Link to="/faq" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">שאלות נפוצות ←</Link>
          <Link to="/articles/accessibility" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">נגישות אתרים לעורכי דין ←</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center rounded-2xl border border-[#1a79f6]/30 bg-[#1a79f6]/5 p-10">
        <Scale className="w-10 h-10 text-[#1a79f6] mx-auto mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">בנו אתר שמביא לקוחות למשרד</h2>
        <p className="text-gray-300 mb-6 max-w-lg mx-auto">הצעת מחיר בחינם תוך 24 שעות. נבחן את הצרכים שלכם ונציג פתרון מותאם.</p>
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

export default LawyerWebsitesPage;
