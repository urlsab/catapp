import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import '../styles/scroll.css';

const articles = [
  {
    id: 1,
    title: 'קורות חיים ו-ATS',
    content: `מערכות ATS (Applicant Tracking System) הן תוכנות שמסייעות למעסיקים לסנן ולנהל קורות חיים. חשוב להקפיד על פורמט ברור, להשתמש במילות מפתח רלוונטיות, ולוודא שקורות החיים קריאים גם למחשב וגם לאדם. הימנעו מתמונות, טבלאות או עיצובים מורכבים שלא תמיד נקלטים נכון במערכות אלו.`
  },
  {
    id: 2,
    title: 'הנגשת אתרים',
    content: `הנגשת אתרים מאפשרת לכל אדם, כולל אנשים עם מוגבלויות, להשתמש באתר בצורה מיטבית. יש להקפיד על ניגודיות צבעים, טקסטים חלופיים לתמונות, ניווט באמצעות מקלדת, ותמיכה בקוראי מסך. הנגשה היא לא רק חובה חוקית אלא גם ערך חברתי חשוב.`
  }
];

const fadeClass = 'fade-section';

const ArticlesPage: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <AnimatedBackground />
      <div className="relative z-30 w-full max-w-3xl mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-10">מאמרים</h1>
        {articles.map(article => (
          <section key={article.id} className={`my-8 p-6 rounded-lg bg-white bg-opacity-80 shadow-lg transition-all ${fadeClass}`}
            id={`article-${article.id}`}>
            <h2 className="text-2xl font-semibold mb-4 text-right">{article.title}</h2>
            <p className="text-lg text-right leading-relaxed">{article.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;
