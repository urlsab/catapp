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
  const [isClosing, setIsClosing] = React.useState(false);
  const [shouldRender, setShouldRender] = React.useState(false);

  React.useEffect(() => {
    if (isMenuOpen) {
      setShouldRender(true);
    }
  }, [isMenuOpen]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleMenuToggle = () => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
        setShouldRender(false);
      }, 300);
    } else {
      setIsMenuOpen(true);
      setIsClosing(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-black/30 backdrop-blur-sm z-50 border-b border-gray-700/50 fade-in"
    style={{
      background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.2))'
    }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center fade-in">
            <div className="relative overflow-hidden rounded-full">
              <img 
                src={logo} 
                alt="Catapp Logo" 
                className="h-10 w-auto rounded-full relative z-10"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 rtl:space-x-reverse fade-in">
            <Link
              to="/"
              className={`relative px-2 py-1 font-medium transition-colors duration-200 ${isActive('/') ? 'text-[#1a79f6]' : 'text-white hover:text-[#1a79f6]'} group`}
            >
              בית
              <span
                className={`absolute left-0 right-0 -bottom-1 h-0.5 bg-[#1a79f6] rounded transition-all duration-300 ${isActive('/') ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`}
              />
            </Link>
            <Link
              to="/pricing"
              className={`relative px-2 py-1 font-medium transition-colors duration-200 ${isActive('/pricing') ? 'text-[#1a79f6]' : 'text-white hover:text-[#1a79f6]'} group`}
            >
              מחירון
              <span
                className={`absolute left-0 right-0 -bottom-1 h-0.5 bg-[#1a79f6] rounded transition-all duration-300 ${isActive('/pricing') ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`}
              />
            </Link>
            <Link
              to="/portfolio"
              className={`relative px-2 py-1 font-medium transition-colors duration-200 ${isActive('/portfolio') ? 'text-[#1a79f6]' : 'text-white hover:text-[#1a79f6]'} group`}
            >
              תיק עבודות
              <span
                className={`absolute left-0 right-0 -bottom-1 h-0.5 bg-[#1a79f6] rounded transition-all duration-300 ${isActive('/portfolio') ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`}
              />
            </Link>
            <Link
              to="/about-full"
              className={`relative px-2 py-1 font-medium transition-colors duration-200 ${isActive('/about-full') ? 'text-[#1a79f6]' : 'text-white hover:text-[#1a79f6]'} group`}
            >
              אודות
              <span
                className={`absolute left-0 right-0 -bottom-1 h-0.5 bg-[#1a79f6] rounded transition-all duration-300 ${isActive('/about-full') ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`}
              />
            </Link>
            <Link
              to="/quote"
              className={`relative px-2 py-1 font-medium transition-colors duration-200 ${isActive('/quote') ? 'text-[#1a79f6]' : 'text-white hover:text-[#1a79f6]'} group`}
            >
              להצעת מחיר
              <span
                className={`absolute left-0 right-0 -bottom-1 h-0.5 bg-[#1a79f6] rounded transition-all duration-300 ${isActive('/quote') ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`}
              />
            </Link>
            <Link
            to="/cv-services"
            className={`relative px-2 py-1 font-medium transition-colors duration-200 ${isActive('/cv-services') ? 'text-[#1a79f6]' : 'text-white hover:text-[#1a79f6]'} group`}
          >
            קורות חיים
            <span
              className={`absolute left-0 right-0 -bottom-1 h-0.5 bg-[#1a79f6] rounded transition-all duration-300 ${isActive('/cv-services') ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`}
            />
          </Link>
            <Link
              to="/contact"
              className={`relative px-2 py-1 font-medium transition-colors duration-200 ${isActive('/contact') ? 'text-[#1a79f6]' : 'text-white hover:text-[#1a79f6]'} group`}
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
              onClick={handleMenuToggle}
              className="md:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-[#1a79f6]"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {shouldRender && (
          <div className={`md:hidden ${isClosing ? 'animate-fadeOut' : 'animate-fadeIn'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700">
              <Link 
                to="/"
                onClick={handleMenuToggle}
                className={`block px-3 py-2 transition-colors ${isClosing ? '' : 'animate-menuItemIn'} ${isActive('/') ? 'text-[#1a79f6]' : 'text-gray-700 dark:text-gray-300 hover:text-[#1a79f6]'}`}
                style={{ animationDelay: isClosing ? '0s' : '0.05s' }}
              >
                בית
              </Link>
              <Link 
                to="/pricing"
                onClick={handleMenuToggle}
                className={`block px-3 py-2 transition-colors ${isClosing ? '' : 'animate-menuItemIn'} ${isActive('/pricing') ? 'text-[#1a79f6]' : 'text-gray-700 dark:text-gray-300 hover:text-[#1a79f6]'}`}
                style={{ animationDelay: isClosing ? '0s' : '0.1s' }}
              >
                מחירון
              </Link>
              <Link 
                to="/portfolio"
                onClick={handleMenuToggle}
                className={`block px-3 py-2 transition-colors ${isClosing ? '' : 'animate-menuItemIn'} ${isActive('/portfolio') ? 'text-[#1a79f6]' : 'text-gray-700 dark:text-gray-300 hover:text-[#1a79f6]'}`}
                style={{ animationDelay: isClosing ? '0s' : '0.15s' }}
              >
                תיק עבודות
              </Link>
              <Link 
                to="/about-full"
                onClick={handleMenuToggle}
                className={`block px-3 py-2 transition-colors ${isClosing ? '' : 'animate-menuItemIn'} ${isActive('/about-full') ? 'text-[#1a79f6]' : 'text-gray-700 dark:text-gray-300 hover:text-[#1a79f6]'}`}
                style={{ animationDelay: isClosing ? '0s' : '0.2s' }}
              >
                אודות
              </Link>
              <Link 
                to="/quote"
                onClick={handleMenuToggle}
                className={`block px-3 py-2 transition-colors ${isClosing ? '' : 'animate-menuItemIn'} ${isActive('/quote') ? 'text-[#1a79f6]' : 'text-gray-700 dark:text-gray-300 hover:text-[#1a79f6]'}`}
                style={{ animationDelay: isClosing ? '0s' : '0.25s' }}
              >
                להצעת מחיר
              </Link>
              <Link 
                to="/cv-services"
                onClick={handleMenuToggle}
                className={`block px-3 py-2 transition-colors ${isClosing ? '' : 'animate-menuItemIn'} ${isActive('/cv-services') ? 'text-[#1a79f6]' : 'text-gray-700 dark:text-gray-300 hover:text-[#1a79f6]'}`}
                style={{ animationDelay: isClosing ? '0s' : '0.3s' }}
              >
                קורות חיים
              </Link>
              <Link 
                to="/contact"
                onClick={handleMenuToggle}
                className={`block px-3 py-2 transition-colors ${isClosing ? '' : 'animate-menuItemIn'} ${isActive('/contact') ? 'text-[#1a79f6]' : 'text-gray-700 dark:text-gray-300 hover:text-[#1a79f6]'}`}
                style={{ animationDelay: isClosing ? '0s' : '0.35s' }}
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