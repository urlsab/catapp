import React, { useRef, useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';
import { articles } from '../data/articles';

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = articles.find((a) => a.slug === slug);

  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const contentRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const [contentVisible, setContentVisible] = useState<boolean[]>([]);

  useEffect(() => {
    if (!article) {
      navigate('/articles', { replace: true });
      return;
    }
    setContentVisible(new Array(article.content.length).fill(false));
  }, [article, navigate]);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [article]);

  useEffect(() => {
    if (!article) return;
    const observers: IntersectionObserver[] = [];
    contentRefs.current.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setContentVisible((prev) => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [article, contentVisible.length]);

  if (!article) return null;

  const currentIndex = articles.findIndex((a) => a.slug === slug);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  return (
    <div dir="rtl" className="relative min-h-screen bg-[#0a0a0a]">
      <AnimatedBackground />
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 py-24">

        {/* Back button */}
        <Link
          to="/articles"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#1a79f6] transition-colors mb-10 text-base font-medium group"
        >
          <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          חזרה למאמרים
        </Link>

        {/* Article Header */}
        <div
          ref={headerRef}
          className={`transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Hero image area */}
          <div className={`relative h-64 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br ${article.gradient} flex items-center justify-center mb-10`}>
            <div className="absolute -top-10 -left-10 w-56 h-56 rounded-full bg-white/5" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-white/5" />
            <div className="absolute top-6 right-8 w-20 h-20 rounded-full bg-white/5" />
            <span className="relative text-9xl select-none drop-shadow-xl">{article.icon}</span>
            <span className={`absolute top-5 left-5 text-sm font-bold px-4 py-1.5 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 ${article.tagColor}`}>
              {article.tag}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 text-right">
            {article.title}
          </h1>
          <p className={`text-xl md:text-2xl font-medium leading-relaxed mb-10 text-right ${article.tagColor}`}>
            {article.summary}
          </p>
          <div className="w-full h-px bg-white/10 mb-10" />
        </div>

        {/* Article Content */}
        <div className="space-y-8">
          {article.content.map((paragraph, i) => (
            <p
              key={i}
              ref={(el) => { contentRefs.current[i] = el; }}
              className={`text-gray-200 text-xl md:text-2xl leading-[1.9] text-right transition-all duration-700 ${contentVisible[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-[#1a79f6]/10 border border-[#1a79f6]/30 text-right">
          <p className="text-white text-xl font-bold mb-2">רוצים לדעת עוד?</p>
          <p className="text-gray-300 text-lg mb-5">צרו קשר עם Catapp לשאלות, ייעוץ חינמי או הצעת מחיר מותאמת אישית.</p>
          <Link
            to="/contact"
            className="inline-block bg-[#1a79f6] hover:bg-[#1565c0] text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200 text-base"
          >
            צור קשר
          </Link>
        </div>

        {/* Prev / Next navigation */}
        <div className="mt-12 flex justify-between gap-4">
          {nextArticle ? (
            <Link
              to={`/articles/${nextArticle.slug}`}
              className="flex-1 group p-5 rounded-xl border border-white/10 hover:border-[#1a79f6]/40 bg-white/5 transition-all duration-200 text-right"
            >
              <p className="text-xs text-gray-500 mb-1">מאמר הבא</p>
              <p className="text-white font-semibold text-base group-hover:text-[#1a79f6] transition-colors leading-snug">
                {nextArticle.title}
              </p>
            </Link>
          ) : <div className="flex-1" />}

          {prevArticle ? (
            <Link
              to={`/articles/${prevArticle.slug}`}
              className="flex-1 group p-5 rounded-xl border border-white/10 hover:border-[#1a79f6]/40 bg-white/5 transition-all duration-200 text-left"
            >
              <p className="text-xs text-gray-500 mb-1">מאמר קודם</p>
              <p className="text-white font-semibold text-base group-hover:text-[#1a79f6] transition-colors leading-snug">
                {prevArticle.title}
              </p>
            </Link>
          ) : <div className="flex-1" />}
        </div>

        {/* Back to all articles */}
        <div className="mt-10 text-center">
          <Link
            to="/articles"
            className="text-gray-400 hover:text-[#1a79f6] transition-colors text-base font-medium"
          >
            ← כל המאמרים
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
