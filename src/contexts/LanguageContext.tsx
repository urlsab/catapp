<<<<<<< Updated upstream
=======
import React, { createContext, useContext, useMemo } from 'react';

interface Translations {
	[key: string]: string | Translations;
}

interface LanguageContextType {
		language: string;
		t: (key: string) => string;
}

const translations: { [lang: string]: Translations } = {
		he: {
				'app.name': 'Catapp',
			'nav.home': 'בית',
			'nav.pricing': 'מחירון',
			'nav.portfolio': 'תיק עבודות',
			'nav.contact': 'צור קשר',
				'footer.rights': 'כל הזכויות שמורות ל-Catapp',
			'footer.terms': 'תנאי שימוש',
			'footer.privacy': 'מדיניות פרטיות',
			'terms.title': 'תנאי השירות',
			'privacy.title': 'מדיניות פרטיות',
			'pricing.landing': 'דף נחיתה',
			'pricing.landingPrice': '₪1,500',
			'pricing.business': 'אתר עסקי',
			'pricing.businessPrice': '₪3,500',
			'pricing.portfolio': 'פורטפוליו',
			'pricing.portfolioPrice': '₪2,500',
			'pricing.ecommerce': 'חנות אינטרנטית',
			'pricing.ecommercePrice': '₪5,000',
			'pricing.blog': 'בלוג',
			'pricing.blogPrice': '₪2,000',
			'pricing.social': 'רשת חברתית',
			'pricing.socialPrice': '₪6,000',
			'pricing.title': 'מחירון',
			'pricing.subtitle': 'בחרו את החבילה המתאימה לכם',
			'maintenance.crash': 'תחזוק קריטי',
			'maintenance.crashPrice': '₪300/חודש',
			'maintenance.seo': 'קידום אורגני',
			'maintenance.seoPrice': '₪500/חודש',
			'maintenance.content': 'עדכון תוכן',
			'maintenance.contentPrice': '₪400/חודש',
			'maintenance.title': 'חבילות תחזוק',
			'portfolio.title': 'תיק עבודות',
			'btn.viewProject': 'צפה בפרויקט',
			'values.title': 'הערכים שלנו',
			'values.religious': 'שירות מקצועי ואמין',
			'values.tech': 'טכנולוגיה',
			'values.tech.desc': 'React, TypeScript, JavaScript ועוד',
			'values.seo': 'קידום',
			'values.seo.desc': 'הגעה למקום הראשון בתוצאות החיפוש',
			'values.responsive': 'רספונסיבי',
			'values.responsive.desc': 'מותאם למחשב, טאבלט וטלפון נייד',
			'values.maintenance': 'תחזוק',
			'values.maintenance.desc': 'תמיכה מתמשכת ושיפורים שוטפים',
			'values.security': 'אבטחה',
			'values.security.desc': 'אבטחה מתקדמת והגנה מפני וירוסים',
			'values.price': 'מחיר',
			'values.price.desc': 'מחירים הוגנים ללא עלויות נסתרות',
			'values.speed': 'מהירות',
			'values.speed.desc': 'משך פיתוח קצר ומסירה מהירה',
			'values.domain': 'דומיין',
			'values.domain.desc': 'רכישה וניהול דומיינים מקצועי',
				'header.title': 'Catapp - בניית אתרים מקצועיים',
			'header.subtitle': 'פיתוח, עיצוב ותחזוק אתרים ברמה הגבוהה ביותר',
			'header.cta': 'צור קשר',
			'header.feature.dev': 'פיתוח',
			'header.feature.design': 'עיצוב',
			'header.feature.maintain': 'תחזוק',
			'about.title': 'אודות',
			'about.description': 'צוות מקצועי עם ניסיון רב בפיתוח אתרים',
			'about.feature.professional': 'מקצועיות',
			'about.feature.professional.desc': 'צוות מנוסה עם ידע עמוק בטכנולוגיות חדישות',
			'about.feature.quality': 'איכות',
			'about.feature.quality.desc': 'פתרונות מתקדמים ומותאמים אישית לכל לקוח',
			'about.feature.availability': 'זמינות',
			'about.feature.availability.desc': 'תמיכה מלאה ותגובה מהירה לבקשות',
			'about.feature.trust': 'אמינות',
			'about.feature.trust.desc': 'אבטחת מידע ויציבות מערכות ברמה הגבוהה ביותר',
			'about.whyus.title': 'למה לבחור בנו?',
			'about.whyus.exp': 'ניסיון רב בתחום פיתוח האתרים',
			'about.whyus.tech': 'טכנולוגיות מתקדמות ועדכניות',
			'about.whyus.support': 'תמיכה מלאה לאחר השקה',
			'about.whyus.price': 'מחירים תחרותיים ושקופים',
			'knowledge.title': 'מרכז ידע',
			'knowledge.subtitle': 'מעבר לפיתוח אתרים, אנו מציעים שירותים נוספים לעזור לכם להצליח בקריירה ובעסק',
			'knowledge.cv': 'בניית קורות חיים מקצועיים המותאמים לתעשיית הטכנולוגיה עם דגש על הדגשת כישורים ויתרונות',
			'knowledge.review': 'בדיקה יסודית של קורות חיים קיימים עם המלצות לשיפור ואופטימיזציה',
			'knowledge.lectures': 'הרצאות מעמיקות על כתיבת קורות חיים יעילים ואופטימיזציה של פרופיל לינקדאין',
			'knowledge.consulting': 'ייעוץ מקצועי לעסקים קטנים בתחום ההקמה, הפיתוח והצמיחה',
			'knowledge.more.title': 'מעוניינים בשירותים נוספים?',
			'knowledge.more.desc': 'צרו איתנו קשר לפרטים נוספים על שירותי הייעוץ, בניית קורות חיים והרצאות',
			'knowledge.more.cta': 'צור קשר עוד היום',
			'footer.builtwith': 'נבנה באהבה עם',
			'footer.and': 'ו',
				'footer.by': 'על ידי Catapp',
			'footer.navigation': 'ניווט',
			'footer.contact': 'יצירת קשר',
			'footer.phone': '0556611594',
			'footer.email': 'yairsabag213@gmail.com',
		},
	en: {
		'nav.home': 'Home',
		'nav.pricing': 'Pricing',
		'nav.portfolio': 'Portfolio',
		'nav.contact': 'Contact',
			'footer.rights': 'All rights reserved to Catapp',
		'footer.terms': 'Terms of Service',
		'footer.privacy': 'Privacy Policy',
		// ...add more keys as needed
	},
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error('useLanguage must be used within a LanguageProvider');
	}
	return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
		const language = 'he';

	const t = useMemo(() => {
		return (key: string): string => {
			const keys = key.split('.');
			let value: any = translations[language];
			for (const k of keys) {
				value = value?.[k];
				if (value === undefined) break;
			}
			return typeof value === 'string' ? value : key;
		};
	}, [language]);

	return (
			<LanguageContext.Provider value={{ language, t }}>
				{children}
			</LanguageContext.Provider>
	);
};
>>>>>>> Stashed changes
