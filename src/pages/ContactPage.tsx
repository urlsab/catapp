import React, { useState } from 'react';
import Contact from '../components/Contact';
import contactUsImage from '../../Assets/contact us 2.png';
// import SmoothScroll from '../components/SmoothScroll';

const faqList = [
	{
		question: 'מה היתרון של CatApp על פני חברות אחרות?',
		answer: 'CatApp מתמחה בפיתוח אתרים חכמים, עיצוב מותאם אישית, קידום SEO, תחזוקה שוטפת ושירותי תוכן. אנו עובדים עם טכנולוגיות מתקדמות ומספקים שירות אישי וזמין.',
	},
	{
		question: 'האם האתר שלי יהיה מותאם לכל סוגי המכשירים?',
		answer: 'בהחלט! כל אתר שנבנה ב-CatApp מותאם באופן מלא למובייל, טאבלט ודסקטופ.',
	},
	{
		question: 'האם אתם מספקים שירותי תחזוקה ותמיכה לאחר ההשקה?',
		answer: 'כן, אנו מספקים שירותי תחזוקה, תיקון באגים, עדכוני אבטחה ותמיכה שוטפת לכל לקוח.',
	},
	{
		question: 'האם אפשר לקבל הצעת מחיר מותאמת אישית?',
		answer: 'בוודאי! ניתן לפנות אלינו דרך עמוד קבלת הצעת מחיר ואנו נתאים את ההצעה לצרכים שלך.',
	},
	{
		question: 'האם אתם מספקים שירותי קידום בגוגל (SEO)?',
		answer: 'כן, אנו מתמחים בקידום אתרים בגוגל ומספקים שירותי SEO מתקדמים.',
	},
	{
		question: 'האם אפשר לקבל אתר גם לציבור הדתי והחרדי?',
		answer: 'כן, אנו מתאימים את השירותים והעיצובים גם לציבור הדתי והחרדי.',
	},
	{
		question: 'האם אפשר לקבל ייעוץ לבניית קורות חיים?',
		answer: 'בהחלט! אנו מספקים שירותי בניית ושיפור קורות חיים, כולל ייעוץ אישי.',
	},
];

const ContactPage: React.FC = () => {
	const sectionRef = React.useRef<HTMLDivElement>(null);
	const [openIdx, setOpenIdx] = useState<number | null>(null);

	const handleToggle = (idx: number) => {
		setOpenIdx(openIdx === idx ? null : idx);
	};

	return (
		<div ref={sectionRef} className="min-h-screen mt-12 pt-16 fade-in">
			{/* New Contact Section - styled as in the reference image */}
			<div className="max-w-5xl mx-auto px-4 w-full mb-12">
				<div className="rounded-t-3xl shadow-xl bg-white/10 backdrop-blur-md p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
					{/* Left: Info & Form */}
					<div className="flex-1 flex flex-col gap-6">
						<h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
							צור קשר
						</h1>
						<p className="text-gray-200 mb-4">
							נשמח לשוחח איתך, לייעץ ולסייע בכל שאלה או צורך. מלא את הטופס ונחזור
							אליך בהקדם!
						</p>
						{/* Contact Info Row */}
						<div className="flex flex-wrap gap-6 mb-4">
							<div className="flex flex-col items-center text-center flex-1 min-w-[120px]">
								<span className="bg-[#1a79f6]/10 p-2 rounded-full mb-2">
									<svg
										width="20"
										height="20"
										fill="none"
										stroke="#1a79f6"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.7 3.06a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.99.33 2.01.57 3.06.7A2 2 0 0 1 22 16.92z" />
									</svg>
								</span>
								<span className="text-white text-base">
									055-6611594
								</span>
								
							</div>
							<div className="flex flex-col items-center text-center flex-1 min-w-[120px]">
								<span className="bg-[#1a79f6]/10 p-2 rounded-full mb-2">
									<svg
										width="20"
										height="20"
										fill="none"
										stroke="#1a79f6"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<path d="M4 4h16v16H4z" />
										<polyline points="22,6 12,13 2,6" />
									</svg>
								</span>
								<span className="text-white text-base">
									yairsabag213@gmail.com
								</span>
								
							</div>
							<div className="flex flex-col items-center text-center flex-1 min-w-[120px]">
								<span className="bg-[#1a79f6]/10 p-2 rounded-full mb-2">
									<svg
										width="20"
										height="20"
										fill="none"
										stroke="#1a79f6"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<circle cx="12" cy="12" r="10" />
										<circle cx="12" cy="10" r="3" />
										<path d="M12 13v5" />
									</svg>
								</span>
								<span className="text-white text-base">לוד, רותם 15</span>
							</div>
						</div>
						{/* Form & Map Row */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{/* Form */}
							<div className="bg-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow">
								<h3 className="text-lg font-bold text-white mb-2">
									השאר פרטים ונחזור אליך
								</h3>
								<form className="flex flex-col gap-3">
									<input
										className="rounded-lg px-4 py-2 bg-white/20 text-white placeholder-gray-400 border border-[#1a79f6]/30 focus:border-[#1a79f6] outline-none"
										placeholder="שם"
									/>
									<input
										className="rounded-lg px-4 py-2 bg-white/20 text-white placeholder-gray-400 border border-[#1a79f6]/30 focus:border-[#1a79f6] outline-none"
										placeholder="אימייל"
									/>
									<textarea
										className="rounded-lg px-4 py-2 bg-white/20 text-white placeholder-gray-400 border border-[#1a79f6]/30 focus:border-[#1a79f6] outline-none min-h-[80px]"
										placeholder="הודעה"
									/>
									<button
										type="submit"
										className="bg-[#1a79f6] text-white rounded-lg px-4 py-2 font-semibold shadow hover:bg-blue-700 transition"
									>
										שלח
									</button>
								</form>
							</div>
							{/* Map */}
							<div className="bg-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow">
								<h3 className="text-lg font-bold text-white mb-2">
									המיקום שלנו
								</h3>
								<div className="rounded-lg overflow-hidden mb-2">
									<iframe
										title="map"
										src="https://maps.google.com/maps?q=רותם 15, לוד&t=&z=16&ie=UTF8&iwloc=&output=embed"
										width="100%"
										height="220"
										style={{ border: 0 }}
										allowFullScreen
										loading="lazy"
									></iframe>
								</div>
							</div>
						</div>
					</div>
					{/* Right: Image */}
					<div className="w-full md:w-64 flex-shrink-0 flex justify-center items-center">
						<div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white flex items-center justify-center">
							<img
								src={contactUsImage}
								alt="צור קשר"
								className="w-full h-full object-cover object-center"
							/>
						</div>
					</div>
				</div>
			</div>
			<div style={{ height: '32px' }} />
			<Contact />
			{/* FAQ Section */}
			<div className="max-w-3xl mx-auto px-4 py-12">
				<div className="text-center mb-12">
					<h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
						שאלות נפוצות
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-[#1a79f6] to-blue-700 mx-auto mb-8"></div>
				</div>
				<div className="space-y-4">
					{faqList.map((faq, idx) => (
						<div
							key={idx}
							className="relative group rounded-2xl shadow-lg border border-[#1a79f6] hover:border-[#1a79f6]/80 transition-all"
							style={{
								backgroundSize: '300% 300%',
								backgroundColor: 'transparent',
								borderRadius: '1rem',
							}}
						>
							{/* Content container */}
							<div className="relative rounded-2xl p-4 bg-white/5 backdrop-blur-sm">
								<button
									className="flex items-center w-full text-right focus:outline-none"
									onClick={() => handleToggle(idx)}
									aria-expanded={openIdx === idx}
								>
									<span className="flex-1 text-lg md:text-xl font-bold text-white">
										{faq.question}
									</span>
									<span
										className={`ml-2 transition-transform duration-200 ${
											openIdx === idx ? 'rotate-180' : ''
										}`}
									>
										<svg
											width="20"
											height="20"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											className="text-[#1a79f6]"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</span>
								</button>
								<div
									className={`overflow-hidden transition-all duration-500 ${
										openIdx === idx
											? 'max-h-40 opacity-100 animate-fade-in-faq'
											: 'max-h-0 opacity-0'
									}`}
									style={{
										transitionDelay:
											openIdx === idx ? '100ms' : '0ms',
									}}
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