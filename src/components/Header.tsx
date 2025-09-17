import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const { t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 dark:bg-black/90 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="CatApp" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 rtl:space-x-reverse">
            <Link 
              to="/"
              className={`transition-colors ${isActive('/') ? 'text-[#1a79f6]' : 'text-gray-700 dark:text-gray-300 hover:text-[#1a79f6]'}`}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/pricing"
              className={`transition-colors ${isActive('/pricing') ? 'text-[#1a79f6]' : 'text-gray-700 dark:text-gray-300 hover:text-[#1a79f6]'}`}
            >
              {t('nav.pricing')}
            </Link>
            <Link 
              to="/portfolio"
              className={`transition-colors ${isActive('/portfolio') ? 'text-[#1a79f6]' : 'text-gray-700 dark:text-gray-300 hover:text-[#1a79f6]'}`}
            >
              {t('nav.portfolio')}
            </Link>
            <Link 
              to="/contact"
              className={`transition-colors ${isActive('/contact') ? 'text-[#1a79f6]' : 'text-gray-700 dark:text-gray-300 hover:text-[#1a79f6]'}`}
            >
              {t('nav.contact')}
            </Link>
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-[#1a79f6] transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
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
                {t('nav.home')}
              </Link>
              <Link 
                to="/pricing"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 transition-colors ${isActive('/pricing') ? 'text-[#1a79f6]' : 'text-gray-700 dark:text-gray-300 hover:text-[#1a79f6]'}`}
              >
                {t('nav.pricing')}
              </Link>
              <Link 
                to="/portfolio"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 transition-colors ${isActive('/portfolio') ? 'text-[#1a79f6]' : 'text-gray-700 dark:text-gray-300 hover:text-[#1a79f6]'}`}
              >
                {t('nav.portfolio')}
              </Link>
              <Link 
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 transition-colors ${isActive('/contact') ? 'text-[#1a79f6]' : 'text-gray-700 dark:text-gray-300 hover:text-[#1a79f6]'}`}
              >
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;