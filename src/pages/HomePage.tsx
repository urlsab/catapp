import React, { useRef, useEffect, useState } from 'react';
// import Values from '../components/Values';
// import KnowledgeHub from '../components/KnowledgeHub';
// import logo from '../../Assets/Catapp logo no bg.png';
import benjiLogo from '../../Assets/benjilogo1-no bg.png';
import maakafLogo from '../../Assets/hebrew_horizontal_dark.png';
import mosheLogo from '../../Assets/moshelogo.png';
import officeLogo from '../../Assets/office logo.webp';
import codersClanLogo from '../../Assets/coders_clan_logo-removebg-preview.png';
import cvPic1 from '../../Assets/cv pic 1.png';
import cvPic2 from '../../Assets/cv pic 2.png';
import cvPic3 from '../../Assets/cv pic 3.png';
import cvPic4 from '../../Assets/cv pic 4.png';
import cvPic5 from '../../Assets/cv pic 5.png';
import cvPic6 from '../../Assets/cv pic 6.png';
import resumesBuilderMobile from '../../Assets/resumes_builder_on_mobile-removebg-preview.png';
import logoCenter from '../../Assets/logoiCatapp.png';
import Footer from '../components/Footer';
import '../styles/scroll.css';
import '../styles/homeSnap.css';
// import SmoothScroll from '../components/SmoothScroll';
import { Zap, TrendingUp, Shield, DollarSign, Scale, FileText, Briefcase, Eye, Clock, Palette, Star, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import GroupsIcon from '@mui/icons-material/Groups';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import { FaReact, FaNodeJs, FaGithub, FaGitAlt, FaSass, FaBolt } from 'react-icons/fa';
import { SiMongodb, SiMui, SiTypescript, SiJavascript, SiVite, SiExpress, SiVercel, SiTailwindcss, SiFirebase, SiGodaddy, SiHeroku, SiStyledcomponents, SiGooglegemini, SiGooglecloud } from 'react-icons/si';
import { BsBootstrapFill } from "react-icons/bs";
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
  const [currentRecommendation, setCurrentRecommendation] = React.useState(0);
  // Removed showBlinkingCursor state (cursor always blinks)
  // For sequential image animation
  const [heroImagesVisible, setHeroImagesVisible] = React.useState([false, false, false, false]);
  const valuesAnimated = true; // Set to true since observer is disabled
  const valuesRef = React.useRef<HTMLDivElement>(null);
  const heroImagesRef = React.useRef<HTMLDivElement>(null);
  const serviceDesc1Ref = React.useRef<HTMLDivElement>(null);
  const serviceDesc2Ref = React.useRef<HTMLDivElement>(null);
  const [serviceDesc1Visible, setServiceDesc1Visible] = React.useState(false);
  const [serviceDesc2Visible, setServiceDesc2Visible] = React.useState(false);
  
  // New refs for fade animations
  const serviceImage1Ref = React.useRef<HTMLDivElement>(null);
  const serviceImage2Ref = React.useRef<HTMLDivElement>(null);
  const cvFanRef = React.useRef<HTMLDivElement>(null);
  const techOrbitRef = React.useRef<HTMLDivElement>(null);
  const recommendationsRef = React.useRef<HTMLDivElement>(null);
  const valuesContainerRef = React.useRef<HTMLDivElement>(null);
  const happyClientsRef = React.useRef<HTMLDivElement>(null);
  const servicesHeaderRef = React.useRef<HTMLDivElement>(null);
  const valuesHeaderRef = React.useRef<HTMLDivElement>(null);
  const recommendationsHeaderRef = React.useRef<HTMLDivElement>(null);
  const aboutBtnRef = React.useRef<HTMLDivElement>(null);
  const testimonialsBtnRef = React.useRef<HTMLDivElement>(null);
  const heroTextMobileRef = React.useRef<HTMLDivElement>(null);
  const heroImagesMobileRef = React.useRef<HTMLDivElement>(null);
  const heroStatsDesktopRef = React.useRef<HTMLDivElement>(null);
  
  const [serviceImage1Visible, setServiceImage1Visible] = React.useState(false);
  const [serviceImage2Visible, setServiceImage2Visible] = React.useState(false);
  const [cvFanVisible, setCvFanVisible] = React.useState(false);
  const [techOrbitVisible, setTechOrbitVisible] = React.useState(false);
  const [recommendationsVisible, setRecommendationsVisible] = React.useState(false);
  const [valuesContainerVisible, setValuesContainerVisible] = React.useState(false);
  const [happyClientsVisible, setHappyClientsVisible] = React.useState(false);
  const [servicesHeaderVisible, setServicesHeaderVisible] = React.useState(false);
  const [valuesHeaderVisible, setValuesHeaderVisible] = React.useState(false);
  const [recommendationsHeaderVisible, setRecommendationsHeaderVisible] = React.useState(false);
  const [aboutBtnVisible, setAboutBtnVisible] = React.useState(false);
  const [testimonialsBtnVisible, setTestimonialsBtnVisible] = React.useState(false);
  const [heroTextMobileVisible, setHeroTextMobileVisible] = React.useState(false);
  const [heroImagesMobileVisible, setHeroImagesMobileVisible] = React.useState(false);
  const [heroStatsDesktopVisible, setHeroStatsDesktopVisible] = React.useState(false);
  const snapContainerRef = React.useRef<HTMLDivElement>(null);

  // Hide body scroll and global footer when snap container is active
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    // Hide the global footer in App.tsx so it doesn't bleed through
    const globalFooter = document.querySelector('.min-h-screen > footer') as HTMLElement;
    if (globalFooter) globalFooter.style.display = 'none';
    return () => {
      document.body.style.overflow = '';
      if (globalFooter) globalFooter.style.display = '';
    };
  }, []);

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

  // Recommendations carousel effect
  React.useEffect(() => {
    const recommendationsCount = 4; // Total number of recommendations
    const interval = setInterval(() => {
      setCurrentRecommendation((prev) => (prev + 1) % recommendationsCount);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for service descriptions
  React.useEffect(() => {
    const container = snapContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === serviceDesc1Ref.current) {
            setServiceDesc1Visible(entry.isIntersecting);
          }
          if (entry.target === serviceDesc2Ref.current) {
            setServiceDesc2Visible(entry.isIntersecting);
          }
          if (entry.target === serviceImage1Ref.current) {
            setServiceImage1Visible(entry.isIntersecting);
          }
          if (entry.target === serviceImage2Ref.current) {
            setServiceImage2Visible(entry.isIntersecting);
          }
          if (entry.target === cvFanRef.current) {
            setCvFanVisible(entry.isIntersecting);
          }
          if (entry.target === techOrbitRef.current) {
            setTechOrbitVisible(entry.isIntersecting);
          }
          if (entry.target === recommendationsRef.current) {
            setRecommendationsVisible(entry.isIntersecting);
          }
          if (entry.target === valuesContainerRef.current) {
            setValuesContainerVisible(entry.isIntersecting);
          }
          if (entry.target === happyClientsRef.current) {
            setHappyClientsVisible(entry.isIntersecting);
          }
          if (entry.target === servicesHeaderRef.current) {
            setServicesHeaderVisible(entry.isIntersecting);
          }
          if (entry.target === valuesHeaderRef.current) {
            setValuesHeaderVisible(entry.isIntersecting);
          }
          if (entry.target === recommendationsHeaderRef.current) {
            setRecommendationsHeaderVisible(entry.isIntersecting);
          }
          if (entry.target === aboutBtnRef.current) {
            setAboutBtnVisible(entry.isIntersecting);
          }
          if (entry.target === testimonialsBtnRef.current) {
            setTestimonialsBtnVisible(entry.isIntersecting);
          }
          if (entry.target === heroTextMobileRef.current) {
            setHeroTextMobileVisible(entry.isIntersecting);
          }
          if (entry.target === heroImagesMobileRef.current) {
            setHeroImagesMobileVisible(entry.isIntersecting);
          }
          if (entry.target === heroStatsDesktopRef.current) {
            setHeroStatsDesktopVisible(entry.isIntersecting);
          }
        });
      },
      {
        root: container,
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    if (serviceDesc1Ref.current) observer.observe(serviceDesc1Ref.current);
    if (serviceDesc2Ref.current) observer.observe(serviceDesc2Ref.current);
    if (serviceImage1Ref.current) observer.observe(serviceImage1Ref.current);
    if (serviceImage2Ref.current) observer.observe(serviceImage2Ref.current);
    if (cvFanRef.current) observer.observe(cvFanRef.current);
    if (techOrbitRef.current) observer.observe(techOrbitRef.current);
    if (recommendationsRef.current) observer.observe(recommendationsRef.current);
    if (valuesContainerRef.current) observer.observe(valuesContainerRef.current);
    if (happyClientsRef.current) observer.observe(happyClientsRef.current);
    if (servicesHeaderRef.current) observer.observe(servicesHeaderRef.current);
    if (valuesHeaderRef.current) observer.observe(valuesHeaderRef.current);
    if (recommendationsHeaderRef.current) observer.observe(recommendationsHeaderRef.current);
    if (aboutBtnRef.current) observer.observe(aboutBtnRef.current);
    if (testimonialsBtnRef.current) observer.observe(testimonialsBtnRef.current);
    if (heroTextMobileRef.current) observer.observe(heroTextMobileRef.current);
    if (heroImagesMobileRef.current) observer.observe(heroImagesMobileRef.current);
    if (heroStatsDesktopRef.current) observer.observe(heroStatsDesktopRef.current);

    return () => {
      if (serviceDesc1Ref.current) observer.unobserve(serviceDesc1Ref.current);
      if (serviceDesc2Ref.current) observer.unobserve(serviceDesc2Ref.current);
      if (cvFanRef.current) observer.unobserve(cvFanRef.current);
      if (serviceImage1Ref.current) observer.unobserve(serviceImage1Ref.current);
      if (serviceImage2Ref.current) observer.unobserve(serviceImage2Ref.current);
      if (techOrbitRef.current) observer.unobserve(techOrbitRef.current);
      if (recommendationsRef.current) observer.unobserve(recommendationsRef.current);
      if (valuesContainerRef.current) observer.unobserve(valuesContainerRef.current);
      if (happyClientsRef.current) observer.unobserve(happyClientsRef.current);
      if (servicesHeaderRef.current) observer.unobserve(servicesHeaderRef.current);
      if (valuesHeaderRef.current) observer.unobserve(valuesHeaderRef.current);
      if (recommendationsHeaderRef.current) observer.unobserve(recommendationsHeaderRef.current);
      if (aboutBtnRef.current) observer.unobserve(aboutBtnRef.current);
      if (testimonialsBtnRef.current) observer.unobserve(testimonialsBtnRef.current);
      if (heroTextMobileRef.current) observer.unobserve(heroTextMobileRef.current);
      if (heroImagesMobileRef.current) observer.unobserve(heroImagesMobileRef.current);
      if (heroStatsDesktopRef.current) observer.unobserve(heroStatsDesktopRef.current);
    };
  }, []);

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
    <div className="home-snap-container" ref={snapContainerRef}>

      {/* ===== SECTION 1: Hero - Desktop (headline + images) ===== */}
      <section className="home-snap-section snap-hero snap-hero-desktop-only">
      <div className="w-full flex justify-center items-center relative flex-1 overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-4 md:py-6 w-full h-full">
          <div className="grid grid-cols-2 gap-10 items-center h-full">
            
            {/* Left Side - Headline only */}
            <div className="text-right flex flex-col justify-center">
              <h1
                className={`text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-700 ease-out ${headlineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
              >
                תוכן וטכנולוגיה
                <br />
                <span className="text-[#1a79f6]">זו המומחיות שלנו</span>
              </h1>
            </div>

            {/* Right Side - Screenshots Grid */}
            <div className="relative" ref={heroImagesRef}>
              <div className="grid grid-cols-2 gap-4 auto-rows-min">
                <div 
                  className={`relative rounded-3xl overflow-visible transition-all duration-700 ease-out hover:scale-105 h-fit max-w-md mx-auto ${
                    heroImagesVisible[0] ? 'opacity-100 -translate-y-16' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    filter: 'drop-shadow(0 20px 40px rgba(26, 121, 246, 0.4))'
                  }}
                >
                  <img 
                    src={resumesBuilderMobile} 
                    alt="בניית קורות חיים במובייל" 
                    className="w-full h-auto block max-h-[55vh] object-contain"
                  />
                </div>
                
                <div 
                  className={`relative rounded-3xl overflow-hidden border-4 border-[#1a79f6]/60 bg-gradient-to-br from-white/90 to-blue-50/90 dark:from-gray-800/90 dark:to-gray-900/90 transition-all duration-700 ease-out hover:scale-105 mt-12 h-fit max-w-md mx-auto ${
                    heroImagesVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
                  }`}
                  style={{ 
                    boxShadow: '0 25px 50px -12px rgba(26, 121, 246, 0.5), inset 0 2px 4px 0 rgba(255, 255, 255, 0.6)',
                    transform: 'rotate(-3deg) scale(0.85)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none"></div>
                  <img 
                    src={cvPic6} 
                    alt="דוגמת קורות חיים מקצועי" 
                    className="w-full h-auto block relative z-10 max-h-[50vh] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* ===== SECTION 1.5: Typing + Stats - Desktop only ===== */}
      <section className="home-snap-section snap-hero snap-hero-desktop-only">
        <div className="w-full flex justify-center items-center relative flex-1">
          <div ref={heroStatsDesktopRef} className="max-w-4xl mx-auto px-6 lg:px-8 w-full flex flex-col justify-center items-center">
            <div className={`w-full transition-all duration-1000 ${
              heroStatsDesktopVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>

              {/* Typing Animation - large */}
              <div className="mb-12 w-full min-h-[4rem] flex justify-center" dir="rtl">
                <h2
                  className={`text-3xl lg:text-4xl xl:text-5xl font-bold text-white inline-flex items-center transition-all duration-800 transform ${
                    typingStarted ? 'opacity-80 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <span className="leading-tight whitespace-nowrap">{currentText || '\u00A0'}</span>
                  {typingStarted && (
                    <span
                      className="inline-block bg-[#1a79f6] align-middle animate-blink"
                      style={{
                        width: '4px',
                        height: '1.4em',
                        borderRadius: '2px',
                        marginRight: '4px',
                      }}
                    />
                  )}
                </h2>
              </div>

              {/* Stats Row - larger */}
              <div className="flex gap-16 lg:gap-20 justify-center">
                <div
                  className={`text-center transition-all duration-700 ease-out ${heroStatsVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
                >
                  <div className="flex justify-center mb-2">
                    <WorkHistoryIcon style={{ color: '#1a79f6', fontSize: '2.75rem' }} />
                  </div>
                  <div className="text-5xl lg:text-6xl font-bold text-white">+5</div>
                  <p className="text-gray-400 text-base lg:text-lg mt-1">שנות ניסיון</p>
                </div>
                <div
                  className={`text-center transition-all duration-700 ease-out ${heroStatsVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
                  style={{ transitionDelay: heroStatsVisible[1] ? '200ms' : '0ms' }}
                >
                  <div className="flex justify-center mb-2">
                    <GroupsIcon style={{ color: '#1a79f6', fontSize: '2.75rem' }} />
                  </div>
                  <div className="text-5xl lg:text-6xl font-bold text-white">+50</div>
                  <p className="text-gray-400 text-base lg:text-lg mt-1">לקוחות מרוצים</p>
                </div>
                <div
                  className={`text-center transition-all duration-700 ease-out ${heroStatsVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
                  style={{ transitionDelay: heroStatsVisible[2] ? '400ms' : '0ms' }}
                >
                  <div className="flex justify-center mb-2">
                    <IntegrationInstructionsIcon style={{ color: '#1a79f6', fontSize: '2.75rem' }} />
                  </div>
                  <div className="text-5xl lg:text-6xl font-bold text-white"><span dir="ltr">20+</span></div>
                  <p className="text-gray-400 text-base lg:text-lg mt-1">טכנולוגיות בשימוש</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 1a: Hero Headline + Images - Mobile/Portrait only ===== */}
      <section className="home-snap-section snap-hero snap-hero-mobile-only">
        <div className="w-full flex justify-center items-center relative flex-1">
          <div ref={heroTextMobileRef} className="max-w-2xl mx-auto px-4 w-full flex flex-col justify-center items-center">
            <div className={`w-full transition-all duration-1000 ${
              heroTextMobileVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>

              {/* Main Headline */}
              <h1
                className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight text-center"
              >
                תוכן וטכנולוגיה
                <br />
                <span className="text-[#1a79f6]">זו המומחיות שלנו</span>
              </h1>

              {/* Images Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-5 auto-rows-min w-full max-w-lg mx-auto">
                <div 
                  className="relative rounded-3xl overflow-visible h-fit max-w-xs mx-auto"
                  style={{ 
                    filter: 'drop-shadow(0 20px 40px rgba(26, 121, 246, 0.4))'
                  }}
                >
                  <img 
                    src={resumesBuilderMobile} 
                    alt="בניית קורות חיים במובייל" 
                    className="w-full h-auto block max-h-[45vh] object-contain"
                  />
                </div>
                
                <div 
                  className="relative rounded-3xl overflow-hidden border-4 border-[#1a79f6]/60 bg-gradient-to-br from-white/90 to-blue-50/90 dark:from-gray-800/90 dark:to-gray-900/90 mt-8 sm:mt-12 h-fit max-w-xs mx-auto"
                  style={{ 
                    boxShadow: '0 25px 50px -12px rgba(26, 121, 246, 0.5), inset 0 2px 4px 0 rgba(255, 255, 255, 0.6)',
                    transform: 'rotate(-3deg) scale(0.9)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none"></div>
                  <img 
                    src={cvPic6} 
                    alt="דוגמת קורות חיים מקצועי" 
                    className="w-full h-auto block relative z-10 max-h-[40vh] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 1b: Typing + Stats - Mobile/Portrait only ===== */}
      <section className="home-snap-section snap-hero snap-hero-mobile-only">
        <div className="w-full flex justify-center items-center relative flex-1">
          <div ref={heroImagesMobileRef} className="max-w-2xl mx-auto px-4 w-full flex flex-col justify-center items-center">
            <div className={`w-full transition-all duration-1000 ${
              heroImagesMobileVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>

              {/* Typing Animation - larger for mobile */}
              <div className="mb-10 sm:mb-14 w-full min-h-[2.5rem] sm:min-h-[3rem] flex justify-center" dir="rtl">
                <h2
                  className={`text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-white inline-flex items-center transition-all duration-800 transform ${
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

              {/* Stats Row - larger */}
              <div className="flex gap-8 xs:gap-10 sm:gap-14 justify-center">
                <div className={`text-center transition-all duration-700 ease-out ${heroStatsVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
                  <div className="flex justify-center mb-1.5">
                    <WorkHistoryIcon style={{ color: '#1a79f6', fontSize: 'clamp(1.5rem, 6vw, 2.5rem)' }} />
                  </div>
                  <div className="text-3xl xs:text-4xl sm:text-5xl font-bold text-white">+5</div>
                  <p className="text-gray-400 text-sm sm:text-base mt-0.5">שנות ניסיון</p>
                </div>
                <div
                  className={`text-center transition-all duration-700 ease-out ${heroStatsVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
                  style={{ transitionDelay: heroStatsVisible[1] ? '200ms' : '0ms' }}
                >
                  <div className="flex justify-center mb-1.5">
                    <GroupsIcon style={{ color: '#1a79f6', fontSize: 'clamp(1.5rem, 6vw, 2.5rem)' }} />
                  </div>
                  <div className="text-3xl xs:text-4xl sm:text-5xl font-bold text-white">+50</div>
                  <p className="text-gray-400 text-sm sm:text-base mt-0.5">לקוחות מרוצים</p>
                </div>
                <div
                  className={`text-center transition-all duration-700 ease-out ${heroStatsVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
                  style={{ transitionDelay: heroStatsVisible[2] ? '400ms' : '0ms' }}
                >
                  <div className="flex justify-center mb-1.5">
                    <IntegrationInstructionsIcon style={{ color: '#1a79f6', fontSize: 'clamp(1.5rem, 6vw, 2.5rem)' }} />
                  </div>
                  <div className="text-3xl xs:text-4xl sm:text-5xl font-bold text-white"><span dir="ltr">20+</span></div>
                  <p className="text-gray-400 text-sm sm:text-base mt-0.5">טכנולוגיות בשימוש</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: Services - Websites + Tech Orbit ===== */}
      <section className="home-snap-section snap-compact">
        <div className="w-full flex justify-center items-center bg-transparent relative flex-1">
          <div className="max-w-5xl w-full flex flex-col items-center px-4 justify-center">
                <div ref={servicesHeaderRef}>
                  <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a79f6] mb-3 text-center tracking-tight transition-all duration-1000 ${
                    servicesHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}>השירותים שלנו</h2>
                </div>
                {/* שורה 1: בניית אתרים + עיגולים מסתובבים */}
                <div className="flex flex-col md:flex-row w-full items-center justify-between gap-6 md:gap-8 mb-2">
                  <div 
                    ref={serviceImage1Ref}
                    className={`flex-1 flex flex-col items-end text-right transition-all duration-1000 ${
                      serviceImage1Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                  >
                    <div className="relative w-full max-w-[340px] h-[160px] sm:h-[200px] md:h-[280px] mb-2 sm:mb-4 border-2 border-[#1a79f6] rounded-2xl">
                      <img src={codeServiceImage} alt="בניית אתרים" className="w-full h-full object-cover rounded-2xl shadow-lg" />
                      <div className="absolute inset-0 w-full h-full rounded-2xl bg-black/50"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl sm:text-3xl md:text-5xl font-bold text-center drop-shadow-lg z-10 whitespace-nowrap overflow-hidden">
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
                        className="flex-1 bg-white hover:bg-gray-100 text-[#1a79f6] px-4 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg text-center text-sm md:text-base"
                      >
                        למחירון
                      </Link>
                    </div>
                  </div>
                  <div 
                    ref={techOrbitRef}
                    className={`flex-1 flex items-center justify-center px-2 md:px-4 transition-all duration-1000 ${
                      techOrbitVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                  >
                    {/* אנימציית אייקונים מסתובבים */}
                    <div className="relative w-full min-h-[200px] sm:min-h-[320px] md:min-h-[400px] flex items-center justify-center">
                      {/* Circular orbit container */}
                      <div className="tech-orbit">
                        <div className="tech-icon-wrapper" style={{ '--icon-index': 0 } as React.CSSProperties}>
                          <div className="tech-icon bg-[#61DAFB]/20 hover:scale-125">
                            <FaReact className="text-xs xs:text-base sm:text-xl md:text-2xl text-[#61DAFB]" />
                          </div>
                          <p className="tech-label">React</p>
                        </div>
                        <div className="tech-icon-wrapper" style={{ '--icon-index': 1 } as React.CSSProperties}>
                          <div className="tech-icon bg-[#3178C6]/20 hover:scale-125">
                            <SiTypescript className="text-[10px] xs:text-sm sm:text-base md:text-xl text-[#3178C6]" />
                          </div>
                          <p className="tech-label">TypeScript</p>
                        </div>
                        <div className="tech-icon-wrapper" style={{ '--icon-index': 2 } as React.CSSProperties}>
                          <div className="tech-icon bg-yellow-500/20 hover:scale-125">
                            <SiJavascript className="text-[10px] xs:text-sm sm:text-base md:text-xl text-yellow-500" />
                          </div>
                          <p className="tech-label">JavaScript</p>
                        </div>
                        <div className="tech-icon-wrapper" style={{ '--icon-index': 3 } as React.CSSProperties}>
                          <div className="tech-icon bg-[#646CFF]/20 hover:scale-125">
                            <SiVite className="text-[10px] xs:text-sm sm:text-base md:text-xl text-[#646CFF]" />
                          </div>
                          <p className="tech-label">Vite</p>
                        </div>
                        <div className="tech-icon-wrapper" style={{ '--icon-index': 4 } as React.CSSProperties}>
                          <div className="tech-icon bg-green-500/20 hover:scale-125">
                            <SiMongodb className="text-[10px] xs:text-sm sm:text-base md:text-xl text-green-500" />
                          </div>
                          <p className="tech-label">MongoDB</p>
                        </div>
                        <div className="tech-icon-wrapper" style={{ '--icon-index': 5 } as React.CSSProperties}>
                          <div className="tech-icon bg-blue-500/20 hover:scale-125">
                            <SiMui className="text-[10px] xs:text-sm sm:text-base md:text-xl text-blue-500" />
                          </div>
                          <p className="tech-label">MUI</p>
                        </div>
                        <div className="tech-icon-wrapper" style={{ '--icon-index': 6 } as React.CSSProperties}>
                          <div className="tech-icon bg-black border border-white hover:scale-125">
                            <SiVercel className="text-[10px] xs:text-sm sm:text-base md:text-xl text-white" />
                          </div>
                          <p className="tech-label">Vercel</p>
                        </div>
                        <div className="tech-icon-wrapper" style={{ '--icon-index': 7 } as React.CSSProperties}>
                          <div className="tech-icon bg-orange-600/20 hover:scale-125">
                            <FaNodeJs className="text-[10px] xs:text-sm sm:text-base md:text-xl text-orange-600" />
                          </div>
                          <p className="tech-label">Node.js</p>
                        </div>
                        <div className="tech-icon-wrapper" style={{ '--icon-index': 8 } as React.CSSProperties}>
                          <div className="tech-icon bg-[#06B6D4]/20 hover:scale-125">
                            <SiTailwindcss className="text-[10px] xs:text-sm sm:text-base md:text-xl text-[#06B6D4]" />
                          </div>
                          <p className="tech-label">Tailwind CSS</p>
                        </div>
                        <div className="tech-icon-wrapper" style={{ '--icon-index': 9 } as React.CSSProperties}>
                          <div className="tech-icon bg-[#FFCA28]/20 hover:scale-125">
                            <SiFirebase className="text-[10px] xs:text-sm sm:text-base md:text-xl text-[#FFCA28]" />
                          </div>
                          <p className="tech-label">Firebase</p>
                        </div>
                        <div className="tech-icon-wrapper" style={{ '--icon-index': 10 } as React.CSSProperties}>
                          <div className="tech-icon bg-[#1BDBDB]/20 hover:scale-125">
                            <SiGodaddy className="text-[10px] xs:text-sm sm:text-base md:text-xl text-[#1BDBDB]" />
                          </div>
                          <p className="tech-label">GoDaddy</p>
                        </div>
                        <div className="tech-icon-wrapper" style={{ '--icon-index': 11 } as React.CSSProperties}>
                          <div className="tech-icon bg-[#430098]/20 hover:scale-125">
                            <SiHeroku className="text-[10px] xs:text-sm sm:text-base md:text-xl text-[#430098]" />
                          </div>
                          <p className="tech-label">Heroku</p>
                        </div>
                        <div className="tech-icon-wrapper" style={{ '--icon-index': 12 } as React.CSSProperties}>
                          <div className="tech-icon bg-[#181717]/20 border border-gray-700 hover:scale-125">
                            <FaGithub className="text-[10px] xs:text-sm sm:text-base md:text-xl text-white" />
                          </div>
                          <p className="tech-label">GitHub</p>
                        </div>
                        <div className="tech-icon-wrapper" style={{ '--icon-index': 13 } as React.CSSProperties}>
                          <div className="tech-icon bg-[#F05032]/20 hover:scale-125">
                            <FaGitAlt className="text-[10px] xs:text-sm sm:text-base md:text-xl text-[#F05032]" />
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
                      
                      {/* Inner orbit for AI tools */}
                      <div className="tech-orbit-inner">
                        <div className="tech-icon-wrapper-inner" style={{ '--icon-index': 0 } as React.CSSProperties}>
                          <div className="tech-icon bg-[#2563eb]/20 hover:scale-125">
                            <SiGooglecloud />
                          </div>
                          <p className="tech-label">GCP</p>
                        </div>
                        <div className="tech-icon-wrapper-inner" style={{ '--icon-index': 1 } as React.CSSProperties}>
                          <div className="tech-icon bg-yellow-400/20 hover:scale-125">
                            <FaBolt className="text-[8px] xs:text-xs sm:text-sm md:text-base text-yellow-400" />
                          </div>
                          <p className="tech-label">Bolt</p>
                        </div>
                        <div className="tech-icon-wrapper-inner" style={{ '--icon-index': 2 } as React.CSSProperties}>
                          <div className="tech-icon bg-white/10 border border-gray-500 hover:scale-125">
                            <BsBootstrapFill />
                          </div>
                          <p className="tech-label">Copilot</p>
                        </div>
                        <div className="tech-icon-wrapper-inner" style={{ '--icon-index': 3 } as React.CSSProperties}>
                          <div className="tech-icon bg-[#00CED1]/20 hover:scale-125">
                            <SiExpress />
                          </div>
                          <p className="tech-label">Cursor</p>
                        </div>
                        <div className="tech-icon-wrapper-inner" style={{ '--icon-index': 4 } as React.CSSProperties}>
                          <div className="tech-icon bg-blue-500/20 hover:scale-125">
                            <SiGooglegemini className="text-[8px] xs:text-xs sm:text-sm md:text-base text-blue-400" />
                          </div>
                          <p className="tech-label">GenAI</p>
                        </div>
                        <div className="tech-icon-wrapper-inner" style={{ '--icon-index': 5 } as React.CSSProperties}>
                          <div className="tech-icon bg-pink-900 hover:scale-125">
                            <SiStyledcomponents className="text-[32px] lg:text-lg sm:text-sm md:text-base text-yellow-200" />
                          </div>
                          <p className="tech-label">Styled</p>
                        </div>
                        <div className="tech-icon-wrapper-inner" style={{ '--icon-index': 6 } as React.CSSProperties}>
                          <div className="tech-icon bg-pink-500/20 hover:scale-125">
                            <FaSass className="text-[32px] lg:text-lg sm:text-sm md:text-base text-white" />
                          </div>
                          <p className="tech-label">SCSS</p>
                        </div>
                      </div>
                      
                      {/* Center Logo - Static */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <img 
                          src={logoCenter} 
                          alt="Catapp Logo" 
                          className="w-10 h-10 min-w-[40px] min-h-[40px] sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain opacity-90"
                        />
                      </div>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: WordPress Text ===== */}
      <section className="home-snap-section snap-text-center">
                <div 
                  ref={serviceDesc1Ref}
                  className={`w-full flex justify-center transition-all duration-1000 ${
                    serviceDesc1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="rounded-xl p-5 md:p-7 shadow-lg w-full max-w-3xl">
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white leading-relaxed break-words whitespace-pre-line">
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
      </section>

      {/* ===== SECTION 4: CV Service + CV Fan ===== */}
      <section className="home-snap-section snap-compact">
        <div className="w-full flex justify-center items-center bg-transparent relative flex-1">
          <div className="max-w-5xl w-full flex flex-col items-center px-4 justify-center">
                {/* שורה 2: בניית קורות חיים + מניפת קורות חיים */}
                <div className="flex flex-col md:flex-row w-full items-center justify-between gap-1 sm:gap-4 mb-2">
                  <div 
                    ref={serviceImage2Ref}
                    className={`flex-1 flex flex-col items-end text-right transition-all duration-1000 ${
                      serviceImage2Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                  >
                    <div className="relative w-full max-w-[340px] h-[160px] sm:h-[200px] md:h-[280px] mb-2 sm:mb-4 border-2 border-[#1a79f6] rounded-2xl">
                      <img src={buildCvImage} alt="בניית קורות חיים" className="w-full h-full object-cover rounded-2xl shadow-lg" />
                      <div className="absolute inset-0 w-full h-full rounded-2xl bg-black/50"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl sm:text-3xl md:text-5xl font-bold text-center drop-shadow-lg z-10 whitespace-nowrap overflow-hidden">
                        בניית קו"ח
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
                        className="flex-1 bg-white hover:bg-gray-100 text-[#1a79f6] px-4 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg text-center text-sm md:text-base"
                      >
                        למחירון
                      </Link>
                    </div>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    {/* מניפת קורות חיים */}
                    <div 
                      ref={cvFanRef}
                      className={`relative flex-1 flex justify-center items-center min-w-[220px] max-w-[500px] w-full md:w-auto order-2 md:order-1 mt-0 sm:mt-4 md:-mt-8 transition-all duration-1000 ${
                        cvFanVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                    >
                      <div className="relative w-[280px] h-[240px] sm:w-[360px] sm:h-[320px] md:w-[400px] md:h-[340px] flex items-end justify-center">
                        {/* Fan illusion: all images rotate from bottom center, spaced like a clock */}
                        <img src={cvPic6} alt="cv6" className="absolute rounded-xl shadow-lg w-40 sm:w-44 md:w-56 h-auto" style={{ left: '50%', bottom: '0', transform: 'translateX(-50%) rotate(-30deg)', transformOrigin: '50% 100%', zIndex: 6 }} />
                        <img src={cvPic1} alt="cv1" className="absolute rounded-xl shadow-lg w-40 sm:w-44 md:w-56 h-auto" style={{ left: '50%', bottom: '0', transform: 'translateX(-50%) rotate(-20deg)', transformOrigin: '50% 100%', zIndex: 5 }} />
                        <img src={cvPic2} alt="cv2" className="absolute rounded-xl shadow-lg w-40 sm:w-44 md:w-56 h-auto" style={{ left: '50%', bottom: '0', transform: 'translateX(-50%) rotate(-10deg)', transformOrigin: '50% 100%', zIndex: 4 }} />
                        <img src={cvPic3} alt="cv3" className="absolute rounded-xl shadow-lg w-40 sm:w-44 md:w-56 h-auto" style={{ left: '50%', bottom: '0', transform: 'translateX(-50%) rotate(0deg)', transformOrigin: '50% 100%', zIndex: 3 }} />
                        <img src={cvPic4} alt="cv4" className="absolute rounded-xl shadow-lg w-40 sm:w-44 md:w-56 h-auto" style={{ left: '50%', bottom: '0', transform: 'translateX(-50%) rotate(10deg)', transformOrigin: '50% 100%', zIndex: 2 }} />
                        <img src={cvPic5} alt="cv5" className="absolute rounded-xl shadow-lg w-40 sm:w-44 md:w-56 h-auto" style={{ left: '50%', bottom: '0', transform: 'translateX(-50%) rotate(20deg)', transformOrigin: '50% 100%', zIndex: 1 }} />
                      </div>
                    </div>
                  </div>
                </div>

          </div>
        </div>
      </section>

      {/* ===== SECTION 5: CV Text ===== */}
      <section className="home-snap-section snap-text-center">
                <div 
                  ref={serviceDesc2Ref}
                  className={`w-full flex justify-center transition-all duration-1000 ${
                    serviceDesc2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="rounded-xl p-5 md:p-7 shadow-lg w-full max-w-3xl">
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white leading-relaxed break-words whitespace-pre-line">
                      אנחנו מייצרים קורות חיים
                      <span className="text-[#1a79f6]"> שעוברים כל סינון </span>
                      אוטומטי
                      <span className="text-[#1a79f6]"> ושהכי בולטים </span>
                      למגייסים
                    </p>
                  </div>
                </div>
      </section>

      {/* ===== SECTION 6: Process Steps ===== */}
      <section className="home-snap-section snap-compact">
      {(() => {
        // קו מתקדם בצבע כחול - אנימציה כשהסקשן נכנס לתצוגה
        const processRef = useRef<HTMLDivElement>(null);
        const [activeStep, setActiveStep] = useState(-1); // -1 = none, 0-5 = step index
        const isVisibleRef = useRef(false);
        const animTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

        useEffect(() => {
          const container = snapContainerRef.current;
          if (!container) return;
          
          const handleScroll = () => {
            if (!processRef.current) return;
            const rect = processRef.current.getBoundingClientRect();
            const windowH = window.innerHeight;
            
            // When section is visible (snapped into view), start step-by-step animation
            if (rect.top >= -50 && rect.top <= windowH * 0.3) {
              if (!isVisibleRef.current) {
                isVisibleRef.current = true;
                // Animate step by step over ~3.5s (580ms per step)
                const totalSteps = 6;
                const delayPerStep = 580;
                animTimers.current.forEach(t => clearTimeout(t));
                animTimers.current = [];
                for (let i = 0; i < totalSteps; i++) {
                  const timer = setTimeout(() => setActiveStep(i), (i + 1) * delayPerStep);
                  animTimers.current.push(timer);
                }
              }
            } else if (rect.top > windowH) {
              isVisibleRef.current = false;
              setActiveStep(-1);
              animTimers.current.forEach(t => clearTimeout(t));
              animTimers.current = [];
            }
          };
          
          container.addEventListener('scroll', handleScroll);
          handleScroll();
          return () => {
            container.removeEventListener('scroll', handleScroll);
            animTimers.current.forEach(t => clearTimeout(t));
          };
        }, []);

        // Calculate progress as fraction (0 to 1) based on activeStep
        const progress = activeStep < 0 ? 0 : (activeStep + 1) / 6;

        return (
          <div 
            ref={processRef}
            className="w-full flex justify-center items-center relative px-4 sm:px-6 flex-1"
          >
            <div className="max-w-3xl w-full flex flex-col items-center">
              <h2 className="text-xl sm:text-2xl md:text-[1.6rem] font-bold text-[#1a79f6] mb-2 md:mb-3 text-center">התהליך שלנו</h2>
              <div className="relative flex w-full">
                {/* Vertical line - לבן מלא בלבד (נגמר בדיוק בקו התחתון של המלבן האחרון) */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2.5 sm:w-3 md:w-3 bg-white rounded-full z-0" style={{ height: 'calc(100% - 30px)', minHeight: 0 }} />
                {/* קו כחול דק מעל הקו הלבן, מוצג רק לפי התקדמות הגלילה */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2.5 sm:w-3 md:w-3 pointer-events-none z-10" style={{ height: 'calc(100% - 30px)' }}>
                  <div className="absolute left-1/2 -translate-x-1/2 w-2 sm:w-2.5 md:w-2.5 bg-gradient-to-b from-[#1a79f6] to-blue-400 rounded-full transition-all duration-[600ms] ease-out" style={{ height: `${progress * 100}%`, minHeight: 0, top: 0, opacity: progress > 0 ? 1 : 0 }} />
                </div>
                <div className="flex flex-col gap-2 md:gap-3 w-full z-20">
                  {/* שלבים */}
                  {[
                    {
                      icon: <Phone className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#1a79f6] bg-white rounded-full shadow-lg p-0.5 sm:p-1 md:p-1.5" />,
                      title: 'פנייה ראשונית',
                      desc: 'שיחה קצרה להיכרות והבנת הצורך.'
                    },
                    {
                      icon: <FileText className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#1a79f6] bg-white rounded-full shadow-lg p-0.5 sm:p-1 md:p-1.5" />,
                      title: 'אפיון האתר',
                      desc: 'מגדירים יחד מה האתר יכלול.'
                    },
                    {
                      icon: <Palette className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#1a79f6] bg-white rounded-full shadow-lg p-0.5 sm:p-1 md:p-1.5" />,
                      title: 'איסוף חומרים',
                      desc: 'מקבלים חומרים ומעצבים דף בית.'
                    },
                    {
                      icon: <Briefcase className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#1a79f6] bg-white rounded-full shadow-lg p-0.5 sm:p-1 md:p-1.5" />,
                      title: 'פיתוח האתר',
                      desc: 'הופכים את ההדמיה לאתר חי.'
                    },
                    {
                      icon: <Scale className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#1a79f6] bg-white rounded-full shadow-lg p-0.5 sm:p-1 md:p-1.5" />,
                      title: 'בדיקות ותיקונים',
                      desc: 'בודקים ומוודאים שהאתר מושלם.'
                    },
                    {
                      icon: <Star className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#1a79f6] bg-white rounded-full shadow-lg p-0.5 sm:p-1 md:p-1.5" />,
                      title: 'עלייה לאוויר',
                      desc: 'האתר באוויר – מזל טוב !!!'
                    },
                  ].map((step, idx) => {
                    // קובע האם המלבן מימין (זוגי) או משמאל (אי-זוגי)
                    const isRight = idx % 2 === 0;
                    // Calculate the progress for each step (icon)
                    const isActive = idx <= activeStep;
                    return (
                      <div key={idx} className="flex items-center w-full relative" style={{ minHeight: 'clamp(40px, 8vh, 58px)' }}>
                        {/* מלבן טקסט מימין */}
                        {isRight && (
                          <div className="flex-1 flex justify-end pr-1 sm:pr-3 mr-2 sm:mr-4 md:mr-6">
                            <div className="border-[#1a79f6] border-[1.5px] rounded-xl sm:rounded-2xl shadow-md text-right"
                              style={{ 
                                maxWidth: 'clamp(85px, 33vw, 230px)',
                                padding: 'clamp(0.15rem, 1.2vw, 0.6rem)'
                              }}>
                              <div className="font-bold text-[#1a79f6]" style={{ fontSize: 'clamp(0.5rem, 1.8vw, 0.8rem)', marginBottom: 'clamp(0px, 0.4vw, 3px)' }}>{step.title}</div>
                              <div className="text-white" style={{ fontSize: 'clamp(0.45rem, 1.6vw, 0.7rem)', lineHeight: 1.3 }}>{step.desc}</div>
                            </div>
                          </div>
                        )}
                        {/* אייקון ממורכז על הציר */}
                        <div className="flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/2 z-30" style={{top: 0, minWidth: 'clamp(55px, 14vw, 110px)'}}>
                          <div className={`flex items-center justify-center rounded-full transition-all duration-500 ${isActive ? 'bg-[#1a79f6]' : 'bg-white'} shadow-lg`} style={{ width: 'clamp(28px, 6vw, 45px)', height: 'clamp(28px, 6vw, 45px)' }}>
                            {React.cloneElement(step.icon, {
                              className: `w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 ${isActive ? 'text-white' : 'text-[#1a79f6]'}`
                            })}
                          </div>
                        </div>
                        {/* מלבן טקסט משמאל */}
                        {!isRight && (
                          <div className="flex-1 flex justify-start pl-1 sm:pl-3 ml-2 sm:ml-4 md:ml-6">
                            <div className="border-[#1a79f6] border-[1.5px] rounded-xl sm:rounded-2xl shadow-md text-right"
                              style={{ 
                                maxWidth: 'clamp(85px, 33vw, 230px)',
                                padding: 'clamp(0.15rem, 1.2vw, 0.6rem)'
                              }}>
                              <div className="font-bold text-[#1a79f6]" style={{ fontSize: 'clamp(0.5rem, 1.8vw, 0.8rem)', marginBottom: 'clamp(0px, 0.4vw, 3px)' }}>{step.title}</div>
                              <div className="text-white" style={{ fontSize: 'clamp(0.45rem, 1.6vw, 0.7rem)', lineHeight: 1.3 }}>{step.desc}</div>
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
      </section>

      {/* ===== SECTION 7: Happy Clients ===== */}
      <section className="home-snap-section">
      <div className="w-full flex justify-center items-center overflow-hidden">
        <div className="max-w-3xl w-full flex flex-col items-center px-4">
          <div 
            ref={happyClientsRef}
            className={`w-full flex flex-col items-center py-4 transition-all duration-1000 ${
              happyClientsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-lg sm:text-2xl md:text-4xl font-bold text-[#1a79f6] mb-4 sm:mb-8 text-center">מבין לקוחותינו המרוצים</h2>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 md:gap-8">
              <div className="flex items-center justify-center h-20 w-20 sm:h-28 sm:w-28 md:h-40 md:w-40 mx-1 sm:mx-2 p-1 sm:p-2 md:p-3">
                <img src={benjiLogo} alt="בנג'י" className="max-h-16 max-w-16 sm:max-h-24 sm:max-w-24 md:max-h-32 md:max-w-32 object-contain" />
              </div>
              <div className="flex items-center justify-center h-20 w-20 sm:h-28 sm:w-28 md:h-40 md:w-40 mx-1 sm:mx-2 p-1 sm:p-2 md:p-3">
                <img src={maakafLogo} alt="מעקף" className="max-h-20 max-w-20 sm:max-h-28 sm:max-w-28 md:max-h-40 md:max-w-40 object-contain" />
              </div>
              <div className="flex items-center justify-center h-20 w-20 sm:h-28 sm:w-28 md:h-40 md:w-40 mx-1 sm:mx-2 p-1 sm:p-2 md:p-3">
                <img src={mosheLogo} alt="משה" className="max-h-16 max-w-16 sm:max-h-24 sm:max-w-24 md:max-h-32 md:max-w-32 object-contain" style={{borderRadius: '20%'}} />
              </div>
              <div className="flex items-center justify-center h-20 w-20 sm:h-28 sm:w-28 md:h-40 md:w-40 mx-1 sm:mx-2 p-1 sm:p-2 md:p-3">
                <img src={officeLogo} alt="משרד עורכי דין" className="max-h-24 max-w-24 sm:max-h-32 sm:max-w-32 md:max-h-48 md:max-w-48 object-contain" style={{borderRadius: '4%', border: '1px solid white'}} />
              </div>
              <div className="flex items-center justify-center h-20 w-60 sm:h-30 sm:w-30 md:h-34 md:w-34 mx-1 sm:mx-2 p-1 sm:p-2 md:p-3">
                <img src={codersClanLogo} alt="Coders Clan" className="max-h-24 max-w-64 sm:max-h-34 sm:max-w-66 md:max-h-48 md:max-w-72 object-contain" style={{borderRadius: '20%'}} />
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* ===== SECTION 8: Values ===== */}
      <section className="home-snap-section">
      <div
        ref={valuesRef}
        className="w-full flex justify-center items-center relative flex-1"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-4 sm:py-6 md:py-10">
          <div className="text-center mb-3 sm:mb-6">
            <div ref={valuesHeaderRef}>
              <h2 className={`text-lg sm:text-2xl md:text-4xl font-bold text-[#1a79f6] mb-1 sm:mb-2 transition-all duration-1000 ${
                valuesHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                הערכים שמנחים אותנו
              </h2>
            </div>
            
          </div>

          <div 
            ref={valuesContainerRef}
            className={`grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-6 max-w-6xl mx-auto transition-all duration-1000 ${
              valuesContainerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* שקיפות */}
            <div
              className={`bg-white/5 backdrop-blur-sm border border-[#1a79f6]/30 rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-5 text-center hover:border-[#1a79f6]/60 hover:transform hover:scale-105 transition-all duration-300 ${
                valuesAnimated ? 'animate-fadeFromTop' : 'opacity-0'
              }`}
              style={
                valuesAnimated
                  ? { animationDelay: '0.2s', animationFillMode: 'forwards' }
                  : {}
              }
            >
              <div className="mb-1 sm:mb-2 flex justify-center"><Eye className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#1a79f6]" /></div>
              <h3 className="text-xs sm:text-sm md:text-base font-bold text-white mb-0.5">
                שקיפות
              </h3>
              <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm">תקשורת פתוחה וברורה לאורך כל הדרך</p>
            </div>

            {/* זמינות */}
            <div
              className={`bg-white/5 backdrop-blur-sm border border-[#1a79f6]/30 rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-5 text-center hover:border-[#1a79f6]/60 hover:transform hover:scale-105 transition-all duration-300 ${
                valuesAnimated ? 'animate-fadeFromTop' : 'opacity-0'
              }`}
              style={
                valuesAnimated
                  ? { animationDelay: '0.4s', animationFillMode: 'forwards' }
                  : {}
              }
            >
              <div className="mb-1 sm:mb-2 flex justify-center"><Clock className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#1a79f6]" /></div>
              <h3 className="text-xs sm:text-sm md:text-base font-bold text-white mb-0.5">
                זמינות
              </h3>
              <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm">תמיד כאן לענות, לעזור ולתמוך</p>
            </div>

            {/* קידמה */}
            <div
              className={`bg-white/5 backdrop-blur-sm border border-[#1a79f6]/30 rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-5 text-center hover:border-[#1a79f6]/60 hover:transform hover:scale-105 transition-all duration-300 ${
                valuesAnimated ? 'animate-fadeFromTop' : 'opacity-0'
              }`}
              style={
                valuesAnimated
                  ? { animationDelay: '0.6s', animationFillMode: 'forwards' }
                  : {}
              }
            >
              <div className="mb-1 sm:mb-2 flex justify-center"><TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#1a79f6]" /></div>
              <h3 className="text-xs sm:text-sm md:text-base font-bold text-white mb-0.5">
                קידמה
              </h3>
              <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm">טכנולוגיות חדשניות ועדכניות</p>
            </div>

            {/* מהירות */}
            <div
              className={`bg-white/5 backdrop-blur-sm border border-[#1a79f6]/30 rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-5 text-center hover:border-[#1a79f6]/60 hover:transform hover:scale-105 transition-all duration-300 ${
                valuesAnimated ? 'animate-fadeFromTop' : 'opacity-0'
              }`}
              style={
                valuesAnimated
                  ? { animationDelay: '0.8s', animationFillMode: 'forwards' }
                  : {}
              }
            >
              <div className="mb-1 sm:mb-2 flex justify-center"><Zap className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#1a79f6]" /></div>
              <h3 className="text-xs sm:text-sm md:text-base font-bold text-white mb-0.5">
                מהירות
              </h3>
              <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm">עבודה יעילה ומסירה בזמן</p>
            </div>

            {/* התאמה אישית */}
            <div
              className={`bg-white/5 backdrop-blur-sm border border-[#1a79f6]/30 rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-5 text-center hover:border-[#1a79f6]/60 hover:transform hover:scale-105 transition-all duration-300 ${
                valuesAnimated ? 'animate-fadeFromTop' : 'opacity-0'
              }`}
              style={
                valuesAnimated
                  ? { animationDelay: '1s', animationFillMode: 'forwards' }
                  : {}
              }
            >
              <div className="mb-1 sm:mb-2 flex justify-center"><Palette className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#1a79f6]" /></div>
              <h3 className="text-xs sm:text-sm md:text-base font-bold text-white mb-0.5">
                התאמה אישית
              </h3>
              <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm">עיצוב ובנייה לפי הבקשות והצרכים שלכם</p>
            </div>

            {/* מחירים הוגנים */}
            <div
              className={`bg-white/5 backdrop-blur-sm border border-[#1a79f6]/30 rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-5 text-center hover:border-[#1a79f6]/60 hover:transform hover:scale-105 transition-all duration-300 ${
                valuesAnimated ? 'animate-fadeFromTop' : 'opacity-0'
              }`}
              style={
                valuesAnimated
                  ? { animationDelay: '1.2s', animationFillMode: 'forwards' }
                  : {}
              }
            >
              <div className="mb-1 sm:mb-2 flex justify-center"><DollarSign className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#1a79f6]" /></div>
              <h3 className="text-xs sm:text-sm md:text-base font-bold text-white mb-0.5">
                מחירים הוגנים
              </h3>
              <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm">שקילאה ללא עלויות נסתרות</p>
            </div>

            {/* אחריות */}
            <div
              className={`bg-white/5 backdrop-blur-sm border border-[#1a79f6]/30 rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-5 text-center hover:border-[#1a79f6]/60 hover:transform hover:scale-105 transition-all duration-300 ${
                valuesAnimated ? 'animate-fadeFromTop' : 'opacity-0'
              }`}
              style={
                valuesAnimated
                  ? { animationDelay: '1.4s', animationFillMode: 'forwards' }
                  : {}
              }
            >
              <div className="mb-1 sm:mb-2 flex justify-center"><Shield className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#1a79f6]" /></div>
              <h3 className="text-xs sm:text-sm md:text-base font-bold text-white mb-0.5">
                אחריות
              </h3>
              <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm">עומדים מאחורי העבודה שלנו</p>
            </div>

            {/* הגדלת ראש */}
            <div
              className={`bg-white/5 backdrop-blur-sm border border-[#1a79f6]/30 rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-5 text-center hover:border-[#1a79f6]/60 hover:transform hover:scale-105 transition-all duration-300 ${
                valuesAnimated ? 'animate-fadeFromTop' : 'opacity-0'
              }`}
              style={
                valuesAnimated
                  ? { animationDelay: '1.6s', animationFillMode: 'forwards' }
                  : {}
              }
            >
              <div className="mb-1 sm:mb-2 flex justify-center"><Star className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#1a79f6]" /></div>
              <h3 className="text-xs sm:text-sm md:text-base font-bold text-white mb-0.5">
                הגדלת ראש
              </h3>
              <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm">ההצלחה שלכם זו ההצלחה שלנו</p>
            </div>
          </div>

          <div 
            ref={aboutBtnRef}
            className={`text-center mt-4 transition-all duration-1000 ${
              aboutBtnVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Link
              to="/about-full"
              className="bg-gradient-to-r from-[#1a79f6] to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg text-xs md:text-sm"
            >
              קרא עוד על החברה
            </Link>
          </div>
        </div>
      </div>
      </section>

      {/* ===== SECTION 9: Recommendations ===== */}
      <section className="home-snap-section">
      <div className="w-full flex justify-center items-center">
        <div className="max-w-3xl w-full flex flex-col items-center px-4">
          <div ref={recommendationsHeaderRef}>
            <h2 className={`text-lg sm:text-2xl md:text-4xl font-bold text-[#1a79f6] mb-4 sm:mb-8 md:mb-10 text-center transition-all duration-1000 ${
              recommendationsHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>המלצות</h2>
          </div>
          <div 
            ref={recommendationsRef}
            className={`w-full relative overflow-hidden transition-all duration-1000 ${
              recommendationsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Recommendations Carousel Container */}
            <div className="relative min-h-[180px] sm:min-h-[240px] md:min-h-[280px]">
              {/* Recommendation 1 - אור בנג'י */}
              <div 
                className={`absolute w-full transition-all duration-700 ease-in-out ${
                  currentRecommendation === 0 
                    ? 'opacity-100 translate-x-0' 
                    : currentRecommendation === 3 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="bg-white/0 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 text-right transition-all duration-300 hover:shadow-2xl">
                  <p className="text-sm sm:text-base md:text-xl text-white leading-relaxed mb-2 sm:mb-4 font-medium">
                    פנינו לחברת Catapp עבור הקמת דף נחיתה לעסק, וכבר מהרגע הראשון היה ברור שעשינו את ההחלטה הנכונה. הכל נעשה בצורה הכי מקצועית, יעילה ומדויקת תוך הקשבה לצרכים שלנו ומתן מענה מהיר לכל שאלה. שילוב נפלא של עבודה ברמה גבוהה ויחס נהדר ללקוח. בהחלט אמליץ לכל מי שמחפש- הגעתם למקום הנכון.
                  </p>
                  <div className="flex items-center justify-end gap-2 sm:gap-3">
                    <span className="font-bold text-[#1a79f6] text-xs sm:text-sm md:text-lg">אור בנג'י פסיכותרפיה</span>
                    <Star className="w-5 h-5 text-yellow-400" />
                  </div>
                </div>
              </div>

              {/* Recommendation 2 - יאיר אהרוני */}
              <div 
                className={`absolute w-full transition-all duration-700 ease-in-out ${
                  currentRecommendation === 1 
                    ? 'opacity-100 translate-x-0' 
                    : currentRecommendation === 0 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="bg-white/0 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 text-right transition-all duration-300 hover:shadow-2xl">
                  <p className="text-sm sm:text-base md:text-xl text-white leading-relaxed mb-2 sm:mb-4 font-medium">
                    ברצוני להודות לחברת Catapp על ליווי מקצועי ואישי ברמה גבוהה, עם תשומת לב אמיתית לפרטים והבנה עמוקה של הצרכים שלי. התהליך היה מסודר, ברור ויעיל, והתוצאה – קורות חיים איכותיים שמציגים אותי בצורה מדויקת ומרשימה. שירות ברמה הגבוהה ביותר – מומלץ בחום.
                  </p>
                  <div className="flex items-center justify-end gap-2 sm:gap-3">
                    <span className="font-bold text-[#1a79f6] text-xs sm:text-sm md:text-lg">יאיר אהרוני, סטודנט להנדסת חשמל ואלקטרוניקה</span>
                    <Star className="w-5 h-5 text-yellow-400" />
                  </div>
                </div>
              </div>

              {/* Recommendation 3 - רפאל סבג */}
              <div 
                className={`absolute w-full transition-all duration-700 ease-in-out ${
                  currentRecommendation === 2 
                    ? 'opacity-100 translate-x-0' 
                    : currentRecommendation === 1 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="bg-white/0 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 text-right transition-all duration-300 hover:shadow-2xl">
                  <p className="text-sm sm:text-base md:text-xl text-white leading-relaxed mb-2 sm:mb-4 font-medium">
                    עבדתי עם Catapp על בניית האתר, ואין ספק שעשיתי בחירה מצוינת. קיבלתי יחס אישי, זמינות מלאה והקשבה אמיתית לצרכים שלי. העבודה בוצעה במהירות, במקצועיות ובדיוק כפי שסוכם – והתוצאה עלתה על הציפיות. ממליץ מכל הלב
                  </p>
                  <div className="flex items-center justify-end gap-2 sm:gap-3">
                    <span className="font-bold text-[#1a79f6] text-xs sm:text-sm md:text-lg">רפאל סבג, בעלים של משרד עו"ד</span>
                    <Star className="w-5 h-5 text-yellow-400" />
                  </div>
                </div>
              </div>

              {/* Recommendation 4 - אוריאל */}
              <div 
                className={`absolute w-full transition-all duration-700 ease-in-out ${
                  currentRecommendation === 3 
                    ? 'opacity-100 translate-x-0' 
                    : currentRecommendation === 2 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="bg-white/0 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 text-right transition-all duration-300 hover:shadow-2xl">
                  <p className="text-sm sm:text-base md:text-xl text-white leading-relaxed mb-2 sm:mb-4 font-medium">
                    חברת Catapp העבירה לקהילה שלנו הרצאה יוצאת דופן ומקיפה ביותר על כתיבת קו"ח. ההרצאה הייתה מלאה בתוכן משמעותי ופרקטי עם דוגמאות מעשיות. ממליץ בחום רב!
                  </p>
                  <div className="flex items-center justify-end gap-2 sm:gap-3">
                    <span className="font-bold text-[#1a79f6] text-xs sm:text-sm md:text-lg">אוריאל, מנהל קהילת מעקף</span>
                    <Star className="w-5 h-5 text-yellow-400" />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Button to all testimonials */}
          <div 
            ref={testimonialsBtnRef}
            className={`text-center mt-4 sm:mt-6 md:mt-10 transition-all duration-1000 ${
              testimonialsBtnVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Link
              to="/testimonials"
              className="inline-block bg-gradient-to-r from-[#1a79f6] to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 md:px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              לכל ההמלצות
            </Link>
          </div>
        </div>
      </div>
      </section>

      {/* ===== SECTION 10: Footer ===== */}
      <section className="home-snap-section snap-footer">
        <Footer />
      </section>

    </div>
  );
};

export default HomePage;
