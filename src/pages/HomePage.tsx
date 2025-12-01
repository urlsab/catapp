import React from 'react';
// import Values from '../components/Values';
// import KnowledgeHub from '../components/KnowledgeHub';
import logo from '../../Assets/catapp logo no bg.png';
import '../styles/scroll.css';
// import SmoothScroll from '../components/SmoothScroll';
import { Zap, TrendingUp, Smartphone, Wrench, Shield, DollarSign, Globe, Rocket, Building2, Scale, FileText, Briefcase, Edit } from 'lucide-react';

import { Link } from 'react-router-dom';

const pricingPreview = [
  {
    name: 'דף נחיתה',
    price: 'החל מ-2,000 ₪',
    example: 'orbenji.com',
    icon: 'Rocket',
  },
  {
    name: 'אתר תדמית',
    price: 'החל מ-5,000 ₪',
    example: 'atliz.co.il',
    icon: 'Building2',
  },
  {
    name: 'אתר תיק עבודות',
    price: 'החל מ-8,000 ₪',
    example: 'portfolio-uriel-yair-sabag.vercel.app',
    icon: 'Briefcase',
  },
];

const maintenancePreview = [
  {
    name: 'הגנה מפני קריסות ותיקון באגים',
    price: '300 ₪ לחודש',
  },
  {
    name: 'קידום בגוגל',
    price: 'החל מ-400 ₪ לחודש',
  },
  {
    name: 'עדכון תכנים שוטפים',
    price: 'החל מ-300 ₪ לחודש',
  },
];

const HomePage: React.FC = () => {
  const typingTexts = [
    'בניית אתרים',
    'כתיבת קו"ח להייטק',
    'ייעוץ לעסקים קטנים'
  ];
  const [currentText, setCurrentText] = React.useState('');
  const [textIdx, setTextIdx] = React.useState(0);
  const [charIdx, setCharIdx] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [logoAnimated, setLogoAnimated] = React.useState(false);
  const [typingStarted, setTypingStarted] = React.useState(false);
  const [showBlinkingCursor, setShowBlinkingCursor] = React.useState(false);
  const valuesAnimated = true; // Set to true since observer is disabled
  const valuesRef = React.useRef<HTMLDivElement>(null);

  // אנימציה מדורגת - ראשית הלוגו ואז ההקלדה
  React.useEffect(() => {
    const logoTimer = setTimeout(() => {
      setLogoAnimated(true);
      // התחלת האנימציה של ההקלדה אחרי הלוגו
      setTimeout(() => {
        setTypingStarted(true);
      }, 800);
    }, 1100); // 1100ms כדי להמתין לספינר (800ms + 200ms + 100ms מרווח בטיחות)
    
    return () => clearTimeout(logoTimer);
  }, []);

  React.useEffect(() => {
    if (!typingStarted) return;
    
    let typingTimeout: NodeJS.Timeout;
    const fullText = typingTexts[textIdx];
    
    if (!isDeleting && charIdx < fullText.length) {
      // During typing - hide blinking cursor
      setShowBlinkingCursor(false);
      typingTimeout = setTimeout(() => {
        setCurrentText(fullText.substring(0, charIdx + 1));
        setCharIdx(charIdx + 1);
      }, 100);
    } else if (isDeleting && charIdx > 0) {
      // During deleting - hide blinking cursor
      setShowBlinkingCursor(false);
      typingTimeout = setTimeout(() => {
        setCurrentText(fullText.substring(0, charIdx - 1));
        setCharIdx(charIdx - 1);
      }, 50);
    } else if (!isDeleting && charIdx === fullText.length) {
      // Finished typing a line - show blinking cursor for pause
      setShowBlinkingCursor(true);
      typingTimeout = setTimeout(() => {
        setShowBlinkingCursor(false);
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && charIdx === 0) {
      // Finished deleting - hide blinking cursor
      setShowBlinkingCursor(false);
      typingTimeout = setTimeout(() => {
        setIsDeleting(false);
        setTextIdx((textIdx + 1) % typingTexts.length);
      }, 500);
    }
    
    return () => clearTimeout(typingTimeout);
  }, [charIdx, isDeleting, textIdx, typingStarted]);

  // Intersection Observer for Values section animation
  // React.useEffect(() => {
  //   const valuesSection = valuesRef.current;
  //   if (!valuesSection) return;

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting && !valuesAnimated) {
  //           setValuesAnimated(true);
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.1,
  //       rootMargin: '0px'
  //     }
  //   );

  //   observer.observe(valuesSection);

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, [valuesAnimated]);

  return (
    <div>
      {/* <SmoothScroll /> */}

      {/* Hero Section */}
      <div className="scroll-area w-full flex justify-center items-center relative h-screen">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row w-full items-center justify-between px-4 sm:px-6 lg:px-8 gap-8">
          {/* Logo Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div
              className={`relative group transition-all duration-1500 transform ${
                logoAnimated
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-12 scale-90'
              }`}
            >
              {/* Glow effect background */}
              <div className="absolute -inset-8 bg-gradient-to-r from-[#1a79f6] via-blue-600 to-blue-700 rounded-full opacity-30 group-hover:opacity-40 transition-opacity duration-500 blur-2xl"></div>

              <img
                src={logo}
                alt="Catapp Logo"
                className={`relative h-48 w-48 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 object-contain transition-all duration-1500 ${
                  logoAnimated ? 'filter-none' : 'filter blur-sm'
                }`}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  animation: logoAnimated
                    ? 'logoBreathing 4s ease-in-out infinite'
                    : 'none',
                }}
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="text-center md:text-right">
              <h1
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1a79f6] mb-6 flex items-center justify-center md:justify-end transition-all duration-800 transform ${
                  typingStarted ? 'opacity-80 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
              >
                <span className="leading-tight">{currentText}</span>
                {typingStarted && (
                  <span
                    className={`inline-block bg-white align-middle mr-2 ${
                      showBlinkingCursor ? 'animate-blink' : ''
                    }`}
                    style={{
                      width: '4px',
                      height:
                        window.innerWidth >= 1280
                          ? '4rem'
                          : window.innerWidth >= 1024
                          ? '3.5rem'
                          : window.innerWidth >= 768
                          ? '3rem'
                          : '2.5rem',
                      borderRadius: '2px',
                      marginLeft: '8px',
                      transform: 'translateY(10%)',
                    }}
                  />
                )}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div
        ref={valuesRef}
        className="scroll-area w-full flex justify-center items-center relative min-h-screen"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-32">
          <div className="text-center mb-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              הערכים שמנחים אותנו
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1a79f6] to-blue-700 mx-auto mb-2"></div>
            <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto px-4">
              אנו מתחייבים לשירות מקצועי, אמין ומותאם אישית המבוסס על הטכנולוגיות המתקדמות ביותר
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
            <div
              className={`bg-white/5 backdrop-blur-sm border border-[#1a79f6]/30 rounded-2xl p-6 md:p-8 lg:p-10 text-center hover:border-[#1a79f6]/60 hover:transform hover:scale-105 transition-all duration-300 ${
                valuesAnimated ? 'animate-fadeFromTop' : 'opacity-0'
              }`}
              style={
                valuesAnimated
                  ? { animationDelay: '0.3s', animationFillMode: 'forwards' }
                  : {}
              }
            >
              <div className="mb-3 md:mb-4 flex justify-center"><Zap className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-[#1a79f6]" /></div>
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-white mb-2 md:mb-3">
                טכנולוגיה מתקדמת
              </h3>
              <p className="text-gray-300 text-sm md:text-base">React, TypeScript, JavaScript ועוד</p>
            </div>
            <div
              className={`bg-white/5 backdrop-blur-sm border border-[#1a79f6]/30 rounded-2xl p-6 md:p-8 lg:p-10 text-center hover:border-[#1a79f6]/60 hover:transform hover:scale-105 transition-all duration-300 ${
                valuesAnimated ? 'animate-fadeFromTop' : 'opacity-0'
              }`}
              style={
                valuesAnimated
                  ? { animationDelay: '0.5s', animationFillMode: 'forwards' }
                  : {}
              }
            >
              <div className="mb-3 md:mb-4 flex justify-center"><TrendingUp className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-[#1a79f6]" /></div>
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-white mb-2 md:mb-3">
                קידום אורגני (SEO)
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                הגעה למקום הראשון בתוצאות החיפוש
              </p>
            </div>
            <div
              className={`bg-white/5 backdrop-blur-sm border border-[#1a79f6]/30 rounded-2xl p-6 md:p-8 lg:p-10 text-center hover:border-[#1a79f6]/60 hover:transform hover:scale-105 transition-all duration-300 ${
                valuesAnimated ? 'animate-fadeFromTop' : 'opacity-0'
              }`}
              style={
                valuesAnimated
                  ? { animationDelay: '1s', animationFillMode: 'forwards' }
                  : {}
              }
            >
              <div className="mb-3 md:mb-4 flex justify-center"><Smartphone className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-[#1a79f6]" /></div>
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-white mb-2 md:mb-3">
                ריספונסיביות מלאה
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                מותאם למחשב, טאבלט וטלפון נייד
              </p>
            </div>
            <div
              className={`bg-white/5 backdrop-blur-sm border border-[#1a79f6]/30 rounded-2xl p-6 md:p-8 lg:p-10 text-center hover:border-[#1a79f6]/60 hover:transform hover:scale-105 transition-all duration-300 ${
                valuesAnimated ? 'animate-fadeFromTop' : 'opacity-0'
              }`}
              style={
                valuesAnimated
                  ? { animationDelay: '1.5s', animationFillMode: 'forwards' }
                  : {}
              }
            >
              <div className="mb-3 md:mb-4 flex justify-center"><Wrench className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-[#1a79f6]" /></div>
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-white mb-2 md:mb-3">
                תחזוקה ושדרוגים
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                תמיכה מתמשכת ושיפורים שוטפים
              </p>
            </div>
            <div
              className={`bg-white/5 backdrop-blur-sm border border-[#1a79f6]/30 rounded-2xl p-6 md:p-8 lg:p-10 text-center hover:border-[#1a79f6]/60 hover:transform hover:scale-105 transition-all duration-300 ${
                valuesAnimated ? 'animate-fadeFromTop' : 'opacity-0'
              }`}
              style={
                valuesAnimated
                  ? { animationDelay: '2s', animationFillMode: 'forwards' }
                  : {}
              }
            >
              <div className="mb-3 md:mb-4 flex justify-center"><Shield className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-[#1a79f6]" /></div>
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-white mb-2 md:mb-3">
                אבטחה מתקדמת
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                אבטחה מתקדמת והגנה מפני וירוסים
              </p>
            </div>
            <div
              className={`bg-white/5 backdrop-blur-sm border border-[#1a79f6]/30 rounded-2xl p-6 md:p-8 lg:p-10 text-center hover:border-[#1a79f6]/60 hover:transform hover:scale-105 transition-all duration-300 ${
                valuesAnimated ? 'animate-fadeFromTop' : 'opacity-0'
              }`}
              style={
                valuesAnimated
                  ? { animationDelay: '2.5s', animationFillMode: 'forwards' }
                  : {}
              }
            >
              <div className="mb-3 md:mb-4 flex justify-center"><DollarSign className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-[#1a79f6]" /></div>
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-white mb-2 md:mb-3">
                מחירים הוגנים
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                מחירים הוגנים ללא עלויות נסתרות
              </p>
            </div>
            <div
              className={`bg-white/5 backdrop-blur-sm border border-[#1a79f6]/30 rounded-2xl p-6 md:p-8 lg:p-10 text-center hover:border-[#1a79f6]/60 hover:transform hover:scale-105 transition-all duration-300 ${
                valuesAnimated ? 'animate-fadeFromTop' : 'opacity-0'
              }`}
              style={
                valuesAnimated
                  ? { animationDelay: '3s', animationFillMode: 'forwards' }
                  : {}
              }
            >
              <div className="mb-3 md:mb-4 flex justify-center"><Zap className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-[#1a79f6]" /></div>
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-white mb-2 md:mb-3">
                פיתוח מהיר
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                משך פיתוח קצר ומסירה מהירה
              </p>
            </div>
            <div
              className={`bg-white/5 backdrop-blur-sm border border-[#1a79f6]/30 rounded-2xl p-6 md:p-8 lg:p-10 text-center hover:border-[#1a79f6]/60 hover:transform hover:scale-105 transition-all duration-300 ${
                valuesAnimated ? 'animate-fadeFromTop' : 'opacity-0'
              }`}
              style={
                valuesAnimated
                  ? { animationDelay: '3.5s', animationFillMode: 'forwards' }
                  : {}
              }
            >
              <div className="mb-3 md:mb-4 flex justify-center"><Globe className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-[#1a79f6]" /></div>
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-white mb-2 md:mb-3">
                דומיינים מקצועיים
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                רכישה וניהול דומיינים מקצועי
              </p>
            </div>
          </div>

          <div className="text-center mt-4">
            <Link
              to="/about-full"
              className="bg-gradient-to-r from-[#1a79f6] to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg text-xs md:text-sm"
            >
              קרא עוד על החברה
            </Link>
          </div>
        </div>
      </div>

      {/* Portfolio Preview Section */}
      <div className="scroll-area w-full flex justify-center items-center relative min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-32">
          <div className="text-center mb-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              תיק עבודות
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1a79f6] to-blue-700 mx-auto mb-2"></div>
            <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto px-4">
              עיינו בפרויקטים המרשימים שיצרנו עבור לקוחותינו במגוון תחומים
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-3 md:gap-4">
            <div className="bg-white/5 backdrop-blur-sm border border-[#1a79f6]/30 rounded-xl md:rounded-2xl overflow-hidden hover:border-[#1a79f6]/60 transition-all duration-300 hover:transform hover:scale-105">
              <div className="p-4 md:p-6">
                <div className="mb-3 md:mb-4 flex justify-center">
                  <Rocket className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-[#1a79f6]" />
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-white mb-2 md:mb-3 text-center">
                  Orbenji
                </h3>
                <p className="text-gray-300 text-xs md:text-sm mb-3 md:mb-4 text-center">
                  דף נחיתה מרשים ומקצועי
                </p>
                <div className="text-center">
                  <a
                    href="https://orbenji.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#1a79f6] hover:bg-blue-700 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm transition-all"
                  >
                    לאתר
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-[#1a79f6]/30 rounded-xl md:rounded-2xl overflow-hidden hover:border-[#1a79f6]/60 transition-all duration-300 hover:transform hover:scale-105">
              <div className="p-4 md:p-6">
                <div className="mb-3 md:mb-4 flex justify-center">
                  <Building2 className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-[#1a79f6]" />
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-white mb-2 md:mb-3 text-center">
                  Atliz
                </h3>
                <p className="text-gray-300 text-xs md:text-sm mb-3 md:mb-4 text-center">
                  אתר תדמית עסקי מתקדם ומקצועי
                </p>
                <div className="text-center">
                  <a
                    href="https://atliz.co.il"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#1a79f6] hover:bg-blue-700 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm transition-all"
                  >
                    לאתר
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-[#1a79f6]/30 rounded-xl md:rounded-2xl overflow-hidden hover:border-[#1a79f6]/60 transition-all duration-300 hover:transform hover:scale-105">
              <div className="p-4 md:p-6">
                <div className="mb-3 md:mb-4 flex justify-center">
                  <Scale className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-[#1a79f6]" />
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-white mb-2 md:mb-3 text-center">
                  Refael Law
                </h3>
                <p className="text-gray-300 text-xs md:text-sm mb-3 md:mb-4 text-center">
                  אתר מקצועי למשרד עורכי דין
                </p>
                <div className="text-center">
                  <a
                    href="https://refael-law.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#1a79f6] hover:bg-blue-700 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm transition-all"
                  >
                    לאתר
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <Link
              to="/portfolio"
              className="bg-gradient-to-r from-[#1a79f6] to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg text-xs md:text-sm"
            >
            לצפייה בתיק העבודות המלא
            </Link>
          </div>
        </div>
      </div>

      {/* Services Preview Section */}
      <div className="scroll-area w-full flex justify-center items-center relative min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-32">
          <div className="text-center mb-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              שירותי תוכן מקצועיים
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1a79f6] to-blue-700 mx-auto mb-2"></div>
            <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto px-4">
              מעבר לפיתוח אתרים, אנו מציעים שירותים נוספים לעזור לכם להצליח בקריירה ובעסק
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            <div className="bg-white/5 backdrop-blur-sm border border-[#1a79f6]/30 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 hover:border-[#1a79f6]/60 transition-all duration-300">
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0"><FileText className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-[#1a79f6]" /></div>
                <div className="flex-grow">
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-white mb-2 md:mb-3">
                    בניית קורות חיים
                  </h3>
                  <p className="text-gray-300 text-xs md:text-sm lg:text-base mb-3 md:mb-4">
                    קורות חיים מקצועיים המותאמים לתעשיית הטכנולוגיה עם דגש על הדגשת כישורים
                    ויתרונות
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-[#1a79f6]/30 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 hover:border-[#1a79f6]/60 transition-all duration-300">
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0"><Briefcase className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-[#1a79f6]" /></div>
                <div className="flex-grow">
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-white mb-2 md:mb-3">
                    ייעוץ עסקי
                  </h3>
                  <p className="text-gray-300 text-xs md:text-sm lg:text-base mb-3 md:mb-4">
                    ייעוץ מקצועי לעסקים קטנים בתחום ההקמה, הפיתוח והצמיחה הדיגיטלית
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <div className="flex gap-3 justify-center flex-wrap">
              <Link
                to="/about-full"
                className="bg-gradient-to-r from-[#1a79f6] to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg text-xs md:text-sm"
              >
                פרטים נוספים
              </Link>
              <Link
                to="/faq"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg text-xs md:text-sm"
              >
                שאלות נפוצות
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <section className="scroll-area w-full flex justify-center items-center relative min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-32">
          <div className="text-center mb-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              מחירון שירותים
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1a79f6] to-blue-700 mx-auto mb-2"></div>
            <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto px-4">
              מחירים שקופים והוגנים עבור פתרונות דיגיטליים מקצופיים
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 w-full">
            {/* פיתוח אתרים - שורה ראשונה */}
            {pricingPreview.map((item, idx) => {
              const IconComponent = item.icon === 'Rocket' ? Rocket : item.icon === 'Building2' ? Building2 : Briefcase;
              return (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-sm border-2 border-[#1a79f6]/30 rounded-lg md:rounded-xl p-3 md:p-4 hover:border-[#1a79f6]/60 transition-all duration-300 hover:transform hover:scale-105 shadow-lg flex-1 min-h-[120px] md:min-h-[140px] flex flex-col justify-between"
                >
                  <div className="text-center">
                    <div className="mb-1 md:mb-2 flex justify-center">
                      <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-[#1a79f6]" />
                    </div>
                    <h3 className="text-xs md:text-sm font-bold text-white mb-1">
                      {item.name}
                    </h3>
                    <div className="text-base md:text-lg font-bold text-[#1a79f6] mb-1 md:mb-2">
                      {item.price}
                    </div>
                  </div>
                  <div className="text-center">
                    <a
                      href={`https://${item.example}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gradient-to-r from-[#1a79f6] to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-1 px-2 md:px-3 rounded-lg shadow transition-all text-xs"
                    >
                      לאתר
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mt-3 w-full">
            {/* תחזוקה - שורה שנייה */}
            {maintenancePreview.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm border-2 border-green-600/30 rounded-lg md:rounded-xl p-3 md:p-4 hover:border-green-600/60 transition-all duration-300 hover:transform hover:scale-105 shadow-lg flex-1 min-h-[120px] md:min-h-[140px] flex flex-col justify-center"
              >
                <div className="text-center">
                  <div className="mb-1 md:mb-2 flex justify-center">
                    {idx === 0 ? <Shield className="w-6 h-6 md:w-8 md:h-8 text-[#1a79f6]" /> : 
                     idx === 1 ? <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-[#1a79f6]" /> : 
                     <Edit className="w-6 h-6 md:w-8 md:h-8 text-[#1a79f6]" />}
                  </div>
                  <h4 className="text-xs md:text-sm font-bold text-white mb-1">
                    {item.name}
                  </h4>
                  <div className="text-base md:text-lg font-bold text-green-400">
                    {item.price}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link
              to="/pricing"
              className="bg-gradient-to-r from-[#1a79f6] to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg text-xs md:text-sm"
            >
              למחירון המלא
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
