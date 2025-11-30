import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useScrollToTop } from './utils/scrollUtils';
import { ThemeProvider } from './contexts/ThemeContext';
import { useState } from 'react';
import LoadingSpinner from './components/LoadingSpinner';
import AnimatedBackground from './components/AnimatedBackground';
import CustomCursor from './components/CustomCursor';
// import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import QuotePage from './pages/QuotePage';
import AboutFullPage from './pages/AboutFullPage';
import FAQPage from './pages/FaqPage';
// import AnimatedBackground from './components/AnimatedBackground';

function usePageLoading() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);
  const [spinnerVisible, setSpinnerVisible] = useState(false);
  const [canScrollToTop, setCanScrollToTop] = useState(false);

  useEffect(() => {
    // Reset states on route change
    setLoading(true);
    setSpinnerVisible(true);
    setCanScrollToTop(false);
    
    const loadTimer = setTimeout(() => {
      setLoading(false);
      // Hide spinner after loading is complete
      setTimeout(() => {
        setSpinnerVisible(false);
        // Enable scroll to top only after spinner is hidden
        setTimeout(() => setCanScrollToTop(true), 100);
      }, 200);
    }, 800);
    
    return () => {
      clearTimeout(loadTimer);
    };
  }, [pathname]);

  return { loading, spinnerVisible, canScrollToTop };
}

function ScrollToTop({ canScrollToTop }: { canScrollToTop: boolean }) {
  useScrollToTop(canScrollToTop);
  return null;
}

import { MessageCircle, FileText } from 'lucide-react';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}
function AppContent() {
  const {  spinnerVisible, canScrollToTop } = usePageLoading();

  return (
    <div className="relative min-h-screen">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* רקע אנימציה */}
      <AnimatedBackground />

      {/* תוכן האתר מעל האנימציה */}
      <div className="relative z-30">
        <ScrollToTop canScrollToTop={canScrollToTop} />
        {spinnerVisible && <LoadingSpinner />}

        <div className="min-h-screen transition-colors duration-300 relative z-10">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/about-full" element={<AboutFullPage />} />
          </Routes>
          <Footer />

          {/* כפתורי פעולה קבועים בפינה שמאלית תחתונה */}
          <div className="fixed left-2 bottom-2 flex flex-col gap-2 z-50">
            <a
              href="https://wa.me/972556611594"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </a>
            <a
              href="/quote"
              className="flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white rounded-full shadow-lg transition-all w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
            >
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;