import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const seoData: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'בניית אתרים | פיתוח אתרים | בונה אתרים מקצועי לעסקים - Catapp',
    description: 'Catapp - בניית אתרים ופיתוח אתרים מקצועי לעסקים. בונה אתרים מומלץ: אתרים לעורכי דין, אתרים לבעלי עסקים, פיתוח אפליקציות, בניית אפליקציות, פיתוח תוכנה, דפי נחיתה ואתרי תדמית.',
  },
  '/pricing': {
    title: 'מחירון בניית אתרים | כמה עולה לבנות אתר לעסק - Catapp',
    description: 'מחירון בניית אתרים מקצועי: דף נחיתה לעסק מ-2,000₪, אתר תדמית לבעל עסק מ-5,000₪, אתר מכירות עם סליקה מ-10,000₪. בניית אתרים לעורכי דין, פיתוח אפליקציות ופיתוח תוכנה.',
  },
  '/portfolio': {
    title: 'תיק עבודות בניית אתרים | פרויקטים שבנינו - Catapp',
    description: 'תיק עבודות Catapp: אתרים לעורכי דין, אתרים לבעלי עסקים, דפי נחיתה, אתרי תדמית, פיתוח אפליקציות ופיתוח תוכנה. צפו בפרויקטים שבנינו.',
  },
  '/about-full': {
    title: 'אודות Catapp | בונה אתרים ומפתח תוכנה מקצועי בישראל',
    description: 'Catapp - חברת בניית אתרים, פיתוח אתרים, פיתוח אפליקציות ופיתוח תוכנה מקצועית. בונה אתרים עם ניסיון בטכנולוגיות React, Node.js ו-TypeScript.',
  },
  '/testimonials': {
    title: 'המלצות לקוחות | בניית אתרים ופיתוח תוכנה - Catapp',
    description: 'המלצות מלקוחות מרוצים של Catapp: עורכי דין, בעלי עסקים ומפתחים שבחרו בנו לבניית אתרים, פיתוח אפליקציות ופיתוח תוכנה מקצועי.',
  },
  '/contact': {
    title: 'צור קשר | הצעת מחיר לבניית אתר או פיתוח אפליקציה - Catapp',
    description: 'צרו קשר עם Catapp לקבלת הצעת מחיר לבניית אתרים, פיתוח אתרים, פיתוח אפליקציות או פיתוח תוכנה. בונה אתרים לעסקים, עורכי דין ובעלי עסקים.',
  },
  '/ask-ai': {
    title: 'שאל AI | עוזר חכם לבניית אתרים ופיתוח תוכנה - Catapp',
    description: 'שאלו את ה-AI של Catapp שאלות על בניית אתרים, פיתוח אתרים, פיתוח אפליקציות, מחירי בניית אתר ועוד.',
  },
};

const defaultSeo = seoData['/'];

export function usePageSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const data = seoData[pathname] || defaultSeo;

    document.title = data.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', data.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', data.title);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', data.description);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', `https://catapp.it.com${pathname === '/' ? '' : pathname}`);
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `https://catapp.it.com${pathname === '/' ? '/' : pathname}`);
    }
  }, [pathname]);
}
