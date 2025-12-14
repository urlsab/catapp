import React from 'react';
// import Values from '../components/Values';
// import KnowledgeHub from '../components/KnowledgeHub';
import logo from '../../Assets/catapp logo no bg.png';
import '../styles/scroll.css';
// import SmoothScroll from '../components/SmoothScroll';
import { Zap, TrendingUp, Smartphone, Wrench, Shield, DollarSign, Globe, Rocket, Building2, Scale, FileText, Briefcase, Edit, Video, Mic, Monitor, Calendar, Users, Cpu, Target, Award, Code, ShoppingCart, CheckCircle2, Sparkles, GraduationCap } from 'lucide-react';

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
    'הרצאות על קו"ח'
  ];
  const [currentText, setCurrentText] = React.useState('');
  const [textIdx, setTextIdx] = React.useState(0);
  const [charIdx, setCharIdx] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [logoAnimated, setLogoAnimated] = React.useState(false);
  const [typingStarted, setTypingStarted] = React.useState(false);
  const [showBlinkingCursor, setShowBlinkingCursor] = React.useState(false);
  const [statsVisible, setStatsVisible] = React.useState(false);
  const [animatedStats, setAnimatedStats] = React.useState({ years: 0, clients: 0, tools: 0, growth: 0 });
  const valuesAnimated = true; // Set to true since observer is disabled
  const valuesRef = React.useRef<HTMLDivElement>(null);
  const statsRef = React.useRef<HTMLDivElement>(null);

  // Stats data
  const targetStats = { years: 5, clients: 50, tools: 20, growth: 214 };

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

  // Intersection Observer for Stats section
  React.useEffect(() => {
    const statsSection = statsRef.current;
    if (!statsSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsVisible) {
            setStatsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(statsSection);
    return () => observer.disconnect();
  }, [statsVisible]);

  // Animate stats numbers
  React.useEffect(() => {
    if (!statsVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3); // cubic ease out

      setAnimatedStats({
        years: Math.round(targetStats.years * easeOut),
        clients: Math.round(targetStats.clients * easeOut),
        tools: Math.round(targetStats.tools * easeOut),
        growth: Math.round(targetStats.growth * easeOut),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats(targetStats);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [statsVisible]);

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

      {/* Hero Section - Centered with Orbit */}
      <div className="scroll-area w-full flex justify-center items-center relative min-h-screen">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
          {/* Orbit Container with Logo and Typing */}
          <div className="relative w-full flex flex-col items-center">
            {/* Service Icons Orbiting */}
            <div className="relative w-[240px] h-[240px] xs:w-[270px] xs:h-[270px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px]">
              {/* Orbit Ring */}
              <div className="absolute inset-0 border-2 border-[#1a79f6]/20 rounded-full"></div>
              
              {/* Orbiting Icons */}
              <div className="absolute inset-0 animate-spin-slow">
                {/* Icon 1 - Websites */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-[#1a79f6]/20 backdrop-blur-sm rounded-xl border-2 border-[#1a79f6]/50 flex flex-col items-center justify-center animate-counter-spin-slow hover:scale-110 transition-transform p-1">
                    <Monitor className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-[#1a79f6]" />
                    <p className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs text-gray-300 mt-0.5 whitespace-nowrap">אתרים</p>
                  </div>
                </div>
                
                {/* Icon 2 - CV */}
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                  <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-purple-500/20 backdrop-blur-sm rounded-xl border-2 border-purple-500/50 flex flex-col items-center justify-center animate-counter-spin-slow hover:scale-110 transition-transform p-1">
                    <FileText className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-purple-400" />
                    <p className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs text-gray-300 mt-0.5 whitespace-nowrap">קו"ח</p>
                  </div>
                </div>
                
                {/* Icon 3 - Lectures */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-orange-500/20 backdrop-blur-sm rounded-xl border-2 border-orange-500/50 flex flex-col items-center justify-center animate-counter-spin-slow hover:scale-110 transition-transform p-1">
                    <Mic className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-orange-400" />
                    <p className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs text-gray-300 mt-0.5 whitespace-nowrap">הרצאות</p>
                  </div>
                </div>
                
                {/* Icon 4 - Zoom Meetings */}
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-cyan-500/20 backdrop-blur-sm rounded-xl border-2 border-cyan-500/50 flex flex-col items-center justify-center animate-counter-spin-slow hover:scale-110 transition-transform p-1">
                    <Video className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-cyan-400" />
                    <p className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs text-gray-300 mt-0.5 whitespace-nowrap">זום</p>
                  </div>
                </div>
              </div>

              {/* Center Content - Logo and Typing */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {/* Logo */}
                <div
                  className={`relative group transition-all duration-1500 transform ${
                    logoAnimated
                      ? 'opacity-100 translate-y-0 scale-100'
                      : 'opacity-0 translate-y-12 scale-90'
                  }`}
                >
                  {/* Glow effect background */}
                  <div className="absolute -inset-6 bg-gradient-to-r from-[#1a79f6] via-blue-600 to-blue-700 rounded-full opacity-30 group-hover:opacity-40 transition-opacity duration-500 blur-2xl"></div>

                  <img
                    src={logo}
                    alt="Catapp Logo"
                    className={`relative h-28 w-28 xs:h-32 xs:w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 object-contain transition-all duration-1500 ${
                      logoAnimated ? 'filter-none' : 'filter blur-sm'
                    }`}
                    style={{ maxWidth: '100%', height: 'auto', animation: 'none' }}
                  />
                </div>

                {/* Typing Text */}
                <div className="mt-4">
                  <h1
                    className={`text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-[#1a79f6] flex items-center justify-center transition-all duration-800 transform ${
                      typingStarted ? 'opacity-80 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <span className="leading-tight">{currentText}</span>
                    {typingStarted && (
                      <span
                        className={`inline-block bg-white align-middle mr-2 ${
                          showBlinkingCursor ? 'animate-blink' : ''
                        }`}
                        style={{
                          width: '3px',
                          height: '1.5rem',
                          borderRadius: '2px',
                          marginLeft: '6px',
                        }}
                      />
                    )}
                  </h1>
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

      {/* Mission Statement Section */}
      <div className="scroll-area w-full flex justify-center items-center relative py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Main Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <Award className="w-8 h-8 md:w-10 md:h-10 text-[#1a79f6]" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                מציבים סטנדרט חדש
              </h2>
              <Award className="w-8 h-8 md:w-10 md:h-10 text-[#1a79f6]" />
            </div>
            <p className="text-lg md:text-xl text-[#1a79f6] font-semibold">
              בבניית אתרים ובבניית קורות חיים להייטק
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-[#1a79f6] to-blue-700 mx-auto mt-4"></div>
          </div>

          {/* Website Services Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-[#1a79f6]/30 rounded-2xl p-6 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-8 h-8 text-[#1a79f6]" />
              <h3 className="text-xl md:text-2xl font-bold text-white">בניית אתרים ברמה אחרת</h3>
            </div>
            
            <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
              בעולם שבו רבים מהאתרים נבנים בצורה מהירה, זולה ופשוטה — <span className="text-white font-semibold">אנחנו בחרנו ללכת בדרך אחרת.</span>
              <br />
              אצלנו לא מתפשרים: כל אתר שנבנה מקבל את אותה רמת השקעה, ביצועים ועיצוב שמאפיינת חברות הייטק מהשורה הראשונה.
            </p>

            <div className="bg-gradient-to-r from-[#1a79f6]/20 to-blue-600/10 rounded-xl p-6 mb-6 border border-[#1a79f6]/40">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-yellow-400" />
                <h4 className="text-lg font-bold text-white">בונים לכם אתר מהיר יותר, חזק יותר ומעוצב ברמה גבוהה בהרבה ממה שהתרגלתם לראות</h4>
              </div>
              <p className="text-gray-300 mb-4">
                אנו מתמחים בבניית אתרי תדמית, חנויות דיגיטליות ואתרי תוכן בחוויית משתמש מושלמת, בטכנולוגיות המתקדמות ביותר בשוק.
              </p>
            </div>

            <h4 className="text-lg font-bold text-white mb-4">הגישה שלנו פשוטה:</h4>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-3 p-4 bg-black/30 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">נראות שמייצרת <span className="text-white font-semibold">אמון מיידי</span></span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-black/30 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">ביצועים <span className="text-white font-semibold">מהירים במיוחד</span></span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-black/30 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">יציבות גבוהה ו<span className="text-white font-semibold">מבנה קוד איכותי</span></span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-black/30 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">עיצוב ברמה גבוהה — <span className="text-white font-semibold">ללא תבניות גנריות</span></span>
              </div>
            </div>

            <div className="bg-[#1a79f6]/10 rounded-xl p-6 border border-[#1a79f6]/30">
              <p className="text-gray-300 text-center">
                הלקוחות שלנו מקבלים אתר ש<span className="text-white font-semibold">לא רק נראה מצוין – אלא עובד מצוין</span>. 
                אתר שעוזר לעסק לגדול, שמרגיש מודרני, מתקדם, אמין ומדויק.
              </p>
              <p className="text-[#1a79f6] font-bold text-center mt-3 text-lg">
                זה לא עוד אתר. זה נכס דיגיטלי אמיתי. 💎
              </p>
            </div>
          </div>

          {/* CV Services Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-purple-400" />
              <h3 className="text-xl md:text-2xl font-bold text-white">שירותי קורות חיים להייטק</h3>
            </div>
            
            <div className="bg-purple-500/10 rounded-xl p-5 mb-6 border border-purple-500/30">
              <p className="text-purple-300 font-semibold text-center text-lg">
                <Target className="w-5 h-5 inline-block ml-2" />
                כי כדי לקבל עבודה צריך קודם להגיע לראיון
              </p>
            </div>

            <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
              בעיית הג'וניורים בהייטק אינה חדשה. תמיד היה קשה להתקבל למשרות ראשונות, ותמיד היה צורך להוכיח ידע, חכמה ויכולות מקצועיות.
              <br /><br />
              אבל בשנים האחרונות, <span className="text-white font-semibold">האתגר גדל: אפילו להגיע לראיון עבודה הפך למצב נדיר.</span>
            </p>

            <div className="text-center mb-6">
              <p className="text-xl text-purple-300 font-bold">וכאן אנחנו נכנסים. 🚀</p>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              אנחנו לא מבטיחים קסמים — אבל כן מבטיחים <span className="text-white font-semibold">יתרון אמיתי בשלב החשוב ביותר: להגיע לראיון.</span>
              <br /><br />
              עם ניסיון של שנים בתחום ועם מאות קורות חיים שעברו תחת הידיים שלנו, למדנו בדיוק מה עובד ומה גורם למעסיקים לפתוח את הדלת.
            </p>

            <h4 className="text-lg font-bold text-white mb-4">אנו מציעים:</h4>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-3 p-4 bg-black/30 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">כתיבת קורות חיים מאפס — <span className="text-white font-semibold">מותאם אישית לכל מועמד</span></span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-black/30 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">מפגשי זום פרטיים — <span className="text-white font-semibold">לומדים יחד איך לנסח ולבנות</span></span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-black/30 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">הרצאות מקצועיות וקורסים מקיפים</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-black/30 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">סדנאות קבוצתיות או <span className="text-white font-semibold">אחד-על-אחד</span></span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-black/30 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">לימוד עקרונות <span className="text-white font-semibold">שיעזרו לכם כל החיים</span></span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-black/30 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">תמחור <span className="text-white font-semibold">הוגן וברור</span> — ללא הפתעות</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/10 rounded-xl p-6 border border-purple-500/40">
              <div className="flex items-center gap-2 mb-3 justify-center">
                <GraduationCap className="w-6 h-6 text-purple-300" />
                <h4 className="text-lg font-bold text-white">המטרה שלנו ברורה:</h4>
              </div>
              <p className="text-gray-300 text-center">
                להעניק לכם ידע וכלים מעשיים שיאפשרו לכם <span className="text-white font-semibold">להגיע לראיון, לבלוט מעל האחרים</span>, 
                ולצעוד צעד אחד גדול קדימה בדרך למשרה הבאה שלכם.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1a79f6] to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <ShoppingCart className="w-5 h-5" />
                מחירון אתרים
              </Link>
              <Link
                to="/cv-services"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <FileText className="w-5 h-5" />
                שירותי קורות חיים
              </Link>
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
