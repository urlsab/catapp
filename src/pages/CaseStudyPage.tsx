import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { CheckCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { caseStudyBySlug } from '../data/case-studies';

const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const cs = slug ? caseStudyBySlug(slug) : undefined;

  React.useEffect(() => {
    if (!cs) navigate('/portfolio', { replace: true });
  }, [cs, navigate]);

  if (!cs) return null;

  return (
    <div dir="rtl" className="max-w-4xl mx-auto px-4 py-16 mt-16">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
        <Link to="/" className="hover:text-[#1a79f6] transition-colors">בית</Link>
        <span>/</span>
        <Link to="/portfolio" className="hover:text-[#1a79f6] transition-colors">תיק עבודות</Link>
        <span>/</span>
        <span className="text-gray-300">{cs.clientName}</span>
      </nav>

      {/* H1 */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1a79f6]/10 border border-[#1a79f6]/30 text-[#1a79f6] text-sm font-medium mb-4">
          {cs.clientType}
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          {cs.h1}
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">{cs.intro}</p>
      </div>

      {/* Screenshot */}
      <div className="mb-12 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        <img
          src={cs.image}
          alt={`${cs.clientName} — צילום מסך האתר`}
          className="w-full h-auto"
          loading="lazy"
        />
      </div>

      {/* Challenge + Solution */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        <div className="rounded-2xl border border-[#1a79f6]/30 bg-white/5 backdrop-blur-sm p-6">
          <h2 className="text-white font-bold text-xl mb-3">האתגר</h2>
          <p className="text-gray-300 leading-relaxed">{cs.challenge}</p>
        </div>
        <div className="rounded-2xl border border-[#1a79f6]/30 bg-white/5 backdrop-blur-sm p-6">
          <h2 className="text-white font-bold text-xl mb-3">הפתרון</h2>
          <p className="text-gray-300 leading-relaxed">{cs.solution}</p>
        </div>
      </div>

      {/* Features */}
      <section className="mb-12 rounded-2xl border border-[#1a79f6]/30 bg-white/5 backdrop-blur-sm p-8">
        <h2 className="text-2xl font-bold text-white mb-6">מה כלל הפרויקט?</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {cs.features.map((f, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-200">
              <CheckCircle className="w-5 h-5 text-[#1a79f6] flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </section>

      {/* Technologies */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-white mb-4">טכנולוגיות</h2>
        <div className="flex flex-wrap gap-3">
          {cs.technologies.map((t) => (
            <span key={t} className="px-3 py-1.5 rounded-lg bg-[#1a79f6]/10 border border-[#1a79f6]/30 text-[#1a79f6] text-sm font-medium">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      {cs.testimonial && (
        <section className="mb-12 rounded-2xl border border-white/10 bg-white/[0.04] p-8">
          <h2 className="text-xl font-bold text-white mb-4">מה אמר הלקוח?</h2>
          <blockquote className="text-gray-200 text-lg leading-relaxed mb-4 italic">
            "{cs.testimonial.text}"
          </blockquote>
          <div className="text-gray-400 text-sm">
            — <span className="text-white font-medium">{cs.testimonial.author}</span>, {cs.testimonial.role}
          </div>
        </section>
      )}

      {/* View site */}
      <section className="mb-12 text-center">
        <a
          href={cs.siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#1a79f6] hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
        >
          <ExternalLink className="w-5 h-5" />
          צפייה באתר החי
        </a>
      </section>

      {/* Related + CTA */}
      <section className="rounded-2xl border border-[#1a79f6]/30 bg-[#1a79f6]/5 p-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">רוצים אתר דומה?</h2>
        <p className="text-gray-300 mb-6 max-w-lg mx-auto">
          הצעת מחיר בחינם תוך 24 שעות. נבנה לכם אתר שמביא לקוחות חדשים.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link to="/quote" className="bg-[#1a79f6] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
            לקבלת הצעת מחיר
          </Link>
          <a href="https://wa.me/972556611594" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all">
            WhatsApp
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          <Link to={cs.relatedService} className="text-[#1a79f6] hover:underline flex items-center gap-1">
            <ArrowRight className="w-4 h-4" />
            {cs.relatedServiceLabel}
          </Link>
          <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1">
            <ArrowRight className="w-4 h-4" />
            לכל הפרויקטים
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyPage;
