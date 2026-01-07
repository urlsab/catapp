import React, { useState } from 'react';
import Contact from '../components/Contact';
// import SmoothScroll from '../components/SmoothScroll';

const faqList = [
  {
    question: 'מה היתרון של CatApp על פני חברות אחרות?',
    answer: 'CatApp מתמחה בפיתוח אתרים חכמים, עיצוב מותאם אישית, קידום SEO, תחזוקה שוטפת ושירותי תוכן. אנו עובדים עם טכנולוגיות מתקדמות ומספקים שירות אישי וזמין.'
  },
  {
    question: 'האם האתר שלי יהיה מותאם לכל סוגי המכשירים?',
    answer: 'בהחלט! כל אתר שנבנה ב-CatApp מותאם באופן מלא למובייל, טאבלט ודסקטופ.'
  },
  {
    question: 'האם אתם מספקים שירותי תחזוקה ותמיכה לאחר ההשקה?',
    answer: 'כן, אנו מספקים שירותי תחזוקה, תיקון באגים, עדכוני אבטחה ותמיכה שוטפת לכל לקוח.'
  },
  {
    question: 'האם אפשר לקבל הצעת מחיר מותאמת אישית?',
    answer: 'בוודאי! ניתן לפנות אלינו דרך עמוד קבלת הצעת מחיר ואנו נתאים את ההצעה לצרכים שלך.'
  },
  {
    question: 'האם אתם מספקים שירותי קידום בגוגל (SEO)?',
    answer: 'כן, אנו מתמחים בקידום אתרים בגוגל ומספקים שירותי SEO מתקדמים.'
  },
  {
    question: 'האם אפשר לקבל אתר גם לציבור הדתי והחרדי?',
    answer: 'כן, אנו מתאימים את השירותים והעיצובים גם לציבור הדתי והחרדי.'
  },
  {
    question: 'האם אפשר לקבל ייעוץ לבניית קורות חיים?',
    answer: 'בהחלט! אנו מספקים שירותי בניית ושיפור קורות חיים, כולל ייעוץ אישי.'
  }
];

const ContactPage: React.FC = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  
  const handleToggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div ref={sectionRef} className="min-h-screen pt-16 fade-in">
      {/* New Contact Section - styled as in the reference image */}
      <div className="max-w-5xl mx-auto px-4 w-full mb-12">
        <div className="rounded-t-3xl shadow-xl bg-white/10 backdrop-blur-md p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* Left: Info & Form */}
          <div className="flex-1 flex flex-col gap-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Contact Us</h1>
            <p className="text-gray-200 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae, luctus nec, cursus sit amet, porttitor dapibus leo.</p>
            {/* Contact Info Row */}
            <div className="flex flex-wrap gap-6 mb-4">
              <div className="flex flex-col items-center text-center flex-1 min-w-[120px]">
                <span className="bg-[#1a79f6]/10 p-2 rounded-full mb-2"><svg width="20" height="20" fill="none" stroke="#1a79f6" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.7 3.06a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.99.33 2.01.57 3.06.7A2 2 0 0 1 22 16.92z"/></svg></span>
                <span className="text-white text-base">055-6611594</span>
                <span className="text-xs text-gray-400">Phone</span>
              </div>
              <div className="flex flex-col items-center text-center flex-1 min-w-[120px]">
                <span className="bg-[#1a79f6]/10 p-2 rounded-full mb-2"><svg width="20" height="20" fill="none" stroke="#1a79f6" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><polyline points="22,6 12,13 2,6"/></svg></span>
                <span className="text-white text-base">yairsabag213@gmail.com</span>
                <span className="text-xs text-gray-400">Email</span>
              </div>
              <div className="flex flex-col items-center text-center flex-1 min-w-[120px]">
                <span className="bg-[#1a79f6]/10 p-2 rounded-full mb-2"><svg width="20" height="20" fill="none" stroke="#1a79f6" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M12 13v5"/></svg></span>
                <span className="text-white text-base">Israel</span>
                <span className="text-xs text-gray-400">Location</span>
              </div>
            </div>
            {/* Form & Map Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Form */}
              <div className="bg-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow">
                <h3 className="text-lg font-bold text-white mb-2">Get In Touch!</h3>
                <form className="flex flex-col gap-3">
                  <input className="rounded-lg px-4 py-2 bg-white/20 text-white placeholder-gray-400 border border-[#1a79f6]/30 focus:border-[#1a79f6] outline-none" placeholder="Name" />
                  <input className="rounded-lg px-4 py-2 bg-white/20 text-white placeholder-gray-400 border border-[#1a79f6]/30 focus:border-[#1a79f6] outline-none" placeholder="Email" />
                  <textarea className="rounded-lg px-4 py-2 bg-white/20 text-white placeholder-gray-400 border border-[#1a79f6]/30 focus:border-[#1a79f6] outline-none min-h-[80px]" placeholder="Message" />
                  <button type="submit" className="bg-[#1a79f6] text-white rounded-lg px-4 py-2 font-semibold shadow hover:bg-blue-700 transition">Submit</button>
                </form>
              </div>
              {/* Map & Social */}
              <div className="bg-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow">
                <h3 className="text-lg font-bold text-white mb-2">Our Location</h3>
                <div className="rounded-lg overflow-hidden mb-2">
                  <iframe title="map" src="https://maps.google.com/maps?q=tel%20aviv&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="120" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                </div>
                <div className="flex gap-2 mt-2">
                  <a href="#" className="bg-white/10 p-2 rounded-full text-[#1a79f6] hover:bg-[#1a79f6] hover:text-white transition"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.1.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6a4.28 4.28 0 0 1-1.94-.54v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54c-.65 0-1.28-.04-1.9-.11A12.13 12.13 0 0 0 6.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z"/></svg></a>
                  <a href="#" className="bg-white/10 p-2 rounded-full text-[#1a79f6] hover:bg-[#1a79f6] hover:text-white transition"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19.6 3.2H4.4A1.2 1.2 0 0 0 3.2 4.4v15.2a1.2 1.2 0 0 0 1.2 1.2h15.2a1.2 1.2 0 0 0 1.2-1.2V4.4a1.2 1.2 0 0 0-1.2-1.2zm-7.6 14.4H8V10.4h4v7.2zm-2-8.4a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4zm8.4 8.4h-2.4v-3.6c0-.96-.8-1.76-1.76-1.76s-1.76.8-1.76 1.76v3.6H8V10.4h2.4v1.04c.32-.48.96-.8 1.6-.8 1.28 0 2.32 1.04 2.32 2.32v4.24z"/></svg></a>
                  <a href="#" className="bg-white/10 p-2 rounded-full text-[#1a79f6] hover:bg-[#1a79f6] hover:text-white transition"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.07 8.19 8.93.6.11.81-.26.81-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.39 1.23-3.23-.12-.3-.53-1.51.12-3.15 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.01 2.05.14 3 .4 2.3-1.55 3.3-1.23 3.3-1.23.65 1.64.24 2.85.12 3.15.77.84 1.23 1.91 1.23 3.23 0 4.64-2.8 5.67-5.47 5.97.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.36 20.07 24 16.41 24 12c0-5.5-4.46-9.96-9.96-9.96z"/></svg></a>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Image */}
          <div className="w-full md:w-64 flex-shrink-0 flex justify-center items-center">
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="contact" className="w-full h-full object-cover object-center" />
            </div>
          </div>
        </div>
      </div>
      {/* <SmoothScroll /> */}
      <Contact />
      
      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">שאלות נפוצות</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1a79f6] to-blue-700 mx-auto mb-8"></div>
        </div>
        <div className="space-y-4">
          {faqList.map((faq, idx) => (
            <div key={idx} className="relative group rounded-2xl shadow-lg border border-[#1a79f6] hover:border-[#1a79f6]/80 transition-all"
              style={{
                backgroundSize: '300% 300%',
                backgroundColor: 'transparent',
                borderRadius: '1rem'
              }}>
              
              {/* Content container */}
              <div className="relative rounded-2xl p-4 bg-white/5 backdrop-blur-sm">
                <button
                  className="flex items-center w-full text-right focus:outline-none"
                  onClick={() => handleToggle(idx)}
                  aria-expanded={openIdx === idx}
                >
                  <span className="flex-1 text-lg md:text-xl font-bold text-white">{faq.question}</span>
                  <span className={`ml-2 transition-transform duration-200 ${openIdx === idx ? 'rotate-180' : ''}`}>
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#1a79f6]">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${openIdx === idx ? 'max-h-40 opacity-100 animate-fade-in-faq' : 'max-h-0 opacity-0'}`}
                  style={{ transitionDelay: openIdx === idx ? '100ms' : '0ms' }}
                >
                  {openIdx === idx && (
                    <div className="mt-4 text-white text-base md:text-lg">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;