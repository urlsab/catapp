import React from 'react';
import logoBg from '../../Assets/catapp logo no bg.png';
import { Rocket, FileText, Target, Zap, Shield, Code, Bot, Accessibility, Sparkles, Wrench, X, CheckCircle2, Package, Server, Palette } from 'lucide-react';
import { FaReact, FaNodeJs, FaWordpress, FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiMui, SiTypescript, SiJavascript, SiVite, SiVercel, SiTailwindcss, SiFirebase, SiGodaddy, SiHeroku } from 'react-icons/si';
// import SmoothScroll from '../components/SmoothScroll';

const AboutFullPage: React.FC = () => {
  return (
  <div className="relative min-h-screen text-white pt-16 fade-in overflow-hidden mt-16">
      {/* <SmoothScroll /> */}
      {/* רקע לוגו מטושטש */}
      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
        <img
          src={logoBg}
          alt="Catapp Logo Background"
          className="w-[600px] h-[600px] object-contain opacity-10 blur-2xl select-none"
          style={{ filter: 'blur(32px)' }}
        />
      </div>

      {/* תוכן ראשי */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 pb-2 tracking-tight bg-gradient-to-r from-[#1a79f6] to-blue-400 bg-clip-text text-transparent leading-tight">
            אודות Catapp
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-[#1a79f6] to-blue-700 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            החברה המובילה בישראל לפתרונות דיגיטליים מתקדמים ושירותי תוכן מקצועיים
          </p>
        </div>

        <section className="mb-12 space-y-8 text-lg leading-relaxed rtl:text-right">
          {/* הצגת החברה */}
          <div className="relative rounded-2xl p-8 mb-8 backdrop-blur-sm border-animated bg-white/5" style={{"--color1": "#1a79f6", "--color2": "#ffffff", "--angle": "0deg"} as React.CSSProperties}>
            <h2 className="text-2xl font-bold text-[#1a79f6] mb-6 text-center">למה Catapp שונה?</h2>
            <p className="mb-6 text-center">
              <span className="font-bold text-[#1a79f6]">Catapp</span> נוסדה מתוך צורך אמיתי - 
              <span className="font-semibold"> לפתור את בעיית המהירות והגמישות</span> בבניית אתרים מקצועיים. 
              בניגוד לפלטפורמות תבניתיות כמו WordPress, Wix או Shopify, אנו בונים כל אתר מאפס 
              <span className="font-bold text-[#1a79f6]"> בטכנולוגיות ההייטק המתקדמות ביותר</span>.
            </p>
            <p className="mb-6 text-center text-xl font-semibold text-white">
              אצלנו - עיצוב בלתי מוגבל, ביצועים מהירים פי 10, ופיצ'רים שלא תראו בשום מקום אחר!
            </p>
          </div>

          {/* לא WordPress - כן טכנולוגיות מתקדמות */}
          <div className="relative rounded-2xl p-8 mb-8 backdrop-blur-sm border-static bg-red-900/10" style={{"--color1": "#dc2626"} as React.CSSProperties}>
            <h2 className="text-2xl font-bold text-red-500 mb-6 text-center flex items-center justify-center gap-3">
              אנחנו לא בונים ב-
              <span className="relative inline-flex items-center gap-2">
                <span className="text-[#21759b]">WordPress</span>
                <span className="relative inline-block">
                  <FaWordpress className="w-10 h-10 text-[#21759b]" />
                  <X className="w-14 h-14 text-red-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 stroke-[2]" />
                </span>
              </span>
            </h2>
            <p className="mb-4 text-center text-2xl font-bold">
              <span className="text-white">אנחנו בונים ב-</span>
              <span className="text-[#1a79f6]">World's Best</span>
            </p>
            <p className="mb-6 text-center text-lg">
              פלטפורמות כמו WordPress, Wix ו-Shopify מגבילות אתכם לתבניות קבועות, איטיות וחסרות גמישות.
            </p>
            <div className="bg-black/40 rounded-xl p-8 mb-6">
              <div className="grid md:grid-cols-2 gap-8 items-center" dir="ltr">
                {/* Visual on left */}
                <div className="flex items-center justify-center">
                  <div className="relative w-full min-h-[500px] flex items-center justify-center">
                    {/* Circular orbit container */}
                    <div className="tech-orbit">
                      <div className="tech-icon-wrapper" style={{ '--icon-index': 0 } as React.CSSProperties}>
                    <div className="tech-icon bg-[#61DAFB]/20 hover:scale-125">
                      <FaReact className="text-4xl text-[#61DAFB]" />
                    </div>
                    <p className="tech-label">React</p>
                  </div>
                  <div className="tech-icon-wrapper" style={{ '--icon-index': 1 } as React.CSSProperties}>
                    <div className="tech-icon bg-[#3178C6]/20 hover:scale-125">
                      <SiTypescript className="text-3xl text-[#3178C6]" />
                    </div>
                    <p className="tech-label">TypeScript</p>
                  </div>
                  <div className="tech-icon-wrapper" style={{ '--icon-index': 2 } as React.CSSProperties}>
                    <div className="tech-icon bg-yellow-500/20 hover:scale-125">
                      <SiJavascript className="text-3xl text-yellow-500" />
                    </div>
                    <p className="tech-label">JavaScript</p>
                  </div>
                  <div className="tech-icon-wrapper" style={{ '--icon-index': 3 } as React.CSSProperties}>
                    <div className="tech-icon bg-[#646CFF]/20 hover:scale-125">
                      <SiVite className="text-3xl text-[#646CFF]" />
                    </div>
                    <p className="tech-label">Vite</p>
                  </div>
                  <div className="tech-icon-wrapper" style={{ '--icon-index': 4 } as React.CSSProperties}>
                    <div className="tech-icon bg-green-500/20 hover:scale-125">
                      <SiMongodb className="text-3xl text-green-500" />
                    </div>
                    <p className="tech-label">MongoDB</p>
                  </div>
                  <div className="tech-icon-wrapper" style={{ '--icon-index': 5 } as React.CSSProperties}>
                    <div className="tech-icon bg-blue-500/20 hover:scale-125">
                      <SiMui className="text-3xl text-blue-500" />
                    </div>
                    <p className="tech-label">MUI</p>
                  </div>
                  <div className="tech-icon-wrapper" style={{ '--icon-index': 6 } as React.CSSProperties}>
                    <div className="tech-icon bg-black border border-white hover:scale-125">
                      <SiVercel className="text-3xl text-white" />
                    </div>
                    <p className="tech-label">Vercel</p>
                  </div>
                  <div className="tech-icon-wrapper" style={{ '--icon-index': 7 } as React.CSSProperties}>
                    <div className="tech-icon bg-orange-600/20 hover:scale-125">
                      <FaNodeJs className="text-3xl text-orange-600" />
                    </div>
                    <p className="tech-label">Node.js</p>
                  </div>
                  <div className="tech-icon-wrapper" style={{ '--icon-index': 8 } as React.CSSProperties}>
                    <div className="tech-icon bg-[#06B6D4]/20 hover:scale-125">
                      <SiTailwindcss className="text-3xl text-[#06B6D4]" />
                    </div>
                    <p className="tech-label">Tailwind CSS</p>
                  </div>
                  <div className="tech-icon-wrapper" style={{ '--icon-index': 9 } as React.CSSProperties}>
                    <div className="tech-icon bg-[#FFCA28]/20 hover:scale-125">
                      <SiFirebase className="text-3xl text-[#FFCA28]" />
                    </div>
                    <p className="tech-label">Firebase</p>
                  </div>
                  <div className="tech-icon-wrapper" style={{ '--icon-index': 10 } as React.CSSProperties}>
                    <div className="tech-icon bg-[#1BDBDB]/20 hover:scale-125">
                      <SiGodaddy className="text-3xl text-[#1BDBDB]" />
                    </div>
                    <p className="tech-label">GoDaddy</p>
                  </div>
                  <div className="tech-icon-wrapper" style={{ '--icon-index': 11 } as React.CSSProperties}>
                    <div className="tech-icon bg-[#430098]/20 hover:scale-125">
                      <SiHeroku className="text-3xl text-[#430098]" />
                    </div>
                    <p className="tech-label">Heroku</p>
                  </div>
                  <div className="tech-icon-wrapper" style={{ '--icon-index': 12 } as React.CSSProperties}>
                    <div className="tech-icon bg-[#181717]/20 border border-gray-700 hover:scale-125">
                      <FaGithub className="text-3xl text-white" />
                    </div>
                    <p className="tech-label">GitHub</p>
                  </div>
                  <div className="tech-icon-wrapper" style={{ '--icon-index': 13 } as React.CSSProperties}>
                    <div className="tech-icon bg-[#F05032]/20 hover:scale-125">
                      <FaGitAlt className="text-3xl text-[#F05032]" />
                    </div>
                    <p className="tech-label">Git</p>
                  </div>
                  <div className="tech-icon-wrapper" style={{ '--icon-index': 14 } as React.CSSProperties}>
                    <div className="tech-icon bg-purple-500/20 hover:scale-125">
                      <span className="text-3xl font-bold text-purple-500">✨</span>
                    </div>
                    <p className="tech-label">AI</p>
                  </div>
                    </div>
                  </div>
                </div>
                
                {/* Text on right */}
                <div dir="rtl">
                  <h3 className="text-2xl font-bold text-[#1a79f6] mb-6 flex items-center gap-3">
                    <Code className="w-8 h-8" />
                    הטכנולוגיות שלנו - רמת הייטק אמיתית
                  </h3>
                  <p className="text-gray-300 mb-4 text-lg">
                    אנחנו משתמשים בטכנולוגיות המתקדמות ביותר בתעשייה:
                  </p>
                  <div className="bg-black/40 rounded-xl p-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#1a79f6] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-white">React & TypeScript</p>
                        <p className="text-sm text-gray-400">ספריות מודרניות למממשקי משתמש דינמיים</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#1a79f6] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-white">Node.js & MongoDB</p>
                        <p className="text-sm text-gray-400">תשתית שרת חזקה ומסד נתונים גמיש</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#1a79f6] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-white">Vercel & Firebase</p>
                        <p className="text-sm text-gray-400">פריסה מהירה ושירותי ענן מתקדמים</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#1a79f6] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-white">Tailwind CSS & Vite</p>
                        <p className="text-sm text-gray-400">עיצוב מהיר ובנייה אופטימלית</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-green-400 font-semibold mt-6">
                    הטכנולוגיות האלה מאפשרות לנו לבנות אתרים פי 10 יותר מהירים, יציבים ומאובטחים!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* הנגשה - הגנה משפטית */}
          <div className="relative rounded-2xl p-8 mb-8 backdrop-blur-sm border-static bg-green-900/10" style={{"--color1": "#16a34a"} as React.CSSProperties}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Visual on left */}
              <div className="flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/20 to-green-600/20 animate-pulse"></div>
                  <div className="absolute inset-8 rounded-full bg-gradient-to-br from-green-500/30 to-green-700/30 flex items-center justify-center">
                    <Accessibility className="w-32 h-32 text-green-400" />
                  </div>
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-green-500/30 flex items-center justify-center animate-bounce" style={{animationDelay: '0s', animationDuration: '2s'}}>
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="absolute bottom-8 left-4 w-12 h-12 rounded-full bg-green-500/30 flex items-center justify-center animate-bounce" style={{animationDelay: '0.5s', animationDuration: '2s'}}>
                    <Shield className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="absolute top-12 left-2 w-12 h-12 rounded-full bg-green-500/30 flex items-center justify-center animate-bounce" style={{animationDelay: '1s', animationDuration: '2s'}}>
                    <Target className="w-6 h-6 text-green-400" />
                  </div>
                </div>
              </div>
              
              {/* Text on right */}
              <div>
                <h2 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3">
                  <Accessibility className="w-8 h-8" />
                  הנגשה מלאה - הגנה משפטית ואחריות חברתית
                </h2>
                <p className="mb-4 text-lg">
                  <span className="font-bold text-green-400">כל אתר אצלנו מונגש באופן מלא!</span>
                </p>
                <div className="bg-black/40 rounded-xl p-6">
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <span><strong>הגנה משפטית:</strong> עמידה מלאה בחוק הנגשת שירותי אינטרנט - תגן על העסק שלך מתביעות</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <span><strong>אחריות חברתית:</strong> נגישות לאנשים עם מוגבלויות - לך תדע אם הלקוח או הגולש הבא שלך צריך את זה</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <span><strong>SEO משופר:</strong> אתרים מונגשים מקבלים דירוג טוב יותר בגוגל</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <span><strong>חוויית משתמש טובה יותר:</strong> הנגשה משפרת את החוויה לכולם</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* בוט AI חכם */}
          <div className="relative rounded-2xl p-8 mb-8 backdrop-blur-sm border-static bg-purple-900/10" style={{"--color1": "#9333ea"} as React.CSSProperties}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Text on left */}
              <div>
                <h2 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
                  <Bot className="w-8 h-8" />
                  בוט AI חכם
                </h2>
                <p className="mb-4 text-lg">
                  <span className="font-bold text-purple-400">אפשרות להרחבת האתר עם בוט AI חכם!</span>
                </p>
                <div className="bg-black/40 rounded-xl p-6">
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <Sparkles className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                      <span><strong>עונה על שאלות:</strong> הבוט לומד את תוכן האתר שלך ועונה לגולשים בצורה חכמה</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Sparkles className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                      <span><strong>מידע ממקורות חיצוניים:</strong> יכול לחפש מידע גם מרחבי האינטרנט</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Sparkles className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                      <span><strong>חיסכון בזמן:</strong> הבוט עושה את העבודה הקשה במקומך</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Visual on right */}
              <div className="flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 animate-pulse"></div>
                  <div className="absolute inset-4 rounded-2xl bg-purple-900/30 border-2 border-purple-500/50 flex flex-col items-center justify-center p-4">
                    <Bot className="w-24 h-24 text-purple-400 mb-3" />
                    <div className="w-full space-y-2">
                      <div className="h-2 bg-purple-500/50 rounded animate-pulse" style={{animationDelay: '0s'}}></div>
                      <div className="h-2 bg-purple-500/30 rounded w-3/4 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="h-2 bg-purple-500/40 rounded w-5/6 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full bg-purple-500/30 flex items-center justify-center animate-bounce">
                    <Sparkles className="w-8 h-8 text-purple-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* פיצ'רים מתקדמים */}
          <div className="relative rounded-2xl p-8 mb-8 backdrop-blur-sm border-static bg-yellow-900/10" style={{"--color1": "#ca8a04"} as React.CSSProperties}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Visual on left */}
              <div className="flex items-center justify-center">
                <div className="relative w-72 h-72">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10"></div>
                  <div className="absolute inset-4 grid grid-cols-3 gap-2">
                    <div className="bg-yellow-500/20 rounded-lg flex items-center justify-center animate-pulse" style={{animationDelay: '0s'}}>
                      <Palette className="w-8 h-8 text-yellow-400" />
                    </div>
                    <div className="bg-yellow-500/20 rounded-lg flex items-center justify-center animate-pulse" style={{animationDelay: '0.2s'}}>
                      <FileText className="w-8 h-8 text-yellow-400" />
                    </div>
                    <div className="bg-yellow-500/20 rounded-lg flex items-center justify-center animate-pulse" style={{animationDelay: '0.4s'}}>
                      <Shield className="w-8 h-8 text-yellow-400" />
                    </div>
                    <div className="bg-yellow-500/20 rounded-lg flex items-center justify-center animate-pulse" style={{animationDelay: '0.6s'}}>
                      <Package className="w-8 h-8 text-yellow-400" />
                    </div>
                    <div className="col-span-1 row-span-1 bg-yellow-600/30 rounded-lg flex items-center justify-center border-2 border-yellow-500">
                      <Zap className="w-12 h-12 text-yellow-300" />
                    </div>
                    <div className="bg-yellow-500/20 rounded-lg flex items-center justify-center animate-pulse" style={{animationDelay: '0.8s'}}>
                      <Server className="w-8 h-8 text-yellow-400" />
                    </div>
                    <div className="col-span-3 bg-yellow-500/20 rounded-lg flex items-center justify-center animate-pulse" style={{animationDelay: '1s'}}>
                      <Rocket className="w-10 h-10 text-yellow-400" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Text on right */}
              <div>
                <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-3">
                  <Zap className="w-8 h-8" />
                  פיצ'רים שלא תמצאו בשום מקום אחר
                </h2>
                <p className="mb-6 text-lg">
                  רק אתר שנבנה בטכנולוגיות המתקדמות ביותר יכול לאפשר לכם:
                </p>
                <div className="space-y-3">
                  <div className="bg-black/40 rounded-xl p-4 flex items-start gap-3">
                    <Palette className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white mb-1">אנימציות מורכבות</h3>
                      <p className="text-sm text-gray-300">אפקטים ויזואליים מרהיבים שמושכים את העין</p>
                    </div>
                  </div>
                  <div className="bg-black/40 rounded-xl p-4 flex items-start gap-3">
                    <FileText className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white mb-1">קבלת הודעות למייל</h3>
                      <p className="text-sm text-gray-300">פניות מגולשים ישירות לתיבת הדואר שלך</p>
                    </div>
                  </div>
                  <div className="bg-black/40 rounded-xl p-4 flex items-start gap-3">
                    <Shield className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white mb-1">הרשמה מאובטחת</h3>
                      <p className="text-sm text-gray-300">מערכת משתמשים עם סיסמאות מוצפנות</p>
                    </div>
                  </div>
                  <div className="bg-black/40 rounded-xl p-4 flex items-start gap-3">
                    <Rocket className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white mb-1">ועוד הרבה יותר!</h3>
                      <p className="text-sm text-gray-300">הדמיון הוא הגבול - כל פיצ'ר אפשרי</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* תחזוקה ושיפור קוד */}
          <div className="relative rounded-2xl p-8 mb-8 backdrop-blur-sm border-static bg-blue-900/10" style={{"--color1": "#1a79f6"} as React.CSSProperties}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Text on left */}
              <div>
                <h2 className="text-2xl font-bold text-[#1a79f6] mb-6 flex items-center gap-3">
                  <Wrench className="w-8 h-8 animate-spin" style={{animationDuration: '3s'}} />
                  תחזוקה מתמשכת ושיפור הקוד
                </h2>
                <p className="mb-6 text-lg">
                  <span className="font-bold text-[#1a79f6]">Catapp</span> משפרת ומעדכנת את הקוד שלכם באופן שוטף
                </p>
                <p className="text-gray-300 mb-4">
                  אנחנו דואגים שהקוד שלכם תמיד יהיה נקי, מעודכן ומאובטח 🛡️
                </p>
                <div className="bg-black/40 rounded-xl p-4">
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#1a79f6] flex-shrink-0 mt-0.5" />
                      <span>תיקון שגיאות ואזהרות</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#1a79f6] flex-shrink-0 mt-0.5" />
                      <span>עדכון חבילות ישנות</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#1a79f6] flex-shrink-0 mt-0.5" />
                      <span>אופטימיזציה לביצועים</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#1a79f6] flex-shrink-0 mt-0.5" />
                      <span>בדיקות אבטחה שוטפות</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Visual on right - Before/After comparison */}
              <div className="space-y-4">
                <div className="bg-red-900/30 rounded-xl p-4 border-2 border-red-600 animate-pulse">
                  <h3 className="text-lg font-bold text-red-400 mb-3 flex items-center gap-2">
                    <X className="w-5 h-5 animate-spin" style={{animationDuration: '2s'}} />
                    לפני התיקון
                  </h3>
                  <div className="bg-black/60 rounded p-3 font-mono text-xs text-red-300">
                    <div className="animate-pulse">⚠️ 47 warnings</div>
                    <div className="animate-pulse" style={{animationDelay: '0.2s'}}>❌ 12 errors</div>
                    <div className="animate-pulse" style={{animationDelay: '0.4s'}}>🐛 Deprecated packages</div>
                    <div className="animate-pulse" style={{animationDelay: '0.6s'}}>⚡ Slow performance</div>
                  </div>
                </div>
                <div className="bg-green-900/30 rounded-xl p-4 border-2 border-green-600 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-green-500/50">
                  <h3 className="text-lg font-bold text-green-400 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 animate-bounce" />
                    אחרי התיקון
                  </h3>
                  <div className="bg-black/60 rounded p-3 font-mono text-xs text-green-300">
                    <div>✅ 0 warnings</div>
                    <div>✅ 0 errors</div>
                    <div>✅ All packages updated</div>
                    <div>⚡ Optimized & fast</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* שירותי תוכן */}
          <div className="relative rounded-2xl p-8 mb-8 backdrop-blur-sm border-static bg-pink-900/10" style={{"--color1": "#db2777"} as React.CSSProperties}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Visual on left */}
              <div className="flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 animate-pulse"></div>
                  <div className="absolute inset-8 bg-pink-900/40 rounded-xl border-2 border-pink-500/50 flex flex-col items-center justify-center gap-4 p-4 transition-all duration-500 hover:scale-105 hover:border-pink-400">
                    <div className="w-full h-20 bg-pink-500/20 rounded-lg flex items-center justify-center animate-bounce">
                      <FileText className="w-12 h-12 text-pink-400" />
                    </div>
                    <div className="w-full space-y-2">
                      <div className="h-2 bg-pink-500/40 rounded animate-pulse"></div>
                      <div className="h-2 bg-pink-500/30 rounded w-4/5 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="h-2 bg-pink-500/20 rounded w-3/5 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-full bg-pink-600/30 flex items-center justify-center border-2 border-pink-500 animate-spin" style={{animationDuration: '4s'}}>
                    <Target className="w-10 h-10 text-pink-300" style={{animation: 'spin 4s linear infinite reverse'}} />
                  </div>
                </div>
              </div>
              
              {/* Text on right */}
              <div>
                <h2 className="text-2xl font-bold text-pink-400 mb-6">שירותי תוכן מתקדמים</h2>
                <div className="space-y-6">
                  <div className="bg-black/40 rounded-xl p-4">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                      <FileText className="w-6 h-6 text-pink-400 animate-pulse" />
                      קורות חיים מקצועיים
                    </h3>
                    <p className="text-gray-300">
                      בניית ושיפור קורות חיים מותאמים לתעשיית הטכנולוגיה עם דגש על הדגשת כישורים ויתרונות תחרותיים.
                    </p>
                  </div>
                  <div className="bg-black/40 rounded-xl p-4">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                      <Target className="w-6 h-6 text-pink-400" />
                      ייעוץ עסקי
                    </h3>
                    <p className="text-gray-300">
                      ליווי מקצועי לעסקים קטנים בתחום ההקמה, הפיתוח והצמיחה, כולל הרצאות על אופטימיזציה דיגיטלית.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* תיק עבודות מובחר */}
          <div className="relative rounded-2xl p-8 mb-8 backdrop-blur-sm border-static bg-white/5" style={{"--color1": "#1a79f6"} as React.CSSProperties}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Text on left */}
              <div>
                <h2 className="text-2xl font-bold text-[#1a79f6] mb-6">פרויקטים מובחרים</h2>
                <p className="text-gray-300 mb-6">
                  כמה דוגמאות לפרויקטים שביצענו עבור לקוחות מרוצים:
                </p>
                <div className="space-y-4">
                  <div className="bg-black/40 rounded-lg p-4 border-l-4 border-[#1a79f6]">
                    <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                      <Rocket className="w-5 h-5 text-[#1a79f6]" />
                      Orbenji
                    </h3>
                    <p className="text-gray-300 text-sm mb-2">דף נחיתה מתקדם עם עיצוב מודרני</p>
                    <a href="https://orbenji.com" target="_blank" rel="noopener noreferrer" 
                       className="text-[#1a79f6] hover:underline text-sm inline-flex items-center gap-1">
                      לאתר →
                    </a>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 border-l-4 border-[#1a79f6]">
                    <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                      <Rocket className="w-5 h-5 text-[#1a79f6]" />
                      Atliz
                    </h3>
                    <p className="text-gray-300 text-sm mb-2">אתר תדמית עסקי מתקדם</p>
                    <a href="https://atliz.co.il" target="_blank" rel="noopener noreferrer" 
                       className="text-[#1a79f6] hover:underline text-sm inline-flex items-center gap-1">
                      לאתר →
                    </a>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 border-l-4 border-[#1a79f6]">
                    <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-[#1a79f6]" />
                      Refael Law
                    </h3>
                    <p className="text-gray-300 text-sm mb-2">אתר משרד עורכי דין</p>
                    <a href="https://refael-law.com" target="_blank" rel="noopener noreferrer" 
                       className="text-[#1a79f6] hover:underline text-sm inline-flex items-center gap-1">
                      לאתר →
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Visual on right */}
              <div className="flex items-center justify-center">
                <div className="relative w-72 h-72">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1a79f6]/20 to-blue-600/20"></div>
                  <div className="absolute inset-4 bg-black/40 rounded-xl border-2 border-[#1a79f6]/50 overflow-hidden">
                    <div className="h-8 bg-[#1a79f6]/30 flex items-center gap-2 px-3">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="h-12 bg-[#1a79f6]/20 rounded animate-pulse"></div>
                      <div className="h-8 bg-[#1a79f6]/15 rounded animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="h-8 bg-[#1a79f6]/15 rounded animate-pulse" style={{animationDelay: '0.4s'}}></div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-16 bg-[#1a79f6]/20 rounded animate-pulse" style={{animationDelay: '0.6s'}}></div>
                        <div className="h-16 bg-[#1a79f6]/20 rounded animate-pulse" style={{animationDelay: '0.8s'}}></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full bg-[#1a79f6]/30 flex items-center justify-center border-2 border-[#1a79f6] animate-pulse">
                    <Rocket className="w-8 h-8 text-[#1a79f6]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* קריאה לפעולה */}
          <div className="relative text-center rounded-2xl p-8 border-animated bg-white/10 backdrop-blur-sm" style={{"--color1": "#1a79f6", "--color2": "#ffffff", "--angle": "0deg"} as React.CSSProperties}>
            <h2 className="text-2xl font-bold text-white mb-4">מוכנים להתחיל?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              עם ניסיון עשיר, טכנולוגיות עדכניות ותמיכה מתמשכת – Catapp היא הבחירה הטבעית שלכם להצלחה בעולם הדיגיטל.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" 
                 className="bg-white text-[#1a79f6] hover:bg-gray-100 font-bold py-3 px-8 rounded-xl transition-all">
                צור קשר עוד היום
              </a>
              <a href="/quote" 
                 className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition-all">
                קבל הצעת מחיר
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutFullPage;
