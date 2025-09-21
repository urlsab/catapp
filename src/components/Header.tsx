import React from 'react';
import logo from '../../Assets/catapp logo no bg.png';
import { Link, useLocation } from 'react-router-dom';
// import { useLanguage } from '../contexts/LanguageContext';
// import { useTheme } from '../contexts/ThemeContext';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  // const { t } = useLanguage();
  // const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 dark:bg-black/90 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700 fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center fade-in">
            <img src={logo} alt="Catapp Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 rtl:space-x-reverse fade-in">
            <Link
              to="/"
              className={`relative px-2 py-1 font-medium transition-colors duration-200 ${isActive('/') ? 'text-[#1a79f6]' : 'text-gray-700 dark:text-gray-300 hover:text-[#1a79f6]'} group`}
            >
              בית
              <span
                className={`absolute left-0 right-0 -bottom-1 h-0.5 bg-[#1a79f6] rounded transition-all duration-300 ${isActive('/') ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`}
              />
            </Link>
            <Link
              to="/pricing"
              className={`relative px-2 py-1 font-medium transition-colors duration-200 ${isActive('/pricing') ? 'text-[#1a79f6]' : 'text-gray-700 dark:text-gray-300 hover:text-[#1a79f6]'} group`}
            >
              מחירון
              <span
                className={`absolute left-0 right-0 -bottom-1 h-0.5 bg-[#1a79f6] rounded transition-all duration-300 ${isActive('/pricing') ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`}
              />
            </Link>
            <Link
              to="/portfolio"
              className={`relative px-2 py-1 font-medium transition-colors duration-200 ${isActive('/portfolio') ? 'text-[#1a79f6]' : 'text-gray-700 dark:text-gray-300 hover:text-[#1a79f6]'} group`}
            >
              תיק עבודות
              <span
                className={`absolute left-0 right-0 -bottom-1 h-0.5 bg-[#1a79f6] rounded transition-all duration-300 ${isActive('/portfolio') ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`}
              />
            </Link>
            <Link
              to="/about-full"
              className={`relative px-2 py-1 font-medium transition-colors duration-200 ${isActive('/about-full') ? 'text-[#1a79f6]' : 'text-gray-700 dark:text-gray-300 hover:text-[#1a79f6]'} group`}
            >
              אודות
              <span
                className={`absolute left-0 right-0 -bottom-1 h-0.5 bg-[#1a79f6] rounded transition-all duration-300 ${isActive('/about-full') ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`}
              />
            </Link>
            <Link
              to="/quote"
              className={`relative px-2 py-1 font-medium transition-colors duration-200 ${isActive('/quote') ? 'text-[#1a79f6]' : 'text-gray-700 dark:text-gray-300 hover:text-[#1a79f6]'} group`}
            >
              להצעת מחיר
              <span
                className={`absolute left-0 right-0 -bottom-1 h-0.5 bg-[#1a79f6] rounded transition-all duration-300 ${isActive('/quote') ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`}
              />
            </Link>
            <Link
            to="/faq"
            className={`relative px-2 py-1 font-medium transition-colors duration-200 ${isActive('/faq') ? 'text-[#1a79f6]' : 'text-gray-700 dark:text-gray-300 hover:text-[#1a79f6]'} group`}
          >
            שאלות נפוצות
            <span
              className={`absolute left-0 right-0 -bottom-1 h-0.5 bg-[#1a79f6] rounded transition-all duration-300 ${isActive('/faq') ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`}
            />
          </Link>
            <Link
              to="/contact"
              className={`relative px-2 py-1 font-medium transition-colors duration-200 ${isActive('/contact') ? 'text-[#1a79f6]' : 'text-gray-700 dark:text-gray-300 hover:text-[#1a79f6]'} group`}
            >
              צור קשר
              <span
                className={`absolute left-0 right-0 -bottom-1 h-0.5 bg-[#1a79f6] rounded transition-all duration-300 ${isActive('/contact') ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`}
              />
            </Link>
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse fade-in">
            {/* <button
              onClick={toggleTheme}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-[#1a79f6] transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button> */}
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-[#1a79f6]"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700">
              <Link 
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 transition-colors ${isActive('/') ? 'text-[#1a79f6]' : 'text-gray-700 dark:text-gray-300 hover:text-[#1a79f6]'}`}
              >
                בית
              </Link>
              <Link 
                to="/pricing"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 transition-colors ${isActive('/pricing') ? 'text-[#1a79f6]' : 'text-gray-700 dark:text-gray-300 hover:text-[#1a79f6]'}`}
              >
                מחירון
              </Link>
              <Link 
                to="/portfolio"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 transition-colors ${isActive('/portfolio') ? 'text-[#1a79f6]' : 'text-gray-700 dark:text-gray-300 hover:text-[#1a79f6]'}`}
              >
                תיק עבודות
              </Link>
                <Link 
                  to="/about-full"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 transition-colors ${isActive('/about-full') ? 'text-[#1a79f6]' : 'text-gray-700 dark:text-gray-300 hover:text-[#1a79f6]'}`}
                >
                  אודות
                </Link>
              <Link 
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 transition-colors ${isActive('/contact') ? 'text-[#1a79f6]' : 'text-gray-700 dark:text-gray-300 hover:text-[#1a79f6]'}`}
              >
                צור קשר
              </Link>
            </div>
          </div>
        )}
      </div>
      
    </header>
  );
};

export default Header;