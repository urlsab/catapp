import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TermsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('terms.title')}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1a79f6] to-blue-700 mx-auto"></div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">תנאי השירות</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">1. כללי</h3>
            <p className="mb-4">
              תנאי השירות הללו חלים על כל השירותים הניתנים על ידי CatApp, לרבות פיתוח אתרים, עיצוב, תחזוק ושירותים נוספים.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">2. הזמנת שירותים</h3>
            <p className="mb-4">
              הזמנת שירותים מתבצעת באמצעות יצירת קשר טלפוני, אימייל או מילוי טופס. ההזמנה תיחשב מאושרת לאחר קבלת אישור בכתב.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">3. תשלומים</h3>
            <p className="mb-4">
              התשלום יבוצע לפי ההסכם שנחתם. בדרך כלל נדרש מקדמה של 50% מהסכום הכולל לפני תחילת העבודה.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">4. זכויות יוצרים</h3>
            <p className="mb-4">
              זכויות היוצרים על העיצוב והקוד יועברו ללקוח לאחר תשלום מלא של הפרויקט.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">5. אחריות ותמיכה</h3>
            <p className="mb-4">
              אנו מעניקים אחריות של 30 יום על באגים טכניים. תמיכה נוספת תינתן במסגרת חבילות התחזוק.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">6. ביטול הזמנה</h3>
            <p className="mb-4">
              ביטול הזמנה לאחר תחילת העבודה יחויב בתשלום עבור העבודה שבוצעה עד לנקודת הביטול.
            </p>

            <div className="mt-8 p-4 bg-blue-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                תנאים אלו עודכנו לאחרונה בתאריך: ינואר 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;