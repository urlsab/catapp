import React from 'react';
// import { useLanguage } from '../contexts/LanguageContext';
import { ExternalLink } from 'lucide-react';
// import SmoothScroll from '../components/SmoothScroll';

const PortfolioPage: React.FC = () => {
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
  const portfolioItems = [
    {
      title: 'Resume Builder',
      description: 'מערכת בניית קורות חיים מתקדמת',
      url: 'https://resumes-builder.web.app',
      image: 'https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'SaaS'
    },
    {
      title: 'Camp Network',
      description: 'רשת חברתית למחנות וטיולים',
      url: 'https://yelp--camp--project.herokuapp.com',
      image: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Social Network'
    },
    {
      title: 'Or Benji',
      description: 'דף נחיתה אלגנטי ומקצועי',
      url: 'https://orbenji.com',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Landing Page'
    },
    {
      title: 'Refael Law',
      description: 'אתר משרד עורכי דין',
      url: 'https://refael-law.com',
      image: 'https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Business Website'
    },
    {
      title: 'Atliz',
      description: 'אתר תדמית עסקי מתקדם',
      url: 'https://atliz.co.il',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Business Website'
    },
    {
      title: 'Color Game React',
      description: 'משחק צבעים אינטראקטיבי',
      url: 'https://color-game-react.vercel.app',
      image: 'https://images.pexels.com/photos/1121123/pexels-photo-1121123.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web Game'
    }
  ];

  return (
    <div ref={sectionRef} className="min-h-screen pt-16 fade-in">
      {/* <SmoothScroll /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 mt-0">
            תיק עבודות
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1a79f6] to-blue-700 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            עיינו בתיק העבודות שלנו וראו את הפרויקטים המרשימים שיצרנו עבור לקוחותינו
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#1a79f6] bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-0 group-hover:opacity-100 bg-white text-[#1a79f6] p-3 rounded-full shadow-lg hover:bg-blue-50 transition-all duration-200"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-block bg-blue-100 dark:bg-gray-800 text-[#1a79f6] text-xs px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {item.description}
                </p>
                
                <div className="text-center">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#1a79f6] hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-xl shadow transition-all text-sm"
                  >
                    לאתר
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;