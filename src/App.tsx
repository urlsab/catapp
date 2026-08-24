import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useScrollToTop } from './utils/scrollUtils';
import { usePageSeo } from './utils/usePageSeo';
import { ThemeProvider } from './contexts/ThemeContext';
import { useState } from 'react';
import LoadingSpinner from './components/LoadingSpinner';
import AnimatedBackground from './components/AnimatedBackground';
import CustomCursor from './components/CustomCursor';
// import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy load pages for better performance (Core Web Vitals)
const HomePage = lazy(() => import('./pages/HomePage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const AboutFullPage = lazy(() => import('./pages/AboutFullPage'));
const ArticlesPage = lazy(() => import('./pages/ArticlesPage'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'));
const AskAIPage = lazy(() => import('./pages/AskAIPage'));
const FaqPage = lazy(() => import('./pages/FaqPage'));
const QuotePage = lazy(() => import('./pages/QuotePage'));
const BusinessWebsitesPage = lazy(() => import('./pages/BusinessWebsitesPage'));
const LandingPagesPage = lazy(() => import('./pages/LandingPagesPage'));
const ReactWebsitesPage = lazy(() => import('./pages/ReactWebsitesPage'));
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage'));
const WebDevelopmentPage = lazy(() => import('./pages/WebDevelopmentPage'));

function usePageLoading() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);
  const [spinnerVisible, setSpinnerVisible] = useState(false);
  const [canScrollToTop, setCanScrollToTop] = useState(false);

  useEffect(() => {
    setLoading(true);
    setSpinnerVisible(true);
    setCanScrollToTop(false);

    const loadTimer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setSpinnerVisible(false);
        setTimeout(() => {
          setCanScrollToTop(true);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      }, 100);
    }, 200);

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

import { MessageCircle } from 'lucide-react';

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
  const location = useLocation();
  const isAskAI = location.pathname === '/ask-ai';
  usePageSeo();

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
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/about-full" element={<AboutFullPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/ask-ai" element={<AskAIPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/articles/:slug" element={<ArticlePage />} />
              <Route path="/quote" element={<QuotePage />} />
              <Route path="/business-websites" element={<BusinessWebsitesPage />} />
              <Route path="/landing-pages" element={<LandingPagesPage />} />
              <Route path="/react-websites" element={<ReactWebsitesPage />} />
              <Route path="/web-development" element={<WebDevelopmentPage />} />
              <Route path="/portfolio/:slug" element={<CaseStudyPage />} />
            </Routes>
          </Suspense>
          {!isAskAI && <Footer />}

          {/* כפתור וואטסאפ קבוע בפינה שמאלית תחתונה */}
          <div className="fixed left-2 bottom-2 flex flex-col gap-2 z-50">
            <a
              href="https://wa.me/972556611594"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;