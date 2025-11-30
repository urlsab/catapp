import React from 'react';
import { Phone, Mail, MessageCircle, FileText, MapPin, Clock, Target } from 'lucide-react';

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
    <section ref={sectionRef} id="contact" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            צור קשר
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1a79f6] to-blue-700 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            מוכנים להתחיל? צרו איתנו קשר עוד היום וקבלו הצעת מחיר מותאמת אישית
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
              פרטי התקשרות
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:border-[#1a79f6]/60 transition-all">
                <Phone className="w-5 h-5 text-[#1a79f6] mr-3 ml-0 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white text-sm md:text-base">טלפון</p>
                  <button
                    onClick={handlePhone}
                    className="text-[#1a79f6] hover:underline text-sm md:text-base"
                  >
                    055-6611594
                  </button>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:border-[#1a79f6]/60 transition-all">
                <Mail className="w-5 h-5 text-[#1a79f6] mr-3 ml-0 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-semibold text-white text-sm md:text-base">אימייל</p>
                  <button
                    onClick={handleEmail}
                    className="text-[#1a79f6] hover:underline text-xs md:text-sm truncate block max-w-full"
                  >
                    yairsabag213@gmail.com
                  </button>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:border-[#1a79f6]/60 transition-all">
                <MapPin className="w-5 h-5 text-[#1a79f6] mr-3 ml-0 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white text-sm md:text-base">מיקום</p>
                  <p className="text-gray-300 text-sm md:text-base">ישראל</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:border-[#1a79f6]/60 transition-all">
                <Clock className="w-5 h-5 text-[#1a79f6] mr-3 ml-0 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white text-sm md:text-base">שעות פעילות</p>
                  <p className="text-gray-300 text-sm md:text-base">א'-ה' 9:00-18:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Actions */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
              דרכי התקשרות
            </h3>
            <div className="grid gap-4">
              <button
                onClick={handleWhatsApp}
                className="flex items-center justify-center p-4 md:p-6 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl md:rounded-2xl hover:border-[#1a79f6]/60 hover:bg-white/15 transition-all duration-200 transform hover:scale-105 shadow-lg group"
              >
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-[#1a79f6] mr-3 ml-0 group-hover:scale-110 transition-transform" />
                <span className="text-base md:text-lg font-semibold">וואטסאפ</span>
              </button>
              <button
                onClick={handlePhone}
                className="flex items-center justify-center p-4 md:p-6 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl md:rounded-2xl hover:border-[#1a79f6]/60 hover:bg-white/15 transition-all duration-200 transform hover:scale-105 shadow-lg group"
              >
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#1a79f6] mr-3 ml-0 group-hover:scale-110 transition-transform" />
                <span className="text-base md:text-lg font-semibold">התקשר עכשיו</span>
              </button>
              <button
                onClick={handleEmail}
                className="flex items-center justify-center p-4 md:p-6 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl md:rounded-2xl hover:border-[#1a79f6]/60 hover:bg-white/15 transition-all duration-200 transform hover:scale-105 shadow-lg group"
              >
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#1a79f6] mr-3 ml-0 group-hover:scale-110 transition-transform" />
                <span className="text-base md:text-lg font-semibold">שלח אימייל</span>
              </button>
              <button
                onClick={handleForm}
                className="flex items-center justify-center p-4 md:p-6 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl md:rounded-2xl hover:border-[#1a79f6]/60 hover:bg-white/15 transition-all duration-200 transform hover:scale-105 shadow-lg group"
              >
                <FileText className="w-5 h-5 md:w-6 md:h-6 text-[#1a79f6] mr-3 ml-0 group-hover:scale-110 transition-transform" />
                <span className="text-base md:text-lg font-semibold">טופס יצירת קשר</span>
              </button>
              <button
                onClick={handleMaintenanceForm}
                className="flex items-center justify-center p-4 md:p-6 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl md:rounded-2xl hover:border-[#1a79f6]/60 hover:bg-white/15 transition-all duration-200 transform hover:scale-105 shadow-lg group"
              >
                <FileText className="w-5 h-5 md:w-6 md:h-6 text-[#1a79f6] mr-3 ml-0 group-hover:scale-110 transition-transform" />
                <span className="text-base md:text-lg font-semibold">טופס טיפול חודשי באתר</span>
              </button>
            </div>
          </div>

          {/* Tip Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 md:p-6 rounded-xl md:rounded-2xl">
            <h4 className="font-bold text-[#1a79f6] mb-3 text-base md:text-lg flex items-center gap-2">
              <Target className="w-5 h-5" />
              טיפ להתקשרות מוצלחת
            </h4>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              לפני ההתקשרות, חישבו על סוג האתר שאתם רוצים, התקציב המשוער והתוכן שתרצו לכלול. 
              זה יעזור לנו לתת לכם הצעת מחיר מדויקת יותר ולתכנן את הפרויקט בצורה מיטבית.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;