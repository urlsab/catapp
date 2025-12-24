import React from 'react';
// import Values from '../components/Values';
// import KnowledgeHub from '../components/KnowledgeHub';
// import logo from '../../Assets/catapp logo no bg.png';
import atlizWebsite from '../../Assets/atliz website.png';
import benjiWebsite from '../../Assets/benji website.png';
import refaelWebsite from '../../Assets/refael website.png';
import resumesWebsite from '../../Assets/resumes builder website.png';
import '../styles/scroll.css';
// import SmoothScroll from '../components/SmoothScroll';
import { Zap, TrendingUp, Shield, DollarSign, Rocket, Building2, Scale, FileText, Briefcase, Edit, Calendar, Users, Cpu, Eye, Clock, Palette, Star } from 'lucide-react';

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
    'דפי נחיתה ממוקדים',
    'אתרי תדמית מקצועיים',
    'עיצוב מחדש של אתרים קיימים',
    'בנייה ושיפור קו"ח',
    'אופטימזציה לפרופיל לינקדאין',
    'הרצאות תוכן מקיפות',
    'הטמעת AI לאתרים'
  ];
  const [currentText, setCurrentText] = React.useState('');
  const [textIdx, setTextIdx] = React.useState(0);
  const [charIdx, setCharIdx] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [headlineVisible, setHeadlineVisible] = React.useState(false);
  const [typingStarted, setTypingStarted] = React.useState(false);
  const [heroStatsVisible, setHeroStatsVisible] = React.useState([false, false, false]);
  const [showBlinkingCursor, setShowBlinkingCursor] = React.useState(false);
  const [heroImagesVisible, setHeroImagesVisible] = React.useState(false);
  const [animatedStats] = React.useState({ years: 5, clients: 50, tools: 20, growth: 214 });
  const valuesAnimated = true; // Set to true since observer is disabled
  const valuesRef = React.useRef<HTMLDivElement>(null);
  const statsRef = React.useRef<HTMLDivElement>(null);
  const heroImagesRef = React.useRef<HTMLDivElement>(null);

  // Stats data
  // const targetStats = { years: 5, clients: 50, tools: 20, growth: 214 };


  // 1. Headline fade-in after spinner
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setHeadlineVisible(true);
    }, 1100); // after spinner
    return () => clearTimeout(timer);
  }, []);

  // 2. Typing animation after headline
  React.useEffect(() => {
    if (!headlineVisible) return;
    const timer = setTimeout(() => {
      setTypingStarted(true);
    }, 600); // after headline fade-in
    return () => clearTimeout(timer);
  }, [headlineVisible]);

  // 3. Stats fade-in after typing animation
  React.useEffect(() => {
    if (!typingStarted) return;
    const timer = setTimeout(() => {
      setHeroStatsVisible([true, false, false]);
      setTimeout(() => setHeroStatsVisible([true, true, false]), 350);
      setTimeout(() => setHeroStatsVisible([true, true, true]), 700);
    }, 800); // after typing animation appears
    return () => clearTimeout(timer);
  }, [typingStarted]);


  // Fade-in animation for hero stats (after spinner, before hero images)
  React.useEffect(() => {
    // Start after spinner and typing animation
    const timer = setTimeout(() => {
      setHeroStatsVisible([true, false, false]);
      setTimeout(() => setHeroStatsVisible([true, true, false]), 350);
      setTimeout(() => setHeroStatsVisible([true, true, true]), 700);
    }, 1200); // 1200ms after mount (spinner + logo + typing)
    return () => clearTimeout(timer);
  }, []);

  // 4. Animate hero images only after stats animation is done
  React.useEffect(() => {
    if (!heroStatsVisible[2]) return;
    // Wait a bit after last stat appears, then show images
    const heroImagesTimer = setTimeout(() => {
      setHeroImagesVisible(true);
    }, 400); // 400ms after last stat
    return () => clearTimeout(heroImagesTimer);
  }, [heroStatsVisible]);

  // Intersection Observer for Hero Images section
  React.useEffect(() => {
    // מתחיל את האנימציה של התמונות אחרי שהספינר מסיים
    const heroImagesTimer = setTimeout(() => {
      setHeroImagesVisible(true);
    }, 1300); // 1300ms - אחרי הספינר (1100ms) + מרווח קטן
    
    return () => clearTimeout(heroImagesTimer);
  }, []);


  // Animate stats numbers (if you want to trigger this, use heroStatsVisible or another trigger)
  // React.useEffect(() => {
  //   if (!heroStatsVisible[0]) return;
  //   ...
  // }, [heroStatsVisible]);



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

      {/* Hero Section - New Layout inspired by GNO */}
      <div className="scroll-area w-full flex justify-center items-center relative min-h-screen pt-16 md:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Side - Text Content (shows first on desktop) */}
            <div className="text-right order-1 lg:order-1">

              {/* Main Headline - fade-in from top */}
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-700 ease-out ${headlineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
                style={{ transitionDelay: headlineVisible ? '0ms' : '0ms' }}
              >
                תוכן וטכנולוגיה
                <br />
                <span className="text-[#1a79f6]">זו המומחיות שלנו</span>
              </h1>

              {/* Typing Animation - RTL aligned with fixed height, appears after headline */}
              <div className="mb-8 w-full min-h-[2rem] xs:min-h-[2.25rem] sm:min-h-[2.5rem] md:min-h-[3rem]" dir="rtl">
                <h2
                  className={`text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-[#1a79f6] inline-flex items-center transition-all duration-800 transform ${
                    typingStarted ? 'opacity-80 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <span className="leading-tight whitespace-nowrap">{currentText || '\u00A0'}</span>
                  {typingStarted && (
                    <span
                      className={`inline-block bg-[#1a79f6] align-middle ${
                        showBlinkingCursor ? 'animate-blink' : ''
                      }`}
                      style={{
                        width: '3px',
                        height: '1.4em',
                        borderRadius: '2px',
                        marginRight: '2px',
                      }}
                    />
                  )}
                </h2>
              </div>

              {/* Stats Row - animated fade-in from top */}
              <div className="flex gap-8 sm:gap-12 justify-end">
                <div
                  className={`text-center transition-all duration-700 ease-out ${heroStatsVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
                  style={{ transitionDelay: heroStatsVisible[0] ? '0ms' : '0ms' }}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">+5</div>
                  <p className="text-gray-400 text-xs sm:text-sm">שנות ניסיון</p>
                </div>
                <div
                  className={`text-center transition-all duration-700 ease-out ${heroStatsVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
                  style={{ transitionDelay: heroStatsVisible[1] ? '200ms' : '0ms' }}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">+50</div>
                  <p className="text-gray-400 text-xs sm:text-sm">לקוחות</p>
                </div>
                <div
                  className={`text-center transition-all duration-700 ease-out ${heroStatsVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
                  style={{ transitionDelay: heroStatsVisible[2] ? '400ms' : '0ms' }}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">100%</div>
                  <p className="text-gray-400 text-xs sm:text-sm">שביעות רצון</p>
                </div>
              </div>
            </div>

            {/* Right Side - Screenshots Grid (shows second on desktop) */}
            <div className="relative order-2 lg:order-2" ref={heroImagesRef}>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 auto-rows-min">
                {/* Screenshot 1 - Benji */}
                <div 
                  className={`rounded-xl overflow-hidden border-2 border-[#1a79f6]/40 hover:border-[#1a79f6] transition-all duration-700 ease-out hover:scale-105 shadow-lg h-fit ${
                    heroImagesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
                  }`}
                  style={{ transitionDelay: heroImagesVisible ? '0ms' : '0ms' }}
                >
                  <img 
                    src={benjiWebsite} 
                    alt="אתר Orbenji" 
                    className="w-full h-auto block"
                  />
                </div>
                
                {/* Screenshot 2 - Atliz */}
                <div 
                  className={`rounded-xl overflow-hidden border-2 border-[#1a79f6]/40 hover:border-[#1a79f6] transition-all duration-700 ease-out hover:scale-105 shadow-lg mt-8 ${
                    heroImagesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
                  }`}
                  style={{ transitionDelay: heroImagesVisible ? '200ms' : '0ms' }}
                >
                  <img 
                    src={atlizWebsite} 
                    alt="אטליז למהדרין" 
                    className="w-full h-full block"
                  />
                </div>
                
                {/* Screenshot 3 - Lawyer */}
                <div 
                  className={`rounded-xl overflow-hidden border-2 border-[#1a79f6]/40 hover:border-[#1a79f6] transition-all duration-700 ease-out hover:scale-105 shadow-lg mt-20 h-fit ${
                    heroImagesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
                  }`}
                  style={{ transitionDelay: heroImagesVisible ? '400ms' : '0ms' }}
                >
                  <img 
                    src={refaelWebsite} 
                    alt="עורך דין רפאל סבג" 
                    className="w-full h-auto block"
                  />
                </div>
                
                {/* Screenshot 4 - Resume Builder */}
                <div 
                  className={`rounded-xl overflow-hidden border-2 border-[#1a79f6]/40 hover:border-[#1a79f6] transition-all duration-700 ease-out hover:scale-105 shadow-lg mt-8 h-fit ${
                    heroImagesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
                  }`}
                  style={{ transitionDelay: heroImagesVisible ? '600ms' : '0ms' }}
                >
                  <img 
                    src={resumesWebsite} 
                    alt="בונה קורות חיים" 
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section - Catapp במספרים */}
      <div
        ref={statsRef}
        className="scroll-area w-full flex justify-center items-center relative py-16 md:py-24"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              Catapp במספרים
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1a79f6] to-blue-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Years of Experience */}
            <div className="bg-white/5 backdrop-blur-sm border border-[#1a79f6]/30 rounded-2xl p-6 text-center hover:border-[#1a79f6]/60 hover:scale-105 transition-all duration-300">
              <div className="mb-3 flex justify-center">
                <Calendar className="w-10 h-10 md:w-12 md:h-12 text-[#1a79f6]" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-[#1a79f6] mb-2">
                +{animatedStats.years}
              </div>
              <p className="text-white font-semibold text-sm md:text-base mb-1">שנות ניסיון</p>
              <p className="text-gray-400 text-xs md:text-sm">בפיתוח אתרים וכתיבת קורות חיים מקצועיים</p>
            </div>

            {/* Happy Clients */}
            <div className="bg-white/5 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 text-center hover:border-green-500/60 hover:scale-105 transition-all duration-300">
              <div className="mb-3 flex justify-center">
                <Users className="w-10 h-10 md:w-12 md:h-12 text-green-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                +{animatedStats.clients}
              </div>
              <p className="text-white font-semibold text-sm md:text-base mb-1">לקוחות מרוצים</p>
              <p className="text-gray-400 text-xs md:text-sm">עסקים ויחידים שסמכו עלינו והצליחו</p>
            </div>

            {/* Tech Tools */}
            <div className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 text-center hover:border-purple-500/60 hover:scale-105 transition-all duration-300">
              <div className="mb-3 flex justify-center">
                <Cpu className="w-10 h-10 md:w-12 md:h-12 text-purple-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                +{animatedStats.tools}
              </div>
              <p className="text-white font-semibold text-sm md:text-base mb-1">כלים טכנולוגיים</p>
              <p className="text-gray-400 text-xs md:text-sm">הטכנולוגיות המתקדמות ביותר בשוק</p>
            </div>

            {/* Revenue Growth */}
            <div className="bg-white/5 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-6 text-center hover:border-orange-500/60 hover:scale-105 transition-all duration-300">
              <div className="mb-3 flex justify-center">
                <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-orange-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
                {animatedStats.growth}%
              </div>
              <p className="text-white font-semibold text-sm md:text-base mb-1">גידול בהכנסות</p>
              <p className="text-gray-400 text-xs md:text-sm">עליה מתמדת מאז הקמת החברה</p>
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
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              הערכים שמנחים אותנו
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1a79f6] to-blue-700 mx-auto mb-4"></div>
            <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto px-4">
              העקרונות שעומדים בבסיס כל פרויקט ושיתוף פעולה
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {/* שקיפות */}
            <div
              className={`bg-white/5 backdrop-blur-sm border border-[#1a79f6]/30 rounded-2xl p-5 md:p-6 text-center hover:border-[#1a79f6]/60 hover:transform hover:scale-105 transition-all duration-300 ${
                valuesAnimated ? 'animate-fadeFromTop' : 'opacity-0'
              }`}
              style={
                valuesAnimated
                  ? { animationDelay: '0.2s', animationFillMode: 'forwards' }
                  : {}
              }
            >
              <div className="mb-3 flex justify-center"><Eye className="w-10 h-10 md:w-12 md:h-12 text-[#1a79f6]" /></div>
              <h3 className="text-sm md:text-base lg:text-lg font-bold text-white mb-1">
                שקיפות
              </h3>
              <p className="text-gray-400 text-xs md:text-sm">תקשורת פתוחה וברורה לאורך כל הדרך</p>
            </div>

            {/* זמינות */}
            <div
              className={`bg-white/5 backdrop-blur-sm border border-[#1a79f6]/30 rounded-2xl p-5 md:p-6 text-center hover:border-[#1a79f6]/60 hover:transform hover:scale-105 transition-all duration-300 ${
                valuesAnimated ? 'animate-fadeFromTop' : 'opacity-0'
              }`}
              style={
                valuesAnimated
                  ? { animationDelay: '0.4s', animationFillMode: 'forwards' }
                  : {}
              }
            >
              <div className="mb-3 flex justify-center"><Clock className="w-10 h-10 md:w-12 md:h-12 text-[#1a79f6]" /></div>
              <h3 className="text-sm md:text-base lg:text-lg font-bold text-white mb-1">
                זמינות
              </h3>
              <p className="text-gray-400 text-xs md:text-sm">תמיד כאן לענות, לעזור ולתמוך</p>
            </div>

            {/* קידמה */}
            <div
              className={`bg-white/5 backdrop-blur-sm border border-[#1a79f6]/30 rounded-2xl p-5 md:p-6 text-center hover:border-[#1a79f6]/60 hover:transform hover:scale-105 transition-all duration-300 ${
                valuesAnimated ? 'animate-fadeFromTop' : 'opacity-0'
              }`}
              style={
                valuesAnimated
                  ? { animationDelay: '0.6s', animationFillMode: 'forwards' }
                  : {}
              }
            >
              <div className="mb-3 flex justify-center"><TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-[#1a79f6]" /></div>
              <h3 className="text-sm md:text-base lg:text-lg font-bold text-white mb-1">
                קידמה
              </h3>
              <p className="text-gray-400 text-xs md:text-sm">טכנולוגיות חדשניות ועדכניות</p>
            </div>

            {/* מהירות */}
            <div
              className={`bg-white/5 backdrop-blur-sm border border-[#1a79f6]/30 rounded-2xl p-5 md:p-6 text-center hover:border-[#1a79f6]/60 hover:transform hover:scale-105 transition-all duration-300 ${
                valuesAnimated ? 'animate-fadeFromTop' : 'opacity-0'
              }`}
              style={
                valuesAnimated
                  ? { animationDelay: '0.8s', animationFillMode: 'forwards' }
                  : {}
              }
            >
              <div className="mb-3 flex justify-center"><Zap className="w-10 h-10 md:w-12 md:h-12 text-[#1a79f6]" /></div>
              <h3 className="text-sm md:text-base lg:text-lg font-bold text-white mb-1">
                מהירות
              </h3>
              <p className="text-gray-400 text-xs md:text-sm">עבודה יעילה ומסירה בזמן</p>
            </div>

            {/* התאמה אישית */}
            <div
              className={`bg-white/5 backdrop-blur-sm border border-[#1a79f6]/30 rounded-2xl p-5 md:p-6 text-center hover:border-[#1a79f6]/60 hover:transform hover:scale-105 transition-all duration-300 ${
                valuesAnimated ? 'animate-fadeFromTop' : 'opacity-0'
              }`}
              style={
                valuesAnimated
                  ? { animationDelay: '1s', animationFillMode: 'forwards' }
                  : {}
              }
            >
              <div className="mb-3 flex justify-center"><Palette className="w-10 h-10 md:w-12 md:h-12 text-[#1a79f6]" /></div>
              <h3 className="text-sm md:text-base lg:text-lg font-bold text-white mb-1">
                התאמה אישית
              </h3>
              <p className="text-gray-400 text-xs md:text-sm">עיצוב ובנייה לפי הבקשות והצרכים שלכם</p>
            </div>

            {/* מחירים הוגנים */}
            <div
              className={`bg-white/5 backdrop-blur-sm border border-[#1a79f6]/30 rounded-2xl p-5 md:p-6 text-center hover:border-[#1a79f6]/60 hover:transform hover:scale-105 transition-all duration-300 ${
                valuesAnimated ? 'animate-fadeFromTop' : 'opacity-0'
              }`}
              style={
                valuesAnimated
                  ? { animationDelay: '1.2s', animationFillMode: 'forwards' }
                  : {}
              }
            >
              <div className="mb-3 flex justify-center"><DollarSign className="w-10 h-10 md:w-12 md:h-12 text-[#1a79f6]" /></div>
              <h3 className="text-sm md:text-base lg:text-lg font-bold text-white mb-1">
                מחירים הוגנים
              </h3>
              <p className="text-gray-400 text-xs md:text-sm">שקיפות מלאה ללא עלויות נסתרות</p>
            </div>

            {/* אחריות */}
            <div
              className={`bg-white/5 backdrop-blur-sm border border-[#1a79f6]/30 rounded-2xl p-5 md:p-6 text-center hover:border-[#1a79f6]/60 hover:transform hover:scale-105 transition-all duration-300 ${
                valuesAnimated ? 'animate-fadeFromTop' : 'opacity-0'
              }`}
              style={
                valuesAnimated
                  ? { animationDelay: '1.4s', animationFillMode: 'forwards' }
                  : {}
              }
            >
              <div className="mb-3 flex justify-center"><Shield className="w-10 h-10 md:w-12 md:h-12 text-[#1a79f6]" /></div>
              <h3 className="text-sm md:text-base lg:text-lg font-bold text-white mb-1">
                אחריות
              </h3>
              <p className="text-gray-400 text-xs md:text-sm">עומדים מאחורי העבודה שלנו</p>
            </div>

            {/* הגדלת ראש */}
            <div
              className={`bg-white/5 backdrop-blur-sm border border-[#1a79f6]/30 rounded-2xl p-5 md:p-6 text-center hover:border-[#1a79f6]/60 hover:transform hover:scale-105 transition-all duration-300 ${
                valuesAnimated ? 'animate-fadeFromTop' : 'opacity-0'
              }`}
              style={
                valuesAnimated
                  ? { animationDelay: '1.6s', animationFillMode: 'forwards' }
                  : {}
              }
            >
              <div className="mb-3 flex justify-center"><Star className="w-10 h-10 md:w-12 md:h-12 text-[#1a79f6]" /></div>
              <h3 className="text-sm md:text-base lg:text-lg font-bold text-white mb-1">
                הגדלת ראש
              </h3>
              <p className="text-gray-400 text-xs md:text-sm">ההצלחה שלכם זו ההצלחה שלנו</p>
            </div>
          </div>

          <div className="text-center mt-8">
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
                    הרצאות על קו"ח
                  </h3>
                  <p className="text-gray-300 text-xs md:text-sm lg:text-base mb-3 md:mb-4">
                    הרצאות פרונטליות ודיגיטליות על כתיבת קורות חיים מנצחים
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
                to="/cv-services"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg text-xs md:text-sm"
              >
                קורות חיים
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
