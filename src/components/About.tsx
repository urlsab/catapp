import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Users, Award, Clock, Shield } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'מקצועיות',
      description: 'צוות מנוסה עם ידע עמוק בטכנולוגיות חדישות'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'איכות',
      description: 'פתרונות מתקדמים ומותאמים אישית לכל לקוח'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'זמינות',
      description: 'תמיכה מלאה ותגובה מהירה לבקשות'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'אמינות',
      description: 'אבטחת מידע ויציבות מערכות ברמה הגבוהה ביותר'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1a79f6] to-blue-700 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              {t('about.description')}
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-[#1a79f6]">
                      {feature.icon}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-[#1a79f6] to-blue-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">למה לבחור בנו?</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 ml-0"></div>
                  <span>ניסיון רב בתחום פיתוח האתרים</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 ml-0"></div>
                  <span>טכנולוגיות מתקדמות ועדכניות</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 ml-0"></div>
                  <span>תמיכה מלאה לאחר השקה</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 ml-0"></div>
                  <span>מחירים תחרותיים ושקופים</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;