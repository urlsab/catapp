import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/catapp logo no bg.png';
// import { useLanguage } from '../contexts/LanguageContext';
import { Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  // const { t } = useLanguage();

  // const handleWhatsApp = () => {
  //   window.open('https://wa.me/972556611594', '_blank');
  // };

  const handleEmail = () => {
    window.open('mailto:yairsabag213@gmail.com', '_self');
  };

  const handlePhone = () => {
    window.open('tel:+972556611594', '_self');
  };

  return (
    <footer className="text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="grid md:grid-cols-4 gap-4 sm:gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img src={logo} alt="Catapp Logo" className="h-8 ml-auto block" />
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm md:text-base">
              בניית אתרים מקצועיים | דפי נחיתה ממירים | כתיבת קורות חיים להייטק | אופטימיזציית LinkedIn | הטמעת AI לאתרים
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm sm:text-lg font-semibold mb-2 sm:mb-4">ניווט</h4>
            <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-1 sm:gap-y-2">
              <Link 
                to="/"
                className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm md:text-base"
              >
                בית
              </Link>
              <Link 
                to="/pricing"
                className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm md:text-base"
              >
                מחירון
              </Link>
              <Link 
                to="/about-full"
                className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm md:text-base"
              >
                אודות
              </Link>
              <Link 
                to="/testimonials"
                className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm md:text-base"
              >
                המלצות
              </Link>

              <Link 
                to="/portfolio"
                className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm md:text-base"
              >
                פרוייקטים
              </Link>
              <Link 
                to="/contact"
                className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm md:text-base"
              >
                צור קשר
              </Link>
              <Link 
                to="/ask-ai"
                className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm md:text-base"
              >
                שאל AI
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm sm:text-lg font-semibold mb-2 sm:mb-4">פרטי קשר</h4>
            <ul className="space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm md:text-base">
              <li className="flex items-center justify-start">
                <Phone size={16} className="ml-2" />
                <button onClick={handlePhone} className="hover:text-white transition-colors">
                  055-6611594
                </button>
              </li>
              <li className="flex items-center justify-start">
                <Mail size={16} className="ml-2" />
                <button onClick={handleEmail} className="hover:text-white transition-colors">
                  yairsabag213@gmail.com
                </button>
              </li>
              <li className="flex items-center justify-start">
                <a 
                  href="https://waze.com/ul?q=רותם+15+לוד&navigate=yes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-white transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-2"
                  >
                    <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  לוד, רותם 15
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-4 sm:mt-8 pt-4 sm:pt-8">
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-[10px] sm:text-sm text-gray-400">
            <Link to="/terms" className="hover:text-white transition-colors">
              תנאי שימוש
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/privacy" className="hover:text-white transition-colors">
              מדיניות פרטיות
            </Link>
            <span className="text-gray-600">|</span>
            <div className="flex items-center gap-2">
              <span>נבנה ע"י</span>
              <img src={logo} alt="Catapp Logo" className="h-5 w-auto" />
            </div>
            <span className="text-gray-600">|</span>
            <span>{new Date().getFullYear()}</span>
            <span className="text-gray-600">|</span>
            <span>כל הזכויות שמורות</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;