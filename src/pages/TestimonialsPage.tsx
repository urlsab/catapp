import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsPage: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'אור בנג\'י פסיכותרפיה',
      text: 'פנינו לחברת Catapp עבור הקמת דף נחיתה לעסק, וכבר מהרגע הראשון היה ברור שעשינו את ההחלטה הנכונה. הכל נעשה בצורה הכי מקצועית, יעילה ומדויקת תוך הקשבה לצרכים שלנו ומתן מענה מהיר לכל שאלה. שילוב נפלא של עבודה ברמה גבוהה ויחס נהדר ללקוח. בהחלט אמליץ לכל מי שמחפש- הגעתם למקום הנכון.'
    },
    {
      id: 2,
      name: 'יאיר אהרוני, סטודנט להנדסת חשמל ואלקטרוניקה',
      text: 'ברצוני להודות לחברת Catapp על ליווי מקצועי ואישי ברמה גבוהה, עם תשומת לב אמיתית לפרטים והבנה עמוקה של הצרכים שלי. התהליך היה מסודר, ברור ויעיל, והתוצאה – קורות חיים איכותיים שמציגים אותי בצורה מדויקת ומרשימה. שירות ברמה הגבוהה ביותר – מומלץ בחום.'
    },
    {
      id: 3,
      name: 'רפאל סבג, בעלים של משרד עו"ד',
      text: 'עבדתי עם Catapp על בניית האתר, ואין ספק שעשיתי בחירה מצוינת. קיבלתי יחס אישי, זמינות מלאה והקשבה אמיתית לצרכים שלי. העבודה בוצעה במהירות, במקצועיות ובדיוק כפי שסוכם – והתוצאה עלתה על הציפיות. ממליץ מכל הלב'
    },
    {
      id: 4,
      name: 'אוריאל, מנהל קהילת מעקף',
      text: 'חברת Catapp העבירה לקהילה שלנו הרצאה יוצאת דופן ומקיפה ביותר על כתיבת קו"ח. ההרצאה הייתה מלאה בתוכן משמעותי ופרקטי עם דוגמאות מעשיות. ממליץ בחום רב!'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            המלצות מלקוחות מרוצים
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1a79f6] to-blue-700 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            קראו מה לקוחותינו אומרים על העבודה איתנו
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="rounded-2xl p-6 md:p-8 text-right transition-all duration-300 animate-fadeFromBottom"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="flex items-start justify-end gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-white text-base md:text-lg leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-700">
                <span className="font-bold text-[#1a79f6] text-sm md:text-base">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            מוכנים להצטרף ללקוחות המרוצים שלנו?
          </h2>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#1a79f6] to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            צור קשר עכשיו
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
