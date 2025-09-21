import React from 'react';
import { Phone, Mail, MessageCircle, FileText, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
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

  const handleWhatsApp = () => {
    window.open('https://wa.me/972556611594', '_blank');
  };

  const handlePhone = () => {
    window.open('tel:+972556611594', '_self');
  };

  const handleEmail = () => {
    window.open('mailto:yairsabag213@gmail.com', '_self');
  };

  const handleForm = () => {
    window.open('https://forms.gle/A94BRJsPUNZQ6YQy7', '_blank');
  };

  const handleMaintenanceForm = () => {
    window.open('https://forms.gle/vNGtve7iHdJHCqhA9', '_blank');
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-white dark:bg-black fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            צור קשר
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1a79f6] to-blue-700 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            מוכנים להתחיל? צרו איתנו קשר עוד היום וקבלו הצעת מחיר מותאמת אישית
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                פרטי התקשרות
              </h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Phone className="w-5 h-5 text-[#1a79f6] mr-3 ml-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">טלפון</p>
                    <button
                      onClick={handlePhone}
                      className="text-[#1a79f6] hover:underline"
                    >
                      0556611594
                    </button>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Mail className="w-5 h-5 text-[#1a79f6] mr-3 ml-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">אימייל</p>
                    <button
                      onClick={handleEmail}
                      className="text-[#1a79f6] hover:underline"
                    >
                      yairsabag213@gmail.com
                    </button>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <MapPin className="w-5 h-5 text-[#1a79f6] mr-3 ml-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">מיקום</p>
                    <p className="text-gray-600 dark:text-gray-400">ישראל</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Clock className="w-5 h-5 text-[#1a79f6] mr-3 ml-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">שעות פעילות</p>
                    <p className="text-gray-600 dark:text-gray-400">א'-ה' 9:00-18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Actions */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              דרכי התקשרות
            </h3>
            <div className="grid gap-4">
              <button
                onClick={handleWhatsApp}
                className="flex items-center justify-center p-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-6 h-6 mr-3 ml-0" />
                <span className="text-lg font-semibold">וואטסאפ</span>
              </button>
              <button
                onClick={handlePhone}
                className="flex items-center justify-center p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <Phone className="w-6 h-6 mr-3 ml-0" />
                <span className="text-lg font-semibold">התקשר עכשיו</span>
              </button>
              <button
                onClick={handleEmail}
                className="flex items-center justify-center p-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-2xl hover:from-purple-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <Mail className="w-6 h-6 mr-3 ml-0" />
                <span className="text-lg font-semibold">שלח אימייל</span>
              </button>
              <button
                onClick={handleForm}
                className="flex items-center justify-center p-6 bg-gradient-to-r from-[#1a79f6] to-blue-600 text-white rounded-2xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <FileText className="w-6 h-6 mr-3 ml-0" />
                <span className="text-lg font-semibold">טופס יצירת קשר</span>
              </button>
              <button
                onClick={handleMaintenanceForm}
                className="flex items-center justify-center p-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <FileText className="w-6 h-6 mr-3 ml-0" />
                <span className="text-lg font-semibold">טופס טיפול חודשי באתר</span>
              </button>
            </div>
            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-2xl border border-blue-200 dark:border-gray-700">
              <h4 className="font-bold text-[#1a79f6] dark:text-blue-100 mb-3">
                💡 טיפ להתקשרות מוצלחת
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                לפני ההתקשרות, חישבו על סוג האתר שאתם רוצים, התקציב המשוער והתוכן שתרצו לכלול. 
                זה יעזור לנו לתת לכם הצעת מחיר מדויקת יותר ולתכנן את הפרויקט בצורה מיטבית.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;