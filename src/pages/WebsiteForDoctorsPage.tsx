import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Stethoscope, Search, Shield, Calendar, Star, Phone } from 'lucide-react';

const whyUnique = [
  {
    icon: Shield,
    title: 'אמינות רפואית — תעודות, הכשרות והסמכות',
    desc: 'מטופל שמחפש רופא בוחן קודם כל תעודות. האתר חייב להציג במקום בולט: תואר, התמחות, בית חולים משויך, ורישום בהתאחדות הרפואית. זה מה שמבדיל רופא מוצלח מאחד שנראה אנונימי.',
  },
  {
    icon: Calendar,
    title: 'קביעת תור אונליין — פחות טלפונים, יותר מטופלים',
    desc: 'מטופלים מודרניים רוצים לקבוע תור בלחיצת כפתור. שילוב עם מערכת תורים (Doctify, Medtigo, או טופס פשוט) מגדיל את הפניות בלילה ובסוף שבוע.',
  },
  {
    icon: Search,
    title: 'SEO רפואי — "רופא [התמחות] [עיר]"',
    desc: 'חיפושים כמו "קרדיולוג תל אביב" או "רופא עור ראשון לציון" הם חיפושים בכוונה גבוהה מאד. MedicalOrganization + Physician schema, עמוד שירות ייעודי לכל התמחות וביקורות מאמתות.',
  },
  {
    icon: Star,
    title: 'ביקורות מטופלים — הגורם המשפיע ביותר',
    desc: 'מחקרים מראים שמעל 70% מהמטופלים בוחרים רופא לפי ביקורות אונליין. הצגה אסתטית של ביקורות גוגל ו-Review schema ישפרו גם את הדירוג וגם את ההמרה.',
  },
  {
    icon: Stethoscope,
    title: 'עמוד ייעודי לכל שירות/התמחות',
    desc: 'רופא עם כמה תחומי עיסוק צריך עמוד נפרד לכל אחד — עם תוכן ייחודי, שאלות נפוצות וה-URL הנכון. כך גוגל מבין את ההתמחות ומדרג כל עמוד בנפרד.',
  },
  {
    icon: Phone,
    title: 'נגישות ומהירות בנייד',
    desc: 'מטופלים מחפשים רופא מהמובייל, לעיתים קרובות בלחץ. הכפתור "להתקשר" ו-"לקביעת תור" חייבים להיות גלויים וגדולים בכל גודל מסך.',
  },
];

const siteStructure = [
  { page: 'עמוד בית', desc: 'H1 ממוקד, תחומי התמחות, כפתור קביעת תור, ביקורות בולטות' },
  { page: 'אודות הרופא / המרפאה', desc: 'השכלה, התמחויות, ניסיון, שיוך לבתי חולים ולאיגוד הרפואי' },
  { page: 'שירותים / התמחויות', desc: 'עמוד נפרד לכל טיפול/התמחות — תוכן ממוקד לכל חיפוש' },
  { page: 'קביעת תור', desc: 'שעות פעילות, אפשרויות פנייה, טופס קביעת תור, ביטוח ו-HMO' },
  { page: 'ביקורות מטופלים', desc: 'ביקורות גוגל + Review schema + תגובות הרופא' },
  { page: 'מאמרים / בלוג בריאות', desc: 'תוכן מקצועי שמביא חיפושים חינמיים מגוגל על נושאים רפואיים' },
  { page: 'צור קשר', desc: 'כתובת, טלפון, וואטסאפ, כיווני הגעה, שעות קבלה' },
];

const faqs = [
  {
    q: 'כמה עולה בניית אתר לרופא או מרפאה?',
    a: 'אתר בסיסי לרופא עצמאי עולה מ-5,000 ₪ ואורך 2-3 שבועות. אתר מרפאה עם מספר רופאים, מערכת תורים ועמודים לכל התמחות — מ-8,000 ₪. כל פרויקט מקבל הצעת מחיר מפורטת לאחר שיחת ייעוץ חינמית.',
  },
  {
    q: 'האם ניתן לשלב מערכת תורים באתר?',
    a: 'כן. ניתן לשלב טופס פנייה פשוט, קישור למערכת תורים קיימת (Doctify, CALS, Medtigo וכו\') או בניית מערכת תורים מותאמת. הפתרון המתאים נקבע לפי גודל המרפאה ותקציב.',
  },
  {
    q: 'האם האתר יעמוד בדרישות פרטיות (תנאי HIPAA / חוק הגנת הפרטיות)?',
    a: 'כן. אנו בונים את הטפסים עם הצפנה מלאה (SSL/TLS), בלי אחסון מידע רגיש בצד הלקוח, ועם מדיניות פרטיות תקנית. כל הנתונים עוברים בצורה מאובטחת.',
  },
  {
    q: 'כמה זמן לוקח לאתר לרופא להופיע בגוגל?',
    a: 'ב-Google Maps (חיפוש מקומי) ניתן לראות תוצאות תוך 1-3 חודשים עם Google Business Profile ממוטב. בחיפוש אורגני, עמוד חדש לוקח 3-6 חודשים להתבסס. SEO הוא השקעה לטווח ארוך.',
  },
  {
    q: 'האם ניתן להציג ביקורות מטופלים?',
    a: 'כן. ניתן לשלב ביקורות גוגל עם Review schema (שמשפר גם SEO וגם את התוצאה הגרפית בגוגל). ביקורות על מטופלים דורשות הסכמה מפורשת ולא חושפות מידע רפואי.',
  },
];

const WebsiteForDoctorsPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div dir="rtl" className="max-w-4xl mx-auto px-4 py-16 mt-16">

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
        <Link to="/" className="hover:text-[#1a79f6] transition-colors">בית</Link>
        <span>/</span>
        <Link to="/business-websites" className="hover:text-[#1a79f6] transition-colors">בניית אתרים לעסקים</Link>
        <span>/</span>
        <span className="text-gray-300">בניית אתר לרופא ומרפאה</span>
      </nav>

      {/* H1 Hero */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a79f6]/10 border border-[#1a79f6]/30 text-[#1a79f6] text-sm font-medium mb-6">
          <Stethoscope className="w-4 h-4" />
          מיועד לרופאים ומרפאות
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          בניית אתר לרופא ומרפאה
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
          אתר שמדרג אתכם על "רופא [התמחות] [עיר]", מאפשר קביעת תור אונליין, ומציג את האמינות והמקצועיות שמטופלים מחפשים — לא עוד תבנית גנרית.
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

      {/* Why different */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
          למה אתר לרופא שונה מאתר עסקי רגיל?
        </h2>
        <p className="text-gray-400 text-center mb-8 max-w-xl mx-auto">
          מטופל שמחפש רופא לא מחפש "מחיר זול" — הוא בוחר את מי שיטפל בבריאותו. האמינות, ההתמחות וזמינות התור הם גורמי ההחלטה המרכזיים.
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
          מה מבנה האתר הנכון לרופא ומרפאה?
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
          SEO לרופאים — איך מגיעים לעמוד הראשון?
        </h2>
        <div className="rounded-2xl border border-[#1a79f6]/30 bg-white/5 backdrop-blur-sm p-6 space-y-4 text-gray-300 leading-relaxed">
          <p>
            חיפושים כמו <strong className="text-white">"קרדיולוג פרטי תל אביב"</strong> או <strong className="text-white">"רופא עור ראשון לציון"</strong> הם חיפושים בעלי כוונת פנייה גבוהה מאד. כדי להופיע בהם צריך:
          </p>
          <ul className="space-y-2">
            {[
              'Physician + MedicalOrganization schema שמספרים לגוגל את ההתמחות, המיקום ושעות הפעילות',
              'עמוד ייעודי לכל שירות/התמחות עם H1 ממוקד ותוכן ייחודי',
              'Google Business Profile ממוטב עם קטגוריה רפואית, תמונות ותגובה לביקורות',
              'Core Web Vitals גבוהים — אתר שנטען מהיר מדורג גבוה יותר בחיפוש מקומי',
              'תוכן שעונה לשאלות אמיתיות: "מה עולה בדיקת [X]?", "כמה זמן ממתינים לתור?"',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#1a79f6] flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-16 rounded-2xl border border-[#1a79f6]/50 bg-[#1a79f6]/5 p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">מחירון בניית אתר לרופא ומרפאה</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
          <div className="rounded-xl bg-white/5 border border-white/10 p-5">
            <div className="text-[#1a79f6] font-bold mb-1">רופא עצמאי / קליניקה קטנה</div>
            <div className="text-white text-2xl font-bold mb-2">מ-5,000 ₪</div>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>✓ עמוד בית + אודות + צור קשר</li>
              <li>✓ עד 3 עמודי שירות/התמחות</li>
              <li>✓ Physician + LocalBusiness schema</li>
              <li>✓ טופס קביעת תור</li>
            </ul>
          </div>
          <div className="rounded-xl bg-[#1a79f6]/20 border border-[#1a79f6]/40 p-5 relative">
            <div className="absolute -top-3 right-4 bg-[#1a79f6] text-white text-xs px-3 py-1 rounded-full font-bold">מומלץ</div>
            <div className="text-[#1a79f6] font-bold mb-1">מרפאה / מספר רופאים</div>
            <div className="text-white text-2xl font-bold mb-2">מ-8,000 ₪</div>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>✓ כל מה שבחבילה הבסיסית</li>
              <li>✓ 5+ עמודי שירות/התמחות</li>
              <li>✓ בלוג בריאות + מאמרים</li>
              <li>✓ שילוב מערכת תורים</li>
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
          שאלות נפוצות — בניית אתר לרופא ומרפאה
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
          <Link to="/website-for-lawyers" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">בניית אתר לעורך דין ←</Link>
          <Link to="/pricing" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">מחירון בניית אתרים ←</Link>
          <Link to="/portfolio" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">תיק עבודות ←</Link>
          <Link to="/faq" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">שאלות נפוצות ←</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center rounded-2xl border border-[#1a79f6]/30 bg-[#1a79f6]/5 p-10">
        <Stethoscope className="w-10 h-10 text-[#1a79f6] mx-auto mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">בנו אתר שמביא מטופלים חדשים למרפאה</h2>
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

export default WebsiteForDoctorsPage;
