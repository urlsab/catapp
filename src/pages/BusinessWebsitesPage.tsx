import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Building2, Search, Zap, Shield, TrendingUp, Phone } from 'lucide-react';

const benefits = [
  {
    icon: Search,
    title: 'נראות בגוגל 24/7',
    description: '97% מהאנשים מחפשים עסקים בגוגל לפני קנייה. אתר מקצועי עם SEO מובנה מביא לקוחות חדשים גם כשאתם לא ליד הטלפון.',
  },
  {
    icon: Shield,
    title: 'אמינות ומקצועיות',
    description: 'לקוחות שרואים אתר מקצועי נוטים פי 3 לבחור בכם על מתחרה ללא אתר. זו הרשמת הפנים הדיגיטלית הראשונה.',
  },
  {
    icon: TrendingUp,
    title: 'גידול בפניות',
    description: 'טופס ליצירת קשר, כפתור WhatsApp ואזור הצעת מחיר הופכים מבקרים ללקוחות — ישירות מהאתר.',
  },
  {
    icon: Zap,
    title: 'מהיר ורספונסיבי',
    description: '65% מהגלישה היא ממובייל. האתר שלכם יעבוד מושלם על כל מכשיר ויטען בפחות מ-3 שניות.',
  },
];

const includes = [
  'עיצוב ייחודי ומותאם אישית לעסק',
  'עד 10 עמודים: בית, אודות, שירותים, פרויקטים, צור קשר',
  'אופטימיזציה לגוגל (SEO) מובנית',
  'מותאם לכל המכשירים (Responsive)',
  'טופס יצירת קשר ו-WhatsApp',
  'כפתורי הנעה לפעולה (CTA)',
  'גלריית תמונות ופרויקטים',
  'מהירות טעינה גבוהה (Core Web Vitals)',
  'אבטחת SSL מלאה',
  'תמיכה ותחזוקה לאחר השקה',
];

const faqs = [
  { q: 'כמה עולה בניית אתר לעסק קטן?', a: 'מחיר בניית אתר תדמית לעסק מתחיל מ-5,000 ₪. דף נחיתה מתחיל מ-2,000 ₪. הצעת מחיר מותאמת אישית — בחינם וללא התחייבות.' },
  { q: 'כמה זמן לוקח לבנות אתר לעסק?', a: 'בממוצע 2–4 שבועות מרגע אישור העיצוב. פרויקטים עם פונקציונליות מורכבת עשויים לקחת 4–8 שבועות.' },
  { q: 'האם תעזרו לנו לבחור תוכן לאתר?', a: 'בהחלט. אנחנו מנחים אתכם בכותרות, תוכן, תמונות ואסטרטגיית מילות המפתח — כדי שהאתר יביא לקוחות מגוגל.' },
  { q: 'מה קורה אחרי שהאתר עולה לאוויר?', a: 'אנחנו מספקים תמיכה שוטפת, עדכוני אבטחה וגיבויים. שירות תחזוקה חודשי לעדכוני תוכן זמין מ-300 ₪ לחודש.' },
  { q: 'האם האתר יקודם בגוגל?', a: 'כל אתר שאנחנו בונים כולל SEO טכני מובנה — מבנה URL, meta tags, schema, ומהירות. קידום SEO פעיל (מאמרים, קישורים) הוא שירות נוסף מ-400 ₪ לחודש.' },
];

const businessTypes = [
  { emoji: '⚖️', label: 'עורכי דין' },
  { emoji: '🏥', label: 'רופאים ומרפאות' },
  { emoji: '🔨', label: 'קבלנים ובנייה' },
  { emoji: '💼', label: 'יועצים ומאמנים' },
  { emoji: '🏪', label: 'עסקים מקומיים' },
  { emoji: '🍽️', label: 'מסעדות ובתי קפה' },
  { emoji: '🏠', label: 'נדל"ן ומתווכים' },
  { emoji: '💆', label: 'קוסמטיקה ויופי' },
  { emoji: '🧘', label: 'מטפלים ופסיכולוגים' },
  { emoji: '📚', label: 'מורים ומדריכים' },
  { emoji: '🔧', label: 'אינסטלטורים וחשמלאים' },
  { emoji: '🐾', label: 'וטרינרים ומטפחים' },
];

const processSteps = [
  { step: '01', title: 'שיחת ייעוץ חינמית', desc: 'מבינים את העסק, הקהל, המתחרים והמטרות. מגדירים יחד את מבנה האתר ואסטרטגיית ה-SEO.' },
  { step: '02', title: 'הצעת מחיר ואישור', desc: 'מקבלים הצעת מחיר מפורטת עם לוח זמנים ברור. מתחילים רק אחרי אישורכם המלא.' },
  { step: '03', title: 'עיצוב ואב טיפוס', desc: 'מציגים Wireframe ועיצוב ויזואלי ראשוני. מתאימים עד שאתם מרוצים לגמרי.' },
  { step: '04', title: 'בנייה ופיתוח', desc: 'בונים את האתר ב-React עם SEO, נגישות, מהירות ואבטחה — מובנים מהקוד הראשון.' },
  { step: '05', title: 'השקה ומעקב', desc: 'בדיקות על כל המכשירים, ציוני Core Web Vitals, שליחה לגוגל והשקה חלקה.' },
];

const BusinessWebsitesPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div dir="rtl" className="max-w-4xl mx-auto px-4 py-16 mt-16">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
        <Link to="/" className="hover:text-[#1a79f6] transition-colors">בית</Link>
        <span>/</span>
        <span className="text-gray-300">בניית אתרים לעסקים</span>
      </nav>

      {/* H1 Hero */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a79f6]/10 border border-[#1a79f6]/30 text-[#1a79f6] text-sm font-medium mb-6">
          <Building2 className="w-4 h-4" />
          שירות מוביל
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          בניית אתרים לעסקים קטנים ובינוניים
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
          אתר מקצועי ומהיר שמביא לקוחות חדשים לעסק שלך — עיצוב ייחודי, SEO מובנה ותוצאות מדידות.
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
          למה עסק קטן צריך אתר מקצועי?
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

      {/* Business types */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
          למי מתאים אתר תדמית?
        </h2>
        <p className="text-gray-400 text-center mb-8 max-w-xl mx-auto">
          כמעט כל עסק מרוויח מנוכחות דיגיטלית מקצועית — הנה חלק מהסוגים שעבדנו איתם:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {businessTypes.map((type, i) => (
            <div key={i} className="rounded-xl border border-[#1a79f6]/20 bg-white/5 p-4 text-center hover:border-[#1a79f6]/50 transition-colors">
              <div className="text-2xl mb-2">{type.emoji}</div>
              <div className="text-white font-semibold text-sm">{type.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What's included */}
      <section className="mb-16 rounded-2xl border border-[#1a79f6]/30 bg-white/5 backdrop-blur-sm p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
          מה כולל אתר תדמית לעסק?
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

      {/* Process steps */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          איך עובד התהליך?
        </h2>
        <div className="space-y-4">
          {processSteps.map((s, i) => (
            <div key={i} className="flex gap-4 items-start rounded-2xl border border-[#1a79f6]/20 bg-white/5 backdrop-blur-sm p-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1a79f6] flex items-center justify-center text-white font-bold text-sm">
                {s.step}
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">{s.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="mb-16 rounded-2xl border border-[#1a79f6]/50 bg-[#1a79f6]/5 p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">מחירון בניית אתרים לעסקים</h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
          <div className="rounded-xl bg-white/5 border border-white/10 px-6 py-4">
            <div className="text-[#1a79f6] font-bold text-lg mb-1">דף נחיתה</div>
            <div className="text-white text-2xl font-bold">מ-2,000 ₪</div>
          </div>
          <div className="relative rounded-xl bg-[#1a79f6]/20 border border-[#1a79f6]/40 px-6 py-4">
            <div className="absolute -top-3 right-1/2 translate-x-1/2 bg-[#1a79f6] text-white text-xs px-3 py-1 rounded-full font-bold">פופולרי</div>
            <div className="text-[#1a79f6] font-bold text-lg mb-1">אתר תדמית</div>
            <div className="text-white text-2xl font-bold">מ-5,000 ₪</div>
          </div>
          <div className="rounded-xl bg-white/5 border border-white/10 px-6 py-4">
            <div className="text-[#1a79f6] font-bold text-lg mb-1">חנות אינטרנטית</div>
            <div className="text-white text-2xl font-bold">מ-10,000 ₪</div>
          </div>
        </div>
        <Link to="/pricing" className="inline-block bg-white/10 hover:bg-white/20 border border-[#1a79f6]/40 text-white px-8 py-3 rounded-xl font-bold text-lg transition-all">
          למחירון המלא ←
        </Link>
      </section>

      {/* Case study examples */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          פרויקטים לדוגמה
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link to="/portfolio/refael-law" className="group rounded-2xl border border-[#1a79f6]/30 bg-white/5 backdrop-blur-sm p-6 hover:border-[#1a79f6]/60 transition-all">
            <div className="text-[#1a79f6] text-xs font-bold uppercase tracking-wide mb-2">עורך דין</div>
            <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#1a79f6] transition-colors">בניית אתר לעורך דין — רפאל סבג</h3>
            <p className="text-gray-400 text-sm leading-relaxed">אתר תדמית ב-React עם SEO ממוקד לחיפושים משפטיים. הגדיל את הפניות מגוגל תוך חודשיים.</p>
            <span className="inline-block mt-4 text-[#1a79f6] text-sm font-medium">לקריאת ה-Case Study ←</span>
          </Link>
          <Link to="/portfolio/atliz" className="group rounded-2xl border border-[#1a79f6]/30 bg-white/5 backdrop-blur-sm p-6 hover:border-[#1a79f6]/60 transition-all">
            <div className="text-[#1a79f6] text-xs font-bold uppercase tracking-wide mb-2">עסק מקומי</div>
            <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#1a79f6] transition-colors">בניית אתר תדמית — אטליז למהדרין</h3>
            <p className="text-gray-400 text-sm leading-relaxed">אתר עם גלריית מוצרים, LocalBusiness schema ו-SEO מקומי שהגדיל את הלקוחות החדשים.</p>
            <span className="inline-block mt-4 text-[#1a79f6] text-sm font-medium">לקריאת ה-Case Study ←</span>
          </Link>
        </div>
        <div className="text-center mt-6">
          <Link to="/portfolio" className="text-[#1a79f6] hover:text-blue-400 transition-colors font-medium text-sm">
            לכל תיק העבודות ←
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          שאלות נפוצות — בניית אתרים לעסקים
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
          <Link to="/articles/web-design" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">עיצוב אתרים לעסקים ←</Link>
          <Link to="/articles/accessibility" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">נגישות אתרים ←</Link>
          <Link to="/articles/lawyer-websites" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">אתרים לעורכי דין ←</Link>
          <Link to="/pricing" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">מחירון מלא ←</Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center rounded-2xl border border-[#1a79f6]/30 bg-[#1a79f6]/5 p-10">
        <Phone className="w-10 h-10 text-[#1a79f6] mx-auto mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">מוכנים לבנות את האתר שלכם?</h2>
        <p className="text-gray-300 mb-6 max-w-lg mx-auto">הצעת מחיר בחינם תוך 24 שעות. ללא התחייבות.</p>
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

export default BusinessWebsitesPage;
