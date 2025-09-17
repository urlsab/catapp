import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FileUp as FileUser, Eye, Presentation, Users } from 'lucide-react';

const KnowledgeHub: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <FileUser className="w-8 h-8" />,
      title: t('knowledge.cv'),
      description: 'בניית קורות חיים מקצועיים המותאמים לתעשיית הטכנולוgiה עם דגש על הדגשת כישורים ויתרונות'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: t('knowledge.review'),
      description: 'בדיקה יסודית של קורות חיים קיימים עם המלצות לשיפור ואופטימיזציה'
    },
    {
      icon: <Presentation className="w-8 h-8" />,
      title: t('knowledge.lectures'),
      description: 'הרצאות מעמיקות על כתיבת קורות חיים יעילים ואופטימיזציה של פרופיל לינקדאין'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t('knowledge.consulting'),
      description: 'ייעוץ מקצועי לעסקים קטנים בתחום ההקמה, הפיתוח והצמיחה'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('knowledge.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1a79f6] to-blue-700 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            מעבר לפיתוח אתרים, אנו מציעים שירותים נוספים לעזור לכם להצליח בקריירה ובעסק
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl flex items-center justify-center">
                    <span className="text-[#1a79f6]">
                      {service.icon}
                    </span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 inline-block">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              מעוניינים בשירותים נוספים?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
              צרו איתנו קשר לפרטים נוספים על שירותי הייעוץ, בניית קורות חיים והרצאות
            </p>
            <button 
              onClick={() => window.open('mailto:yairsabag213@gmail.com', '_self')}
              className="bg-gradient-to-r from-[#1a79f6] to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              צור קשר עוד היום
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeHub;