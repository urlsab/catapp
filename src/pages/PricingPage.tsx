import React from 'react';
import { CheckCircle, Star, Rocket, Building2, Palette, ShoppingCart, FileText, Image, Users, Laptop, Shield, TrendingUp } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
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

    <div ref={sectionRef} className="min-h-screen pt-16 fade-in relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Content */}
      <div className="relative z-10">
      {/* <SmoothScroll /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Pricing */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-5xl">💎</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            מחירי בניית אתרים
          </h1>
          <p className="text-xl text-gray-300 mb-6">בחרו את החבילה המושלמת עבורכם</p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#1a79f6] via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 mt-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border-2 ${
                plan.popular 
                  ? 'border-[#1a79f6] shadow-2xl shadow-blue-500/20 mt-6' 
                  : 'border-gray-700/50 hover:border-gray-600'
              } rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${
                plan.popular 
                  ? 'from-blue-500/10 to-purple-500/10' 
                  : 'from-blue-500/5 to-purple-500/5'
              } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-6 py-2 rounded-full text-sm font-extrabold flex items-center shadow-2xl border-2 border-white/30">
                    <Star size={16} className="mr-2 ml-1 animate-pulse" fill="white" />
                    המומלץ ביותר
                  </div>
                </div>
              )}
              
              <div className="relative p-8">
                <div className="text-center mb-6">
                  <div className={`mb-4 flex justify-center transition-transform duration-300 group-hover:scale-110 ${
                    plan.popular ? 'animate-pulse' : ''
                  }`}>
                    {React.createElement(iconMap[plan.icon], { 
                      className: `w-16 h-16 ${
                        plan.popular 
                          ? 'text-[#1a79f6]' 
                          : 'text-blue-400 group-hover:text-[#1a79f6]'
                      } transition-colors duration-300` 
                    })}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {plan.name}
                  </h3>
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1a79f6] to-purple-500">
                    {plan.price}
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"></div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-300 group-hover:text-white transition-colors">
                      <CheckCircle size={18} className="text-green-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Website Spec Form Button - after main pricing */}
        <div className="flex justify-center mb-24">
          <a
            href="https://forms.gle/A94BRJsPUNZQ6YQy7"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#1a79f6] via-blue-600 to-purple-600 rounded-2xl shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-500/50"></span>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-blue-600 to-[#1a79f6] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center">
              🚀 לטופס אפיון אתר
            </span>
          </a>
        </div>


        {/* Maintenance Pricing */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-5xl">🛠️</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
            מחירי תחזוקה חודשית
          </h2>
          <p className="text-lg text-gray-300 mb-6">שמירה על האתר שלכם במצב מושלם</p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {maintenancePlans.map((plan, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border-2 border-gray-700/50 hover:border-green-500/50 rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-8">
                <div className="text-center mb-6">
                  <div className="mb-4 flex justify-center transition-transform duration-300 group-hover:scale-110">
                    {React.createElement(iconMap[plan.icon], { 
                      className: 'w-14 h-14 text-green-400 group-hover:text-green-300 transition-colors duration-300' 
                    })}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {plan.name}
                  </h4>
                  <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
                    {plan.price}
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"></div>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-300 group-hover:text-white transition-colors">
                      <CheckCircle size={16} className="text-green-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Maintenance Spec Form Button - after maintenance pricing */}
        <div className="flex justify-center mb-24">
          <a
            href="https://forms.gle/vNGtve7iHdJHCqhA9"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 rounded-2xl shadow-xl group-hover:shadow-2xl group-hover:shadow-green-500/50"></span>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-600 via-emerald-600 to-green-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center">
              🛡️ לטופס אפיון טיפול חודשי
            </span>
          </a>
        </div>



        {/* CV & LinkedIn Pricing Section - styled as other cards, with LinkedIn icon and features */}

        <div className="mt-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-5xl">💼</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              מחירון קורות חיים והעצמת LinkedIn
            </h2>
            <p className="text-lg text-gray-300 mb-6">הצטיידו בכלים המנצחים לקידום הקריירה</p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Card 1 */}
            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border-2 border-gray-700/50 hover:border-purple-500/50 rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 flex flex-col justify-between h-full">
                <div className="text-center mb-6">
                  <div className="mb-4 flex justify-center transition-transform duration-300 group-hover:scale-110">
                    <span className="text-4xl">✍️</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    כתיבת קורות חיים – שפה אחת
                  </h3>
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                    200 ₪
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"></div>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-300 group-hover:text-white transition-colors">
                    <CheckCircle size={16} className="text-purple-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">קובץ PDF מקצועי ומעוצב</span>
                  </li>
                  <li className="flex items-start text-gray-300 group-hover:text-white transition-colors">
                    <CheckCircle size={16} className="text-purple-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">התאמה אישית מלאה לתחום ולמשרה</span>
                  </li>
                  <li className="flex items-start text-gray-300 group-hover:text-white transition-colors">
                    <CheckCircle size={16} className="text-purple-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">ניסוח ברור, חד וממוקד תוצאות</span>
                  </li>
                  <li className="flex items-start text-gray-300 group-hover:text-white transition-colors">
                    <CheckCircle size={16} className="text-purple-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">מתאים להגשה למערכות גיוס (ATS)</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Card 2 */}
            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border-2 border-gray-700/50 hover:border-purple-500/50 rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 flex flex-col justify-between h-full">
                <div className="text-center mb-6">
                  <div className="mb-4 flex justify-center transition-transform duration-300 group-hover:scale-110">
                    <span className="text-4xl">🌍</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    כתיבת קורות חיים – עברית + אנגלית
                  </h3>
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                    370 ₪
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"></div>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-300 group-hover:text-white transition-colors">
                    <CheckCircle size={16} className="text-purple-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">קבצים מקצועיים בשתי שפות</span>
                  </li>
                  <li className="flex items-start text-gray-300 group-hover:text-white transition-colors">
                    <CheckCircle size={16} className="text-purple-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">התאמה ייעודית לכל שפה ותרבות גיוס</span>
                  </li>
                  <li className="flex items-start text-gray-300 group-hover:text-white transition-colors">
                    <CheckCircle size={16} className="text-purple-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">שמירה על מסר אחיד וחד</span>
                  </li>
                  <li className="flex items-start text-gray-300 group-hover:text-white transition-colors">
                    <CheckCircle size={16} className="text-purple-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">מוכן לשליחה לשוק המקומי והבינלאומי</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Card 3 */}
            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border-2 border-gray-700/50 hover:border-purple-500/50 rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 flex flex-col justify-between h-full">
                <div className="text-center mb-6">
                  <div className="mb-4 flex justify-center transition-transform duration-300 group-hover:scale-110">
                    <span className="text-4xl">🎓</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    זום: לימוד עקרונות כתיבת קו״ח + בונוס LinkedIn
                  </h3>
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                    250 ₪
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"></div>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-300 group-hover:text-white transition-colors">
                    <CheckCircle size={16} className="text-purple-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">מפגש זום מעשי (שעה)</span>
                  </li>
                  <li className="flex items-start text-gray-300 group-hover:text-white transition-colors">
                    <CheckCircle size={16} className="text-purple-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">לימוד שיטה לבניית קו״ח שמביא זימונים</span>
                  </li>
                  <li className="flex items-start text-gray-300 group-hover:text-white transition-colors">
                    <CheckCircle size={16} className="text-purple-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">דגשים, טעויות נפוצות וטיפים מוכחים</span>
                  </li>
                  <li className="flex items-start text-gray-300 group-hover:text-white transition-colors">
                    <CheckCircle size={16} className="text-purple-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">בונוס: עקרונות בסיסיים לחיזוק LinkedIn</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Card 4 */}
            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border-2 border-gray-700/50 hover:border-purple-500/50 rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 flex flex-col justify-between h-full">
                <div className="text-center mb-6">
                  <div className="mb-4 flex justify-center transition-transform duration-300 group-hover:scale-110">
                    <span className="text-4xl">🔗</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    זום: העצמת פרופיל LinkedIn
                  </h3>
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                    250 ₪
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"></div>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-300 group-hover:text-white transition-colors">
                    <CheckCircle size={16} className="text-purple-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">מפגש זום אישי (שעה)</span>
                  </li>
                  <li className="flex items-start text-gray-300 group-hover:text-white transition-colors">
                    <CheckCircle size={16} className="text-purple-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">שדרוג כותרת, תקציר ונראות הפרופיל</span>
                  </li>
                  <li className="flex items-start text-gray-300 group-hover:text-white transition-colors">
                    <CheckCircle size={16} className="text-purple-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">התאמה לאלגוריתם ולמגייסים</span>
                  </li>
                  <li className="flex items-start text-gray-300 group-hover:text-white transition-colors">
                    <CheckCircle size={16} className="text-purple-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">הפיכת הפרופיל לכלי שמייצר פניות</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Card 5 */}
            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border-2 border-gray-700/50 hover:border-purple-500/50 rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 flex flex-col justify-between h-full">
                <div className="text-center mb-6">
                  <div className="mb-4 flex justify-center transition-transform duration-300 group-hover:scale-110">
                    <span className="text-4xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    חבילה משולבת – קו״ח + LinkedIn
                  </h3>
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                    470 ₪
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"></div>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-300 group-hover:text-white transition-colors">
                    <CheckCircle size={16} className="text-purple-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">מפגש זום מקיף</span>
                  </li>
                  <li className="flex items-start text-gray-300 group-hover:text-white transition-colors">
                    <CheckCircle size={16} className="text-purple-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">כתיבת קובץ קו״ח מקצועי</span>
                  </li>
                  <li className="flex items-start text-gray-300 group-hover:text-white transition-colors">
                    <CheckCircle size={16} className="text-purple-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">שדרוג פרופיל LinkedIn</span>
                  </li>
                  <li className="flex items-start text-gray-300 group-hover:text-white transition-colors">
                    <CheckCircle size={16} className="text-purple-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">התאמה מלאה למטרות הקריירה שלך</span>
                  </li>
                </ul>
              </div>
            </div>
                          {/* Card 8 - DOUBLE CV + זום עקרונות קו"ח */}
                         
                          
              {/* Card 6 - PLUS Package */}
              <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border-2 border-gray-700/50 hover:border-purple-500/50 rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 flex flex-col justify-between h-full">
                  <div className="text-center mb-6">
                    <div className="mb-4 flex justify-center transition-transform duration-300 group-hover:scale-110">
                      <span className="text-4xl">🚀</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      חבילה משולבת PLUS – 2 גרסאות קו״ח + LinkedIn
                    </h3>
                    <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                      650 ₪
                    </div>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"></div>
                  <ul className="space-y-3">
                    <li className="flex items-start text-gray-300 group-hover:text-white transition-colors">
                      <CheckCircle size={16} className="text-purple-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">כתיבת 2 גרסאות שונות של קורות חיים</span>
                    </li>
                    <li className="flex items-start text-gray-300 group-hover:text-white transition-colors">
                      <CheckCircle size={16} className="text-purple-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">קבצי PDF מקצועיים ומעוצבים</span>
                    </li>
                    <li className="flex items-start text-gray-300 group-hover:text-white transition-colors">
                      <CheckCircle size={16} className="text-purple-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">מפגש זום מקיף על קו"ח</span>
                    </li>
                    <li className="flex items-start text-gray-300 group-hover:text-white transition-colors">
                      <CheckCircle size={16} className="text-purple-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">שדרוג והעצמת פרופיל LinkedIn</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Card 7 - DOUBLE CV + זום עקרונות קו"ח */}
              <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border-2 border-gray-700/50 hover:border-purple-500/50 rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 flex flex-col justify-between h-full">
                  <div className="text-center mb-6">
                    <div className="mb-4 flex justify-center transition-transform duration-300 group-hover:scale-110">
                      <span className="text-4xl">🎯</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      חבילת DOUBLE CV + זום עקרונות קו״ח
                    </h3>
                    <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                      650 ₪
                    </div>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"></div>
                  <ul className="space-y-3">
                    <li className="flex items-start text-gray-300 group-hover:text-white transition-colors">
                      <CheckCircle size={16} className="text-purple-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">כתיבת 2 גרסאות שונות של קורות חיים</span>
                    </li>
                    <li className="flex items-start text-gray-300 group-hover:text-white transition-colors">
                      <CheckCircle size={16} className="text-purple-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">קבצי PDF מקצועיים ומעוצבים</span>
                    </li>
                    <li className="flex items-start text-gray-300 group-hover:text-white transition-colors">
                      <CheckCircle size={16} className="text-purple-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">מפגש זום מעשי (שעה) ללימוד עקרונות כתיבת קו״ח</span>
                    </li>
                    <li className="flex items-start text-gray-300 group-hover:text-white transition-colors">
                      <CheckCircle size={16} className="text-purple-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">הבנה איך לבנות, להתאים ולשפר קו״ח גם בעתיד</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 8 - ALL-INCLUSIVE */}
              <div className="group relative bg-gradient-to-br from-purple-800/50 to-pink-800/50 backdrop-blur-lg border-2 border-purple-500 rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 mt-8">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-gray-900 px-6 py-2 rounded-full text-sm font-extrabold flex items-center shadow-2xl border-2 border-white/40">
                    <Star size={16} className="mr-2 ml-1 animate-pulse" fill="#1f2937" />
                    החבילה המשתלמת ביותר
                  </div>
                </div>
                <div className="relative p-8 flex flex-col justify-between h-full">
                  <div className="text-center mb-6 mt-4">
                    <div className="mb-4 flex justify-center transition-transform duration-300 group-hover:scale-110 animate-pulse">
                      <span className="text-5xl">🏆</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                      חבילת ALL-INCLUSIVE
                    </h3>
                    <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-400">
                      800 ₪
                    </div>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent mb-6"></div>
                  <ul className="space-y-3">
                    <li className="flex items-start text-gray-200 group-hover:text-white transition-colors">
                      <CheckCircle size={16} className="text-yellow-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed font-semibold">כתיבת קו״ח בעברית ובאנגלית</span>
                    </li>
                    <li className="flex items-start text-gray-200 group-hover:text-white transition-colors">
                      <CheckCircle size={16} className="text-yellow-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed font-semibold">קבצים מקצועיים ומעוצבים</span>
                    </li>
                    <li className="flex items-start text-gray-200 group-hover:text-white transition-colors">
                      <CheckCircle size={16} className="text-yellow-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed font-semibold">זום על קו״ח (למידת עקרונות)</span>
                    </li>
                    <li className="flex items-start text-gray-200 group-hover:text-white transition-colors">
                      <CheckCircle size={16} className="text-yellow-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed font-semibold">זום מלא להעצמת LinkedIn</span>
                    </li>
                    <li className="flex items-start text-gray-200 group-hover:text-white transition-colors">
                      <CheckCircle size={16} className="text-yellow-400 mr-3 ml-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed font-semibold">ליווי ממוקד עד מוצר מוכן לשליחה</span>
                    </li>
                  </ul>
                </div>
              </div>

          </div>
        </div>

        {/* כפתור לטופס בניית קו"ח */}
        <div className="flex justify-center mt-12">
          <a
            href="https://forms.gle/p3yVy1S5ZzBaa2GR8"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 via-pink-600 to-rose-600 rounded-2xl shadow-xl group-hover:shadow-2xl group-hover:shadow-purple-500/50"></span>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-rose-600 via-pink-600 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center">
              💼 לטופס בניית קו"ח
            </span>
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PricingPage;