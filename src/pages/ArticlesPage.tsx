import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { articles, Article } from '../data/articles';
import '../styles/articleSnap.css';

function chunkArray<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) result.push(arr.slice(i, i + size));
  return result;
}

const desktopChunks = chunkArray(articles, 3);
const mobileChunks  = chunkArray(articles, 2);

const ArticleCard: React.FC<{ article: Article; visible: boolean; delay: number; compact?: boolean }> = ({
  article, visible, delay, compact,
}) => (
  <Link
    to={`/articles/${article.slug}`}
    className="flex flex-col group rounded-xl overflow-hidden border border-white/10 hover:border-[#1a79f6]/50 hover:shadow-[0_0_20px_rgba(26,121,246,0.15)] transition-all duration-300 h-full"
    aria-label={article.title}
    style={{
      transitionDelay: `${delay}ms`,
      transition: 'opacity 0.7s ease, transform 0.7s ease',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(20px)',
    }}
  >
    <div
      className={`relative bg-gradient-to-br ${article.gradient} flex items-center justify-center overflow-hidden flex-shrink-0`}
      style={{ height: compact ? 'clamp(64px, 12vh, 110px)' : 'clamp(80px, 14vh, 130px)' }}
    >
      <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-white/5" />
      <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-white/5" />
      <span
        className="relative select-none drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
        style={{ fontSize: compact ? 'clamp(1.5rem, 4vh, 2.5rem)' : 'clamp(1.8rem, 5vh, 3rem)' }}
      >
        {article.icon}
      </span>
      <span className={`absolute top-2 left-2 text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 ${article.tagColor}`}>
        {article.tag}
      </span>
    </div>
    <div className="bg-white/5 px-2.5 py-2 sm:px-3 sm:py-2.5 text-right flex flex-col flex-1">
      <h2 className="text-xs sm:text-sm font-bold text-white mb-1 leading-snug group-hover:text-[#1a79f6] transition-colors duration-200 line-clamp-2">
        {article.title}
      </h2>
      <p className="text-gray-400 text-[10px] sm:text-xs leading-relaxed line-clamp-2 flex-1">
        {article.summary}
      </p>
      <div className="mt-1.5 flex items-center justify-end gap-1 text-[#1a79f6] text-[10px] sm:text-xs font-semibold">
        <span>קרא עוד</span>
        <span className="group-hover:-translate-x-0.5 transition-transform duration-200">←</span>
      </div>
    </div>
  </Link>
);

const ArticlesPage: React.FC = () => {
  const snapContainerRef = useRef<HTMLDivElement>(null);
  const [headerVisible,  setHeaderVisible]  = useState(false);
  const [visibleDesktop, setVisibleDesktop] = useState<boolean[]>(() => desktopChunks.map(() => false));
  const [visibleMobile,  setVisibleMobile]  = useState<boolean[]>(() => mobileChunks.map(() => false));
  const headerRef = useRef<HTMLDivElement>(null);

  // Callback refs – keyed by "desktop-N" / "mobile-N"
  const sectionEls = useRef<Map<string, Element>>(new Map());
  const registerRef = useCallback((key: string) => (el: HTMLDivElement | null) => {
    if (el) sectionEls.current.set(key, el);
    else sectionEls.current.delete(key);
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const globalFooter = document.querySelector('.min-h-screen > footer') as HTMLElement;
    if (globalFooter) globalFooter.style.display = 'none';
    return () => {
      document.body.style.overflow = '';
      if (globalFooter) globalFooter.style.display = '';
    };
  }, []);

  useEffect(() => {
    const container = snapContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === headerRef.current) {
            setHeaderVisible(entry.isIntersecting);
            return;
          }
          sectionEls.current.forEach((el, key) => {
            if (el !== entry.target) return;
            const [type, idxStr] = key.split('-');
            const idx = Number(idxStr);
            if (type === 'desktop') setVisibleDesktop(prev => { const next = [...prev]; next[idx] = entry.isIntersecting; return next; });
            if (type === 'mobile')  setVisibleMobile(prev  => { const next = [...prev]; next[idx] = entry.isIntersecting; return next; });
          });
        });
      },
      { root: container, threshold: 0.1 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    sectionEls.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="article-snap-container" ref={snapContainerRef} dir="rtl">

      {/* ===== SECTION 1: Header ===== */}
      <section className="article-snap-section">
        <div
          ref={headerRef}
          className={`relative z-10 w-full max-w-3xl mx-auto px-4 flex flex-col items-center text-center transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block text-[#1a79f6] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 sm:mb-4">
            בלוג מקצועי
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            מאמרים על בניית אתרים
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
            מדריכים מקצועיים על נגישות, עיצוב אתרים, טכנולוגיות פיתוח, קידום אתרים ובינה מלאכותית בעולם האינטרנט
          </p>
          <div className="mt-6 sm:mt-8 w-20 sm:w-24 h-1 bg-[#1a79f6] rounded-full" />
        </div>
      </section>

      {/* ===== DESKTOP SECTIONS: 3 articles per snap section (lg+) ===== */}
      {desktopChunks.map((chunk, chunkIdx) => (
        <section key={`desktop-${chunkIdx}`} className="article-snap-section article-desktop-only article-snap-content">
          <div
            ref={registerRef(`desktop-${chunkIdx}`)}
            className={`relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col h-full justify-center transition-all duration-1000 ${
              visibleDesktop[chunkIdx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {chunkIdx === 0 && (
              <h2 className="text-sm font-semibold text-[#1a79f6] text-center tracking-wide uppercase mb-3">
                כל המאמרים
              </h2>
            )}
            <p className="text-xs text-gray-500 text-center mb-3">
              {chunkIdx * 3 + 1}–{Math.min(chunkIdx * 3 + chunk.length, articles.length)} מתוך {articles.length}
            </p>
            <div className="grid grid-cols-3 gap-4 w-full">
              {chunk.map((article, i) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  visible={visibleDesktop[chunkIdx]}
                  delay={i * 80}
                  compact
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ===== MOBILE SECTIONS: 2 articles per snap section (< lg) ===== */}
      {mobileChunks.map((chunk, chunkIdx) => (
        <section key={`mobile-${chunkIdx}`} className="article-snap-section article-mobile-only">
          <div
            ref={registerRef(`mobile-${chunkIdx}`)}
            className={`relative z-10 w-full max-w-lg mx-auto px-3 flex flex-col justify-center transition-all duration-1000 ${
              visibleMobile[chunkIdx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {chunkIdx === 0 && (
              <h2 className="text-sm font-semibold text-[#1a79f6] text-center tracking-wide uppercase mb-3">
                כל המאמרים
              </h2>
            )}
            <p className="text-xs text-gray-500 text-center mb-2">
              {chunkIdx * 2 + 1}–{Math.min(chunkIdx * 2 + chunk.length, articles.length)} מתוך {articles.length}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {chunk.map((article, i) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  visible={visibleMobile[chunkIdx]}
                  delay={i * 80}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ===== Footer ===== */}
      <section className="article-snap-section article-snap-footer">
        <Footer />
      </section>

    </div>
  );
};

export default ArticlesPage;