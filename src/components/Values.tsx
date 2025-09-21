import React from 'react';
import { Code, Search, Smartphone, Wrench, Shield, DollarSign, Zap, Globe } from 'lucide-react';

const Values: React.FC = () => {
  const sectionRef = React.useRef<HTMLElement>(null);

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

  const values = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'טכנולוגיה מתקדמת',
      description: 'React, TypeScript, JavaScript ועוד',
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: 'קידום אורגני (SEO)',
      description: 'הגעה למקום הראשון בתוצאות החיפוש',
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'ריספונסיביות מלאה',
      description: 'מותאם למחשב, טאבלט וטלפון נייד',
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'תחזוקה ושדרוגים',
      description: 'תמיכה מתמשכת ושיפורים שוטפים',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'אבטחה מתקדמת',
      description: 'אבטחה מתקדמת והגנה מפני וירוסים',
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'מחירים הוגנים',
      description: 'מחירים הוגנים ללא עלויות נסתרות',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'פיתוח מהיר',
      description: 'משך פיתוח קצר ומסירה מהירה',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'דומיינים מקצועיים',
      description: 'רכישה וניהול דומיינים מקצועי',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-black fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            הערכים שלנו
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1a79f6] to-blue-700 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            אנו מתחייבים לשירות מקצועי, אמין, מותאם אישית ולשביעות רצון מלאה של הלקוח.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                <span className="text-[#1a79f6]">
                  {value.icon}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;