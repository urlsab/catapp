import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { articles } from '../data/articles';
import { caseStudies } from '../data/case-studies';

const SITE_URL = 'https://catapp.it.com';

interface PageSeoData {
  title: string;
  description: string;
  schema?: object | object[];
}

const seoData: Record<string, PageSeoData> = {
  '/': {
    title: 'בניית אתרים מקצועיים לעסקים | Catapp',
    description: 'Catapp בונה אתרים מקצועיים לעסקים בישראל. React, SEO מובנה, נגישות וביצועים גבוהים. אתרי תדמית, דפי נחיתה ומערכות Web מהיום הראשון.',
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "בניית אתרים מקצועיים לעסקים | Catapp",
      "description": "בניית אתרים מקצועיים לעסקים בישראל — React, SEO מובנה ונגישות",
      "url": SITE_URL,
      "isPartOf": { "@type": "WebSite", "name": "Catapp", "url": SITE_URL },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "בית", "item": SITE_URL }
        ]
      }
    }
  },
  '/pricing': {
    title: 'כמה עולה לבנות אתר ב-2026? מחירון בניית אתרים | Catapp',
    description: 'כמה עולה לבנות אתר ב-2026? דף נחיתה מ-2,000 ₪, אתר תדמית מ-5,000 ₪, אתר מכירות עם סליקה מ-10,000 ₪. מחירון מלא ועדכני לבניית אתר לעסק. הצעת מחיר בחינם.',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "כמה עולה לבנות אתר ב-2026? מחירון בניית אתרים",
        "description": "מחירון בניית אתרים מעודכן לשנת 2026 - כמה עולה לבנות אתר לעסק לפי סוג האתר",
        "url": `${SITE_URL}/pricing`,
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "בית", "item": SITE_URL },
            { "@type": "ListItem", "position": 2, "name": "מחירון בניית אתרים", "item": `${SITE_URL}/pricing` }
          ]
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "מחירון בניית אתרים 2026",
        "itemListElement": [
          {
            "@type": "ListItem", "position": 1,
            "item": {
              "@type": "Service",
              "name": "בניית דף נחיתה לעסק",
              "url": `${SITE_URL}/landing-pages`,
              "provider": { "@id": `${SITE_URL}/#organization` },
              "offers": { "@type": "Offer", "priceCurrency": "ILS", "price": "2000", "priceSpecification": { "@type": "PriceSpecification", "minPrice": "2000", "priceCurrency": "ILS" } }
            }
          },
          {
            "@type": "ListItem", "position": 2,
            "item": {
              "@type": "Service",
              "name": "בניית אתר תדמית לעסק",
              "url": `${SITE_URL}/business-websites`,
              "provider": { "@id": `${SITE_URL}/#organization` },
              "offers": { "@type": "Offer", "priceCurrency": "ILS", "price": "5000", "priceSpecification": { "@type": "PriceSpecification", "minPrice": "5000", "priceCurrency": "ILS" } }
            }
          },
          {
            "@type": "ListItem", "position": 3,
            "item": {
              "@type": "Service",
              "name": "בניית אתר מכירות עם סליקה",
              "url": `${SITE_URL}/business-websites`,
              "provider": { "@id": `${SITE_URL}/#organization` },
              "offers": { "@type": "Offer", "priceCurrency": "ILS", "price": "10000", "priceSpecification": { "@type": "PriceSpecification", "minPrice": "10000", "priceCurrency": "ILS" } }
            }
          },
          {
            "@type": "ListItem", "position": 4,
            "item": {
              "@type": "Service",
              "name": "בניית אתר React בהתאמה אישית",
              "url": `${SITE_URL}/react-websites`,
              "provider": { "@id": `${SITE_URL}/#organization` },
              "offers": { "@type": "Offer", "priceCurrency": "ILS", "price": "8000", "priceSpecification": { "@type": "PriceSpecification", "minPrice": "8000", "priceCurrency": "ILS" } }
            }
          }
        ]
      }
    ]
  },
  '/portfolio': {
    title: 'תיק עבודות בניית אתרים | Catapp',
    description: 'פרויקטים שבנינו: אתרים לעורכי דין, עסקים מקומיים, בעלי מקצוע ופרויקטים מורכבים. עיצוב מותאם אישית, React, SEO וביצועים גבוהים.',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "תיק עבודות בניית אתרים",
        "description": "פרויקטי בניית אתרים ופיתוח תוכנה שביצענו",
        "url": `${SITE_URL}/portfolio`,
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "בית", "item": SITE_URL },
            { "@type": "ListItem", "position": 2, "name": "תיק עבודות", "item": `${SITE_URL}/portfolio` }
          ]
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "תיק עבודות — פרויקטי בניית אתרים",
        "url": `${SITE_URL}/portfolio`,
        "itemListElement": caseStudies.map((cs, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "url": `${SITE_URL}/portfolio/${cs.slug}`,
          "name": cs.h1,
        }))
      }
    ]
  },
  '/about-full': {
    title: 'אודות | בונה אתרים מקצועי בישראל - Catapp',
    description: 'אוריאל סבג - מפתח אתרים מקצועי בישראל. בונה אתרים בהתאמה אישית עם React, SEO מובנה, נגישות וביצועים גבוהים.',
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "אודות Catapp",
      "description": "מפתח React פרילנסר מקצועי בישראל",
      "url": `${SITE_URL}/about-full`,
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "בית", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "אודות", "item": `${SITE_URL}/about-full` }
        ]
      }
    }
  },
  '/testimonials': {
    title: 'המלצות לקוחות על בניית אתרים | Catapp',
    description: 'לקוחות מרוצים מספרים על העבודה עם Catapp. עורכי דין, בעלי עסקים ומנהלים שבנו להם אתרים יעילים. דירוג 5 כוכבים.',
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "המלצות לקוחות",
      "url": `${SITE_URL}/testimonials`,
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "בית", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "המלצות", "item": `${SITE_URL}/testimonials` }
        ]
      }
    }
  },
  '/contact': {
    title: 'צור קשר | בניית אתרים לעסק - Catapp',
    description: 'צרו קשר לקבלת יעוץ ראשוני והצעת מחיר לבניית אתר לעסק. טלפון: 055-6611594. מענים תוך 24 שעות.',
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "צור קשר - Catapp",
      "description": "צרו קשר לקבלת הצעת מחיר לבניית אתרים",
      "url": `${SITE_URL}/contact`,
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "בית", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "צור קשר", "item": `${SITE_URL}/contact` }
        ]
      }
    }
  },
  '/faq': {
    title: 'שאלות נפוצות על בניית אתרים | Catapp',
    description: 'תשובות לשאלות נפוצות: כמה עולה לבנות אתר? כמה זמן לוקח? מה ההבדל בין React ל-WordPress? האם האתר מותאם ל-SEO? קראו תשובות מפורטות.',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "בית", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "שאלות נפוצות", "item": `${SITE_URL}/faq` }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "url": `${SITE_URL}/faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "כמה עולה לבנות אתר לעסק?",
            "acceptedAnswer": { "@type": "Answer", "text": "מחיר בניית אתר לעסק תלוי בסוג האתר ובמורכבותו. דף נחיתה פשוט עולה החל מ-2,000 ₪, אתר תדמית עם עד 10 עמודים עולה החל מ-5,000 ₪, אתר React מותאם אישית עולה החל מ-8,000 ₪, ואתר מכירות עם סליקה עולה החל מ-10,000 ₪. המחיר הסופי נקבע לאחר שיחת ייעוץ ותיאור מלא של הפרויקט." }
          },
          {
            "@type": "Question",
            "name": "כמה זמן לוקח לבנות אתר?",
            "acceptedAnswer": { "@type": "Answer", "text": "זמן בניית האתר תלוי בהיקף הפרויקט. דף נחיתה נבנה תוך 3-7 ימי עבודה, אתר תדמית בינוני לוקח 2-4 שבועות, ואתר מורכב עם מערכות ניהול או חנות אינטרנטית יכול לקחת 4-8 שבועות. אנו שומרים על לוח זמנים ברור ומעדכנים את הלקוח בכל שלב." }
          },
          {
            "@type": "Question",
            "name": "מה ההבדל בין אתר ב-React לאתר ב-WordPress?",
            "acceptedAnswer": { "@type": "Answer", "text": "React הוא פריימוורק JavaScript מודרני המאפשר ביצועים גבוהים יותר, אנימציות חלקות, ואינטגרציות מורכבות. אתר React טוען מהיר יותר, מקבל ציוני Core Web Vitals גבוהים ב-Google, ומאפשר שליטה מלאה בקוד. WordPress מתאים יותר לאתרים שהלקוח מנהל בעצמו ולבלוגים עם תוכן מרובה. עבור עסקים שרוצים אתר מהיר, מוביל ומותאם SEO לחלוטין - React הוא הבחירה הנכונה." }
          },
          {
            "@type": "Question",
            "name": "האם האתר שנבנה יהיה מותאם ל-SEO?",
            "acceptedAnswer": { "@type": "Answer", "text": "כן. כל אתר שנבנה ב-Catapp כולל SEO טכני מלא: structured data (Schema.org), meta tags, Open Graph, sitemap.xml, robots.txt, canonical URLs, prerender לאינדוקס מלא של React, ו-Core Web Vitals גבוהים. בנוסף, האתר מגיע עם מבנה כותרות נכון (H1-H6) ותוכן ממוקד לפי כוונת חיפוש." }
          },
          {
            "@type": "Question",
            "name": "האם האתר נבנה ב-React?",
            "acceptedAnswer": { "@type": "Answer", "text": "ברוב המקרים כן. Catapp מתמחה בבניית אתרים עם React ו-TypeScript. כך מקבלים ביצועים מהירים, קוד נקי ומתוחזק, ו-SEO מלא באמצעות prerender. לפרויקטים מסוימים ניתן גם להשתמש ב-Next.js לצורכי SSR." }
          },
          {
            "@type": "Question",
            "name": "האם אתם מספקים תחזוקה לאחר ההשקה?",
            "acceptedAnswer": { "@type": "Answer", "text": "כן. אנו מציעים מסלולי תחזוקה חודשיים הכוללים ניטור 24/7, עדכוני אבטחה, גיבויים יומיים ותיקון באגים. המחיר מתחיל מ-300 ₪ לחודש. ניתן גם לרכוש שעות תמיכה לפי הצורך." }
          },
          {
            "@type": "Question",
            "name": "האם האתר נגיש לאנשים עם מוגבלויות?",
            "acceptedAnswer": { "@type": "Answer", "text": "כן. כל אתר שנבנה ב-Catapp עומד בתקן WCAG 2.1 ובחוק הנגישות הישראלי. זה כולל תמיכה בקוראי מסך, ניגודיות צבעים תקנית, ניווט מקלדת ותפריט נגישות מובנה." }
          }
        ]
      }
    ]
  },
  '/quote': {
    title: 'הצעת מחיר לבניית אתר | Catapp',
    description: 'קבלו הצעת מחיר לבניית אתר לעסק תוך 24 שעות. אתר תדמית, דף נחיתה, חנות אינטרנטית או פיתוח Web מותאם. ייעוץ ראשוני חינמי וללא התחייבות.',
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "הצעת מחיר לבניית אתר",
      "url": `${SITE_URL}/quote`,
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "בית", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "הצעת מחיר", "item": `${SITE_URL}/quote` }
        ]
      }
    }
  },
  '/business-websites': {
    title: 'בניית אתרים לעסקים קטנים ובינוניים | Catapp',
    description: 'בניית אתר מקצועי לעסק קטן ובינוני עם SEO מובנה, עיצוב ייחודי ומהירות גבוהה. מחיר בניית אתר תדמית מ-5,000 ₪. הצעת מחיר בחינם.',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE_URL}/business-websites#service`,
      "serviceType": "Website Development",
      "name": "בניית אתרים לעסקים",
      "description": "בניית אתר מקצועי לעסק קטן ובינוני עם SEO מובנה ועיצוב ייחודי",
      "url": `${SITE_URL}/business-websites`,
      "provider": { "@id": `${SITE_URL}/#organization` },
      "areaServed": [
        { "@type": "Country", "name": "Israel" },
        { "@type": "State", "name": "מחוז המרכז" },
        { "@type": "City", "name": "לוד" },
        { "@type": "City", "name": "תל אביב" },
        { "@type": "City", "name": "ראשון לציון" },
        { "@type": "City", "name": "פתח תקווה" },
        { "@type": "City", "name": "רמת גן" }
      ],
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "בית", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "בניית אתרים לעסקים", "item": `${SITE_URL}/business-websites` }
        ]
      }
    }
  },
  '/landing-pages': {
    title: 'בניית דפי נחיתה לעסקים | מחיר דף נחיתה - Catapp',
    description: 'בניית דף נחיתה לעסק עם המרה גבוהה. מתאים לקמפיינים ממומנים, מוצרים חדשים ואירועים. מחיר מ-2,000 ₪. הצעת מחיר בחינם.',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE_URL}/landing-pages#service`,
      "serviceType": "Landing Page Development",
      "name": "בניית דפי נחיתה",
      "description": "בניית דף נחיתה לעסק עם המרה גבוהה לקמפיינים ממומנים",
      "url": `${SITE_URL}/landing-pages`,
      "provider": { "@id": `${SITE_URL}/#organization` },
      "areaServed": [
        { "@type": "Country", "name": "Israel" },
        { "@type": "State", "name": "מחוז המרכז" },
        { "@type": "City", "name": "לוד" },
        { "@type": "City", "name": "תל אביב" },
        { "@type": "City", "name": "ראשון לציון" },
        { "@type": "City", "name": "פתח תקווה" },
        { "@type": "City", "name": "רמת גן" }
      ],
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "בית", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "בניית דפי נחיתה", "item": `${SITE_URL}/landing-pages` }
        ]
      }
    }
  },
  '/react-websites': {
    title: 'בניית אתרי React לעסקים | Catapp',
    description: 'בניית אתר בהתאמה אישית עם React ו-TypeScript. ארכיטקטורת קומפוננטות, SEO מלא עם prerender, Core Web Vitals גבוהים וביצועים מעולים. הצעת מחיר בחינם.',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE_URL}/react-websites#service`,
      "serviceType": "React Website Development",
      "name": "בניית אתרי React",
      "description": "בניית אתר בהתאמה אישית עם React ו-TypeScript — ארכיטקטורת קומפוננטות, Core Web Vitals גבוהים ו-SEO מלא עם prerender",
      "url": `${SITE_URL}/react-websites`,
      "provider": { "@id": `${SITE_URL}/#organization` },
      "areaServed": [
        { "@type": "Country", "name": "Israel" },
        { "@type": "State", "name": "מחוז המרכז" },
        { "@type": "City", "name": "לוד" },
        { "@type": "City", "name": "תל אביב" },
        { "@type": "City", "name": "ראשון לציון" },
        { "@type": "City", "name": "פתח תקווה" },
        { "@type": "City", "name": "רמת גן" }
      ],
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "בית", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "בניית אתרי React", "item": `${SITE_URL}/react-websites` }
        ]
      }
    }
  },
  '/website-for-lawyers': {
    title: 'בניית אתר לעורך דין | אתר מקצועי למשרד עו"ד — Catapp',
    description: 'בניית אתר לעורך דין עם עיצוב שמשדר אמינות, SEO לחיפושים משפטיים, תחומי עיסוק, טופס ייעוץ ראשוני ו-LegalService schema. ראו Case Study אמיתי. הצעת מחיר בחינם.',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE_URL}/website-for-lawyers#service`,
      "serviceType": "Law Firm Website Development",
      "name": 'בניית אתר לעורך דין',
      "description": 'בניית אתר מקצועי למשרד עורכי דין — עיצוב שמשדר סמכות, SEO לחיפושים משפטיים ו-LegalService schema',
      "url": `${SITE_URL}/website-for-lawyers`,
      "provider": { "@id": `${SITE_URL}/#organization` },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "בית", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "בניית אתרים לעסקים", "item": `${SITE_URL}/business-websites` },
          { "@type": "ListItem", "position": 3, "name": "בניית אתר לעורך דין", "item": `${SITE_URL}/website-for-lawyers` }
        ]
      }
    }
  },
  '/web-development': {
    title: 'פיתוח Web בהתאמה אישית | SaaS, Dashboard, API - Catapp',
    description: 'פיתוח Web מלא — מערכות SaaS, Dashboards, אינטגרציות AI, Back Office ו-API. React, Node.js, Supabase, MongoDB. הצעת מחיר בחינם.',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE_URL}/web-development#service`,
      "serviceType": "Custom Web Development",
      "name": "פיתוח Web בהתאמה אישית",
      "description": "פיתוח מערכות Web מותאמות — SaaS, Dashboards, API ואינטגרציות AI",
      "url": `${SITE_URL}/web-development`,
      "provider": { "@id": `${SITE_URL}/#organization` },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "בית", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "פיתוח Web", "item": `${SITE_URL}/web-development` }
        ]
      }
    }
  },
  '/articles': {
    title: 'מאמרים על בניית אתרים ו-SEO | Catapp',
    description: 'מדריכים מקצועיים לבניית אתרים, קידום SEO, נגישות ועיצוב אתרים. טיפים מעשיים לבעלי עסקים.',
    schema: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "בלוג Catapp - מאמרים על בניית אתרים",
      "description": "מאמרים מקצועיים על בניית אתרים, פיתוח תוכנה וקידום דיגיטלי",
      "url": `${SITE_URL}/articles`,
      "publisher": {
        "@type": "Organization",
        "name": "Catapp",
        "logo": { "@type": "ImageObject", "url": `${SITE_URL}/Assets/logoiCatapp.png` }
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "בית", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "מאמרים", "item": `${SITE_URL}/articles` }
        ]
      },
      "blogPost": articles.map((a) => ({
        "@type": "BlogPosting",
        "headline": a.title,
        "description": a.summary,
        "url": `${SITE_URL}/articles/${a.slug}`,
        "datePublished": a.datePublished,
        "dateModified": a.dateModified,
      }))
    }
  },
  '/privacy': {
    title: 'מדיניות פרטיות | Catapp - בניית אתרים',
    description: 'מדיניות הפרטיות של Catapp - איך אנו שומרים על המידע שלכם. פרטיות, אבטחת מידע וזכויות המשתמש באתר.',
  },
  '/terms': {
    title: 'תנאי שימוש | Catapp - בניית אתרים',
    description: 'תנאי השימוש של Catapp - תנאי שירות, תשלום, אחריות וביטול. קראו את התנאים לפני הזמנת שירותי בניית אתרים.',
  },
  '/ask-ai': {
    title: 'שאל AI על בניית אתרים | Catapp',
    description: 'שאלו את ה-AI של Catapp על בניית אתרים, עיצוב, SEO ומחירים. תשובות מיידיות 24/7.',
  },
};

const defaultSeo = seoData['/'];
void defaultSeo; // kept for reference; fallback is now inline in usePageSeo

export function usePageSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Dynamic SEO for individual article pages
    const articleSlug = pathname.startsWith('/articles/')
      ? pathname.slice('/articles/'.length)
      : null;
    const article = articleSlug ? articles.find((a) => a.slug === articleSlug) : null;

    // Dynamic SEO for case study pages
    const caseStudySlug = pathname.startsWith('/portfolio/')
      ? pathname.slice('/portfolio/'.length)
      : null;
    const caseStudy = caseStudySlug ? caseStudies.find((c) => c.slug === caseStudySlug) : null;

    let title: string;
    let description: string;
    let schema: object | object[] | undefined;

    if (article) {
      title = `${article.title} | Catapp`;
      description = article.summary;
      schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": article.title,
        "description": article.summary,
        "url": `${SITE_URL}/articles/${article.slug}`,
        "datePublished": article.datePublished,
        "dateModified": article.dateModified,
        ...(article.ogImage && {
          "image": {
            "@type": "ImageObject",
            "url": `${SITE_URL}${article.ogImage}`,
            "width": 1200,
            "height": 630
          }
        }),
        "author": { "@type": "Person", "@id": `${SITE_URL}/#person`, "name": "אוריאל סבג" },
        "publisher": { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
        "mainEntityOfPage": { "@type": "WebPage", "@id": `${SITE_URL}/articles/${article.slug}` },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "בית", "item": SITE_URL },
            { "@type": "ListItem", "position": 2, "name": "מאמרים", "item": `${SITE_URL}/articles` },
            { "@type": "ListItem", "position": 3, "name": article.title, "item": `${SITE_URL}/articles/${article.slug}` }
          ]
        }
      };
    } else if (caseStudy) {
      title = caseStudy.seoTitle;
      description = caseStudy.seoDescription;
      const caseStudySchemas: object[] = [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": caseStudy.h1,
          "description": caseStudy.seoDescription,
          "url": `${SITE_URL}/portfolio/${caseStudy.slug}`,
          "author": { "@type": "Person", "@id": `${SITE_URL}/#person`, "name": "אוריאל סבג" },
          "about": {
            "@type": "Service",
            "name": caseStudy.relatedServiceLabel,
            "url": `${SITE_URL}${caseStudy.relatedService}`,
            "provider": { "@id": `${SITE_URL}/#organization` }
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "בית", "item": SITE_URL },
              { "@type": "ListItem", "position": 2, "name": "תיק עבודות", "item": `${SITE_URL}/portfolio` },
              { "@type": "ListItem", "position": 3, "name": caseStudy.clientName, "item": `${SITE_URL}/portfolio/${caseStudy.slug}` }
            ]
          }
        }
      ];
      if (caseStudy.testimonial) {
        caseStudySchemas.push({
          "@context": "https://schema.org",
          "@type": "Review",
          "reviewBody": caseStudy.testimonial.text,
          "author": { "@type": "Person", "name": caseStudy.testimonial.author },
          "itemReviewed": {
            "@type": "Service",
            "name": caseStudy.relatedServiceLabel,
            "url": `${SITE_URL}${caseStudy.relatedService}`,
            "provider": { "@id": `${SITE_URL}/#organization` }
          }
        });
      }
      schema = caseStudySchemas;
    } else {
      const data = seoData[pathname] ?? seoData['/'];
      title = data.title;
      description = data.description;
      schema = data.schema;
    }

    // Title
    document.title = title;

    // Meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', `${SITE_URL}${pathname === '/' ? '' : pathname}`);
    }

    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) {
      ogType.setAttribute('content', article ? 'article' : 'website');
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content',
        article?.ogImage ? `${SITE_URL}${article.ogImage}` : `${SITE_URL}/Assets/logoiCatapp.png`
      );
    }

    // Twitter
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) {
      twTitle.setAttribute('content', title);
    }

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) {
      twDesc.setAttribute('content', description);
    }

    const twImage = document.querySelector('meta[name="twitter:image"]');
    if (twImage) {
      twImage.setAttribute('content',
        article?.ogImage ? `${SITE_URL}${article.ogImage}` : `${SITE_URL}/Assets/logoiCatapp.png`
      );
    }

    // Canonical — normalize trailing slashes so /pricing/ and /pricing get the same canonical
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      const canonicalPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
      canonical.setAttribute('href', `${SITE_URL}${canonicalPath}`);
    }

    // noindex for tool pages that should not rank
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute(
        'content',
        pathname === '/ask-ai'
          ? 'noindex, nofollow'
          : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
      );
    }

    // Per-page structured data (JSON-LD) - remove all previously injected page schemas
    document.querySelectorAll('script[data-page-schema]').forEach((el) => el.remove());

    if (schema) {
      const schemas = Array.isArray(schema) ? schema : [schema];
      schemas.forEach((schemaObj, i) => {
        const script = document.createElement('script');
        script.dataset.pageSchema = String(i);
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schemaObj);
        document.head.appendChild(script);
      });
    }
  }, [pathname]);
}
