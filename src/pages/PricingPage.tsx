import React from 'react';
import { Check, Star, Rocket, Building2, Palette, ShoppingCart, FileText, Image, Users, Laptop, Shield, TrendingUp, Target } from 'lucide-react';
// import SmoothScroll from '../components/SmoothScroll';

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
          <p className="text-lg text-gray-300 mb-2">
            כל המחירים כוללים עיצוב אישי, התאמה מלאה לצרכי הלקוח ושירות מקצועי.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1a79f6] to-blue-700 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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

        {/* Maintenance Pricing */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            מחירי תחזוקה חודשית
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-700 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
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

        {/* CV Services Link */}
        <div className="text-center mb-12">
          <div className="bg-purple-600/10 border border-purple-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <Target className="w-8 h-8 text-purple-400" />
              קורות חיים למשרות בהייטק
            </h2>
            <p className="text-gray-300 mb-6">
              מחפשים עבודה בהייטק? אנחנו עוזרים לכם לבלוט מול מערכות ATS ולהגיע לראיונות!
            </p>
            <a
              href="/cv-services"
              className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all transform hover:scale-105"
            >
              לעמוד קורות חיים →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;