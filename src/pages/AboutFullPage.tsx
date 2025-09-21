import React from 'react';
import logoBg from '../../Assets/catapp logo no bg.png';

const AboutFullPage: React.FC = () => {
  return (
  <div className="relative min-h-screen bg-black text-white pt-16 fade-in overflow-hidden">
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
      <div className="relative z-10 max-w-4xl mx-auto px-4">
  <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 mt-0 tracking-tight">אודות החברה</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#1a79f6] to-blue-700 mx-auto mb-8 rounded-full"></div>

        <section className="mb-12 space-y-6 text-xl leading-relaxed rtl:text-right">
          <p>
            <span className="font-bold text-[#1a79f6]">CatApp</span> מתמחה בבניית אתרים חכמים ומתקדמים, בעיצוב מותאם אישית,
            בתחזוקה שוטפת ובשירותי תוכן חדשניים. אנחנו עובדים עם הטכנולוגיות המובילות בעולם –
            <span className="font-semibold"> React, TypeScript ו-JavaScript</span> – כדי לספק אתרים מהירים, מאובטחים ומותאמים לכל מסך.
          </p>

          <p>
            אצלנו תקבלו <span className="font-semibold">קידום SEO איכותי</span>, תחזוקה ותיקון באגים, אבטחת מידע מתקדמת,
            ניהול דומיינים, מחירים נוחים ושירות אישי וזמין.
          </p>

          <p>
            הערכים שמנחים אותנו הם <span className="font-semibold">מקצועיות, איכות, זמינות ואמינות</span> – וכל אלו מתורגמים
            לפתרונות מותאמים אישית, תמיכה מלאה ושקיפות מלאה מול הלקוח.
          </p>

          <p>
            בנוסף, אנחנו מציעים שירותי תוכן ייחודיים: <span className="font-semibold">בניית ושיפור קורות חיים</span>,
            ייעוץ וליווי לעסקים קטנים, והרצאות מקצועיות על קורות חיים ולינקדאין.
          </p>

          <p className="text-gray-300 text-center text-lg mt-6">
            עם ניסיון עשיר, טכנולוגיות עדכניות ותמיכה מתמשכת – CatApp היא הבחירה הטבעית שלכם להצלחה בעולם הדיגיטל.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutFullPage;
