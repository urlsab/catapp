import React from 'react';
// import Hero from '../components/Hero';
import About from '../components/About';
import Values from '../components/Values';
import KnowledgeHub from '../components/KnowledgeHub';

import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const handleFade = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          entry.target.classList.remove('fade-out');
        } else {
          entry.target.classList.remove('fade-in');
          entry.target.classList.add('fade-out');
        }
      });
    };
    const observer = new IntersectionObserver(handleFade, {
      threshold: 0.1
    });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // דוגמאות למחירון
  const pricingPreview = [
    {
      name: 'דף נחיתה',
      price: 'החל מ-2,000 ₪',
      example: 'orbenji.com'
    },
    {
      name: 'אתר תדמית',
      price: 'החל מ-5,000 ₪',
      example: 'atliz.co.il'
    },
    {
      name: 'אתר תיק עבודות',
      price: 'החל מ-8,000 ₪',
      example: 'portfolio-uriel-yair-sabag.vercel.app'
    }
  ];

  const maintenancePreview = [
    {
      name: 'הגנה מפני קריסות ותיקון באגים',
      price: '300 ₪ לחודש'
    },
    {
      name: 'קידום בגוגל',
      price: 'החל מ-400 ₪ לחודש'
    },
    {
      name:' עדכון תוכן שוטף',
      price: 'החל מ-400 ₪ לחודש'
    }
  ];

  return (
  <div ref={sectionRef} className="min-h-screen bg-white dark:bg-black pt-16 fade-in">
      {/* <div className="fade-in">
        <Hero />
      </div> */}
      <div className="fade-in">
        <About />
      </div>
      <div className="fade-in">
        <Values />
      </div>
      <div className="fade-in">
        <KnowledgeHub />
      </div>

      {/* Pricing Preview Section - styled as in PricingPage */}
      <section className="py-16 bg-gray-50 dark:bg-black fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 fade-in">מחירון</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1a79f6] to-blue-700 mx-auto fade-in"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 fade-in">
            {/* בנייה */}
            {pricingPreview.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 fade-in">
                <div className="text-center mb-6 fade-in">
                  <div className="text-4xl mb-3 fade-in">🚀</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 fade-in">{item.name}</h3>
                  <div className="text-2xl font-bold text-[#1a79f6] fade-in">{item.price}</div>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 fade-in">
                  <a
                    href={`https://${item.example}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#1a79f6] hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-xl shadow transition-all text-sm fade-in"
                  >
                    לדוגמא
                  </a>
                </div>
              </div>
            ))}
            {/* תחזוקה */}
            {maintenancePreview.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 fade-in">
                <div className="text-center mb-6 fade-in">
                  <div className="text-3xl mb-3 fade-in">{idx === 0 ? '🛡️' : '📈'}</div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 fade-in">{item.name}</h4>
                  <div className="text-xl font-bold text-green-600 dark:text-green-400 fade-in">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6 flex flex-col gap-4 items-center fade-in">
            <Link to="/pricing" className="inline-block bg-[#1a79f6] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-2xl shadow-lg transition-all text-lg fade-in">
              למחירון המלא
            </Link>
            <Link to="/quote" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-2xl shadow-lg transition-all text-lg fade-in">
              לקבלת הצעת מחיר עוד היום
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;