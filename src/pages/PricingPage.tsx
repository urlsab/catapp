import React from 'react';
import { Check, Star, Rocket, Building2, Palette, ShoppingCart, FileText, Image, Users, Laptop, Shield, TrendingUp } from 'lucide-react';
// import SmoothScroll from '../components/SmoothScroll';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import { FaLinkedin } from "react-icons/fa";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Rocket,
  Building2,
  Palette,
  ShoppingCart,
  FileText,
  Image,
  Users,
  Laptop,
  Shield,
  TrendingUp
};

const PricingPage: React.FC = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null);

  // React.useEffect(() => {
  //   const section = sectionRef.current;
  //   if (!section) return;
  //   const handleFade = (entries: IntersectionObserverEntry[]) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('fade-in');
  //         entry.target.classList.remove('fade-out');
  //       } else {
  //         entry.target.classList.remove('fade-in');
  //         entry.target.classList.add('fade-out');
  //       }
  //     });
  //   };
  //   const observer = new IntersectionObserver(handleFade, {
  //     threshold: 0.1
  //   });
  //   observer.observe(section);
  //   return () => observer.disconnect();
  // }, []);
  const pricingPlans = [
    {
      name: 'דף נחיתה',
      price: 'החל מ-2,000 ₪',
      icon: 'Rocket',
  features: ['עיצוב מותאם אישית', 'רספונסיבי לכל המכשירים', 'אופטימיזציה לגוגל', 'טופס יצירת קשר'],
  examples: ['orbenji.com'],
    },
    {
      name: 'אתר תדמית',
      price: 'החל מ-5,000 ₪',
      icon: 'Building2',
  features: ['עד 10 עמודים', 'מערכת ניהול תוכן', 'גלריית תמונות', 'אינטגרציה עם רשתות חברתיות', 'אופטימיזציה מתקדמת'],
  examples: ['atliz.co.il'],
  popular: true,
    },
    {
      name: 'אתר תיק עבודות',
      price: 'החל מ-8,000 ₪',
      icon: 'Palette',
  features: ['עיצוב יוניק ומותאם', 'גלרית עבודות מתקדמת', 'אנימציות מרהיבות', 'בלוג מובנה', 'כלים לקידום עצמי'],
  examples: ['portfolio-uriel-yair-sabag.vercel.app'],
    },
    {
      name: 'אתר מכירות עם סליקה',
      price: 'החל מ-10,000 ₪',
      icon: 'ShoppingCart',
  features: ['קטלוג מוצרים', 'עגלת קניות', 'מערכת תשלומים', 'ניהול הזמנות', 'דוחות מכירות', 'אינטגרציה עם מלאי'],
    },
    {
      name: 'אתר בלוג',
      price: 'החל מ-7,000 ₪',
      icon: 'FileText',
  features: ['מערכת פרסום פוסטים', 'קטגוריות ותגים', 'חיפוש מתקדם', 'תגובות וליייקים', 'שיתוף ברשתות חברתיות'],
    },
    {
      name: 'אתר גלריה',
      price: 'החל מ-8,000 ₪',
      icon: 'Image',
  features: ['גלריית תמונות מתקדמת', 'עיצוב ייחודי', 'התאמה אישית', 'שיתוף ברשתות חברתיות'],
    },
    {
      name: 'רשת חברתית',
      price: 'החל מ-10,000 ₪',
      icon: 'Users',
  features: ['מערכת משתמשים', 'פרופילים אישיים', 'פיד חברתי', 'מסרים פרטיים', 'קבוצות ואירועים'],
  examples: ['yelp--camp--project.herokuapp.com'],
    },
    {
      name: 'בניית מוצר SaaS לפי הזמנה',
      price: 'החל מ-10,000 ₪',
      icon: 'Laptop',
  features: ['פיתוח בהתאמה אישית', 'מערכת ניהול', 'אינטגרציות מתקדמות', 'תמיכה טכנית'],
  examples: ['resumes-builder.web.app'],
    }
  ];

  const maintenancePlans = [
    {
      name: 'הגנה מפני קריסות ותיקון באגים',
      price: '300 ₪ לחודש',
      icon: 'Shield',
      features: ['ניטור 24/7', 'תיקון באגים מיידי', 'גיבויים יומיים', 'עדכוני אבטחה']
    },
    {
      name: 'קידום בגוגל',
      price: 'החל מ-400 ₪ לחודש',
      icon: 'TrendingUp',
      features: ['אופטימיזציית תוכן', 'בניית קישורים', 'ניתוח מתחרים', 'דוחות ביצועים חודשיים']
    },
    {
      name: 'עדכון תכנים שוטפים',
      price: 'החל מ-300 ₪ לחודש',
      icon: 'FileText',
      features: ['עדכון תוכן שוטף', 'הוספת עמודים חדשים', 'עדכון תמונות', 'שיפור UX']
    }
  ];

  return (

    <div ref={sectionRef} className="min-h-screen pt-16 fade-in">
      {/* <SmoothScroll /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Pricing */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            מחירי בניית אתרים
          </h1>
          {/* Removed description text as requested */}
          <div className="w-24 h-1 bg-gradient-to-r from-[#1a79f6] to-blue-700 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 ${plan.popular ? 'ring-2 ring-[#1a79f6]' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#1a79f6] to-blue-700 text-white px-4 py-1 rounded-full text-sm flex items-center">
                    <Star size={14} className="mr-1 ml-1" />
                    פופולרי
                  </div>
                </div>
              )}
              <div className="text-center mb-6">
                <div className="mb-3 flex justify-center">
                  {React.createElement(iconMap[plan.icon], { className: 'w-12 h-12 text-[#1a79f6]' })}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="text-2xl font-bold text-[#1a79f6]">
                  {plan.price}
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                    <Check size={16} className="text-green-500 mr-2 ml-2 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.examples && (
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 flex justify-center gap-2 flex-wrap">
                  {plan.examples.map((example, exampleIndex) => (
                    <a
                      key={exampleIndex}
                      href={`https://${example}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#1a79f6] hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-xl shadow transition-all text-sm mb-2"
                    >
                      לאתר
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Website Spec Form Button - after main pricing */}
        <div className="flex justify-center mb-20">
          <a
            href="https://forms.gle/A94BRJsPUNZQ6YQy7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1a79f6] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-2xl shadow transition-all text-lg"
          >
            לטופס אפיון אתר
          </a>
        </div>


        {/* Maintenance Pricing */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            מחירי תחזוקה חודשית
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-700 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {maintenancePlans.map((plan, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="text-center mb-6">
                <div className="mb-3 flex justify-center">
                  {React.createElement(iconMap[plan.icon], { className: 'w-10 h-10 text-[#1a79f6]' })}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {plan.name}
                </h4>
                <div className="text-xl font-bold text-green-400">
                  {plan.price}
                </div>
              </div>

              <ul className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                    <Check size={14} className="text-green-500 mr-2 ml-2 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Maintenance Spec Form Button - after maintenance pricing */}
        <div className="flex justify-center mb-20">
          <a
            href="https://forms.gle/vNGtve7iHdJHCqhA9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-2xl shadow transition-all text-lg"
          >
            לטופס אפיון טיפול חודשי
          </a>
        </div>



        {/* CV & LinkedIn Pricing Section - styled as other cards, with LinkedIn icon and features */}

        <div className="mt-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-2">
              <span className="text-4xl">💼</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">מחירון קורות חיים והעצמת LinkedIn</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Card 1 */}
            <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col justify-between">
              <div className="text-center mb-6">
                <div className="mb-3 flex justify-center"><span className="text-2xl">✍️</span></div>
                <h3 className="text-xl font-bold text-white mb-2">כתיבת קורות חיים – שפה אחת</h3>
                <div className="text-2xl font-bold text-[#1a79f6] mb-2">200 ₪</div>
              </div>
              <ul className="space-y-3 mb-2">
                <li className="flex items-center text-gray-300"><Check size={16} className="text-green-500 mr-2 ml-2 flex-shrink-0" /><span className="text-sm">קובץ PDF מקצועי ומעוצב</span></li>
                <li className="flex items-center text-gray-300"><Check size={16} className="text-green-500 mr-2 ml-2 flex-shrink-0" /><span className="text-sm">התאמה אישית מלאה לתחום ולמשרה</span></li>
                <li className="flex items-center text-gray-300"><Check size={16} className="text-green-500 mr-2 ml-2 flex-shrink-0" /><span className="text-sm">ניסוח ברור, חד וממוקד תוצאות</span></li>
                <li className="flex items-center text-gray-300"><Check size={16} className="text-green-500 mr-2 ml-2 flex-shrink-0" /><span className="text-sm">מתאים להגשה למערכות גיוס (ATS)</span></li>
              </ul>
            </div>
            {/* Card 2 */}
            <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col justify-between">
              <div className="text-center mb-6">
                <div className="mb-3 flex justify-center"><span className="text-2xl">🌍</span></div>
                <h3 className="text-xl font-bold text-white mb-2">כתיבת קורות חיים – עברית + אנגלית</h3>
                <div className="text-2xl font-bold text-[#1a79f6] mb-2">370 ₪</div>
              </div>
              <ul className="space-y-3 mb-2">
                <li className="flex items-center text-gray-300"><Check size={16} className="text-green-500 mr-2 ml-2 flex-shrink-0" /><span className="text-sm">קבצים מקצועיים בשתי שפות</span></li>
                <li className="flex items-center text-gray-300"><Check size={16} className="text-green-500 mr-2 ml-2 flex-shrink-0" /><span className="text-sm">התאמה ייעודית לכל שפה ותרבות גיוס</span></li>
                <li className="flex items-center text-gray-300"><Check size={16} className="text-green-500 mr-2 ml-2 flex-shrink-0" /><span className="text-sm">שמירה על מסר אחיד וחד</span></li>
                <li className="flex items-center text-gray-300"><Check size={16} className="text-green-500 mr-2 ml-2 flex-shrink-0" /><span className="text-sm">מוכן לשליחה לשוק המקומי והבינלאומי</span></li>
              </ul>
            </div>
            {/* Card 3 */}
            <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col justify-between">
              <div className="text-center mb-6">
                <div className="mb-3 flex justify-center"><span className="text-2xl">🎓</span></div>
                <h3 className="text-xl font-bold text-white mb-2">זום: לימוד עקרונות כתיבת קו״ח + בונוס LinkedIn</h3>
                <div className="text-2xl font-bold text-[#1a79f6] mb-2">250 ₪</div>
              </div>
              <ul className="space-y-3 mb-2">
                <li className="flex items-center text-gray-300"><Check size={16} className="text-green-500 mr-2 ml-2 flex-shrink-0" /><span className="text-sm">מפגש זום מעשי (שעה)</span></li>
                <li className="flex items-center text-gray-300"><Check size={16} className="text-green-500 mr-2 ml-2 flex-shrink-0" /><span className="text-sm">לימוד שיטה לבניית קו״ח שמביא זימונים</span></li>
                <li className="flex items-center text-gray-300"><Check size={16} className="text-green-500 mr-2 ml-2 flex-shrink-0" /><span className="text-sm">דגשים, טעויות נפוצות וטיפים מוכחים</span></li>
                <li className="flex items-center text-gray-300"><Check size={16} className="text-green-500 mr-2 ml-2 flex-shrink-0" /><span className="text-sm">בונוס: עקרונות בסיסיים לחיזוק LinkedIn</span></li>
              </ul>
            </div>
            {/* Card 4 */}
            <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col justify-between">
              <div className="text-center mb-6">
                <div className="mb-3 flex justify-center"><span className="text-2xl">🔗</span></div>
                <h3 className="text-xl font-bold text-white mb-2">זום: העצמת פרופיל LinkedIn</h3>
                <div className="text-2xl font-bold text-[#1a79f6] mb-2">250 ₪</div>
              </div>
              <ul className="space-y-3 mb-2">
                <li className="flex items-center text-gray-300"><Check size={16} className="text-green-500 mr-2 ml-2 flex-shrink-0" /><span className="text-sm">מפגש זום אישי (שעה)</span></li>
                <li className="flex items-center text-gray-300"><Check size={16} className="text-green-500 mr-2 ml-2 flex-shrink-0" /><span className="text-sm">שדרוג כותרת, תקציר ונראות הפרופיל</span></li>
                <li className="flex items-center text-gray-300"><Check size={16} className="text-green-500 mr-2 ml-2 flex-shrink-0" /><span className="text-sm">התאמה לאלגוריתם ולמגייסים</span></li>
                <li className="flex items-center text-gray-300"><Check size={16} className="text-green-500 mr-2 ml-2 flex-shrink-0" /><span className="text-sm">הפיכת הפרופיל לכלי שמייצר פניות</span></li>
              </ul>
            </div>
            {/* Card 5 */}
            <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col justify-between">
              <div className="text-center mb-6">
                <div className="mb-3 flex justify-center"><span className="text-2xl">🚀</span></div>
                <h3 className="text-xl font-bold text-white mb-2">חבילה משולבת – קו״ח + LinkedIn</h3>
                <div className="text-2xl font-bold text-[#1a79f6] mb-2">470 ₪</div>
              </div>
              <ul className="space-y-3 mb-2">
                <li className="flex items-center text-gray-300"><Check size={16} className="text-green-500 mr-2 ml-2 flex-shrink-0" /><span className="text-sm">מפגש זום מקיף</span></li>
                <li className="flex items-center text-gray-300"><Check size={16} className="text-green-500 mr-2 ml-2 flex-shrink-0" /><span className="text-sm">כתיבת קובץ קו״ח מקצועי</span></li>
                <li className="flex items-center text-gray-300"><Check size={16} className="text-green-500 mr-2 ml-2 flex-shrink-0" /><span className="text-sm">שדרוג פרופיל LinkedIn</span></li>
                <li className="flex items-center text-gray-300"><Check size={16} className="text-green-500 mr-2 ml-2 flex-shrink-0" /><span className="text-sm">התאמה מלאה למטרות הקריירה שלך</span></li>
              </ul>
            </div>
                          {/* Card 8 - DOUBLE CV + זום עקרונות קו"ח */}
                         
                          
              {/* Card 7 - PLUS Package */}
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col justify-between">
                <div className="text-center mb-6">
                  <div className="mb-3 flex justify-center"><span className="text-2xl">🚀</span></div>
                  <h3 className="text-xl font-bold text-white mb-2">חבילה משולבת PLUS – 2 גרסאות קו״ח + LinkedIn</h3>
                  <div className="text-2xl font-bold text-[#1a79f6] mb-2">650 ₪</div>
                </div>
                <ul className="space-y-3 mb-2">
                  <li className="flex items-center text-gray-300"><Check size={16} className="text-green-500 mr-2 ml-2 flex-shrink-0" /><span className="text-sm">כתיבת 2 גרסאות שונות של קורות חיים</span></li>
                  <li className="flex items-center text-gray-300"><Check size={16} className="text-green-500 mr-2 ml-2 flex-shrink-0" /><span className="text-sm">קבצי PDF מקצועיים ומעוצבים</span></li>
                  {/* מפגש זום מקיף על קו"ח */}
                  {/* שדרוג והעצמת פרופיל LinkedIn */}
                </ul>
              </div>
              {/* Card 8 - DOUBLE CV + זום עקרונות קו"ח */}
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col justify-between">
                <div className="text-center mb-6">
                  <div className="mb-3 flex justify-center"><span className="text-2xl">🎯</span></div>
                  <h3 className="text-xl font-bold text-white mb-2">חבילת DOUBLE CV + זום עקרונות קו״ח</h3>
                  <div className="text-2xl font-bold text-[#1a79f6] mb-2">650 ₪</div>
                </div>
                <ul className="space-y-3 mb-2">
                  <li className="flex items-center text-gray-300"><Check size={16} className="text-green-500 mr-2 ml-2 flex-shrink-0" /><span className="text-sm">כתיבת 2 גרסאות שונות של קורות חיים</span></li>
                  {/* התאמה מלאה לכל גרסה לפי דרישות שוק ומשרות יעד */}
                  <li className="flex items-center text-gray-300"><Check size={16} className="text-green-500 mr-2 ml-2 flex-shrink-0" /><span className="text-sm">קבצי PDF מקצועיים ומעוצבים</span></li>
                  <li className="flex items-center text-gray-300"><Check size={16} className="text-green-500 mr-2 ml-2 flex-shrink-0" /><span className="text-sm">מפגש זום מעשי (שעה) ללימוד עקרונות כתיבת קו״ח</span></li>
                  <li className="flex items-center text-gray-300"><Check size={16} className="text-green-500 mr-2 ml-2 flex-shrink-0" /><span className="text-sm">הבנה איך לבנות, להתאים ולשפר קו״ח גם בעתיד</span></li>
                </ul>
              </div>

{/* Card 9 - ALL-INCLUSIVE (moved last) */}
                          <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col justify-between">
                            <div className="text-center mb-6">
                              <div className="mb-3 flex justify-center"><span className="text-2xl">🏆</span></div>
                              <h3 className="text-xl font-bold text-white mb-2">חבילת ALL-INCLUSIVE</h3>
                              <div className="text-2xl font-bold text-[#1a79f6] mb-2">800 ₪</div>
                            </div>
                            <ul className="space-y-3 mb-2">
                              <li className="flex items-center text-gray-300"><Check size={16} className="text-green-500 mr-2 ml-2 flex-shrink-0" /><span className="text-sm">כתיבת קו״ח בעברית ובאנגלית</span></li>
                              <li className="flex items-center text-gray-300"><Check size={16} className="text-green-500 mr-2 ml-2 flex-shrink-0" /><span className="text-sm">קבצים מקצועיים ומעוצבים</span></li>
                              <li className="flex items-center text-gray-300"><Check size={16} className="text-green-500 mr-2 ml-2 flex-shrink-0" /><span className="text-sm">זום על קו״ח (למידת עקרונות)</span></li>
                              <li className="flex items-center text-gray-300"><Check size={16} className="text-green-500 mr-2 ml-2 flex-shrink-0" /><span className="text-sm">זום מלא להעצמת LinkedIn</span></li>
                              {/* ליווי ממוקד עד מוצר מוכן לשליחה */}
                            </ul>
                          </div>

          </div>
        </div>

        {/* Quote Section removed as requested */}
        {/* כפתור לטופס בניית קו"ח */}
        <div className="flex justify-center mt-8">
          <a
            href="https://forms.gle/p3yVy1S5ZzBaa2GR8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1a79f6] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-2xl shadow transition-all text-lg"
          >
            לטופס בניית קו"ח
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;