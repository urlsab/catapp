import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Code, Heart, Phone, Mail, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    window.open('https://wa.me/972556611594', '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:yairsabag213@gmail.com', '_self');
  };

  const handlePhone = () => {
    window.open('tel:+972556611594', '_self');
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="CatApp" className="h-8 mr-3 ml-0" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#1a79f6] to-blue-600 bg-clip-text text-transparent">
                CatApp
              </h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              מספקים שירותי תוכן וטכנולוגיה המתמחים בפיתוח, תחזוק ועיצוב אתרים. 
              פתרונות מקצועיים ומותאמים אישית לכל לקוח.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <button
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 p-2 rounded-lg transition-colors"
              >
                <MessageCircle size={20} />
              </button>
              <button
                onClick={handleEmail}
                className="bg-[#1a79f6] hover:bg-blue-700 p-2 rounded-lg transition-colors"
              >
                <Mail size={20} />
              </button>
              <button
                onClick={handlePhone}
                className="bg-gray-600 hover:bg-gray-700 p-2 rounded-lg transition-colors"
              >
                <Phone size={20} />
              </button>
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
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/pricing"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('nav.pricing')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/portfolio"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('nav.portfolio')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">יצירת קשר</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Phone size={16} className="mr-2 ml-0" />
                <button onClick={handlePhone} className="hover:text-white transition-colors">
                  0556611594
                </button>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 ml-0" />
                <button onClick={handleEmail} className="hover:text-white transition-colors">
                  yairsabag213@gmail.com
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              {t('footer.rights')}
            </div>
            <div className="flex items-center space-x-4 rtl:space-x-reverse text-gray-400">
              <Link to="/terms" className="hover:text-white transition-colors">
                {t('footer.terms')}
              </Link>
              <span>•</span>
              <Link to="/privacy" className="hover:text-white transition-colors">
                {t('footer.privacy')}
              </Link>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-gray-500 flex items-center justify-center">
              <span>נבנה באהבה עם</span>
              <Heart size={16} className="text-red-500 mx-1" />
              <span>ו</span>
              <Code size={16} className="text-[#1a79f6] mx-1" />
              <span>על ידי CatApp</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;