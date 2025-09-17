import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Code, Search, Smartphone, Wrench, Shield, DollarSign, Zap, Globe } from 'lucide-react';

const Values: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Code className="w-6 h-6" />,
      title: t('values.tech'),
      description: 'React, TypeScript, JavaScript ועוד',
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: t('values.seo'),
      description: 'הגעה למקום הראשון בתוצאות החיפוש',
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: t('values.responsive'),
      description: 'מותאם למחשב, טאבלט וטלפון נייד',
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: t('values.maintenance'),
      description: 'תמיכה מתמשכת ושיפורים שוטפים',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t('values.security'),
      description: 'אבטחה מתקדמת והגנה מפני וירוסים',
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: t('values.price'),
      description: 'מחירים הוגנים ללא עלויות נסתרות',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t('values.speed'),
      description: 'משך פיתוח קצר ומסירה מהירה',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: t('values.domain'),
      description: 'רכישה וניהול דומיינים מקצועי',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('values.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1a79f6] to-blue-700 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('values.religious')}
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