import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';
import { articles } from '../data/articles';

function ArticleCard({ article, index }: { article: typeof articles[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <Link
        to={`/articles/${article.slug}`}
        className="block group rounded-2xl overflow-hidden border border-white/10 hover:border-[#1a79f6]/50 hover:shadow-[0_0_30px_rgba(26,121,246,0.15)] transition-all duration-300"
        aria-label={article.title}
      >
        {/* Card Image Area */}
        <div className={`relative h-48 bg-gradient-to-br ${article.gradient} flex items-center justify-center overflow-hidden`}>
          {/* Decorative circles */}
          <div className="absolute -top-8 -left-8 w-40 h-40 rounded-full bg-white/5" />
          <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-white/5" />
          <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/5" />
          {/* Icon */}
          <span className="relative text-7xl select-none drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
            {article.icon}
          </span>
          {/* Tag badge */}
          <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 ${article.tagColor}`}>
            {article.tag}
          </span>
        </div>

        {/* Card Body */}
        <div className="bg-white/5 p-6 text-right">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug group-hover:text-[#1a79f6] transition-colors duration-200">
            {article.title}
          </h2>
          <p className="text-gray-400 text-base leading-relaxed line-clamp-3">
            {article.summary}
          </p>
          <div className="mt-4 flex items-center justify-end gap-2 text-[#1a79f6] text-sm font-semibold">
            <span>קרא עוד</span>
            <span className="text-lg group-hover:-translate-x-1 transition-transform duration-200">←</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

const ArticlesPage: React.FC = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTitleVisible(true); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div dir="rtl" className="relative min-h-screen bg-[#0a0a0a]">
      <AnimatedBackground />
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-24">

        {/* Page Header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="inline-block text-[#1a79f6] text-sm font-semibold tracking-widest uppercase mb-4">
            בלוג מקצועי
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            מאמרים על בניית אתרים
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            מדריכים מקצועיים על נגישות, עיצוב, טכנולוגיות פיתוח ובינה מלאכותית בעולם האינטרנט
          </p>
          <div className="mt-8 w-24 h-1 bg-[#1a79f6] mx-auto rounded-full" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;