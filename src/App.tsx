import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
// import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
<<<<<<< Updated upstream
// import QuotePage from './pages/QuotePage';
=======
import QuotePage from './pages/QuotePage';
>>>>>>> Stashed changes
import AboutFullPage from './pages/AboutFullPage';
import FAQPage from './pages/FaqPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

import { MessageCircle, FileText } from 'lucide-react';

function App() {
  return (
    <ThemeProvider>
      {/* <LanguageProvider> */}
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
<<<<<<< Updated upstream
              {/* <Route path="/quote" element={<QuotePage />} /> */}
              {/* <Route path="/faq" element={<FAQPage />} /> */}
              {/* <Route path="/about-full" element={<AboutFullPage />} /> */}
=======
              <Route path="/quote" element={<QuotePage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/about-full" element={<AboutFullPage />} />
>>>>>>> Stashed changes
            </Routes>
            <Footer />

            {/* Fixed action buttons bottom left */}
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
        </Router>
      {/* </LanguageProvider> */}
    </ThemeProvider>
  );
}

export default App;