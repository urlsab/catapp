import React from 'react';
import logoBg from '../../Assets/catapp logo no bg.png';
import { Rocket, TrendingUp, FileText, Target, Star, Zap, Shield } from 'lucide-react';
// import SmoothScroll from '../components/SmoothScroll';

const AboutFullPage: React.FC = () => {
  return (
  <div className="relative min-h-screen text-white pt-16 fade-in overflow-hidden mt-16">
      {/* <SmoothScroll /> */}
      {/* רקע לוגו מטושטש */}
      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
        <img
          src={logoBg}
          alt="CatApp Logo Background"
          className="w-[600px] h-[600px] object-contain opacity-10 blur-2xl select-none"
          style={{ filter: 'blur(32px)' }}
        />
      </div>

      {/* תוכן ראשי */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-[#1a79f6] to-blue-400 bg-clip-text text-transparent">
            אודות CatApp
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-[#1a79f6] to-blue-700 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            החברה המובילה בישראל לפתרונות דיגיטליים מתקדמים ושירותי תוכן מקצועיים
          </p>
        </div>

        <section className="mb-12 space-y-8 text-lg leading-relaxed rtl:text-right">
          {/* הצגת החברה */}
          <div className="border-4 border-blue-600 rounded-2xl p-8 mb-8 bg-white/5 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-[#1a79f6] mb-6 text-center">מי אנחנו</h2>
            <p className="mb-6">
              <span className="font-bold text-[#1a79f6]">CatApp</span> הוקמה על מנת לספק פתרונות דיגיטליים מתקדמים עבור עסקים ויזמים בישראל. 
              אנו מתמחים ב<span className="font-semibold">בניית אתרים חכמים ומתקדמים</span>, עיצוב מותאם אישית, 
              ושירותי תוכן ייחודיים שמביאים תוצאות מדידות.
            </p>
            <p className="mb-6">
              עם התמחות מיוחדת ב<span className="font-semibold">React, TypeScript ו-JavaScript</span>, אנו בונים אתרים 
              שלא רק נראים מדהימים, אלא גם מספקים ביצועים מעולים, אבטחה מתקדמת ותוצאות עסקיות מוכחות.
            </p>
          </div>

          {/* שירותים עיקריים */}
          <div className="border-4 border-blue-600 rounded-2xl p-8 mb-8 bg-white/5 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-[#1a79f6] mb-6 text-center">השירותים שלנו</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Rocket className="w-6 h-6 text-[#1a79f6]" />
                  פיתוח אתרים
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>דפי נחיתה החל מ-2,000 ₪</li>
                  <li>אתרי תדמית החל מ-5,000 ₪</li>
                  <li>אתרי תיק עבודות החל מ-8,000 ₪</li>
                  <li>חנויות אינטרנטיות עם מערכת סליקה</li>
                  <li>רשתות חברתיות ומוצרי SaaS מותאמים</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-[#1a79f6]" />
                  שירותי תחזוקה
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>הגנה מפני קריסות ותיקון באגים - 300 ₪/חודש</li>
                  <li>קידום בגוגל (SEO) - החל מ-400 ₪/חודש</li>
                  <li>עדכון תכנים שוטפים - החל מ-300 ₪/חודש</li>
                  <li>ניטור אבטחה 24/7</li>
                  <li>גיבויים יומיים ועדכוני אבטחה</li>
                </ul>
              </div>
            </div>
          </div>

          {/* שירותי תוכן */}
          <div className="border-4 border-blue-600 rounded-2xl p-8 mb-8 bg-white/5 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-[#1a79f6] mb-6 text-center">שירותי תוכן מתקדמים</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-[#1a79f6]" />
                  קורות חיים מקצועיים
                </h3>
                <p className="text-gray-300 mb-4">
                  בניית ושיפור קורות חיים מותאמים לתעשיית הטכנולוגיה עם דגש על הדגשת כישורים ויתרונות תחרותיים.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6 text-[#1a79f6]" />
                  ייעוץ עסקי
                </h3>
                <p className="text-gray-300 mb-4">
                  ליווי מקצועי לעסקים קטנים בתחום ההקמה, הפיתוח והצמיחה, כולל הרצאות על אופטימיזציה דיגיטלית.
                </p>
              </div>
            </div>
          </div>

          {/* הערכים שלנו */}
          <div className="border-4 border-blue-600 rounded-2xl p-8 mb-8 bg-white/5 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-[#1a79f6] mb-6 text-center">הערכים המנחים אותנו</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="mb-3 flex justify-center">
                  <Target className="w-10 h-10 text-[#1a79f6]" />
                </div>
                <h3 className="font-bold text-white mb-2">מקצועיות</h3>
                <p className="text-gray-300 text-sm">צוות מנוסה עם ידע עמוק בטכנולוגיות חדישות</p>
              </div>
              <div className="text-center">
                <div className="mb-3 flex justify-center">
                  <Star className="w-10 h-10 text-[#1a79f6]" />
                </div>
                <h3 className="font-bold text-white mb-2">איכות</h3>
                <p className="text-gray-300 text-sm">פתרונות מתקדמים ומותאמים אישית לכל לקוח</p>
              </div>
              <div className="text-center">
                <div className="mb-3 flex justify-center">
                  <Zap className="w-10 h-10 text-[#1a79f6]" />
                </div>
                <h3 className="font-bold text-white mb-2">זמינות</h3>
                <p className="text-gray-300 text-sm">תמיכה מלאה ותגובה מהירה לבקשות</p>
              </div>
              <div className="text-center">
                <div className="mb-3 flex justify-center">
                  <Shield className="w-10 h-10 text-[#1a79f6]" />
                </div>
                <h3 className="font-bold text-white mb-2">אמינות</h3>
                <p className="text-gray-300 text-sm">אבטחת מידע ויציבות מערכות ברמה הגבוהה ביותר</p>
              </div>
            </div>
          </div>

          {/* תיק עבודות מובחר */}
          <div className="border-4 border-blue-600 rounded-2xl p-8 mb-8 bg-white/5 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-[#1a79f6] mb-6 text-center">פרויקטים מובחרים</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="font-bold text-white mb-2">Resume Builder</h3>
                <p className="text-gray-300 text-sm mb-2">מערכת SaaS לבניית קורות חיים</p>
                <a href="https://resumes-builder.web.app" target="_blank" rel="noopener noreferrer" 
                   className="text-[#1a79f6] hover:underline text-sm">לאתר</a>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="font-bold text-white mb-2">Atliz</h3>
                <p className="text-gray-300 text-sm mb-2">אתר תדמית עסקי מתקדם</p>
                <a href="https://atliz.co.il" target="_blank" rel="noopener noreferrer" 
                   className="text-[#1a79f6] hover:underline text-sm">לאתר</a>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="font-bold text-white mb-2">Refael Law</h3>
                <p className="text-gray-300 text-sm mb-2">אתר משרד עורכי דין</p>
                <a href="https://refael-law.com" target="_blank" rel="noopener noreferrer" 
                   className="text-[#1a79f6] hover:underline text-sm">לאתר</a>
              </div>
            </div>
          </div>

          {/* קריאה לפעולה */}
          <div className="text-center bg-gradient-to-r from-[#1a79f6] to-blue-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">מוכנים להתחיל?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              עם ניסיון עשיר, טכנולוגיות עדכניות ותמיכה מתמשכת – CatApp היא הבחירה הטבעית שלכם להצלחה בעולם הדיגיטל.
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
