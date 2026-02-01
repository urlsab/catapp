import React, { useState } from 'react';
import contactUsImage from '../../Assets/contact us 2.png';
// import SmoothScroll from '../components/SmoothScroll';

const faqList = [
	{
		question: 'מה היתרון של Catapp על פני חברות אחרות?',
		answer: 'Catapp מתמחה בפיתוח אתרים חכמים, עיצוב מותאם אישית, קידום SEO, תחזוקה שוטפת ושירותי תוכן. אנו עובדים עם טכנולוגיות מתקדמות ומספקים שירות אישי וזמין.',
	},
	{
		question: 'האם האתר שלי יהיה מותאם לכל סוגי המכשירים?',
		answer: 'בהחלט! כל אתר שנבנה ב-Catapp מותאם באופן מלא למובייל, טאבלט ודסקטופ.',
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
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	});

	const handleToggle = (idx: number) => {
		setOpenIdx(openIdx === idx ? null : idx);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleWhatsAppSend = (e: React.FormEvent) => {
		e.preventDefault();
		const message = `שלום קוראים לי ${formData.name}\n${formData.message}\nלהלן כתובת המייל שלי ${formData.email}`;
		const encodedMessage = encodeURIComponent(message);
		const whatsappUrl = `https://wa.me/972556611594?text=${encodedMessage}`;
		window.open(whatsappUrl, '_blank');
	};

	return (
		<div ref={sectionRef} className="min-h-screen mt-12 pt-16 fade-in">
			{/* New Contact Section - styled as in the reference image */}
			<div className="max-w-5xl mx-auto px-4 w-full mb-12">
				<div className="rounded-t-3xl shadow-xl bg-white/10 backdrop-blur-md p-6 md:p-10">
					{/* Header Section - Title Right, Image Center, Text Left - All in One Row */}
					<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8 mb-8">
						{/* Title - Right */}
						<div className="flex-shrink-0 order-1 md:order-1">
							<h1 className="text-3xl md:text-4xl font-bold text-white text-center">
								פרטי קשר
							</h1>
						</div>
						
						{/* Image - Center */}
						<div className="flex-shrink-0 order-2 md:order-2">
							<div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white flex items-center justify-center">
								<img
									src={contactUsImage}
									alt="צור קשר"
									className="w-full h-full object-cover object-center"
								/>
							</div>
						</div>
						
						{/* Blue Text - Left */}
						<div className="flex-shrink-0 order-3 md:order-3">
							<p className="text-xl md:text-2xl font-semibold text-[#1a79f6] text-center">
								אנו מתחייבים לענות מהר!
							</p>
						</div>
					</div>
					
					{/* Contact Info & Forms */}
					<div className="w-full flex flex-col gap-6">
						{/* Contact Info Row */}
						<div className="flex flex-wrap gap-6 mb-4">
							<a href="tel:+972556611594" className="flex flex-col items-center text-center flex-1 min-w-[120px] group cursor-pointer transition-all">
								<span className="bg-[#1a79f6]/10 p-2 rounded-full mb-2">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="#1a79f6"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
									</svg>
								</span>
								<span className="text-white group-hover:text-[#1a79f6] text-base transition-colors">
									055-6611594
								</span>
								
							</a>
							<a href="mailto:yairsabag213@gmail.com" className="flex flex-col items-center text-center flex-1 min-w-[120px] group cursor-pointer transition-all">
								<span className="bg-[#1a79f6]/10 p-2 rounded-full mb-2">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="#1a79f6"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<rect x="2" y="4" width="20" height="16" rx="2" />
										<path d="m2 7 10 6 10-6" />
									</svg>
								</span>
								<span className="text-white group-hover:text-[#1a79f6] text-base transition-colors">
									yairsabag213@gmail.com
								</span>
								
							</a>
							<a href="https://waze.com/ul?q=רותם+15+לוד&navigate=yes" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center flex-1 min-w-[120px] group cursor-pointer transition-all">
								<span className="bg-[#1a79f6]/10 p-2 rounded-full mb-2">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="#1a79f6"
									>
										<path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
									</svg>
								</span>
								<span className="text-white group-hover:text-[#1a79f6] text-base transition-colors">לוד, רותם 15</span>
							</a>
						</div>
						{/* Form & Map Row */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
							{/* Form */}
							<div className="bg-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow">
								<h3 className="text-lg font-bold text-white mb-2">
									לשליחת הודעה ישירות לוואטספ שלנו
								</h3>
								<form className="flex flex-col gap-3" onSubmit={handleWhatsAppSend}>
									<input
										className="rounded-lg px-4 py-2 bg-white/20 text-white placeholder-gray-400 border border-[#1a79f6]/30 focus:border-[#1a79f6] outline-none"
										placeholder="שם"
										name="name"
										value={formData.name}
										onChange={handleInputChange}
										required
									/>
									<input
										className="rounded-lg px-4 py-2 bg-white/20 text-white placeholder-gray-400 border border-[#1a79f6]/30 focus:border-[#1a79f6] outline-none"
										placeholder="אימייל"
										type="email"
										name="email"
										value={formData.email}
										onChange={handleInputChange}
										required
									/>
									<textarea
										className="rounded-lg px-4 py-2 bg-white/20 text-white placeholder-gray-400 border border-[#1a79f6]/30 focus:border-[#1a79f6] outline-none min-h-[80px]"
										placeholder="הודעה"
										name="message"
										value={formData.message}
										onChange={handleInputChange}
										required
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
				</div>
			</div>
			<div style={{ height: '32px' }} />
			
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