import React, { useRef, useEffect, useState } from 'react';
// import Values from '../components/Values';
// import KnowledgeHub from '../components/KnowledgeHub';
// import logo from '../../Assets/Catapp logo no bg.png';
import atlizWebsite from '../../Assets/atliz website.png';
import benjiLogo from '../../Assets/benjilogo1-no bg.png';
import maakafLogo from '../../Assets/hebrew_horizontal_dark.png';
import mosheLogo from '../../Assets/moshelogo.png';
import officeLogo from '../../Assets/office logo.webp';
import codersClanLogo from '../../Assets/coders clan icon.jpg';
import cvPic1 from '../../Assets/cv pic 1.png';
import cvPic2 from '../../Assets/cv pic 2.png';
import cvPic3 from '../../Assets/cv pic 3.png';
import cvPic4 from '../../Assets/cv pic 4.png';
import cvPic5 from '../../Assets/cv pic 5.png';
import cvPic6 from '../../Assets/cv pic 6.png';
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
import codeServiceImage from '../../Assets/code service.jpg';
import buildCvImage from '../../Assets/build cv.png';



const HomePage: React.FC = () => {
  const typingTexts = [
    'דפי נחיתה ממוקדים',
    'אתרי תדמית מקצועיים',
    'עיצוב מחדש של אתרים קיימים',
    'בנייה ושיפור קו"ח',
    'אופטימיזציה לפרופיל לינקדאין',
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
            <div className="w-full flex justify-center items-center py-16 bg-transparent relative">
              <div className="max-w-5xl w-full flex flex-col items-center px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a79f6] mb-4 text-center tracking-tight">השירותים שלנו</h2>
                <p className="text-white text-base md:text-lg mb-10 text-center max-w-2xl">הפתרונות שלנו לעסק ולקריירה שלך</p>
                {/* שורה 1: בניית אתרים + עיגולים מסתובבים + 4 תמונות אתרים */}
                <div className="flex flex-col md:flex-row w-full items-center justify-between gap-8 mb-4">
                  <div className="flex-1 flex flex-col items-end text-right">
                    <div className="relative w-full max-w-[340px] h-[240px] md:h-[280px] mb-4 border-2 border-[#1a79f6] rounded-2xl">
                      <img src={codeServiceImage} alt="בניית אתרים" className="w-full h-full object-cover rounded-2xl shadow-lg" />
                      <div className="absolute inset-0 w-full h-full rounded-2xl bg-black/50"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl md:text-5xl font-bold text-center drop-shadow-lg z-10 whitespace-nowrap overflow-hidden">
                        בניית אתרים
                      </div>
                    </div>
                    {/* כפתורים */}
                    <div className="flex gap-3 w-full max-w-[340px] justify-center">
                      <Link
                        to="/portfolio"
                        className="flex-1 bg-[#1a79f6] hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg text-center text-sm md:text-base"
                      >
                        לפרוייקטים
                      </Link>
                      <Link
                        to="/pricing"
                        className="flex-1 bg-[#1a79f6] hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg text-center text-sm md:text-base"
                      >
                        למחירון
                      </Link>
                    </div>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    {/* אנימציית אייקונים מסתובבים */}
                    <div className="relative w-full min-h-[300px] sm:min-h-[400px] md:min-h-[450px] flex items-center justify-center">
                      {/* Circular orbit container */}
                      <div className="tech-orbit">
                        <div className="tech-icon-wrapper" style={{ '--icon-index': 0 } as React.CSSProperties}>
                          <div className="tech-icon bg-[#61DAFB]/20 hover:scale-125">
                            <IntegrationInstructionsIcon className="text-xs xs:text-base sm:text-xl md:text-2xl text-[#61DAFB]" />
                          </div>
                          <p className="tech-label">React</p>
                        </div>
                        <div className="tech-icon-wrapper" style={{ '--icon-index': 1 } as React.CSSProperties}>
                          <div className="tech-icon bg-[#3178C6]/20 hover:scale-125">
                            <IntegrationInstructionsIcon className="text-[10px] xs:text-sm sm:text-base md:text-xl text-[#3178C6]" />
                          </div>
                          <p className="tech-label">TypeScript</p>
                        </div>
                        <div className="tech-icon-wrapper" style={{ '--icon-index': 2 } as React.CSSProperties}>
                          <div className="tech-icon bg-yellow-500/20 hover:scale-125">
                            <IntegrationInstructionsIcon className="text-[10px] xs:text-sm sm:text-base md:text-xl text-yellow-500" />
                          </div>
                          <p className="tech-label">JavaScript</p>
                        </div>
                        <div className="tech-icon-wrapper" style={{ '--icon-index': 3 } as React.CSSProperties}>
                          <div className="tech-icon bg-[#646CFF]/20 hover:scale-125">
                            <Zap className="text-[10px] xs:text-sm sm:text-base md:text-xl text-[#646CFF]" />
                          </div>
                          <p className="tech-label">Vite</p>
                        </div>
                        <div className="tech-icon-wrapper" style={{ '--icon-index': 4 } as React.CSSProperties}>
                          <div className="tech-icon bg-green-500/20 hover:scale-125">
                            <DollarSign className="text-[10px] xs:text-sm sm:text-base md:text-xl text-green-500" />
                          </div>
                          <p className="tech-label">MongoDB</p>
                        </div>
                        <div className="tech-icon-wrapper" style={{ '--icon-index': 5 } as React.CSSProperties}>
                          <div className="tech-icon bg-blue-500/20 hover:scale-125">
                            <Palette className="text-[10px] xs:text-sm sm:text-base md:text-xl text-blue-500" />
                          </div>
                          <p className="tech-label">MUI</p>
                        </div>
                        <div className="tech-icon-wrapper" style={{ '--icon-index': 6 } as React.CSSProperties}>
                          <div className="tech-icon bg-black border border-white hover:scale-125">
                            <TrendingUp className="text-[10px] xs:text-sm sm:text-base md:text-xl text-white" />
                          </div>
                          <p className="tech-label">Vercel</p>
                        </div>
                        <div className="tech-icon-wrapper" style={{ '--icon-index': 7 } as React.CSSProperties}>
                          <div className="tech-icon bg-orange-600/20 hover:scale-125">
                            <Rocket className="text-[10px] xs:text-sm sm:text-base md:text-xl text-orange-600" />
                          </div>
                          <p className="tech-label">Node.js</p>
                        </div>
                        <div className="tech-icon-wrapper" style={{ '--icon-index': 8 } as React.CSSProperties}>
                          <div className="tech-icon bg-[#06B6D4]/20 hover:scale-125">
                            <Briefcase className="text-[10px] xs:text-sm sm:text-base md:text-xl text-[#06B6D4]" />
                          </div>
                          <p className="tech-label">Tailwind CSS</p>
                        </div>
                        <div className="tech-icon-wrapper" style={{ '--icon-index': 9 } as React.CSSProperties}>
                          <div className="tech-icon bg-[#FFCA28]/20 hover:scale-125">
                            <Shield className="text-[10px] xs:text-sm sm:text-base md:text-xl text-[#FFCA28]" />
                          </div>
                          <p className="tech-label">Firebase</p>
                        </div>
                        <div className="tech-icon-wrapper" style={{ '--icon-index': 10 } as React.CSSProperties}>
                          <div className="tech-icon bg-[#1BDBDB]/20 hover:scale-125">
                            <Building2 className="text-[10px] xs:text-sm sm:text-base md:text-xl text-[#1BDBDB]" />
                          </div>
                          <p className="tech-label">GoDaddy</p>
                        </div>
                        <div className="tech-icon-wrapper" style={{ '--icon-index': 11 } as React.CSSProperties}>
                          <div className="tech-icon bg-[#430098]/20 hover:scale-125">
                            <Clock className="text-[10px] xs:text-sm sm:text-base md:text-xl text-[#430098]" />
                          </div>
                          <p className="tech-label">Heroku</p>
                        </div>
                        <div className="tech-icon-wrapper" style={{ '--icon-index': 12 } as React.CSSProperties}>
                          <div className="tech-icon bg-[#181717]/20 border border-gray-700 hover:scale-125">
                            <Eye className="text-[10px] xs:text-sm sm:text-base md:text-xl text-white" />
                          </div>
                          <p className="tech-label">GitHub</p>
                        </div>
                        <div className="tech-icon-wrapper" style={{ '--icon-index': 13 } as React.CSSProperties}>
                          <div className="tech-icon bg-[#F05032]/20 hover:scale-125">
                            <Star className="text-[10px] xs:text-sm sm:text-base md:text-xl text-[#F05032]" />
                          </div>
                          <p className="tech-label">Git</p>
                        </div>
                        <div className="tech-icon-wrapper" style={{ '--icon-index': 14 } as React.CSSProperties}>
                          <div className="tech-icon bg-purple-500/20 hover:scale-125">
                            <span className="text-[10px] xs:text-sm sm:text-base md:text-xl font-bold text-purple-500">✨</span>
                          </div>
                          <p className="tech-label">AI</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* טקסט מעוצב מתחת לשני החלקים */}
                <div className="w-full flex justify-center mb-12">
                  <div className="rounded-xl p-5 md:p-7 shadow-lg w-full max-w-3xl">
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white leading-snug break-words whitespace-pre-line">
                      אנחנו לא בונים עם{" "}
                      <span className="text-[#1a79f6]">WordPress</span>
                      {"\n"}
                      אנחנו בונים עם{" "}
                      <span className="text-[#1a79f6]">World's Best</span>
                      {"\n"}
                      עם אינסוף אפשרויות עיצוב, ביצועים מהירים, ופיצ'רים ייחודיים
                      {"\n"}
                      <span className="text-[#1a79f6]">בטכנולוגיות ההייטק</span>
                    </p>
                  </div>
                </div>
                {/* שורה 2: בניית קורות חיים + מניפת קורות חיים */}
                <div className="flex flex-col md:flex-row w-full items-center justify-between gap-8 mb-4">
                  <div className="flex-1 flex flex-col items-end text-right">
                    <div className="relative w-full max-w-[340px] h-[240px] md:h-[280px] mb-4 border-2 border-[#1a79f6] rounded-2xl">
                      <img src={buildCvImage} alt="בניית קורות חיים" className="w-full h-full object-cover rounded-2xl shadow-lg" />
                      <div className="absolute inset-0 w-full h-full rounded-2xl bg-black/50"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl md:text-5xl font-bold text-center drop-shadow-lg z-10 whitespace-nowrap overflow-hidden">
                        בניית קו"ח
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    {/* מניפת קורות חיים */}
                    <div className="relative flex-1 flex justify-end items-center min-w-[220px] max-w-[500px] w-full md:w-auto order-2 md:order-1 mt-8 md:mt-0">
                      <div className="relative w-[300px] h-[260px] md:w-[400px] md:h-[340px] flex items-end justify-center">
                        {/* Fan illusion: all images rotate from bottom center, spaced like a clock */}
                        <img src={cvPic6} alt="cv6" className="absolute rounded-xl shadow-lg w-32 md:w-56 h-auto" style={{ left: '50%', bottom: '0', transform: 'translateX(-50%) rotate(-30deg)', transformOrigin: '50% 100%', zIndex: 6 }} />
                        <img src={cvPic1} alt="cv1" className="absolute rounded-xl shadow-lg w-32 md:w-56 h-auto" style={{ left: '50%', bottom: '0', transform: 'translateX(-50%) rotate(-20deg)', transformOrigin: '50% 100%', zIndex: 5 }} />
                        <img src={cvPic2} alt="cv2" className="absolute rounded-xl shadow-lg w-32 md:w-56 h-auto" style={{ left: '50%', bottom: '0', transform: 'translateX(-50%) rotate(-10deg)', transformOrigin: '50% 100%', zIndex: 4 }} />
                        <img src={cvPic3} alt="cv3" className="absolute rounded-xl shadow-lg w-32 md:w-56 h-auto" style={{ left: '50%', bottom: '0', transform: 'translateX(-50%) rotate(0deg)', transformOrigin: '50% 100%', zIndex: 3 }} />
                        <img src={cvPic4} alt="cv4" className="absolute rounded-xl shadow-lg w-32 md:w-56 h-auto" style={{ left: '50%', bottom: '0', transform: 'translateX(-50%) rotate(10deg)', transformOrigin: '50% 100%', zIndex: 2 }} />
                        <img src={cvPic5} alt="cv5" className="absolute rounded-xl shadow-lg w-32 md:w-56 h-auto" style={{ left: '50%', bottom: '0', transform: 'translateX(-50%) rotate(20deg)', transformOrigin: '50% 100%', zIndex: 1 }} />
                      </div>
                    </div>
                  </div>
                </div>
                {/* טקסט מעוצב מתחת לשני החלקים */}
                <div className="w-full flex justify-center mb-12">
                  <div className="rounded-xl p-5 md:p-7 shadow-lg w-full max-w-3xl">
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white leading-snug break-words whitespace-pre-line">
                      אנחנו מייצרים קורות חיים
                      <span className="text-[#1a79f6]"> שעוברים כל סינון </span>
                      אוטומטי
                      <span className="text-[#1a79f6]"> ושהכי בולטים </span>
                      למגייסים
                    </p>
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
      <div className="w-full flex justify-center items-center py-16 ">
        <div className="max-w-3xl w-full flex flex-col items-center">
                {/* Happy Clients Section */}
                <div className="w-full flex flex-col items-center py-16 ">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a79f6] mb-8 text-center">מבין לקוחותינו המרוצים</h2>
                  <div className="flex flex-wrap justify-center items-center gap-8">
                    <div className="flex items-center justify-center h-40 w-40 mx-2 p-3">
                      <img src={benjiLogo} alt="בנג'י" className="max-h-32 max-w-32 object-contain" />
                    </div>
                    <div className="flex items-center justify-center h-40 w-40 mx-2 p-3">
                      <img src={maakafLogo} alt="מעקף" className="max-h-40 max-w-40 object-contain" />
                    </div>
                    <div className="flex items-center justify-center h-40 w-40 mx-2 p-3">
                      <img src={mosheLogo} alt="משה" className="max-h-32 max-w-32 object-contain" style={{borderRadius: '20%'}} />
                    </div>
                    <div className="flex items-center justify-center h-40 w-40 mx-2 p-3">
                      <img src={officeLogo} alt="משרד עורכי דין" className="max-h-48 max-w-48 object-contain" style={{borderRadius: '4%', border: '1px solid white'}} />
                    </div>
                    <div className="flex items-center justify-center h-40 w-40 mx-2 p-3">
                      <img src={codersClanLogo} alt="Coders Clan" className="max-h-32 max-w-32 object-contain" style={{borderRadius: '20%'}} />
                    </div>
                  </div>
                </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a79f6] mb-10 text-center">המלצות</h2>
          <div className="w-full flex flex-col gap-8">
            {/* Recommendation Card */}
            <div className="bg-white/0 rounded-2xl shadow-lg border-2 border-[#1a79f6] p-8 text-right transition-all duration-300 hover:shadow-2xl hover:border-[#1a79f6]/40">
              <p className="text-lg md:text-xl text-white leading-relaxed mb-4 font-medium">
                פנינו לחברת Catapp עבור הקמת דף נחיתה לעסק, וכבר מהרגע הראשון היה ברור שעשינו את ההחלטה הנכונה. הכל נעשה בצורה הכי מקצועית, יעילה ומדויקת תוך הקשבה לצרכים שלנו ומתן מענה מהיר לכל שאלה. שילוב נפלא של עבודה ברמה גבוהה ויחס נהדר ללקוח. בהחלט אמליץ לכל מי שמחפש- הגעתם למקום הנכון.
              </p>
              <div className="flex items-center justify-end gap-3">
                <span className="font-bold text-[#1a79f6] text-base md:text-lg">אור בנג'י פסיכותרפיה</span>
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
            </div>
            {/* Recommendation Card - new */}
            <div className="bg-white/0 rounded-2xl shadow-lg border-2 border-[#1a79f6] p-8 text-right transition-all duration-300 hover:shadow-2xl hover:border-[#1a79f6]/40">
              <p className="text-lg md:text-xl text-white leading-relaxed mb-4 font-medium">
                ברצוני להודות לחברת Catapp על ליווי מקצועי ואישי ברמה גבוהה, עם תשומת לב אמיתית לפרטים והבנה עמוקה של הצרכים שלי. התהליך היה מסודר, ברור ויעיל, והתוצאה – קורות חיים איכותיים שמציגים אותי בצורה מדויקת ומרשימה. שירות ברמה הגבוהה ביותר – מומלץ בחום.
              </p>
              <div className="flex items-center justify-end gap-3">
                <span className="font-bold text-[#1a79f6] text-base md:text-lg">יאיר אהרוני, סטודנט להנדסת חשמל ואלקטרוניקה</span>
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
            </div>
            {/* Recommendation Card - רפאל סבג */}
            <div className="bg-white/0 rounded-2xl shadow-lg border-2 border-[#1a79f6] p-8 text-right transition-all duration-300 hover:shadow-2xl hover:border-[#1a79f6]/40">
              <p className="text-lg md:text-xl text-white leading-relaxed mb-4 font-medium">
                עבדתי עם Catapp על בניית האתר, ואין ספק שעשיתי בחירה מצוינת. קיבלתי יחס אישי, זמינות מלאה והקשבה אמיתית לצרכים שלי. העבודה בוצעה במהירות, במקצועיות ובדיוק כפי שסוכם – והתוצאה עלתה על הציפיות. ממליץ מכל הלב
              </p>
              <div className="flex items-center justify-end gap-3">
                <span className="font-bold text-[#1a79f6] text-base md:text-lg">רפאל סבג, בעלים של משרד עו"ד</span>
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
            </div>
              {/* Recommendation Card - אוריאל מנהל הקהילה */}
              <div className="bg-white/0 rounded-2xl shadow-lg border-2 border-[#1a79f6] p-8 text-right transition-all duration-300 hover:shadow-2xl hover:border-[#1a79f6]/40">
                <p className="text-lg md:text-xl text-white leading-relaxed mb-4 font-medium">
                  חברת Catapp העבירה לקהילה שלנו הרצאה יוצאת דופן ומקיפה ביותר על כתיבת קו"ח. ההרצאה הייתה מלאה בתוכן משמעותי ופרקטי עם דוגמאות מעשיות. ממליץ בחום רב!
                </p>
                <div className="flex items-center justify-end gap-3">
                  <span className="font-bold text-[#1a79f6] text-base md:text-lg">אוריאל, מנהל קהילת מעקף</span>
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
              </div>
            {/* ניתן להוסיף המלצות נוסxxx כאן */}
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
            // Start animation only when the section top is within 40% of the viewport height (bottom 40%)
            const triggerStart = windowH * 0.6; // More scroll before blue line starts
            if (rect.top < windowH && rect.top > triggerStart && rect.bottom > 0) {
              // Not yet in the bottom 40%: don't animate
              percent = 0;
            } else if (rect.top <= triggerStart && rect.bottom > 0) {
              const scrollY = windowH - rect.top - windowH * 0.2; // Delay blue line start
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
          <div ref={processRef} className="w-full flex justify-center items-center py-16 relative">
            <div className="max-w-3xl w-full flex flex-col items-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a79f6] mb-10 text-center">התהליך שלנו</h2>
              <div className="relative flex w-full">
                {/* Vertical line - לבן מלא בלבד (נגמר בדיוק בקו התחתון של המלבן האחרון) */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-5 bg-white rounded-full z-0" style={{ height: 'calc(100% - 45px)', minHeight: 0 }} />
                {/* קו כחול דק מעל הקו הלבן, מוצג רק לפי התקדמות הגלילה */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-5 pointer-events-none z-10" style={{ height: 'calc(100% - 45px)' }}>
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 bg-gradient-to-b from-[#1a79f6] to-blue-400 rounded-full transition-all duration-200" style={{ height: `${progress === 0 ? 0 : progress * 100}%`, minHeight: 0, top: 0, opacity: progress > 0 ? 1 : 0 }} />
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
                    // Calculate the progress for each step (icon)
                    const stepProgress = (idx + 0.5) / arr.length;
                    const isActive = progress >= stepProgress;
                    return (
                      <div key={idx} className="flex items-center w-full relative min-h-[100px]">
                        {/* מלבן טקסט מימין */}
                        {isRight && (
                          <div className="flex-1 flex justify-end pr-0 xs:pr-0.5">
                            <div className=" border-[#1a79f6] border-[1.5px] rounded-2xl shadow-md p-2 xs:p-3 md:p-4 text-right max-w-[260px] xs:max-w-[300px] md:max-w-[380px] sm:max-w-[320px]"
                              style={{ maxWidth: 'clamp(150px, 40vw, 260px)' }}>
                              <div className="font-bold text-sm xs:text-base text-[#1a79f6] mb-1">{step.title}</div>
                              <div className="text-white text-xs xs:text-sm md:text-base whitespace-pre-line">{step.desc}</div>
                            </div>
                          </div>
                        )}
                        {/* אייקון ממורכז על הציר */}
                        <div className="flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/2 min-w-[80px] z-30" style={{top:0}}>
                          <div className={`mb-2 flex items-center justify-center rounded-full transition-all duration-300 ${isActive ? 'bg-[#1a79f6]' : 'bg-white'} shadow-lg`} style={{ width: 70, height: 70 }}>
                            {React.cloneElement(step.icon, {
                              className: `w-10 h-10 md:w-14 md:h-14 ${isActive ? 'text-white' : 'text-[#1a79f6]'}`
                            })}
                          </div>
                          {/* קו מחבר בין האייקונים */}
                          {idx < arr.length - 2 && (
                            <div className="flex-1 w-2 bg-gradient-to-b" style={{ minHeight: 50, marginTop: 4 }} />
                          )}
                          {/* הארכת הקו בין האייקון הלפני אחרון לאחרון */}
                          {idx === arr.length - 2 && (
                            <div className="flex-1 w-2 bg-gradient-to-b" style={{ minHeight: 80, marginTop: 4 }} />
                          )}
                        </div>
                        {/* מלבן טקסט משמאל */}
                        {!isRight && (
                          <div className="flex-1 flex justify-start pl-0 xs:pl-0.5">
                            <div className="border-[#1a79f6] border-[1.5px] rounded-2xl shadow-md p-2 xs:p-3 md:p-4 text-right max-w-[260px] xs:max-w-[300px] md:max-w-[380px] sm:max-w-[320px]"
                              style={{ maxWidth: 'clamp(150px, 40vw, 260px)' }}>
                              <div className="font-bold text-sm xs:text-base text-[#1a79f6] mb-1">{step.title}</div>
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



      
    </div>
  );
};

export default HomePage;
