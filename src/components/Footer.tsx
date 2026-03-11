import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/catapp logo no bg.png';
import { Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // IntersectionObserver for fade in/out
  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    // Find snap container parent if exists, otherwise use viewport
    const snapContainer = el.closest(
      '.pricing-snap-container, .home-snap-container, .contact-snap-container, .testimonials-snap-container'
    );

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { root: snapContainer || null, threshold: 0.15 }
    );

    // Small delay to ensure DOM is ready
    const t = setTimeout(() => observer.observe(el), 50);
    return () => { clearTimeout(t); observer.disconnect(); };
  }, []);

  const handleEmail = () => {
    window.open('mailto:yairsabag213@gmail.com', '_self');
  };

  const handlePhone = () => {
    window.open('tel:+972556611594', '_self');
  };

  return (
    <footer
      ref={footerRef}
      className={`footer-wrapper text-white w-full transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="footer-grid grid md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4 lg:mb-6">
              <img src={logo} alt="Catapp Logo" className="h-10 lg:h-14 ml-auto block" />
            </div>
            <p className="footer-text text-gray-400 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg lg:text-xl">
              בניית אתרים מקצועיים | דפי נחיתה ממירים | כתיבת קורות חיים להייטק | אופטימיזציית LinkedIn | הטמעת AI לאתרים
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="footer-heading text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 lg:mb-5">ניווט</h4>
            <div className="footer-nav-grid grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3">
              <Link to="/" className="footer-link text-gray-400 hover:text-white transition-colors text-base sm:text-lg lg:text-xl">
                בית
              </Link>
              <Link to="/pricing" className="footer-link text-gray-400 hover:text-white transition-colors text-base sm:text-lg lg:text-xl">
                מחירון
              </Link>
              <Link to="/about-full" className="footer-link text-gray-400 hover:text-white transition-colors text-base sm:text-lg lg:text-xl">
                אודות
              </Link>
              <Link to="/testimonials" className="footer-link text-gray-400 hover:text-white transition-colors text-base sm:text-lg lg:text-xl">
                המלצות
              </Link>
              <Link to="/portfolio" className="footer-link text-gray-400 hover:text-white transition-colors text-base sm:text-lg lg:text-xl">
                פרוייקטים
              </Link>
              <Link to="/contact" className="footer-link text-gray-400 hover:text-white transition-colors text-base sm:text-lg lg:text-xl">
                צור קשר
              </Link>
              <Link to="/ask-ai" className="footer-link text-gray-400 hover:text-white transition-colors text-base sm:text-lg lg:text-xl">
                שאל AI
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="footer-heading text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 lg:mb-5">פרטי קשר</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-base sm:text-lg lg:text-xl">
              <li className="flex items-center justify-start">
                <Phone className="footer-icon ml-2 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex-shrink-0" />
                <button onClick={handlePhone} className="footer-link hover:text-white transition-colors">
                  055-6611594
                </button>
              </li>
              <li className="flex items-center justify-start">
                <Mail className="footer-icon ml-2 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex-shrink-0" />
                <button onClick={handleEmail} className="footer-link hover:text-white transition-colors">
                  yairsabag213@gmail.com
                </button>
              </li>
              <li className="flex items-center justify-start">
                <a 
                  href="https://waze.com/ul?q=רותם+15+לוד&navigate=yes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-white transition-colors footer-link"
                >
                  <svg
                    className="footer-icon ml-2 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  לוד, רותם 15
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 lg:mt-10 pt-6 sm:pt-8">
          <div className="footer-bottom flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-gray-400 text-sm sm:text-base lg:text-lg">
            <Link to="/terms" className="footer-bottom-link hover:text-white transition-colors">
              תנאי שימוש
            </Link>
            <span className="text-gray-600 footer-bottom-divider">|</span>
            <Link to="/privacy" className="footer-bottom-link hover:text-white transition-colors">
              מדיניות פרטיות
            </Link>
            <span className="text-gray-600 footer-bottom-divider">|</span>
            <div className="flex items-center gap-2">
              <span className="footer-bottom-link">נבנה ע"י</span>
              <img src={logo} alt="Catapp Logo" className="h-6 lg:h-8 w-auto" />
            </div>
            <span className="text-gray-600 footer-bottom-divider">|</span>
            <span className="footer-bottom-link">{new Date().getFullYear()}</span>
            <span className="text-gray-600 footer-bottom-divider">|</span>
            <span className="footer-bottom-link">כל הזכויות שמורות</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;