import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Database, Layers, Phone, Cpu, Globe } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'אתרי SaaS',
    description: 'מערכות ניהול מבוססות Web, פלטפורמות B2B ו-B2C, תשלומים, הרשמות ומנויים.',
  },
  {
    icon: Database,
    title: 'Dashboards ו-Back Office',
    description: 'לוחות מחוונים לניהול נתונים, CRM פנימי, ממשקי Admin ו-Analytics.',
  },
  {
    icon: Cpu,
    title: 'אינטגרציות AI',
    description: 'הטמעת GPT, Gemini וכלי AI בממשק Web — צ\'אטבוט, ניתוח תוכן, אוטומציה.',
  },
  {
    icon: Layers,
    title: 'REST API ו-Backend',
    description: 'Node.js / Express API, אינטגרציות עם Supabase / MongoDB / Firebase, Webhook ו-OAuth.',
  },
  {
    icon: Code2,
    title: 'ממשקים מורכבים',
    description: 'Multi-step forms, עורכי תוכן עשירים, גרירה-ושחרור, Real-time updates ו-WebSocket.',
  },
  {
    icon: Phone,
    title: 'PWA ו-Mobile Web',
    description: 'אפליקציות Web שעובדות Offline, Push notifications ו-Install to Home Screen.',
  },
];

const techStack = [
  { name: 'React', color: '#61DAFB' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Node.js', color: '#8CC84B' },
  { name: 'Supabase', color: '#3ECF8E' },
  { name: 'MongoDB', color: '#4DB33D' },
  { name: 'Firebase', color: '#FFCA28' },
  { name: 'Vite', color: '#646CFF' },
  { name: 'Tailwind CSS', color: '#06B6D4' },
  { name: 'Vercel', color: '#ffffff' },
  { name: 'OpenAI API', color: '#74AA9C' },
];

const faqs = [
  { q: 'מה ההבדל בין "בניית אתר" ל"פיתוח Web"?', a: 'בניית אתר מתמקדת בנוכחות דיגיטלית — תדמית, פניות, מכירות. פיתוח Web הוא בניית מערכת — לוגיקה עסקית, ניהול משתמשים, אינטגרציות API, DB וכלים פנימיים.' },
  { q: 'כמה עולה פיתוח מערכת Web?', a: 'תלוי בהיקף. מערכת SaaS בסיסית מתחילה מ-10,000 ₪. מערכות מורכבות עם AI, תשלומים ו-multi-tenant — מ-25,000 ₪. הצעת מחיר מפורטת תוך 24 שעות.' },
  { q: 'כמה זמן לוקח לפתח מערכת?', a: 'MVP בסיסי — 4-8 שבועות. מערכת מלאה עם ניהול משתמשים, תשלומים וממשק Admin — 8-16 שבועות. תלוי בדרישות.' },
  { q: 'האם אתם עובדים עם חברות הייטק?', a: 'כן. פיתחנו כלים פנימיים ו-POC לחברות טכנולוגיה, כולל Dashboards, כלי ניהול AI ואינטגרציות API.' },
  { q: 'מה קורה אחרי הפיתוח?', a: 'אנחנו מספקים Deployment מלא (Vercel/Firebase/GCP), דוקומנטציה, תמיכה טכנית ואפשרות להמשך פיתוח שוטף.' },
];

const WebDevelopmentPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div dir="rtl" className="max-w-4xl mx-auto px-4 py-16 mt-16">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
        <Link to="/" className="hover:text-[#1a79f6] transition-colors">בית</Link>
        <span>/</span>
        <span className="text-gray-300">פיתוח Web</span>
      </nav>

      {/* H1 */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a79f6]/10 border border-[#1a79f6]/30 text-[#1a79f6] text-sm font-medium mb-6">
          <Code2 className="w-4 h-4" />
          Full Stack Development
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          פיתוח Web בהתאמה אישית לעסקים
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
          מעבר לאתר תדמית — מערכות SaaS, Dashboards, אינטגרציות AI וכלים עסקיים מותאמים לתהליכים שלכם.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/quote" className="bg-[#1a79f6] hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
            לקבלת הצעת מחיר
          </Link>
          <Link to="/portfolio" className="border border-[#1a79f6] text-[#1a79f6] hover:bg-[#1a79f6]/10 px-8 py-3 rounded-xl font-bold text-lg transition-all">
            לפרויקטים
          </Link>
        </div>
      </div>

      {/* Services grid */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          מה אנחנו בונים?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div key={i} className="rounded-2xl border border-[#1a79f6]/30 bg-white/5 backdrop-blur-sm p-6">
              <div className="flex items-start gap-4">
                <s.icon className="w-7 h-7 text-[#1a79f6] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{s.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="mb-16 rounded-2xl border border-[#1a79f6]/30 bg-white/5 backdrop-blur-sm p-8">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Stack הטכנולוגי שלנו</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {techStack.map((t) => (
            <span
              key={t.name}
              className="px-4 py-2 rounded-xl bg-black/30 border border-white/10 text-sm font-semibold"
              style={{ color: t.color, borderColor: `${t.color}40` }}
            >
              {t.name}
            </span>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">תהליך הפיתוח</h2>
        <div className="space-y-4">
          {[
            { step: '01', title: 'אפיון טכני', desc: 'מגדירים ביחד את הדרישות, ה-DB, ה-API ו-User Flows לפני שורת קוד ראשונה.' },
            { step: '02', title: 'Prototype / MVP', desc: 'בונים גרסה מינימלית לאימות הרעיון — מהר ויעיל.' },
            { step: '03', title: 'פיתוח מלא', desc: 'Front-End + Back-End + DB + Auth + תשלומים לפי הצורך.' },
            { step: '04', title: 'Testing & QA', desc: 'בדיקות פונקציונליות, עומס ואבטחה לפני השקה.' },
            { step: '05', title: 'Deployment', desc: 'פריסה לענן (Vercel/GCP/Firebase) עם CI/CD ו-Monitoring.' },
          ].map((s) => (
            <div key={s.step} className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
              <span className="text-[#1a79f6] font-black text-2xl flex-shrink-0 w-12">{s.step}</span>
              <div>
                <h3 className="text-white font-bold mb-1">{s.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-16 rounded-2xl border border-[#1a79f6]/50 bg-[#1a79f6]/5 p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">מחיר פיתוח Web</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="rounded-xl bg-white/5 border border-white/10 px-5 py-4">
            <div className="text-[#1a79f6] font-bold text-base mb-1">MVP / POC</div>
            <div className="text-white text-2xl font-bold">מ-8,000 ₪</div>
            <div className="text-gray-400 text-xs mt-1">4-8 שבועות</div>
          </div>
          <div className="relative rounded-xl bg-[#1a79f6]/20 border border-[#1a79f6]/40 px-5 py-4">
            <div className="absolute -top-3 right-1/2 translate-x-1/2 bg-[#1a79f6] text-white text-xs px-3 py-1 rounded-full font-bold">נפוץ</div>
            <div className="text-[#1a79f6] font-bold text-base mb-1">SaaS / מערכת</div>
            <div className="text-white text-2xl font-bold">מ-15,000 ₪</div>
            <div className="text-gray-400 text-xs mt-1">8-16 שבועות</div>
          </div>
          <div className="rounded-xl bg-white/5 border border-white/10 px-5 py-4">
            <div className="text-[#1a79f6] font-bold text-base mb-1">Enterprise</div>
            <div className="text-white text-2xl font-bold">לפי אפיון</div>
            <div className="text-gray-400 text-xs mt-1">גמיש</div>
          </div>
        </div>
        <Link to="/pricing" className="inline-block bg-white/10 hover:bg-white/20 border border-[#1a79f6]/40 text-white px-8 py-3 rounded-xl font-bold text-lg transition-all">
          למחירון המלא ←
        </Link>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">שאלות נפוצות</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-2xl border border-[#1a79f6]/30 bg-white/5 backdrop-blur-sm">
              <button
                className="w-full flex items-center justify-between p-5 text-right focus:outline-none"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                aria-expanded={openFaq === idx}
              >
                <span className="text-white font-bold text-lg">{faq.q}</span>
                <span className={`text-[#1a79f6] transition-transform duration-200 ml-3 ${openFaq === idx ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 text-gray-300 leading-relaxed">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Related links */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-white mb-4">קשור גם לזה</h2>
        <div className="flex flex-wrap gap-3">
          <Link to="/react-websites" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">בניית אתרי React ←</Link>
          <Link to="/business-websites" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">בניית אתרים לעסקים ←</Link>
          <Link to="/articles/hi-tech-web-development" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">פיתוח אתרים בהייטק ←</Link>
          <Link to="/articles/ai-web-development" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#1a79f6] hover:border-[#1a79f6]/30 transition-all text-sm">AI בפיתוח אתרים ←</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center rounded-2xl border border-[#1a79f6]/30 bg-[#1a79f6]/5 p-10">
        <Code2 className="w-10 h-10 text-[#1a79f6] mx-auto mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">יש לכם רעיון? בואו נדבר</h2>
        <p className="text-gray-300 mb-6 max-w-lg mx-auto">שיחת ייעוץ בחינם — נבין יחד מה צריך ונשלח הצעת מחיר תוך 24 שעות.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/quote" className="bg-[#1a79f6] hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-lg">
            לקבלת הצעת מחיר
          </Link>
          <a href="https://wa.me/972556611594" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-xl font-bold text-xl transition-all">
            WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;
