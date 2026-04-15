import React, { useRef, useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import Footer from '../components/Footer';
import '../styles/testimonialsSnap.css';

/* ==================== DATA ==================== */

const testimonials = [
  {
    id: 1,
    name: 'אור בנג\'י, פסיכותרפיסט',
    text: 'פנינו לחברת Catapp עבור הקמת דף נחיתה לעסק, וכבר מהרגע הראשון היה ברור שעשינו את ההחלטה הנכונה. הכל נעשה בצורה הכי מקצועית, יעילה ומדויקת תוך הקשבה לצרכים שלנו ומתן מענה מהיר לכל שאלה. שילוב נפלא של עבודה ברמה גבוהה ויחס נהדר ללקוח. בהחלט אמליץ לכל מי שמחפש- הגעתם למקום הנכון.'
  },
  {
    id: 2,
    name: 'יאיר אהרוני, סטודנט להנדסת חשמל ואלקטרוניקה',
    text: 'ברצוני להודות לחברת Catapp על ליווי מקצועי ואישי ברמה גבוהה, עם תשומת לב אמיתית לפרטים והבנה עמוקה של הצרכים שלי. התהליך היה מסודר, ברור ויעיל, והתוצאה – קורות חיים איכותיים שמציגים אותי בצורה מדויקת ומרשימה. שירות ברמה הגבוהה ביותר – מומלץ בחום.'
  },
  {
    id: 3,
    name: 'רפאל סבג, בעלים של משרד עו"ד',
    text: 'עבדתי עם Catapp על בניית האתר, ואין ספק שעשיתי בחירה מצוינת. קיבלתי יחס אישי, זמינות מלאה והקשבה אמיתית לצרכים שלי. העבודה בוצעה במהירות, במקצועיות ובדיוק כפי שסוכם – והתוצאה עלתה על הציפיות. ממליץ מכל הלב'
  },
  {
    id: 4,
    name: 'אוריאל, מנהל קהילת מעקף',
    text: 'חברת Catapp העבירה לקהילה שלנו הרצאה יוצאת דופן ומקיפה ביותר על כתיבת קו"ח. ההרצאה הייתה מלאה בתוכן משמעותי ופרקטי עם דוגמאות מעשיות. ממליץ בחום רב!'
  },
  {
    id: 5,
    name: 'אנאל לוי, מנהלת מתנ"ס',
    text: 'הגעתי לCatapp כשהייתי בתהליך של שינוי קריירה ולא ידעתי איך להציג את הניסיון שלי בצורה נכונה. Catapp עשה סדר בבלאגן, הקשיב בסבלנות ועזר לי לבנות קורות חיים שבאמת משקפים את היכולות שלי. מעבר לתוצאה המצוינת, הליווי היה נעים ומעודד. מומלץ בחום!'
  },
  {
    id: 6,
    name: 'אוריאל בן מרקו',
    text: 'אני חייב להגיד לכם שיש לכם שירות מעל ומעבר למצופה, אני ממש מופתע לטובה מהקורות חיים שרשמתם לי, שאלתם שאלות לא וויתרתם על אף פרויקט שצריך להיות כתוב בקורות חיים וכיוונתם את הקורות חיים שיהיו יעלים יפים ומקצועיים וכל זה במחיר סמלי מאוד! אז ממש תודה לכם 🫶🏼'
  },
  {
    id: 7,
    name: 'אברהם שור, מפתח Full Stack',
    text: 'אני ממש מודה לך מכל הלב על השירות הנפלא והמיוחד. לא להאמין כמה זמן וכח השקעת בזה, רק מי שעובר את זה מבין עד כמה.. אני אומר לך את זה בשיא הרצינות, המחיר שאתה לוקח זה אפסי לעומת התוצר והתועלת שאתה מפיק. ממליץ עליך מכל הלב לכולם!!! ❤️'
  },
  {
    id: 8,
    name: 'אסף לכט , AI Software Engineer',
    text: 'מה ששיכנע אותי לקחת את השירות מלבד המחיר, זה העובדה שהייתה לו סבלנות, ובאמת הרגשתי שהרווחתי בסוף לא רק ייעוץ אלא, אלא גם חבר. וכשאתה בתהליך של חיפוש עבודה או רוצה לחפש עבודה, זה בדיוק החלק שחסר, שהוא תהליך הרבה פעמים רגשי ולא רק מסמך לבן שכתוב עליו קורות חיים'
  }
];

/* ==================== COMPONENT ==================== */

const TestimonialsPage: React.FC = () => {
  const snapContainerRef = useRef<HTMLDivElement>(null);
  const elementRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const elementToKey = useRef<WeakMap<Element, string>>(new WeakMap());
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  const getRef = (key: string) => (el: HTMLDivElement | null) => {
    if (el) {
      elementRefs.current.set(key, el);
      elementToKey.current.set(el, key);
    }
  };

  const isVis = (key: string) => visibleElements.has(key);

  // Hide body scroll and global footer
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const globalFooter = document.querySelector('.min-h-screen > footer') as HTMLElement;
    if (globalFooter) globalFooter.style.display = 'none';
    return () => {
      document.body.style.overflow = '';
      if (globalFooter) globalFooter.style.display = '';
    };
  }, []);

  // IntersectionObserver for fade in/out
  useEffect(() => {
    const container = snapContainerRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleElements((prev) => {
          const next = new Set(prev);
          let changed = false;
          for (const entry of entries) {
            const key = elementToKey.current.get(entry.target);
            if (key !== undefined) {
              if (entry.isIntersecting && !prev.has(key)) { next.add(key); changed = true; }
              else if (!entry.isIntersecting && prev.has(key)) { next.delete(key); changed = true; }
            }
          }
          return changed ? next : prev;
        });
      },
      { root: container, threshold: 0.15 }
    );
    const t = setTimeout(() => {
      elementRefs.current.forEach((el) => observer.observe(el));
    }, 50);
    return () => { clearTimeout(t); observer.disconnect(); };
  }, []);

  /* ---------- Render Helpers ---------- */

  const staggerDelay = (key: string, idx: number): React.CSSProperties =>
    ({ transitionDelay: isVis(key) ? `${idx * 150}ms` : '0ms' });

  // Header
  const renderHeader = (key: string, stagger = 0) => (
    <div ref={getRef(key)} className={`text-center mb-6 lg:mb-12 transition-all duration-700 ${isVis(key) ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`} style={staggerDelay(key, stagger)}>
      <h1 className="text-lg sm:text-xl lg:text-3xl xl:text-4xl font-bold mb-1.5 lg:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500">
        המלצות לקוחות - בניית אתרים ופיתוח תוכנה
      </h1>
      <p className="text-xs sm:text-sm lg:text-base text-gray-400 mb-2">
        לקוחות שבחרו ב-Catapp לבניית אתרים, פיתוח אפליקציות ופיתוח תוכנה
      </p>
      <div className="w-16 lg:w-32 h-0.5 lg:h-1.5 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 mx-auto rounded-full" />
    </div>
  );

  // Testimonial Card
  const renderCard = (idx: number, prefix: string, stagger = 0) => {
    const t = testimonials[idx];
    const k = `${prefix}-t${idx}`;
    const vis = isVis(k);
    return (
      <div key={k} ref={getRef(k)}
        className={`group relative backdrop-blur-sm rounded-2xl lg:rounded-3xl transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-amber-500/10 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={staggerDelay(k, stagger)}
      >
        <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-b from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative px-5 py-5 lg:px-7 lg:py-7 text-right flex flex-col justify-between h-full">
          {/* Stars */}
          <div>
            <div className="flex items-center justify-end gap-1.5 mb-3 lg:mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400 lg:w-5 lg:h-5" />
              ))}
            </div>
            {/* Quote */}
            <p className="text-white text-base lg:text-lg leading-relaxed mb-4 lg:mb-6">
              "{t.text}"
            </p>
          </div>
          {/* Name */}
          <div className="pt-3 lg:pt-4 flex flex-col items-end gap-0.5">
            <span className="font-bold text-[#1a79f6] text-base lg:text-lg">
              {t.name}
            </span>
          </div>
        </div>
      </div>
    );
  };

  /* 7 testimonials:
     Desktop (≥1024): D1: header + cards 0-1, D2: cards 2-3, D3: cards 4-5, D4: card 6
     Mobile  (<1024): M1: header + card 0, M2-M7: cards 1-6
     Footer: separate section */

  return (
    <div ref={snapContainerRef} className="testimonials-snap-container">

      {/* ================== DESKTOP SECTIONS (≥1024px) ================== */}

      {/* D1: Header + Cards 0-1 */}
      <section className="testimonials-snap-section testimonials-desktop-only">
        <div className="w-full max-w-4xl mx-auto px-6 lg:px-8">
          {renderHeader('d-th', 0)}
          <div className="grid grid-cols-2 gap-8 xl:gap-10">
            {renderCard(0, 'd', 1)}
            {renderCard(1, 'd', 2)}
          </div>
        </div>
      </section>

      {/* D2: Cards 2-3 */}
      <section className="testimonials-snap-section testimonials-desktop-only">
        <div className="w-full max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 xl:gap-10">
            {renderCard(2, 'd', 0)}
            {renderCard(3, 'd', 1)}
          </div>
        </div>
      </section>

      {/* D3: Cards 4-5 */}
      <section className="testimonials-snap-section testimonials-desktop-only">
        <div className="w-full max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 xl:gap-10">
            {renderCard(4, 'd', 0)}
            {renderCard(5, 'd', 1)}
          </div>
        </div>
      </section>

      {/* D4: Card 6 */}
      <section className="testimonials-snap-section testimonials-desktop-only">
        <div className="w-full max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 xl:gap-10">
            {renderCard(6, 'd', 0)}
            {renderCard(7, 'd', 1)}
            <div />
          </div>
        </div>
      </section>

      {/* ================== MOBILE SECTIONS (<1024px) ================== */}

      {/* M1: Header + Card 0 */}
      <section className="testimonials-snap-section testimonials-mobile-only">
        <div className="w-full max-w-md mx-auto px-4">
          {renderHeader('m-th', 0)}
          {renderCard(0, 'm', 1)}
        </div>
      </section>


      {/* M2-M7: Cards 1-7, 2 בכל סקשן במסכים קטנים */}
      {Array.from({ length: Math.ceil((testimonials.length - 1) / 2) }, (_, idx) => {
        const first = 1 + idx * 2;
        const second = first + 1;
        return (
          <section key={`m-sec-pair-${idx}`} className="testimonials-snap-section testimonials-mobile-only">
            <div className="w-full max-w-md mx-auto px-4">
              {renderCard(first, 'm', 0)}
              {second < testimonials.length && renderCard(second, 'm', 1)}
            </div>
          </section>
        );
      })}

      {/* ================== FOOTER ================== */}
      <section className="testimonials-snap-section testimonials-snap-footer">
        <Footer />
      </section>
    </div>
  );
};

export default TestimonialsPage;
