import React from 'react';
import { FileText, Users, Bot, Edit, Briefcase, Video, Mic, Sparkles, MessageCircle, X, Award, Heart, Target } from 'lucide-react';

const CVServicesPage: React.FC = () => {
  const [currentMythIndex, setCurrentMythIndex] = React.useState(0);
  const [mythVisible, setMythVisible] = React.useState(true);
  const [experienceVisible, setExperienceVisible] = React.useState(false);
  const [currentExpIndex, setCurrentExpIndex] = React.useState(0);
  const [expIconVisible, setExpIconVisible] = React.useState(true);
  
  const experienceRef = React.useRef<HTMLDivElement>(null);

  // Scroll reveal effect
  React.useEffect(() => {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  
  const myths = [
    { text: 'חסר לך ניסיון', counter: 'גם סניורים מתקשים למצוא עבודה היום' },
    { text: 'חסר לך כישורים', counter: 'יש משרות רבות שלא דורשות הרבה' },
    { text: 'הביקוש מעט', counter: 'מאות חברות הייטק בישראל צמאות לעובדים' },
    { text: 'אין לך תואר', counter: '50% מהעובדים בהייטק היום הם בלי תואר' },
    { text: 'אתה סטודנט', counter: 'יש משרות סטודנט בשפע בשוק' },
  ];

  const experiences = [
    { icon: Briefcase, text: 'ניסיון בגיוס עובדים' },
    { icon: FileText, text: 'עריכת מאות קורות חיים' },
    { icon: Heart, text: 'לקוחות רבים מרוצים' },
  ];

  // Myths rotation animation
  React.useEffect(() => {
    const interval = setInterval(() => {
      setMythVisible(false);
      setTimeout(() => {
        setCurrentMythIndex((prev) => (prev + 1) % myths.length);
        setMythVisible(true);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for experience section
  React.useEffect(() => {
    const section = experienceRef.current;
    if (!section) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setExperienceVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Experience icons rotation
  React.useEffect(() => {
    if (!experienceVisible) return;
    
    const interval = setInterval(() => {
      setExpIconVisible(false);
      setTimeout(() => {
        setCurrentExpIndex((prev) => (prev + 1) % experiences.length);
        setExpIconVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, [experienceVisible]);

  const CurrentExpIcon = experiences[currentExpIndex].icon;

  return (
    <div className="min-h-screen pt-16">
      
      {/* Hero - The Story Begins */}
      <section className="py-20 sm:py-28 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto scroll-reveal">
          <h1 className="text-[2.5rem] xs:text-5xl sm:text-6xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight cv-hero-title">
            להתקבל לעבודה
            <br />
            <span className="text-[#1a79f6]">זה קשה.</span>
          </h1>
          <p className="text-2xl xs:text-3xl sm:text-4xl md:text-3xl text-gray-300 mb-4 cv-subtitle">
            במיוחד בהייטק.
          </p>
          <p className="text-xl xs:text-2xl sm:text-3xl md:text-2xl text-gray-400 cv-text">
            צריך ידע. צריך ניסיון. צריך להוכיח את עצמך.
          </p>
        </div>
      </section>

      {/* The Challenge Today */}
      <section className="py-20 sm:py-28 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-red-950/20">
        <div className="text-center max-w-5xl mx-auto scroll-reveal">
          <p className="text-2xl xs:text-3xl sm:text-4xl md:text-3xl text-gray-300 mb-6 cv-subtitle">
            וכיום?
          </p>
          <h2 className="text-[2.5rem] xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight cv-hero-title">
            האתגר
            <br />
            <span className="text-red-400">גדול אף יותר.</span>
          </h2>
        </div>
      </section>

      {/* Myths Section - What's NOT the reason */}
      <section className="py-20 sm:py-28 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto scroll-reveal">
          <p className="text-xl xs:text-2xl sm:text-3xl md:text-2xl text-gray-400 mb-8 cv-text">
            אבל לא בגלל מה שאתם חושבים...
          </p>
          
          <div className="min-h-[160px] sm:min-h-[200px] flex flex-col items-center justify-center">
            <div className={`transition-all duration-500 ${mythVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4">
                <X className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-14 md:h-14 text-red-500" />
                <span className="text-[1.75rem] xs:text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-bold text-red-400 cv-myth-title">
                  לא כי {myths[currentMythIndex].text}
                </span>
              </div>
              <p className="text-xl xs:text-2xl sm:text-3xl md:text-2xl text-gray-300 cv-text">
                {myths[currentMythIndex].counter}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Real Problem */}
      <section className="py-20 sm:py-28 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-purple-950/20">
        <div className="text-center max-w-5xl mx-auto scroll-reveal">
          <p className="text-2xl xs:text-3xl sm:text-4xl md:text-3xl text-gray-300 mb-6 cv-subtitle">
            הבעיה האמיתית?
          </p>
          <h2 className="text-[2.5rem] xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight cv-hero-title">
            אפילו להשיג
            <br />
            <span className="text-purple-400">זימון לראיון</span>
            <br />
            נהיה נדיר.
          </h2>
          <div className="mt-8 p-5 sm:p-6 bg-purple-500/10 border border-purple-500/30 rounded-2xl max-w-2xl mx-auto">
            <p className="text-xl xs:text-2xl sm:text-3xl md:text-2xl font-bold text-purple-300 cv-text">
              זה החסם הגדול ביותר כיום.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 sm:py-28 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto scroll-reveal">
          <p className="text-xl xs:text-2xl sm:text-3xl md:text-2xl text-gray-400 mb-6 cv-text">
            לכן זה מה שדורש יותר השקעה וזמן.
          </p>
          <h2 className="text-[2.5rem] xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight cv-hero-title">
            ומה שמביא ראיונות?
          </h2>
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <FileText className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-24 md:h-24 text-[#1a79f6]" />
            <span className="text-5xl xs:text-6xl sm:text-7xl md:text-6xl lg:text-7xl font-bold text-[#1a79f6]">
              קו"ח
            </span>
          </div>
        </div>
      </section>

      {/* Here We Come In */}
      <section className="py-20 sm:py-28 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-cyan-950/20">
        <div className="text-center max-w-5xl mx-auto scroll-reveal">
          <h2 className="text-[2.75rem] xs:text-5xl sm:text-6xl md:text-5xl lg:text-7xl font-bold text-white mb-6 cv-hero-title">
            וכאן
            <br />
            <span className="text-cyan-400">אנחנו נכנסים.</span>
          </h2>
        </div>
      </section>

      {/* Our Experience - Fading Icons */}
      <section 
        ref={experienceRef}
        className="py-20 sm:py-28 flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-5xl mx-auto scroll-reveal">
          <div className={`transition-all duration-700 ${experienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="min-h-[140px] sm:min-h-[180px] flex flex-col items-center justify-center">
              <div className={`transition-all duration-400 ${expIconVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <CurrentExpIcon className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-28 md:h-28 text-[#1a79f6] mb-4 mx-auto" />
                <p className="text-[1.75rem] xs:text-4xl sm:text-5xl md:text-4xl font-bold text-white cv-exp-title">
                  {experiences[currentExpIndex].text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Standard */}
      <section className="py-20 sm:py-28 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-green-950/20">
        <div className="text-center max-w-5xl mx-auto scroll-reveal">
          <Award className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-24 md:h-24 text-green-400 mb-6 mx-auto" />
          <h2 className="text-[1.75rem] xs:text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight cv-section-title">
            אנחנו מגדירים
            <br />
            <span className="text-green-400">סטנדרט אחיד ופשוט</span>
            <br />
            לקו"ח
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mt-8">
            <div className="p-5 bg-green-500/10 border border-green-500/30 rounded-2xl">
              <Bot className="w-12 h-12 xs:w-14 xs:h-14 sm:w-12 sm:h-12 text-green-400 mb-3 mx-auto" />
              <p className="text-xl xs:text-2xl sm:text-xl text-white font-bold">
                עובר כל סינון ATS
              </p>
            </div>
            <div className="p-5 bg-green-500/10 border border-green-500/30 rounded-2xl">
              <Users className="w-12 h-12 xs:w-14 xs:h-14 sm:w-12 sm:h-12 text-green-400 mb-3 mx-auto" />
              <p className="text-xl xs:text-2xl sm:text-xl text-white font-bold">
                בולט מול HR
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Goal */}
      <section className="py-20 sm:py-28 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto scroll-reveal">
          <Target className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-24 md:h-24 text-orange-400 mb-6 mx-auto" />
          <h2 className="text-[1.75rem] xs:text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight cv-section-title">
            המטרה שלנו?
          </h2>
          <p className="text-xl xs:text-2xl sm:text-3xl md:text-2xl text-gray-300 mb-6 leading-relaxed cv-text">
            שתלמדו את החברים שלכם
            <br />
            איך לכתוב קו"ח
          </p>
          <div className="p-5 sm:p-6 bg-orange-500/10 border border-orange-500/30 rounded-2xl max-w-2xl mx-auto">
            <p className="text-xl xs:text-2xl sm:text-3xl md:text-2xl font-bold text-orange-300 cv-text">
              ושלא תצטרכו אותנו!
            </p>
            <p className="text-lg xs:text-xl sm:text-2xl md:text-xl text-gray-400 mt-3">
              אמיתי לגמרי. 💯
            </p>
          </div>
        </div>
      </section>

      {/* The Price */}
      <section className="py-20 sm:py-28 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-[#1a79f6]/10">
        <div className="text-center max-w-5xl mx-auto scroll-reveal">
          <p className="text-2xl xs:text-3xl sm:text-4xl md:text-3xl text-gray-300 mb-6 cv-subtitle">
            והמחיר?
          </p>
          <h2 className="text-[2.75rem] xs:text-5xl sm:text-6xl md:text-5xl lg:text-7xl font-bold text-white mb-4 cv-hero-title">
            פשוט
            <br />
            <span className="text-[#1a79f6]">מצחיק.</span>
          </h2>
        </div>
      </section>

      {/* Price Details */}
      <section className="py-20 sm:py-28 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto scroll-reveal">
          <div className="p-6 sm:p-10 bg-gradient-to-br from-[#1a79f6]/20 to-purple-600/20 border-2 border-[#1a79f6]/50 rounded-3xl">
            <Video className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-16 md:h-16 text-[#1a79f6] mb-4 mx-auto" />
            <div className="text-5xl xs:text-6xl sm:text-7xl md:text-6xl lg:text-7xl font-bold text-white mb-3">
              200 ₪
            </div>
            <p className="text-xl xs:text-2xl sm:text-3xl md:text-2xl text-gray-300 mb-6 cv-text">
              מפגש זום של שעה
              <br />
              מקיף על קו"ח
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 p-4 sm:p-5 bg-yellow-500/20 border border-yellow-500/40 rounded-2xl">
              <Sparkles className="w-8 h-8 xs:w-10 xs:h-10 sm:w-8 sm:h-8 text-yellow-400" />
              <span className="text-lg xs:text-xl sm:text-xl md:text-lg font-bold text-yellow-300 text-center">
                + בונוס על לינקדאין בחינם!
              </span>
            </div>
          </div>
          
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1a79f6] to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-xl xs:text-2xl sm:text-xl py-4 sm:py-5 px-8 sm:px-12 rounded-2xl shadow-xl transition-all transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              בואו נדבר
            </a>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto scroll-reveal">
          <h2 className="text-[1.75rem] xs:text-4xl sm:text-4xl md:text-3xl font-bold text-white text-center mb-8 cv-section-title">
            שירותים נוספים
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {/* Lectures */}
            <div className="p-5 sm:p-6 bg-orange-500/10 border border-orange-500/30 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Mic className="w-8 h-8 xs:w-10 xs:h-10 sm:w-8 sm:h-8 text-orange-400" />
                <h3 className="text-xl xs:text-2xl sm:text-xl font-bold text-white">הרצאות וסדנאות</h3>
              </div>
              <p className="text-gray-300 text-base xs:text-lg sm:text-base mb-3">
                לארגונים, חברות, קהילות הייטק ותוכניות הכשרה
              </p>
              <a href="/contact" className="text-orange-400 font-bold hover:text-orange-300 transition-colors text-base xs:text-lg sm:text-base">
                צור קשר להזמנה →
              </a>
            </div>
            
            {/* CV Writing */}
            <div className="p-5 sm:p-6 bg-purple-500/10 border border-purple-500/30 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Edit className="w-8 h-8 xs:w-10 xs:h-10 sm:w-8 sm:h-8 text-purple-400" />
                <h3 className="text-xl xs:text-2xl sm:text-xl font-bold text-white">כתיבת קו"ח</h3>
              </div>
              <p className="text-gray-300 text-base xs:text-lg sm:text-base mb-3">
                הערות, שכתוב מקצועי או בנייה מאפס
              </p>
              <p className="text-purple-300 font-bold text-lg xs:text-xl sm:text-lg">
                החל מ-50₪
              </p>
            </div>
          </div>
          
          {/* Final CTA */}
          <div className="text-center p-6 sm:p-10 bg-gradient-to-r from-[#1a79f6]/20 to-purple-600/20 border border-[#1a79f6]/40 rounded-3xl">
            <h3 className="text-[1.75rem] xs:text-3xl sm:text-4xl md:text-3xl font-bold text-white mb-4 cv-section-title">
              מוכנים להתחיל?
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-[#1a79f6] text-white hover:bg-blue-700 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all text-base xs:text-lg sm:text-base"
              >
                צור קשר
              </a>
              <a 
                href="https://wa.me/972556611594" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all text-base xs:text-lg sm:text-base"
              >
                וואטסאפ
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CVServicesPage;
