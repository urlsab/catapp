import React from 'react';
import { Globe, Smartphone, Zap, Shield, TrendingUp, Search, Users, DollarSign, CheckCircle, MessageCircle, Palette, Code, Wrench, HeartHandshake, Award, Target, Sparkles } from 'lucide-react';

const WebsitesPage: React.FC = () => {
  const [currentMythIndex, setCurrentMythIndex] = React.useState(0);
  const [mythVisible, setMythVisible] = React.useState(true);
  const [benefitVisible, setBenefitVisible] = React.useState(false);
  const [currentBenefitIndex, setCurrentBenefitIndex] = React.useState(0);
  const [benefitIconVisible, setBenefitIconVisible] = React.useState(true);
  
  const benefitRef = React.useRef<HTMLDivElement>(null);
  
  const myths = [
    { text: 'זה יקר מדי', counter: 'יש פתרונות לכל תקציב' },
    { text: 'לא צריך אתר בימינו', counter: '81% מהלקוחות בודקים אתר לפני רכישה' },
    { text: 'מספיק לי דף פייסבוק', counter: 'רשתות חברתיות לא שלך - הן יכולות להיעלם מחר' },
    { text: 'זה לוקח יותר מדי זמן', counter: 'אתר מקצועי יכול לעלות תוך שבועות' },
    { text: 'אני לא מבין בטכנולוגיה', counter: 'לשם כך אנחנו כאן - לעשות את זה בשבילכם' },
  ];

  const benefits = [
    { icon: TrendingUp, text: 'הגדלת מכירות' },
    { icon: Users, text: 'לקוחות חדשים' },
    { icon: Award, text: 'נראות מקצועית' },
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

  // Intersection Observer for benefit section
  React.useEffect(() => {
    const section = benefitRef.current;
    if (!section) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setBenefitVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Benefits icons rotation
  React.useEffect(() => {
    if (!benefitVisible) return;
    
    const interval = setInterval(() => {
      setBenefitIconVisible(false);
      setTimeout(() => {
        setCurrentBenefitIndex((prev) => (prev + 1) % benefits.length);
        setBenefitIconVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, [benefitVisible]);

  const CurrentBenefitIcon = benefits[currentBenefitIndex].icon;

  return (
    <div className="min-h-screen pt-16">
      
      {/* Hero - The Story Begins */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-[2.5rem] xs:text-5xl sm:text-6xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight cv-hero-title">
            העסק שלך
            <br />
            <span className="text-[#1a79f6]">קיים?</span>
          </h1>
          <p className="text-2xl xs:text-3xl sm:text-4xl md:text-3xl text-gray-300 mb-6 cv-subtitle">
            בעולם הדיגיטלי של היום...
          </p>
          <p className="text-xl xs:text-2xl sm:text-3xl md:text-2xl text-gray-400 cv-text">
            מי שלא באינטרנט - פשוט לא קיים.
          </p>
        </div>
      </section>

      {/* The Reality in Israel */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-red-950/20">
        <div className="text-center max-w-5xl mx-auto">
          <p className="text-2xl xs:text-3xl sm:text-4xl md:text-3xl text-gray-300 mb-8 cv-subtitle">
            המציאות בישראל?
          </p>
          <h2 className="text-[2.5rem] xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight cv-hero-title">
            רוב העסקים
            <br />
            <span className="text-red-400">מפסידים לקוחות.</span>
          </h2>
          <p className="text-xl xs:text-2xl sm:text-3xl md:text-2xl text-gray-400 mt-8 cv-text">
            בגלל אתרים ישנים, איטיים, או בכלל בלי אתר.
          </p>
        </div>
      </section>

      {/* Myths Section - What businesses think */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <p className="text-xl xs:text-2xl sm:text-3xl md:text-2xl text-gray-400 mb-12 cv-text">
            מה עסקים חושבים...
          </p>
          
          <div className="mb-16 min-h-[200px] sm:min-h-[250px] flex flex-col items-center justify-center">
            <div className={`transition-all duration-500 ${mythVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
                <span className="text-[1.75rem] xs:text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-bold text-red-400 cv-myth-title">
                  "{myths[currentMythIndex].text}"
                </span>
              </div>
              <p className="text-xl xs:text-2xl sm:text-3xl md:text-2xl text-gray-300 cv-text">
                האמת: {myths[currentMythIndex].counter}
              </p>
            </div>
          </div>
          
          <div className="flex justify-center gap-2 sm:gap-3">
            {myths.map((_, idx) => (
              <div 
                key={idx} 
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                  idx === currentMythIndex ? 'bg-[#1a79f6] scale-125' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What customers do today */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-purple-950/20">
        <div className="text-center max-w-5xl mx-auto">
          <p className="text-2xl xs:text-3xl sm:text-4xl md:text-3xl text-gray-300 mb-8 cv-subtitle">
            מה הלקוחות עושים היום?
          </p>
          <h2 className="text-[2.5rem] xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight cv-hero-title">
            מחפשים
            <br />
            <span className="text-purple-400">בגוגל.</span>
          </h2>
          <div className="mt-12 flex items-center justify-center gap-4">
            <Search className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 text-purple-400" />
          </div>
          <div className="mt-12 p-6 sm:p-8 bg-purple-500/10 border border-purple-500/30 rounded-2xl max-w-2xl mx-auto">
            <p className="text-xl xs:text-2xl sm:text-3xl md:text-2xl font-bold text-purple-300 cv-text">
              אם לא מוצאים אותך - מוצאים את המתחרים.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <p className="text-xl xs:text-2xl sm:text-3xl md:text-2xl text-gray-400 mb-8 cv-text">
            אז מה הפתרון?
          </p>
          <h2 className="text-[2.5rem] xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl font-bold text-white mb-12 leading-tight cv-hero-title">
            אתר שעובד בשבילך
          </h2>
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <Globe className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-24 md:h-24 text-[#1a79f6]" />
          </div>
          <p className="text-xl xs:text-2xl sm:text-3xl md:text-2xl text-gray-300 mt-8 cv-text">
            24 שעות ביממה. 7 ימים בשבוע.
          </p>
        </div>
      </section>

      {/* Here We Come In */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-cyan-950/20">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-[2.75rem] xs:text-5xl sm:text-6xl md:text-5xl lg:text-7xl font-bold text-white mb-8 cv-hero-title">
            וכאן
            <br />
            <span className="text-cyan-400">אנחנו נכנסים.</span>
          </h2>
        </div>
      </section>

      {/* What we offer - Fading Icons */}
      <section 
        ref={benefitRef}
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-5xl mx-auto">
          <div className={`transition-all duration-700 ${benefitVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xl xs:text-2xl sm:text-3xl md:text-2xl text-gray-400 mb-8 cv-text">
              אתר מקצועי מביא:
            </p>
            <div className="mb-12 min-h-[180px] sm:min-h-[220px] flex flex-col items-center justify-center">
              <div className={`transition-all duration-400 ${benefitIconVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <CurrentBenefitIcon className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-28 md:h-28 text-[#1a79f6] mb-6 mx-auto" />
                <p className="text-[1.75rem] xs:text-4xl sm:text-5xl md:text-4xl font-bold text-white cv-exp-title">
                  {benefits[currentBenefitIndex].text}
                </p>
              </div>
            </div>
            
            <div className="flex justify-center gap-2 sm:gap-3">
              {benefits.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                    idx === currentBenefitIndex ? 'bg-[#1a79f6] scale-125' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-green-950/20">
        <div className="text-center max-w-5xl mx-auto">
          <Award className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-24 md:h-24 text-green-400 mb-8 mx-auto" />
          <h2 className="text-[1.75rem] xs:text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight cv-section-title">
            אנחנו בונים
            <br />
            <span className="text-green-400">אתרים שמוכרים</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mt-12">
            <div className="p-6 bg-green-500/10 border border-green-500/30 rounded-2xl">
              <Smartphone className="w-14 h-14 xs:w-16 xs:h-16 sm:w-14 sm:h-14 text-green-400 mb-4 mx-auto" />
              <p className="text-xl xs:text-2xl sm:text-xl text-white font-bold">
                מותאם לכל מכשיר
              </p>
              <p className="text-gray-400 mt-2">מובייל, טאבלט, מחשב</p>
            </div>
            <div className="p-6 bg-green-500/10 border border-green-500/30 rounded-2xl">
              <Zap className="w-14 h-14 xs:w-16 xs:h-16 sm:w-14 sm:h-14 text-green-400 mb-4 mx-auto" />
              <p className="text-xl xs:text-2xl sm:text-xl text-white font-bold">
                מהיר ויעיל
              </p>
              <p className="text-gray-400 mt-2">טעינה מהירה, חווית משתמש מעולה</p>
            </div>
            <div className="p-6 bg-green-500/10 border border-green-500/30 rounded-2xl">
              <Search className="w-14 h-14 xs:w-16 xs:h-16 sm:w-14 sm:h-14 text-green-400 mb-4 mx-auto" />
              <p className="text-xl xs:text-2xl sm:text-xl text-white font-bold">
                מותאם SEO
              </p>
              <p className="text-gray-400 mt-2">שגוגל יאהב אותך</p>
            </div>
            <div className="p-6 bg-green-500/10 border border-green-500/30 rounded-2xl">
              <Shield className="w-14 h-14 xs:w-16 xs:h-16 sm:w-14 sm:h-14 text-green-400 mb-4 mx-auto" />
              <p className="text-xl xs:text-2xl sm:text-xl text-white font-bold">
                מאובטח
              </p>
              <p className="text-gray-400 mt-2">SSL, הגנה מפני פריצות</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <Target className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-24 md:h-24 text-orange-400 mb-8 mx-auto" />
          <h2 className="text-[1.75rem] xs:text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight cv-section-title">
            הגישה שלנו?
          </h2>
          <p className="text-xl xs:text-2xl sm:text-3xl md:text-2xl text-gray-300 mb-8 leading-relaxed cv-text">
            לא סתם אתר יפה.
            <br />
            <span className="text-orange-400 font-bold">אתר שמביא תוצאות.</span>
          </p>
          <div className="p-6 sm:p-8 bg-orange-500/10 border border-orange-500/30 rounded-2xl max-w-2xl mx-auto">
            <HeartHandshake className="w-14 h-14 xs:w-16 xs:h-16 sm:w-14 sm:h-14 text-orange-400 mb-4 mx-auto" />
            <p className="text-xl xs:text-2xl sm:text-2xl font-bold text-orange-300">
              ליווי אישי מההתחלה ועד הסוף
            </p>
            <p className="text-lg xs:text-xl sm:text-xl text-gray-400 mt-4">
              ותחזוקה שוטפת אחרי 🔧
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-[#1a79f6]/10">
        <div className="text-center max-w-5xl mx-auto">
          <p className="text-2xl xs:text-3xl sm:text-4xl md:text-3xl text-gray-300 mb-8 cv-subtitle">
            והמחיר?
          </p>
          <h2 className="text-[2.75rem] xs:text-5xl sm:text-6xl md:text-5xl lg:text-7xl font-bold text-white mb-4 cv-hero-title">
            הוגן
            <br />
            <span className="text-[#1a79f6]">ושקוף.</span>
          </h2>
          <p className="text-xl xs:text-2xl sm:text-3xl md:text-2xl text-gray-400 mt-8 cv-text">
            בלי הפתעות. בלי עלויות נסתרות.
          </p>
        </div>
      </section>

      {/* Pricing Options */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-[1.75rem] xs:text-4xl sm:text-4xl md:text-3xl font-bold text-white text-center mb-12 cv-section-title">
            חבילות מחירים
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Basic */}
            <div className="p-6 sm:p-8 bg-gray-800/50 border border-gray-700 rounded-2xl">
              <Code className="w-12 h-12 text-gray-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-white mb-2">דף נחיתה</h3>
              <div className="text-4xl xs:text-5xl font-bold text-white mb-4">
                700₪
              </div>
              <ul className="text-gray-300 text-right space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>עמוד אחד מרשים</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>עיצוב מותאם אישית</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>מותאם למובייל</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>טופס יצירת קשר</span>
                </li>
              </ul>
            </div>

            {/* Standard - Featured */}
            <div className="p-6 sm:p-8 bg-gradient-to-br from-[#1a79f6]/20 to-purple-600/20 border-2 border-[#1a79f6]/50 rounded-2xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#1a79f6] text-white px-4 py-1 rounded-full text-sm font-bold">
                הכי פופולרי
              </div>
              <Palette className="w-12 h-12 text-[#1a79f6] mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-white mb-2">אתר עסקי</h3>
              <div className="text-4xl xs:text-5xl font-bold text-white mb-4">
                2,500₪
              </div>
              <ul className="text-gray-300 text-right space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>עד 5 עמודים</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>עיצוב פרימיום</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>אופטימיזציה לגוגל</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>אנליטיקס וניתוח</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>חודש תחזוקה חינם</span>
                </li>
              </ul>
            </div>

            {/* Premium */}
            <div className="p-6 sm:p-8 bg-purple-900/20 border border-purple-500/30 rounded-2xl">
              <Sparkles className="w-12 h-12 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-white mb-2">אתר מתקדם</h3>
              <div className="text-4xl xs:text-5xl font-bold text-white mb-4">
                5,000₪+
              </div>
              <ul className="text-gray-300 text-right space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>ללא הגבלת עמודים</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>פיצ'רים מותאמים</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>חיבור למערכות</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>3 חודשי תחזוקה</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>תמיכה מועדפת</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12">
            <a
              href="/quote"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1a79f6] to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-xl xs:text-2xl sm:text-xl py-4 sm:py-5 px-8 sm:px-12 rounded-2xl shadow-xl transition-all transform hover:scale-105"
            >
              <DollarSign className="w-6 h-6" />
              קבל הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[1.75rem] xs:text-4xl sm:text-4xl md:text-3xl font-bold text-white text-center mb-12 cv-section-title">
            שירותים נוספים
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Maintenance */}
            <div className="p-6 sm:p-8 bg-orange-500/10 border border-orange-500/30 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="w-10 h-10 xs:w-12 xs:h-12 sm:w-10 sm:h-10 text-orange-400" />
                <h3 className="text-xl xs:text-2xl sm:text-2xl font-bold text-white">תחזוקה שוטפת</h3>
              </div>
              <p className="text-gray-300 text-lg xs:text-xl sm:text-lg mb-4">
                עדכונים, גיבויים, אבטחה ותיקון באגים
              </p>
              <p className="text-orange-300 font-bold text-xl xs:text-2xl sm:text-xl">
                החל מ-150₪ לחודש
              </p>
            </div>
            
            {/* Redesign */}
            <div className="p-6 sm:p-8 bg-purple-500/10 border border-purple-500/30 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Palette className="w-10 h-10 xs:w-12 xs:h-12 sm:w-10 sm:h-10 text-purple-400" />
                <h3 className="text-xl xs:text-2xl sm:text-2xl font-bold text-white">שדרוג אתר קיים</h3>
              </div>
              <p className="text-gray-300 text-lg xs:text-xl sm:text-lg mb-4">
                עיצוב מחדש, שיפור ביצועים, מודרניזציה
              </p>
              <p className="text-purple-300 font-bold text-xl xs:text-2xl sm:text-xl">
                לפי היקף העבודה
              </p>
            </div>
          </div>
          
          {/* Final CTA */}
          <div className="text-center p-8 sm:p-12 bg-gradient-to-r from-[#1a79f6]/20 to-purple-600/20 border border-[#1a79f6]/40 rounded-3xl">
            <h3 className="text-[1.75rem] xs:text-3xl sm:text-4xl md:text-3xl font-bold text-white mb-6 cv-section-title">
              מוכנים לשדרג את העסק?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-[#1a79f6] text-white hover:bg-blue-700 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all text-lg xs:text-xl sm:text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                צור קשר
              </a>
              <a 
                href="https://wa.me/972556611594" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all text-lg xs:text-xl sm:text-lg"
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

export default WebsitesPage;
