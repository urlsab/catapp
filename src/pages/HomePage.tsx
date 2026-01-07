import React, { useRef, useEffect, useState } from 'react';
// import Values from '../components/Values';
// import KnowledgeHub from '../components/KnowledgeHub';
// import logo from '../../Assets/catapp logo no bg.png';
import atlizWebsite from '../../Assets/atliz website.png';
import cvPic1 from '../../Assets/cv pic 1.png';
import cvPic2 from '../../Assets/cv pic 2.png';
import cvPic3 from '../../Assets/cv pic 3.png';
import cvPic4 from '../../Assets/cv pic 4.png';
import benjiWebsite from '../../Assets/benji website.png';
import refaelWebsite from '../../Assets/refael website.png';
import resumesWebsite from '../../Assets/resumes builder website.png';
import '../styles/scroll.css';
// import SmoothScroll from '../components/SmoothScroll';
import { Zap, TrendingUp, Shield, DollarSign, Rocket, Building2, Scale, FileText, Briefcase, Eye, Clock, Palette, Star } from 'lucide-react';

import { Link } from 'react-router-dom';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import GroupsIcon from '@mui/icons-material/Groups';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';



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
  // Removed showBlinkingCursor state (cursor always blinks)
  // For sequential image animation
  const [heroImagesVisible, setHeroImagesVisible] = React.useState([false, false, false, false]);
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

  // 4. Animate hero images sequentially after stats animation is done
  React.useEffect(() => {
    if (!heroStatsVisible[2]) return;
    // Wait longer after last stat appears before starting images
    const timers: number[] = [];
    const initialDelay = 900; // ms after last stat appears
    timers.push(window.setTimeout(() => setHeroImagesVisible([true, false, false, false]), initialDelay));
    timers.push(window.setTimeout(() => setHeroImagesVisible([true, true, false, false]), initialDelay + 300));
    timers.push(window.setTimeout(() => setHeroImagesVisible([true, true, true, false]), initialDelay + 600));
    timers.push(window.setTimeout(() => setHeroImagesVisible([true, true, true, true]), initialDelay + 900));
    return () => timers.forEach(t => clearTimeout(t));
  }, [heroStatsVisible]);


  // Animate stats numbers (if you want to trigger this, use heroStatsVisible or another trigger)
  // React.useEffect(() => {
  //   if (!heroStatsVisible[0]) return;
  //   ...
  // }, [heroStatsVisible]);



  // Typing animation effect (cursor always blinks)
  React.useEffect(() => {
    if (!typingStarted) return;
    let typingTimeout: NodeJS.Timeout;
    const fullText = typingTexts[textIdx];
    if (!isDeleting && charIdx < fullText.length) {
      typingTimeout = setTimeout(() => {
        setCurrentText(fullText.substring(0, charIdx + 1));
        setCharIdx(charIdx + 1);
      }, 100);
    } else if (isDeleting && charIdx > 0) {
      typingTimeout = setTimeout(() => {
        setCurrentText(fullText.substring(0, charIdx - 1));
        setCharIdx(charIdx - 1);
      }, 50);
    } else if (!isDeleting && charIdx === fullText.length) {
      typingTimeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && charIdx === 0) {
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
                  className={`text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-white inline-flex items-center transition-all duration-800 transform ${
                    typingStarted ? 'opacity-80 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <span className="leading-tight whitespace-nowrap">{currentText || '\u00A0'}</span>
                  {typingStarted && (
                    <span
                      className="inline-block bg-[#1a79f6] align-middle animate-blink"
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
                  <div className="flex justify-center mb-1">
                    <WorkHistoryIcon style={{ color: '#1a79f6', fontSize: '2rem' }} />
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">+5</div>
                  <p className="text-gray-400 text-xs sm:text-sm">שנות ניסיון</p>
                </div>
                <div
                  className={`text-center transition-all duration-700 ease-out ${heroStatsVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
                  style={{ transitionDelay: heroStatsVisible[1] ? '200ms' : '0ms' }}
                >
                  <div className="flex justify-center mb-1">
                    <GroupsIcon style={{ color: '#1a79f6', fontSize: '2rem' }} />
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">+50</div>
                  <p className="text-gray-400 text-xs sm:text-sm">לקוחות מרוצים</p>
                </div>
                <div
                  className={`text-center transition-all duration-700 ease-out ${heroStatsVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
                  style={{ transitionDelay: heroStatsVisible[2] ? '400ms' : '0ms' }}
                >
                  <div className="flex justify-center mb-1">
                    <IntegrationInstructionsIcon style={{ color: '#1a79f6', fontSize: '2rem' }} />
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"><span dir="ltr">20+</span></div>
                  <p className="text-gray-400 text-xs sm:text-sm">טכנולוגיות בשימוש</p>
                </div>
              </div>
            </div>

            {/* Right Side - Screenshots Grid (shows second on desktop) */}
            <div className="relative order-2 lg:order-2" ref={heroImagesRef}>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 auto-rows-min">
                {/* Screenshot 1 - Benji */}
                <div 
                  className={`rounded-xl overflow-hidden border-2 border-[#1a79f6]/40 hover:border-[#1a79f6] transition-all duration-700 ease-out hover:scale-105 shadow-lg h-fit ${
                    heroImagesVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
                  }`}
                  style={{ transitionDelay: heroImagesVisible[0] ? '0ms' : '0ms' }}
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
                    heroImagesVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
                  }`}
                  style={{ transitionDelay: heroImagesVisible[1] ? '0ms' : '0ms' }}
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
                    heroImagesVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
                  }`}
                  style={{ transitionDelay: heroImagesVisible[2] ? '0ms' : '0ms' }}
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
                    heroImagesVisible[3] ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
                  }`}
                  style={{ transitionDelay: heroImagesVisible[3] ? '0ms' : '0ms' }}
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



      {/* Recommendations Section - המלצות */}
            {/* Services Section - השירותים שלנו */}
            <div className="w-full flex justify-center items-center py-16 bg-gradient-to-b from-white/60 to-white/0 relative">
              <div className="max-w-5xl w-full flex flex-col items-center px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a79f6] mb-4 text-center tracking-tight">השירותים שלנו</h2>
                <p className="text-gray-500 text-base md:text-lg mb-10 text-center max-w-2xl">הפתרונות שלנו לעסק ולקריירה שלך</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                  {/* Card 1 */}
                  <div className="flex flex-col items-center bg-transparent rounded-2xl shadow-none">
                    <div className="relative w-full h-48 rounded-t-2xl overflow-hidden">
                      <img src='https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80' alt="בניית אתרים" className="w-full h-full object-cover object-center" />
                    </div>
                    <div className="relative w-full flex flex-col items-center -mt-8">
                      <div className="absolute -top-8 right-1/2 translate-x-1/2 z-20">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#1a79f6] to-blue-300 flex items-center justify-center shadow-lg border-4 border-white">
                          <Rocket className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="bg-white rounded-2xl shadow-lg px-6 pt-12 pb-6 w-full flex flex-col items-center border border-gray-100">
                        <h3 className="text-lg font-bold text-[#1a79f6] mb-1 text-center">בניית אתרים</h3>
                        <p className="text-gray-700 text-sm text-center mb-4">אתרי תדמית, דפי נחיתה, חנויות אונליין, אתרים מותאמים אישית לעסק שלך</p>
                        <button className="bg-[#1a79f6] text-white rounded-lg px-4 py-2 text-xs font-semibold shadow hover:bg-blue-700 transition">למידע נוסף</button>
                      </div>
                    </div>
                  </div>
                  {/* Card 2 */}
                  <div className="flex flex-col items-center bg-transparent rounded-2xl shadow-none">
                    <div className="relative w-full h-48 rounded-t-2xl overflow-hidden">
                      <img src='https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80' alt="עריכת קו" className="w-full h-full object-cover object-center" />
                    </div>
                    <div className="relative w-full flex flex-col items-center -mt-8">
                      <div className="absolute -top-8 right-1/2 translate-x-1/2 z-20">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#1a79f6] to-blue-300 flex items-center justify-center shadow-lg border-4 border-white">
                          <FileText className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="bg-white rounded-2xl shadow-lg px-6 pt-12 pb-6 w-full flex flex-col items-center border border-gray-100">
                        <h3 className="text-lg font-bold text-[#1a79f6] mb-1 text-center">עריכת קו"ח</h3>
                        <p className="text-gray-700 text-sm text-center mb-4">שדרוג, עיצוב וכתיבה מקצועית של קורות חיים שמבליטים אותך</p>
                        <button className="bg-[#1a79f6] text-white rounded-lg px-4 py-2 text-xs font-semibold shadow hover:bg-blue-700 transition">למידע נוסף</button>
                      </div>
                    </div>
                  </div>
                  {/* Card 3 */}
                  <div className="flex flex-col items-center bg-transparent rounded-2xl shadow-none">
                    <div className="relative w-full h-48 rounded-t-2xl overflow-hidden">
                      <img src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80' alt="לינקדאין" className="w-full h-full object-cover object-center" />
                    </div>
                    <div className="relative w-full flex flex-col items-center -mt-8">
                      <div className="absolute -top-8 right-1/2 translate-x-1/2 z-20">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#1a79f6] to-blue-300 flex items-center justify-center shadow-lg border-4 border-white">
                          <TrendingUp className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="bg-white rounded-2xl shadow-lg px-6 pt-12 pb-6 w-full flex flex-col items-center border border-gray-100">
                        <h3 className="text-lg font-bold text-[#1a79f6] mb-1 text-center">העצמת פרופיל לינקדאין</h3>
                        <p className="text-gray-700 text-sm text-center mb-4">ייעוץ, אופטימיזציה והכוונה לפרופיל לינקדאין שמייצר הזדמנויות</p>
                        <button className="bg-[#1a79f6] text-white rounded-lg px-4 py-2 text-xs font-semibold shadow hover:bg-blue-700 transition">למידע נוסף</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative arrows - left/right */}
              <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2">
                <div className="flex flex-col gap-2 ml-4">
                  <div className="w-6 h-6 border-l-4 border-b-4 border-[#1a79f6] rotate-[-45deg] opacity-30"></div>
                  <div className="w-6 h-6 border-l-4 border-b-4 border-[#1a79f6] rotate-[-45deg] opacity-20"></div>
                  <div className="w-6 h-6 border-l-4 border-b-4 border-[#1a79f6] rotate-[-45deg] opacity-10"></div>
                </div>
              </div>
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2">
                <div className="flex flex-col gap-2 mr-4">
                  <div className="w-6 h-6 border-r-4 border-t-4 border-[#1a79f6] rotate-[45deg] opacity-30"></div>
                  <div className="w-6 h-6 border-r-4 border-t-4 border-[#1a79f6] rotate-[45deg] opacity-20"></div>
                  <div className="w-6 h-6 border-r-4 border-t-4 border-[#1a79f6] rotate-[45deg] opacity-10"></div>
                </div>
              </div>
            </div>
      <div className="w-full flex justify-center items-center py-16 bg-gradient-to-b from-[#1a79f6]/10 to-white/0">
        <div className="max-w-3xl w-full flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a79f6] mb-10 text-center">המלצות</h2>
          <div className="w-full flex flex-col gap-8">
            {/* Recommendation Card */}
            <div className="bg-white/80 rounded-2xl shadow-lg border border-[#1a79f6]/20 p-8 text-right transition-all duration-300 hover:shadow-2xl hover:border-[#1a79f6]/40">
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4 font-medium">
                פנינו לחברת קאטאפ עבור הקמת דף נחיתה לעסק, וכבר מהרגע הראשון היה ברור שעשינו את ההחלטה הנכונה. הכל נעשה בצורה הכי מקצועית, יעילה ומדוייקת תוך הקשבה לצרכים שלנו ומתן מענה מהיר לכל שאלה. שילוב נפלא של עבודה ברמה גבוהה ויחס נהדר ללקוח. בהחלט אמליץ לכל מי שמחפש- הגעתם למקום הנכון.
              </p>
              <div className="flex items-center justify-end gap-3">
                <span className="font-bold text-[#1a79f6] text-base md:text-lg">אור בנג'י פסיכותרפיה</span>
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
            </div>
            {/* ניתן להוסיף המלצות נוספות כאן */}
          </div>
        </div>
      </div>

      {/* Process Section - תהליך העבודה */}
      {(() => {
        // קו מתקדם בצבע כחול לפי גלילה
        const processRef = useRef<HTMLDivElement>(null);
        const [progress, setProgress] = useState(0); // 0-1

        useEffect(() => {
          const handleScroll = () => {
            if (!processRef.current) return;
            const rect = processRef.current.getBoundingClientRect();
            const windowH = window.innerHeight;
            const sectionHeight = rect.height;
            let percent = 0;
            // Start animation only when the section top is within 60% of the viewport height (bottom 60%)
            const triggerStart = windowH * 0.3;
            if (rect.top < windowH && rect.top > triggerStart && rect.bottom > 0) {
              // Not yet in the bottom 60%: don't animate
              percent = 0;
            } else if (rect.top <= triggerStart && rect.bottom > 0) {
              const scrollY = windowH - rect.top;
              percent = Math.min(1, Math.max(0, scrollY / (sectionHeight + windowH/2)));
            }
            setProgress(percent);
          };
          window.addEventListener('scroll', handleScroll);
          window.addEventListener('resize', handleScroll);
          handleScroll();
          return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
          };
        }, []);

        return (
          <div ref={processRef} className="w-full flex justify-center items-center py-16 bg-white/5 relative">
            <div className="max-w-3xl w-full flex flex-col items-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a79f6] mb-10 text-center">התהליך שלנו</h2>
              <div className="relative flex w-full">
                {/* Vertical line - לבן מלא בלבד */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-2 bg-white rounded-full z-0" style={{ minHeight: '100%' }} />
                {/* קו כחול דק מעל הקו הלבן, מוצג רק לפי התקדמות הגלילה */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2 pointer-events-none z-10" style={{ height: '100%' }}>
                  <div className="absolute left-1/2 -translate-x-1/2 w-1.5 bg-gradient-to-b from-[#1a79f6] to-blue-400 rounded-full transition-all duration-200" style={{ height: `${progress === 0 ? 0 : progress * 100}%`, minHeight: 0, top: 0, opacity: progress > 0 ? 1 : 0 }} />
                </div>
                <div className="flex flex-col gap-12 w-full z-20">
                  {/* שלבים */}
                  {[
                    {
                      icon: <Rocket className="w-10 h-10 text-[#1a79f6] bg-white rounded-full shadow-lg p-2" />, // פנייה
                      title: 'פנייה ראשונית',
                      desc: 'שיחה קצרה להיכרות והבנת הצורך. הצעת מחיר מותאמת.'
                    },
                    {
                      icon: <FileText className="w-10 h-10 text-[#1a79f6] bg-white rounded-full shadow-lg p-2" />, // אפיון
                      title: 'אפיון האתר',
                      desc: 'מגדירים יחד מה האתר יכלול ומה חשוב שיהיה בו.'
                    },
                    {
                      icon: <Palette className="w-10 h-10 text-[#1a79f6] bg-white rounded-full shadow-lg p-2" />, // חומרים/עיצוב
                      title: 'איסוף חומרים',
                      desc: 'מקבלים ממך חומרים ומעצבים דף בית ראשוני.'
                    },
                    {
                      icon: <Briefcase className="w-10 h-10 text-[#1a79f6] bg-white rounded-full shadow-lg p-2" />, // פיתוח
                      title: 'פיתוח האתר',
                      desc: 'הופכים את ההדמיה לאתר חי ודינמי.'
                    },
                    {
                      icon: <Scale className="w-10 h-10 text-[#1a79f6] bg-white rounded-full shadow-lg p-2" />, // QA
                      title: 'בדיקות ותיקונים',
                      desc: 'בודקים, מתקנים ומוודאים שהאתר מושלם.'
                    },
                    {
                      icon: <Star className="w-10 h-10 text-[#1a79f6] bg-white rounded-full shadow-lg p-2" />, // עלייה לאוויר
                      title: 'עלייה לאוויר',
                      desc: 'הדרכה קצרה, האתר באוויר – מזל טוב !!!'
                    },
                  ].map((step, idx, arr) => {
                    // קובע האם המלבן מימין (זוגי) או משמאל (אי-זוגי)
                    const isRight = idx % 2 === 0;
                    return (
                      <div key={idx} className="flex items-center w-full relative min-h-[80px]">
                        {/* מלבן טקסט מימין */}
                        {isRight && (
                          <div className="flex-1 flex justify-end pr-0.5 xs:pr-1">
                            <div className="border border-[#1a79f6] border-[1.5px] rounded-2xl shadow-md p-2.5 xs:p-3.5 md:p-5 text-right max-w-[200px] xs:max-w-[240px] md:max-w-[340px] sm:max-w-[280px]"
                              style={{ maxWidth: 'clamp(150px, 50vw, 200px)' }}>
                              <div className="font-bold text-sm xs:text-base text-[#1a79f6] mb-1 text-white">{step.title}</div>
                              <div className="text-white text-xs xs:text-sm md:text-base whitespace-pre-line">{step.desc}</div>
                            </div>
                          </div>
                        )}
                        {/* אייקון ממורכז על הקו */}
                        <div className="flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/2 min-w-[56px] z-30" style={{top:0}}>
                          <div className="mb-2">{step.icon}</div>
                          {/* קו מחבר בין האייקונים */}
                          {idx < arr.length - 1 && (
                            <div className="flex-1 w-1 bg-gradient-to-b" style={{ minHeight: 40, marginTop: 4 }} />
                          )}
                        </div>
                        {/* מלבן טקסט משמאל */}
                        {!isRight && (
                          <div className="flex-1 flex justify-start pl-0.5 xs:pl-1">
                            <div className="border border-[#1a79f6] border-[1.5px] rounded-2xl shadow-md p-2.5 xs:p-3.5 md:p-5 text-right max-w-[200px] xs:max-w-[240px] md:max-w-[340px] sm:max-w-[280px]"
                              style={{ maxWidth: 'clamp(150px, 50vw, 200px)' }}>
                              <div className="font-bold text-sm xs:text-base text-[#1a79f6] mb-1 text-white">{step.title}</div>
                              <div className="text-white text-xs xs:text-sm md:text-base whitespace-pre-line">{step.desc}</div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Values Section */}

{/* CV Fan & Career Promo Section */}
      <div className="scroll-area w-full flex justify-center items-center relative min-h-[400px] md:min-h-[500px] py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center md:items-stretch justify-between gap-8">
          {/* Marketing Text - left side */}
          <div className="flex-1 flex flex-col justify-center items-start text-right gap-6 w-full md:w-auto md:max-w-[480px] md:items-end order-1 md:order-2">
            <div className="rounded-xl p-5 md:p-7 shadow-lg w-full max-w-3xl lg:max-w-4xl ml-auto md:ml-0 md:mr-8 lg:mr-20">
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-right text-white leading-snug break-words whitespace-pre-line">
                אנחנו מייצרים קורות חיים
                <span className="text-[#1a79f6]"> שעוברים כל סינון </span>
                 אוטומטי
                <span className="text-[#1a79f6]"> ושהכי בולטים </span>
                למגייסים
              </p>
            </div>
          </div>
          {/* Fan of CV Images - right side */}
          <div className="relative flex-1 flex justify-end items-center min-w-[220px] max-w-[500px] w-full md:w-auto order-2 md:order-1 mt-8 md:mt-0">
            <div className="relative w-[300px] h-[260px] md:w-[400px] md:h-[340px] flex items-end justify-center">
              {/* Fan illusion: all images rotate from bottom center, spaced like a clock */}
              <img src={cvPic1} alt="cv1" className="absolute rounded-xl shadow-lg w-32 md:w-56 h-auto" style={{ left: '50%', bottom: '0', transform: 'translateX(-50%) rotate(-30deg)', transformOrigin: '50% 100%', zIndex: 4 }} />
              <img src={cvPic2} alt="cv2" className="absolute rounded-xl shadow-lg w-32 md:w-56 h-auto" style={{ left: '50%', bottom: '0', transform: 'translateX(-50%) rotate(-10deg)', transformOrigin: '50% 100%', zIndex: 3 }} />
              <img src={cvPic3} alt="cv3" className="absolute rounded-xl shadow-lg w-32 md:w-56 h-auto" style={{ left: '50%', bottom: '0', transform: 'translateX(-50%) rotate(10deg)', transformOrigin: '50% 100%', zIndex: 2 }} />
              <img src={cvPic4} alt="cv4" className="absolute rounded-xl shadow-lg w-32 md:w-56 h-auto" style={{ left: '50%', bottom: '0', transform: 'translateX(-50%) rotate(30deg)', transformOrigin: '50% 100%', zIndex: 1 }} />
            </div>
          </div>
        </div>
      </div>

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

      
    </div>
  );
};

export default HomePage;
