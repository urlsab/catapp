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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img src={logo} alt="Catapp Logo" className="h-8 mr-3 ml-0" />
              
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
          Catapp עוסקת בשירותי תוכן וטכנולוגיה, עם התמחות בבניית אתרים, תחזוקה ועיצוב. בניית קורות חיים מותאמים להייטק, הקמה ליווי וייעוץ לעסקים קטנים.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">ניווט</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  בית
                </Link>
              </li>
              <li>
                <Link 
                  to="/pricing"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  מחירון
                </Link>
              </li>
              <li>
                <Link 
                  to="/portfolio"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  תיק עבודות
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  צור קשר
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">יצירת קשר</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Phone size={16} className="mr-2 ml-1" />
                <button onClick={handlePhone} className="hover:text-white transition-colors">
                  055-6611594
                </button>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 ml-1" />
                <button onClick={handleEmail} className="hover:text-white transition-colors">
                  yairsabag213@gmail.com
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-wrap justify-center items-center gap-3 text-sm text-gray-400">
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