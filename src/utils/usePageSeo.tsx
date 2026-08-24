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
      "name": "בניית אתרים | עיצוב אתרים | קידום אתרים | Catapp",
      "description": "בניית אתרים, עיצוב אתרים וקידום אתרים אורגני בגוגל לעסקים בישראל",
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
    title: 'מחירון בניית אתרים ועיצוב אתרים 2026 | קידום אתרים בגוגל - Catapp',
    description: 'מחירון בניית אתרים ועיצוב אתרים 2026. קידום אתרים בגוגל, קידום אתרים אורגני. דף נחיתה לעסק מ-2,000₪, אתר תדמית מ-5,000₪, אתר מכירות עם סליקה מ-10,000₪. הצעת מחיר לבניית אתר בהתאמה אישית.',
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "מחירון בניית אתרים 2026",
      "description": "מחירון בניית אתרים מעודכן - כמה עולה לבנות אתר לעסק",
      "url": `${SITE_URL}/pricing`,
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "בית", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "מחירון בניית אתרים", "item": `${SITE_URL}/pricing` }
        ]
      }
    }
  },
  '/portfolio': {
    title: 'תיק עבודות בניית אתרים | Catapp',
    description: 'פרויקטים שבנינו: אתרים לעורכי דין, עסקים מקומיים, בעלי מקצוע ופרויקטים מורכבים. עיצוב מותאם אישית, React, SEO וביצועים גבוהים.',
    schema: {
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
    }
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
    description: 'תשובות לשאלות נפוצות: כמה עולה לבנות אתר? כמה זמן לוקח? מה ההבדל בין Wix לאתר מותאם אישית? למה React עדיף?',
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "שאלות נפוצות על בניית אתרים | Catapp",
      "description": "תשובות לשאלות נפוצות על בניית אתרים, עיצוב אתרים וקידום אתרים",
      "url": `${SITE_URL}/faq`,
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "בית", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "שאלות נפוצות", "item": `${SITE_URL}/faq` }
        ]
      }
    }
  },
  '/quote': {
    title: 'הצעת מחיר לבניית אתרים ועיצוב אתרים | קידום אתרים - Catapp',
    description: 'קבלו הצעת מחיר לבניית אתרים, עיצוב אתרים וקידום אתרים בגוגל. אתר תדמית, חנות אינטרנטית, דף נחיתה או פיתוח אפליקציה. מלאו את הטופס וקבלו הצעה תוך 24 שעות.',
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
      "name": "בניית אתרים לעסקים",
      "description": "בניית אתר מקצועי לעסק קטן ובינוני עם SEO מובנה ועיצוב ייחודי",
      "url": `${SITE_URL}/business-websites`,
      "provider": { "@type": "Organization", "name": "Catapp", "url": SITE_URL },
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
      "name": "בניית דפי נחיתה",
      "description": "בניית דף נחיתה לעסק עם המרה גבוהה לקמפיינים ממומנים",
      "url": `${SITE_URL}/landing-pages`,
      "provider": { "@type": "Organization", "name": "Catapp", "url": SITE_URL },
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
    title: 'בניית אתרים עם React | אתר React לעסק - Catapp',
    description: 'בניית אתר בהתאמה אישית עם React ו-TypeScript. ארכיטקטורת קומפוננטות, SEO מלא עם prerender, Core Web Vitals גבוהים וביצועים מעולים. הצעת מחיר בחינם.',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "בניית אתרי React",
      "description": "בניית אתר בהתאמה אישית עם React ו-TypeScript — ארכיטקטורת קומפוננטות, Core Web Vitals גבוהים ו-SEO מלא עם prerender",
      "url": `${SITE_URL}/react-websites`,
      "provider": { "@type": "Organization", "name": "Catapp", "url": SITE_URL },
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
  '/web-development': {
    title: 'פיתוח Web בהתאמה אישית | SaaS, Dashboard, API - Catapp',
    description: 'פיתוח Web מלא — מערכות SaaS, Dashboards, אינטגרציות AI, Back Office ו-API. React, Node.js, Supabase, MongoDB. הצעת מחיר בחינם.',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "פיתוח Web בהתאמה אישית",
      "description": "פיתוח מערכות Web מותאמות — SaaS, Dashboards, API ואינטגרציות AI",
      "url": `${SITE_URL}/web-development`,
      "provider": { "@type": "Organization", "name": "Catapp", "url": SITE_URL },
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
        "author": { "@type": "Person", "name": "Uriel Sabag", "url": `${SITE_URL}/about-full` },
        "publisher": {
          "@type": "Organization",
          "name": "Catapp",
          "logo": { "@type": "ImageObject", "url": `${SITE_URL}/Assets/logoiCatapp.png` }
        },
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
      schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": caseStudy.h1,
        "description": caseStudy.seoDescription,
        "url": `${SITE_URL}/portfolio/${caseStudy.slug}`,
        "author": { "@type": "Person", "name": "אוריאל סבג", "url": `${SITE_URL}/about-full` },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "בית", "item": SITE_URL },
            { "@type": "ListItem", "position": 2, "name": "תיק עבודות", "item": `${SITE_URL}/portfolio` },
            { "@type": "ListItem", "position": 3, "name": caseStudy.clientName, "item": `${SITE_URL}/portfolio/${caseStudy.slug}` }
          ]
        }
      };
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
    if (ogImage && article?.ogImage) {
      ogImage.setAttribute('content', `${SITE_URL}${article.ogImage}`);
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
    if (twImage && article?.ogImage) {
      twImage.setAttribute('content', `${SITE_URL}${article.ogImage}`);
    }

    // Canonical
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `${SITE_URL}${pathname === '/' ? '/' : pathname}`);
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
