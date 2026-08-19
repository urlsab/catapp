import refaelLawImage from '../../Assets/refael website.webp';
import atlizImage from '../../Assets/atliz website.webp';
import orBenjiImage from '../../Assets/benji website.webp';
import meiravImage from '../../Assets/meirav website.webp';
import amiChaiImage from '../../Assets/ami-story.webp';

export interface CaseStudy {
  slug: string;
  clientName: string;
  clientType: string;
  h1: string;
  intro: string;
  challenge: string;
  solution: string;
  technologies: string[];
  features: string[];
  siteUrl: string;
  image: string;
  testimonial?: { text: string; author: string; role: string };
  seoTitle: string;
  seoDescription: string;
  relatedService: string;
  relatedServiceLabel: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'refael-law',
    clientName: 'רפאל סבג, עו"ד',
    clientType: 'עורך דין',
    h1: 'בניית אתר לעורך דין — רפאל סבג',
    intro: 'רפאל סבג ניהל משרד עורכי דין מצליח, אך היה חסר נוכחות דיגיטלית. הלקוחות לא מצאו אותו בגוגל, והפניות הגיעו רק מהמלצות פה לאוזן.',
    challenge: 'בניית אתר מקצועי שישדר אמינות וסמכות, יקודם בגוגל על "עורך דין" ויניע מבקרים לפנות ישירות. זמן הבנייה — 3 שבועות.',
    solution: 'בנינו אתר תדמית ב-React עם דיזיין נקי ומקצועי, תוכן SEO ממוקד לחיפושים של "עורך דין בית משפט", טופס פנייה מהיר וכפתור WhatsApp בולט. כל עמוד עם schema ייחודי לעורך דין.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vercel'],
    features: [
      'עמוד בית עם H1 ממוקד SEO',
      'עמוד תחומי עיסוק מפורט',
      'טופס יצירת קשר מהיר',
      'כפתור WhatsApp קבוע',
      'LocalBusiness + LegalService schema',
      'רספונסיבי לכל מכשיר',
      'Core Web Vitals ירוקים',
      'Prerender HTML סטטי לגוגל',
    ],
    siteUrl: 'https://refael-law.com',
    image: refaelLawImage,
    testimonial: {
      text: 'קיבלתי יחס אישי, זמינות מלאה והקשבה לצרכים שלי. העבודה בוצעה במהירות ובמקצועיות — התוצאה עלתה על הציפיות.',
      author: 'רפאל סבג',
      role: 'עורך דין',
    },
    seoTitle: 'בניית אתר לעורך דין – Case Study | Catapp',
    seoDescription: 'איך בנינו אתר מקצועי לעורך דין רפאל סבג — SEO ממוקד, עיצוב מקצועי ופניות חדשות מגוגל.',
    relatedService: '/business-websites',
    relatedServiceLabel: 'בניית אתרים לעסקים',
  },
  {
    slug: 'atliz',
    clientName: 'אטליז למהדרין',
    clientType: 'עסק מקומי',
    h1: 'בניית אתר תדמית — אטליז למהדרין',
    intro: 'אטליז למהדרין הוא עסק מקומי מוביל. בעל העסק רצה לבנות נוכחות אינטרנטית מקצועית שתמשוך לקוחות חדשים מחיפוש בגוגל ותחזק את המותג.',
    challenge: 'עיצוב אתר שמשדר איכות ואמינות, מותאם למובייל, וממוקד בקידום אורגני בגוגל לחיפושים מקומיים.',
    solution: 'בנינו אתר תדמית מלא עם גלריית מוצרים, אזור "אודות", דף שעות ומיקום (Google Maps), ו-LocalBusiness schema מותאם לעסק מקומי.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vercel'],
    features: [
      'עיצוב ייחודי ומזמין',
      'גלריית מוצרים ושירותים',
      'שעות פתיחה ומיקום אינטראקטיבי',
      'LocalBusiness schema לקידום מקומי',
      'מהירות טעינה < 2s',
      'מותאם לחיפוש מובייל',
    ],
    siteUrl: 'https://atliz.co.il',
    image: atlizImage,
    seoTitle: 'בניית אתר תדמית לעסק – Case Study | Catapp',
    seoDescription: 'איך בנינו אתר תדמית מקצועי לאטליז למהדרין — עיצוב ייחודי, SEO מקומי וגידול בלקוחות.',
    relatedService: '/business-websites',
    relatedServiceLabel: 'בניית אתרים לעסקים',
  },
  {
    slug: 'or-benji',
    clientName: "אור בנג'י",
    clientType: 'פסיכותרפיסט',
    h1: "בניית דף נחיתה — אור בנג'י",
    intro: "אור בנג'י, פסיכותרפיסט בעל פרקטיקה פרטית, רצה דף נחיתה ממוקד שיניע פניות מלקוחות חדשים לאתר הפרקטיקה שלו.",
    challenge: 'בניית דף נחיתה בעל המרה גבוהה, ממוקד לחיפושים של פסיכותרפיה ועם UX שמשרה אמון ורוגע — תוך שבועיים.',
    solution: 'עיצבנו דף נחיתה עם היררכיה ויזואלית ברורה, testimonials אמיתיים, CTA ברור ו-schema מותאם לרופא/מטפל.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vercel'],
    features: [
      'עיצוב רגוע ומקצועי',
      'טופס פנייה מהיר בדף',
      'כפתור WhatsApp קבוע',
      'ביקורות לקוחות אמיתיות',
      'Schema מותאם למטפל',
      'מהירות טעינה מהירה מאוד',
    ],
    siteUrl: 'https://orbenji.com',
    image: orBenjiImage,
    testimonial: {
      text: 'הכל נעשה בצורה מקצועית, יעילה ומדויקת עם הקשבה מלאה לצרכים שלנו. שילוב נפלא של עבודה ברמה גבוהה ויחס נהדר ללקוח.',
      author: "אור בנג'י",
      role: 'פסיכותרפיסט',
    },
    seoTitle: "בניית דף נחיתה לפסיכולוג – Case Study | Catapp",
    seoDescription: "איך בנינו דף נחיתה עם המרה גבוהה לפסיכותרפיסט אור בנג'י — עיצוב, CTA ותוצאות.",
    relatedService: '/landing-pages',
    relatedServiceLabel: 'בניית דפי נחיתה',
  },
  {
    slug: 'meirav-dula',
    clientName: 'מירב דולה',
    clientType: 'דולה ומלווה לידה',
    h1: 'בניית אתר לדולה — מירב',
    intro: 'מירב, דולה ומלווה לידה מנוסה, רצתה אתר מקצועי שישקף את חום השירות שלה ויעזור לנשים הרות למצוא אותה בגוגל.',
    challenge: 'בניית אתר שמשדר חמימות ואמינות, ממוקד בחיפושים של "דולה" ו"מלווה לידה", ומניע לפנות עוד לפני הלידה.',
    solution: 'בנינו אתר תדמית עם עיצוב רך ומזמין, תוכן SEO ממוקד, טופס פנייה ו-schema מותאם לרופאה/מטפלת.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vercel'],
    features: [
      'עיצוב חם ונשי',
      'עמוד שירותים מפורט',
      'ביקורות ולקוחות מרוצות',
      'טופס פנייה מהיר',
      'LocalBusiness schema',
      'מותאם למובייל מלא',
    ],
    siteUrl: 'https://merav-dula.com',
    image: meiravImage,
    seoTitle: 'בניית אתר לדולה – Case Study | Catapp',
    seoDescription: 'איך בנינו אתר מקצועי לדולה מירב — עיצוב חם, SEO ממוקד ופניות חדשות מגוגל.',
    relatedService: '/business-websites',
    relatedServiceLabel: 'בניית אתרים לעסקים',
  },
];

export const caseStudyBySlug = (slug: string): CaseStudy | undefined =>
  caseStudies.find((c) => c.slug === slug);
