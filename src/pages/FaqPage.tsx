import React, { useState } from 'react';
// import SmoothScroll from '../components/SmoothScroll';

const faqList = [
  {
    question: 'כמה עולה לבנות אתר לעסק?',
    answer: 'מחיר בניית אתר לעסק תלוי בסוג האתר ובמורכבותו. דף נחיתה פשוט עולה החל מ-2,000 ₪, אתר תדמית עם עד 10 עמודים עולה החל מ-5,000 ₪, אתר React מותאם אישית עולה החל מ-8,000 ₪, ואתר מכירות עם סליקה עולה החל מ-10,000 ₪. המחיר הסופי נקבע לאחר שיחת ייעוץ ותיאור מלא של הפרויקט — מלאו טופס הצעת מחיר ותקבלו תשובה תוך 24 שעות.'
  },
  {
    question: 'כמה זמן לוקח לבנות אתר?',
    answer: 'זמן בניית האתר תלוי בהיקף הפרויקט. דף נחיתה נבנה תוך 3-7 ימי עבודה, אתר תדמית בינוני לוקח 2-4 שבועות, ואתר מורכב עם מערכות ניהול או חנות אינטרנטית יכול לקחת 4-8 שבועות. אנו שומרים על לוח זמנים ברור ומעדכנים את הלקוח בכל שלב.'
  },
  {
    question: 'מה ההבדל בין אתר ב-React לאתר ב-WordPress?',
    answer: 'React הוא פריימוורק JavaScript מודרני המאפשר ביצועים גבוהים יותר, אנימציות חלקות, ואינטגרציות מורכבות. אתר React טוען מהיר יותר, מקבל ציוני Core Web Vitals גבוהים בגוגל, ומאפשר שליטה מלאה בקוד. WordPress מתאים יותר לאתרים שהלקוח מנהל בעצמו ולבלוגים עם תוכן מרובה. עבור עסקים שרוצים אתר מהיר, מובייל ומותאם SEO לחלוטין — React הוא הבחירה הנכונה.'
  },
  {
    question: 'האם האתר שנבנה יהיה מותאם ל-SEO?',
    answer: 'כן. כל אתר שנבנה ב-Catapp כולל SEO טכני מלא: structured data (Schema.org), meta tags, Open Graph, sitemap.xml, robots.txt, canonical URLs, prerender לאינדוקס מלא של React, וציוני Core Web Vitals גבוהים. בנוסף, האתר מגיע עם מבנה כותרות נכון (H1-H6) ותוכן ממוקד לפי כוונת חיפוש.'
  },
  {
    question: 'האם האתר נבנה ב-React?',
    answer: 'ברוב המקרים כן. Catapp מתמחה בבניית אתרים עם React ו-TypeScript. כך מקבלים ביצועים מהירים, קוד נקי ומתוחזק, ו-SEO מלא באמצעות prerender. לפרויקטים מסוימים ניתן גם להשתמש ב-Next.js לצורכי SSR.'
  },
  {
    question: 'האם האתר יהיה מותאם לכל סוגי המכשירים?',
    answer: 'בהחלט. כל אתר שנבנה ב-Catapp הוא Responsive מלא — מותאם למובייל, טאבלט ודסקטופ בכל גדלי המסך. זה חיוני גם לחוויית המשתמש וגם לדירוג בגוגל, שנותן עדיאתרים Mobile-First.'
  },
  {
    question: 'האם אתם מספקים תחזוקה לאחר ההשקה?',
    answer: 'כן. אנו מציעים מסלולי תחזוקה חודשיים הכוללים ניטור 24/7, עדכוני אבטחה, גיבויים יומיים ותיקון באגים. המחיר מתחיל מ-300 ₪ לחודש. ניתן גם לרכוש שעות תמיכה לפי הצורך.'
  },
  {
    question: 'האם האתר נגיש לאנשים עם מוגבלויות?',
    answer: 'כן. כל אתר שנבנה ב-Catapp עומד בתקן WCAG 2.1 ובחוק הנגישות הישראלי. זה כולל תמיכה בקוראי מסך, ניגודיות צבעים תקנית, ניווט מקלדת ותפריט נגישות מובנה.'
  },
  {
    question: 'האם אתם מספקים שירותי קידום בגוגל (SEO)?',
    answer: 'כן. אנו מציעים שירותי SEO אורגני חודשיים הכוללים אופטימיזציית תוכן, בניית קישורים, ניתוח מתחרים ודוחות ביצועים. המחיר מתחיל מ-400 ₪ לחודש. בנוסף, כל אתר שבונים אצלנו מגיע עם תשתית SEO טכני מלאה מהיום הראשון.'
  },
  {
    question: 'האם אפשר לקבל הצעת מחיר מותאמת אישית?',
    answer: 'בוודאי. ניתן למלא את טופס הצעת המחיר באתר ואנו נחזור אליכם תוך 24 שעות עם הצעה מפורטת המותאמת לצרכים שלכם. ייעוץ ראשוני הוא חינמי ואינו מחייב.'
  }
];

const FaqPage: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const handleToggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };
  return (
    <div>
      {/* <SmoothScroll /> */}
      <div className="max-w-3xl mx-auto px-4 py-20 mt-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">שאלות נפוצות</h1>
          <div className="w-24 h-1 mx-auto mb-8"></div>
        </div>
        <div className="space-y-4">
          {faqList.map((faq, idx) => (
            <div key={idx} className="relative group rounded-2xl shadow-lg border border-[#1a79f6]/30 hover:border-[#1a79f6]/60 transition-all"
              style={{
                backgroundSize: '300% 300%',
                backgroundColor: 'transparent',
                borderRadius: '1rem'
              }}>
              
              {/* Content container */}
              <div className="relative rounded-2xl p-4 bg-white/5 backdrop-blur-sm">
                <button
                  className="flex items-center w-full text-right focus:outline-none"
                  onClick={() => handleToggle(idx)}
                  aria-expanded={openIdx === idx}
                >
                  <span className="flex-1 text-xl font-bold text-white">{faq.question}</span>
                  <span className={`ml-2 transition-transform duration-200 ${openIdx === idx ? 'rotate-180' : ''}`}>
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#1a79f6]">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${openIdx === idx ? 'max-h-40 opacity-100 animate-fade-in-faq' : 'max-h-0 opacity-0'}`}
                  style={{ transitionDelay: openIdx === idx ? '100ms' : '0ms' }}
                >
                  {openIdx === idx && (
                    <div className="mt-4 text-white text-lg">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
