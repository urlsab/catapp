import React from 'react';
import logoBg from '../../Assets/catapp logo no bg.png';
import logoCenter from '../../Assets/logoiCatapp.png';
import { Rocket, Building2, FileText, Target, Zap, Shield, Code, Bot, Accessibility, Sparkles, Wrench, X, CheckCircle2, Package, Server, Palette, Scale } from 'lucide-react';
import { FaReact, FaNodeJs, FaWordpress, FaGithub, FaGitAlt, FaSass, FaBolt } from 'react-icons/fa';
import { SiMongodb, SiMui, SiTypescript, SiJavascript, SiVite, SiVercel, SiTailwindcss, SiFirebase, SiGodaddy, SiHeroku, SiStyledcomponents, SiGooglegemini } from 'react-icons/si';
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
          className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] object-contain opacity-10 blur-2xl select-none"
          style={{ filter: 'blur(32px)' }}
        />
      </div>

      {/* תוכן ראשי */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 pb-2 tracking-tight bg-gradient-to-r from-[#1a79f6] to-blue-400 bg-clip-text text-transparent leading-tight px-2 sm:px-4">
            אודות Catapp
          </h1>
          <div className="w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-[#1a79f6] to-blue-700 mx-auto mb-3 sm:mb-4 md:mb-6 rounded-full"></div>
          <p className="text-sm sm:text-base md:text-xl text-gray-300 max-w-3xl mx-auto px-3 sm:px-4">
            החברה המובילה בישראל לפתרונות דיגיטליים מתקדמים ושירותי תוכן מקצועיים
          </p>
        </div>

        <section className="mb-12 space-y-8 text-lg leading-relaxed rtl:text-right">
          {/* הצגת החברה */}
          <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-8 mb-4 sm:mb-6 md:mb-8 backdrop-blur-sm border-animated bg-white/5" style={{"--color1": "#1a79f6", "--color2": "#ffffff", "--angle": "0deg"} as React.CSSProperties}>
            <h2 className="text-base sm:text-xl md:text-2xl font-bold text-[#1a79f6] mb-3 sm:mb-4 md:mb-6 text-center">למה Catapp שונה?</h2>
            <p className="mb-4 md:mb-6 text-center text-sm sm:text-base">
              <span className="font-bold text-[#1a79f6]">Catapp</span> נוסדה מתוך צורך אמיתי - 
              <span className="font-semibold"> לפתור את בעיית המהירות והגמישות</span> בבניית אתרים מקצועיים. 
              בניגוד לפלטפורמות תבניתיות כמו WordPress, Wix או Shopify, אנו בונים כל אתר מאפס 
              <span className="font-bold text-[#1a79f6]"> בטכנולוגיות ההייטק המתקדמות ביותר</span>.
            </p>
            <p className="mb-4 md:mb-6 text-center text-base sm:text-lg md:text-xl font-semibold text-white">
              אצלנו - עיצוב בלתי מוגבל, ביצועים מהירים פי 10, ופיצ'רים שלא תראו בשום מקום אחר!
            </p>
          </div>

          {/* לא WordPress - כן טכנולוגיות מתקדמות */}
          <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-8 mb-4 sm:mb-6 md:mb-8 backdrop-blur-sm border-static bg-white/5" style={{"--color1": "#ffffff"} as React.CSSProperties}>
            <h2 className="text-base sm:text-lg md:text-2xl font-bold text-white mb-3 sm:mb-4 md:mb-6 text-center flex flex-wrap items-center justify-center gap-2 md:gap-3">
              אנחנו לא בונים עם
              <span className="relative inline-flex items-center gap-2">
                <span className="text-gray-400">WordPress</span>
                <span className="relative inline-block">
                  <FaWordpress className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" />
                  <X className="w-10 h-10 sm:w-14 sm:h-14 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 stroke-[2]" />
                </span>
              </span>
            </h2>
            <p className="mb-3 md:mb-4 text-center text-lg sm:text-xl md:text-2xl font-bold">
              <span className="text-white">אנחנו בונים עם</span>
              <span className="text-[#1a79f6]"> World's Best</span>
            </p>
            <p className="mb-4 md:mb-6 text-center text-sm sm:text-base md:text-lg">
              פלטפורמות כמו WordPress, Wix ו-Shopify מגבילות אתכם לתבניות קבועות, איטיות וחסרות גמישות.
            </p>
            <div className="bg-black/40 rounded-lg md:rounded-xl p-4 sm:p-6 md:p-8 mb-4 md:mb-6">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center" dir="ltr">
                {/* Visual on left */}
                <div className="flex items-center justify-center">
                  <div className="relative w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] flex items-center justify-center">
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
                          <span className="text-[8px] xs:text-xs sm:text-sm md:text-base font-bold text-[#2563eb]">B44</span>
                        </div>
                        <p className="tech-label">Base44</p>
                      </div>
                      <div className="tech-icon-wrapper-inner" style={{ '--icon-index': 1 } as React.CSSProperties}>
                        <div className="tech-icon bg-yellow-400/20 hover:scale-125">
                          <FaBolt className="text-[8px] xs:text-xs sm:text-sm md:text-base text-yellow-400" />
                        </div>
                        <p className="tech-label">Bolt</p>
                      </div>
                      <div className="tech-icon-wrapper-inner" style={{ '--icon-index': 2 } as React.CSSProperties}>
                        <div className="tech-icon bg-white/10 border border-gray-500 hover:scale-125">
                          <span className="text-[8px] xs:text-xs sm:text-sm md:text-base">🤖</span>
                        </div>
                        <p className="tech-label">Copilot</p>
                      </div>
                      <div className="tech-icon-wrapper-inner" style={{ '--icon-index': 3 } as React.CSSProperties}>
                        <div className="tech-icon bg-[#00CED1]/20 hover:scale-125">
                          <span className="text-[8px] xs:text-xs sm:text-sm md:text-base font-bold text-[#00CED1]">▷</span>
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
                        <div className="tech-icon bg-[#DB7093]/20 hover:scale-125">
                          <SiStyledcomponents className="text-[8px] xs:text-xs sm:text-sm md:text-base text-[#DB7093]" />
                        </div>
                        <p className="tech-label">Styled</p>
                      </div>
                      <div className="tech-icon-wrapper-inner" style={{ '--icon-index': 6 } as React.CSSProperties}>
                        <div className="tech-icon bg-[#CC6699]/20 hover:scale-125">
                          <FaSass className="text-[8px] xs:text-xs sm:text-sm md:text-base text-[#CC6699]" />
                        </div>
                        <p className="tech-label">SCSS</p>
                      </div>
                    </div>
                    
                    {/* Center Logo - Static */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <img 
                        src={logoCenter} 
                        alt="Catapp Logo" 
                        className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain opacity-90"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Text on right */}
                <div dir="rtl">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1a79f6] mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                    <Code className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                    הטכנולוגיות שלנו - רמת הייטק אמיתית
                  </h3>
                  <p className="text-gray-300 mb-3 md:mb-4 text-sm sm:text-base md:text-lg">
                    אנחנו משתמשים בטכנולוגיות המתקדמות ביותר בתעשייה:
                  </p>
                  <div className="bg-black/40 rounded-lg md:rounded-xl p-4 sm:p-5 md:p-6 space-y-2 sm:space-y-3">
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
                  <p className="text-[#1a79f6] font-semibold mt-6">
                    הטכנולוגיות האלה מאפשרות לנו לבנות אתרים פי 10 יותר מהירים, יציבים ומאובטחים!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* הנגשה - הגנה משפטית */}
          <div className="relative rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 md:mb-8 backdrop-blur-sm border-static bg-[#1a79f6]/10" style={{"--color1": "#1a79f6"} as React.CSSProperties}>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              {/* Visual on left */}
              <div className="flex items-center justify-center">
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1a79f6]/20 to-blue-600/20 animate-pulse"></div>
                  <div className="absolute inset-4 sm:inset-6 md:inset-8 rounded-full bg-gradient-to-br from-[#1a79f6]/30 to-blue-700/30 flex items-center justify-center">
                    <Accessibility className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 text-[#1a79f6]" />
                  </div>
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-[#1a79f6]/30 flex items-center justify-center animate-bounce" style={{animationDelay: '0s', animationDuration: '2s'}}>
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#1a79f6]" />
                  </div>
                  <div className="absolute bottom-6 left-3 sm:bottom-8 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-[#1a79f6]/30 flex items-center justify-center animate-bounce" style={{animationDelay: '0.5s', animationDuration: '2s'}}>
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#1a79f6]" />
                  </div>
                  <div className="absolute top-8 left-2 sm:top-12 sm:left-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-[#1a79f6]/30 flex items-center justify-center animate-bounce" style={{animationDelay: '1s', animationDuration: '2s'}}>
                    <Target className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#1a79f6]" />
                  </div>
                </div>
              </div>
              
              {/* Text on right */}
              <div className="text-center md:text-right">
                <h2 className="text-base sm:text-lg md:text-2xl font-bold text-[#1a79f6] mb-3 md:mb-6 flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-3">
                  <Accessibility className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                  <span className="text-center md:text-right">הנגשה מלאה - הגנה משפטית ואחריות חברתית</span>
                </h2>
                <p className="mb-3 md:mb-4 text-xs sm:text-sm md:text-lg text-center md:text-right">
                  <span className="font-bold text-[#1a79f6]">כל אתר אצלנו מונגש באופן מלא!</span>
                </p>
                <div className="bg-black/40 rounded-lg md:rounded-xl p-3 sm:p-4 md:p-6">
                  <ul className="space-y-2 sm:space-y-3 text-gray-300 text-xs sm:text-sm md:text-base">
                    <li className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#1a79f6] flex-shrink-0 mt-0.5 sm:mt-1" />
                      <span><strong>הגנה משפטית:</strong> עמידה מלאה בחוק הנגשת שירותי אינטרנט - תגן על העסק שלך מתביעות</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#1a79f6] flex-shrink-0 mt-0.5 sm:mt-1" />
                      <span><strong>אחריות חברתית:</strong> נגישות לאנשים עם מוגבלויות - לך תדע אם הלקוח או הגולש הבא שלך צריך את זה</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#1a79f6] flex-shrink-0 mt-0.5 sm:mt-1" />
                      <span><strong>SEO משופר:</strong> אתרים מונגשים מקבלים דירוג טוב יותר בגוגל</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#1a79f6] flex-shrink-0 mt-0.5 sm:mt-1" />
                      <span><strong>חוויית משתמש טובה יותר:</strong> הנגשה משפרת את החוויה לכולם</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* בוט AI חכם */}
          <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-8 mb-4 sm:mb-6 md:mb-8 backdrop-blur-sm border-static bg-white/5" style={{"--color1": "#ffffff"} as React.CSSProperties}>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
              {/* Text on left */}
              <div className="text-center md:text-right">
                <h2 className="text-base sm:text-lg md:text-2xl font-bold text-white mb-3 md:mb-6 flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-3">
                  <Bot className="w-8 h-8" />
                  בוט AI חכם
                </h2>
                <p className="mb-4 text-lg">
                  <span className="font-bold text-white">אפשרות להרחבת האתר עם בוט AI חכם!</span>
                </p>
                <div className="bg-black/40 rounded-xl p-6">
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <Sparkles className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                      <span><strong>עונה על שאלות:</strong> הבוט לומד את תוכן האתר שלך ועונה לגולשים בצורה חכמה</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Sparkles className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                      <span><strong>מידע ממקורות חיצוניים:</strong> יכול לחפש מידע גם מרחבי האינטרנט</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Sparkles className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                      <span><strong>חיסכון בזמן:</strong> הבוט עושה את העבודה הקשה במקומך</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Visual on right */}
              <div className="flex items-center justify-center">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-gray-500/20 animate-pulse"></div>
                  <div className="absolute inset-4 rounded-2xl bg-white/10 border-2 border-white/50 flex flex-col items-center justify-center p-4">
                    <Bot className="w-24 h-24 text-white mb-3" />
                    <div className="w-full space-y-2">
                      <div className="h-2 bg-white/50 rounded animate-pulse" style={{animationDelay: '0s'}}></div>
                      <div className="h-2 bg-white/30 rounded w-3/4 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="h-2 bg-white/40 rounded w-5/6 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full bg-white/30 flex items-center justify-center animate-bounce">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* פיצ'רים מתקדמים */}
          <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-8 mb-4 sm:mb-6 md:mb-8 backdrop-blur-sm border-static bg-[#1a79f6]/10" style={{"--color1": "#1a79f6"} as React.CSSProperties}>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
              {/* Visual on left */}
              <div className="flex items-center justify-center">
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#1a79f6]/10 to-blue-600/10"></div>
                  <div className="absolute inset-4 grid grid-cols-3 gap-2">
                    <div className="bg-[#1a79f6]/20 rounded-lg flex items-center justify-center animate-pulse" style={{animationDelay: '0s'}}>
                      <Palette className="w-8 h-8 text-[#1a79f6]" />
                    </div>
                    <div className="bg-[#1a79f6]/20 rounded-lg flex items-center justify-center animate-pulse" style={{animationDelay: '0.2s'}}>
                      <FileText className="w-8 h-8 text-[#1a79f6]" />
                    </div>
                    <div className="bg-[#1a79f6]/20 rounded-lg flex items-center justify-center animate-pulse" style={{animationDelay: '0.4s'}}>
                      <Shield className="w-8 h-8 text-[#1a79f6]" />
                    </div>
                    <div className="bg-[#1a79f6]/20 rounded-lg flex items-center justify-center animate-pulse" style={{animationDelay: '0.6s'}}>
                      <Package className="w-8 h-8 text-[#1a79f6]" />
                    </div>
                    <div className="col-span-1 row-span-1 bg-[#1a79f6]/30 rounded-lg flex items-center justify-center border-2 border-[#1a79f6]">
                      <Zap className="w-12 h-12 text-[#1a79f6]" />
                    </div>
                    <div className="bg-[#1a79f6]/20 rounded-lg flex items-center justify-center animate-pulse" style={{animationDelay: '0.8s'}}>
                      <Server className="w-8 h-8 text-[#1a79f6]" />
                    </div>
                    <div className="col-span-3 bg-[#1a79f6]/20 rounded-lg flex items-center justify-center animate-pulse" style={{animationDelay: '1s'}}>
                      <Rocket className="w-10 h-10 text-[#1a79f6]" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Text on right */}
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1a79f6] mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                  <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  פיצ'רים שלא תמצאו בשום מקום אחר
                </h2>
                <p className="mb-4 md:mb-6 text-sm sm:text-base md:text-lg">
                  רק אתר שנבנה בטכנולוגיות המתקדמות ביותר יכול לאפשר לכם:
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="bg-black/40 rounded-lg md:rounded-xl p-3 sm:p-4 flex items-start gap-2 sm:gap-3">
                    <Palette className="w-6 h-6 text-[#1a79f6] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white mb-1">אנימציות מורכבות</h3>
                      <p className="text-sm text-gray-300">אפקטים ויזואליים מרהיבים שמושכים את העין</p>
                    </div>
                  </div>
                  <div className="bg-black/40 rounded-xl p-4 flex items-start gap-3">
                    <FileText className="w-6 h-6 text-[#1a79f6] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white mb-1">קבלת הודעות למייל</h3>
                      <p className="text-sm text-gray-300">פניות מגולשים ישירות לתיבת הדואר שלך</p>
                    </div>
                  </div>
                  <div className="bg-black/40 rounded-xl p-4 flex items-start gap-3">
                    <Shield className="w-6 h-6 text-[#1a79f6] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white mb-1">הרשמה מאובטחת</h3>
                      <p className="text-sm text-gray-300">מערכת משתמשים עם סיסמאות מוצפנות</p>
                    </div>
                  </div>
                  <div className="bg-black/40 rounded-xl p-4 flex items-start gap-3">
                    <Rocket className="w-6 h-6 text-[#1a79f6] flex-shrink-0 mt-1" />
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
          <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-8 mb-4 sm:mb-6 md:mb-8 backdrop-blur-sm border-static bg-blue-900/10" style={{"--color1": "#1a79f6"} as React.CSSProperties}>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
              {/* Text on left */}
              <div className="text-center md:text-right">
                <h2 className="text-base sm:text-lg md:text-2xl font-bold text-[#1a79f6] mb-3 md:mb-6 flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-3">
                  <Wrench className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 animate-spin" style={{animationDuration: '3s'}} />
                  תחזוקה מתמשכת ושיפור הקוד
                </h2>
                <p className="mb-4 md:mb-6 text-sm sm:text-base md:text-lg">
                  <span className="font-bold text-[#1a79f6]">Catapp</span> משפרת ומעדכנת את הקוד שלכם באופן שוטף
                </p>
                <p className="text-gray-300 mb-3 md:mb-4 text-sm sm:text-base">
                  אנחנו דואגים שהקוד שלכם תמיד יהיה נקי, מעודכן ומאובטח 🛡️
                </p>
                <div className="bg-black/40 rounded-lg md:rounded-xl p-3 sm:p-4">
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
          <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-8 mb-4 sm:mb-6 md:mb-8 backdrop-blur-sm border-static bg-white/5" style={{"--color1": "#ffffff"} as React.CSSProperties}>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
              {/* Visual on left */}
              <div className="flex items-center justify-center">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-gray-500/10"></div>
                  <div className="absolute inset-8 bg-white/10 rounded-xl border-2 border-white/50 flex flex-col items-center justify-center gap-4 p-4 transition-all duration-500 hover:scale-105 hover:border-white">
                    <div className="w-full h-20 bg-white/20 rounded-lg flex items-center justify-center animate-bounce">
                      <FileText className="w-12 h-12 text-white" />
                    </div>
                    <div className="w-full space-y-2">
                      <div className="h-2 bg-white/40 rounded animate-pulse"></div>
                      <div className="h-2 bg-white/30 rounded w-4/5 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="h-2 bg-white/20 rounded w-3/5 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-full bg-white/30 flex items-center justify-center border-2 border-white animate-spin" style={{animationDuration: '4s'}}>
                    <Target className="w-10 h-10 text-white" style={{animation: 'spin 4s linear infinite reverse'}} />
                  </div>
                </div>
              </div>
              
              {/* Text on right */}
              <div className="text-center md:text-right">
                <h2 className="text-base sm:text-lg md:text-2xl font-bold text-white mb-3 sm:mb-4 md:mb-6">שירותי תוכן מתקדמים</h2>
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-black/40 rounded-lg md:rounded-xl p-3 sm:p-4">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 flex items-center gap-2">
                      <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-pulse" />
                      קורות חיים מקצועיים
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                      בניית ושיפור קורות חיים מותאמים לתעשיית הטכנולוגיה עם דגש על הדגשת כישורים ויתרונות תחרותיים.
                    </p>
                  </div>
                  <div className="bg-black/40 rounded-lg md:rounded-xl p-3 sm:p-4">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      הרצאות קורות חיים
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base mb-3">
                      הרצאות פרונטליות ודיגיטליות מקיפות על כתיבת קו"ח מנצח לתעשיית ההייטק.
                    </p>
                    <a href="/cv-services" className="text-[#1a79f6] hover:underline text-sm inline-flex items-center gap-1">
                      לעמוד קורות חיים →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* תיק עבודות מובחר */}
          <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-8 mb-4 sm:mb-6 md:mb-8 backdrop-blur-sm border-static bg-white/5" style={{"--color1": "#1a79f6"} as React.CSSProperties}>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
              {/* Text on left */}
              <div className="text-center md:text-right">
                <h2 className="text-base sm:text-lg md:text-2xl font-bold text-[#1a79f6] mb-3 sm:mb-4 md:mb-6">פרויקטים מובחרים</h2>
                <p className="text-gray-300 mb-4 md:mb-6 text-sm sm:text-base">
                  כמה דוגמאות לפרויקטים שביצענו עבור לקוחות מרוצים:
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-black/40 rounded-lg p-3 sm:p-4 border-l-2 sm:border-l-4 border-[#1a79f6]">
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
                      <Building2 className="w-5 h-5 text-[#1a79f6]" />
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
                      <Scale className="w-5 h-5 text-[#1a79f6]" />
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
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72">
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
          <div className="relative text-center rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border-animated bg-white/10 backdrop-blur-sm" style={{"--color1": "#1a79f6", "--color2": "#ffffff", "--angle": "0deg"} as React.CSSProperties}>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4">מוכנים להתחיל?</h2>
            <p className="text-blue-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base px-4">
              עם ניסיון עשיר, טכנולוגיות עדכניות ותמיכה מתמשכת – Catapp היא הבחירה הטבעית שלכם להצלחה בעולם הדיגיטל.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <a href="/contact" 
                 className="bg-white text-[#1a79f6] hover:bg-gray-100 font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg sm:rounded-xl transition-all text-sm sm:text-base">
                צור קשר עוד היום
              </a>
              <a href="/quote" 
                 className="bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg sm:rounded-xl transition-all text-sm sm:text-base">
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
