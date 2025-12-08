import React from 'react';
import { FileText, CheckCircle2, Star, Target, Users, Send, Phone, Handshake, Bot, Laptop, BarChart3, Edit, Puzzle, Rocket, File, Briefcase, Video, Mic, Clock, Home, Sparkles, GraduationCap, Building2, UsersRound, MessageCircle } from 'lucide-react';
// import SmoothScroll from '../components/SmoothScroll';

const cvServices = [
  {
    name: 'הערות לקו"ח',
    price: '50₪',
    description: 'משוב מקצועי לשיפור',
    features: ['סקירת הקו"ח הקיים', 'הערות לשיפור', 'טיפים להתאמה ל-ATS'],
    popular: false,
    icon: Edit
  },
  {
    name: 'שכתוב מקצועי',
    price: '80₪',
    description: 'שכתוב מלא בתבנית מושלמת',
    features: ['שכתוב מקצועי מלא', 'תבנית מעוצבת', 'התאמה ל-ATS', 'ניסוח מחדש'],
    popular: false,
    icon: Puzzle
  },
  {
    name: 'בנייה מאפס',
    price: '100₪',
    description: 'קו"ח מקצועי חדש לגמרי',
    features: ['בניית קו"ח מאפס', 'תבנית מושלמת', 'התאמה ל-ATS', 'עיצוב מקצועי', 'ניסוח מותאם'],
    popular: true,
    icon: Rocket
  },
  {
    name: 'קובץ תבנית',
    price: '30₪',
    description: 'תבנית למילוי עצמאי',
    features: ['קובץ תבנית מקצועי', 'הנחיות למילוי', 'עיצוב מוכן'],
    popular: false,
    icon: File
  }
];

const CVServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-16 fade-in">
      {/* <SmoothScroll /> */}
      
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 mt-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            <FileText className="inline-block w-10 h-10 md:w-12 md:h-12 text-[#1a79f6] ml-3" />
            שירותי קורות חיים מקצועיים
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-[#1a79f6] to-blue-700 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            קורות חיים שיבלטו אותך מול מערכות ATS ויגרמו ל-HR להתקשר אליך
          </p>
        </div>

        {/* Intro Text */}
        <div className="max-w-4xl mx-auto text-right mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 text-gray-300 space-y-4">
            <p className="text-lg leading-relaxed">
              <span className="font-bold text-white">מחפשים עבודה בהייטק אבל מרגישים שהקו"ח שלכם לא עושים את העבודה?</span>
              <br />
              אני כאן בדיוק בשביל זה
            </p>
            
            <p className="leading-relaxed">
              עם ניסיון רב בכתיבת קורות חיים מותאמים לעולם ההייטק — אני עוזר למועמדים לבלוט, 
              לעבור מסננים אוטומטיים (ATS), ולהגיע לראיונות אמיתיים.
            </p>
            
            <p className="leading-relaxed">
              יש לי תבנית מושלמת שמדגישה את החוזקות שלכם, מציגה ניסיון בצורה מקצועית, 
              ומדברת בשפה שהמגייסים (HR) באמת מבינים.
            </p>
            
            <p className="text-sm text-purple-300 italic flex items-center gap-2">
              <Briefcase className="w-4 h-4 flex-shrink-0" />
              <span>מתאים במיוחד למועמדים לתפקידים טכנולוגיים, בוגרי קורסים או ג'וניורים שמחפשים 
              את הדרך הנכונה להציג את עצמם.</span>
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cvServices.map((service, idx) => {
            const IconComponent = service.icon;
            return (
            <div 
              key={idx} 
              className={`relative rounded-2xl p-6 backdrop-blur-sm border transition-all hover:scale-105 ${
                service.popular 
                  ? 'border-purple-500 bg-purple-600/20 ring-2 ring-purple-400' 
                  : 'border-purple-500/30 bg-purple-600/10 hover:border-purple-500/60'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Star className="w-4 h-4" /> מומלץ ביותר
                </div>
              )}
              <div className="flex justify-center mb-4">
                <IconComponent className="w-12 h-12 text-[#1a79f6]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">{service.name}</h3>
              <div className="text-3xl font-bold text-purple-300 text-center mb-2">{service.price}</div>
              <p className="text-gray-400 text-center mb-4 text-sm">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2 text-gray-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a 
                href="/contact" 
                className={`block text-center py-3 rounded-xl font-bold transition-all ${
                  service.popular 
                    ? 'bg-purple-600 text-white hover:bg-purple-700' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                להזמנה
              </a>
            </div>
          )})}
        </div>

        {/* CTA Box */}
        <div className="text-center mb-16">
          <div className="bg-purple-600/10 border border-purple-500/30 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-gray-300 mb-4">
              📩 מוזמנים לשלוח לי הודעה עם הקובץ הקיים או בקשה לתבנית – 
              ואעזור לכם לבלוט מעל כולם!
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all transform hover:scale-105"
            >
              צור קשר עכשיו
            </a>
          </div>
        </div>

        {/* Zoom Meeting Service */}
        <div className="relative rounded-2xl p-6 md:p-8 mb-8 backdrop-blur-sm border border-cyan-500/30 bg-cyan-900/10">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
            <Video className="w-8 h-8" />
            🧠 מפגש זום אישי – למידה שנשארת אתכם לתמיד
          </h2>
          
          <div className="bg-black/30 rounded-xl p-6 mb-6">
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              הפגישה שאני מציע לא רק תשפר לכם את הקו"ח – 
              <span className="text-cyan-400 font-bold"> המטרה היא שתדעו ללמד אחרים וליישם לבד בצורה מושלמת</span> 
              בכל פעם שתרצו לעדכן קו"ח גם בעתיד.
            </p>
          </div>

          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            📌 מה תקבלו בפגישה?
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start gap-3 p-4 bg-black/30 rounded-xl">
              <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
              <span className="text-gray-300">למידה מעשית של עקרונות הכתיבה הנכונה</span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-black/30 rounded-xl">
              <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
              <span className="text-gray-300">ניסוח ניסיון תעסוקתי שמדגיש אימפקט ותוצאות</span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-black/30 rounded-xl">
              <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
              <span className="text-gray-300">דוגמאות ותיקונים בלייב</span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-black/30 rounded-xl">
              <Sparkles className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
              <span className="text-gray-300">חומרים מסודרים לסיכום + <span className="text-yellow-400 font-bold">בונוס על לינקדאין</span></span>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center gap-3 p-4 bg-cyan-500/20 rounded-xl border border-cyan-500/40">
              <Clock className="w-6 h-6 text-cyan-400" />
              <span className="text-white font-bold">משך: כשעה</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-cyan-500/20 rounded-xl border border-cyan-500/40">
              <Home className="w-6 h-6 text-cyan-400" />
              <span className="text-white font-bold">בזום מהבית</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-cyan-500/20 rounded-xl border border-cyan-500/40">
              <span className="text-2xl">💰</span>
              <span className="text-white font-bold">200 ₪ בלבד</span>
            </div>
          </div>

          <div className="p-4 bg-cyan-500/20 rounded-xl border border-cyan-500/40 mb-6">
            <p className="text-cyan-300 text-center font-bold">
              (חד־פעמי — הידע נשאר אתכם לתמיד)
            </p>
          </div>

          <p className="text-gray-300 mb-6">
            אם אתם בתקופה של חיפוש עבודה, קידום, מעבר מקצועי או פשוט רוצים לדעת איך לעשות את זה נכון – 
            שלחו לי הודעה ואשלח פרטים נוספים 🌟
          </p>

          <div className="text-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              צור קשר לפרטים נוספים
            </a>
          </div>

          <div className="text-center mt-6">
            <p className="text-cyan-400 font-bold">
              Catapp – טכנולוגיה ותוכן שמקדמים אותך קדימה 🚀
            </p>
          </div>
        </div>

        {/* Lectures Service */}
        <div className="relative rounded-2xl p-6 md:p-8 mb-8 backdrop-blur-sm border border-orange-500/30 bg-orange-900/10">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-400 mb-6 flex items-center gap-3">
            <Mic className="w-8 h-8" />
            🎤 הרצאות וסדנאות על כתיבת קו"ח להייטק
          </h2>
          
          <div className="bg-black/30 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-white mb-4">במהלך ההרצאה אני מלמד:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">איך לבנות קו"ח שמדברים בשפה של מגייסים</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">איך להציג ניסיון גם כשאין ניסיון</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">איך להפוך פרויקטים פשוטים לניסיון רלוונטי</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">איך להגדיל את אחוז הזימונים כבר בשבוע הראשון</span>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-4">מתאים ל–</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center gap-3 p-4 bg-black/30 rounded-xl">
              <Building2 className="w-6 h-6 text-orange-400" />
              <span className="text-gray-300">ארגונים וחברות</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-black/30 rounded-xl">
              <GraduationCap className="w-6 h-6 text-orange-400" />
              <span className="text-gray-300">תוכניות הכשרה</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-black/30 rounded-xl">
              <Laptop className="w-6 h-6 text-orange-400" />
              <span className="text-gray-300">קהילות הייטק</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-black/30 rounded-xl">
              <UsersRound className="w-6 h-6 text-orange-400" />
              <span className="text-gray-300">סטודנטים ובוגרי בוטקאמפים</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-black/30 rounded-xl">
              <Users className="w-6 h-6 text-orange-400" />
              <span className="text-gray-300">קבוצות עובדים וחוגי בית מקצועיים</span>
            </div>
          </div>

          <div className="p-4 bg-orange-500/20 rounded-xl border border-orange-500/40 mb-6">
            <p className="text-orange-300 text-center">
              רוצה להזמין הרצאה או לשמוע פרטים? 👇
              <br />
              <span className="font-bold">אשמח לעזור לכם או לצוות שלכם לקבל יותר זימונים — מהר.</span>
            </p>
          </div>

          <div className="text-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              צור קשר להזמנת הרצאה
            </a>
          </div>
        </div>

        {/* Article 1: ATS Tips */}
        <div className="relative rounded-2xl p-6 md:p-8 mb-8 backdrop-blur-sm border border-[#1a79f6]/30 bg-white/5">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a79f6] mb-6 flex items-center gap-3">
            <Bot className="w-8 h-8" />
            🤖 אודות ATS - מה זה ואיך לעבור אותו?
          </h2>
          
          <div className="mb-6 p-4 bg-black/40 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-2xl">🔤</span> ATS = Applicant Tracking System
            </h3>
            <p className="text-gray-300 mb-4">
              מערכת ממוחשבת שסורקת ומדרגת קורות חיים לפני שמגיעים לעיני ה-HR. רוב החברות הגדולות משתמשות ב-ATS!
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Laptop className="w-6 h-6 text-[#1a79f6] flex-shrink-0 mt-1" />
                <span className="text-gray-300">חברות רבות משתמשות ב-ATS</span>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-[#1a79f6] flex-shrink-0 mt-1" />
                <span className="text-gray-300">מקל על עבודת ה-HR</span>
              </div>
              <div className="flex items-start gap-3">
                <BarChart3 className="w-6 h-6 text-[#1a79f6] flex-shrink-0 mt-1" />
                <span className="text-gray-300">נותן ציון לכל קו"ח</span>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-4">5 טיפים לעבור סינון ATS:</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-black/30 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-[#1a79f6] flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
              <div>
                <h4 className="font-bold text-white mb-1">השתמש במילות מפתח מהמשרה</h4>
                <p className="text-gray-400">העתק מונחים מתיאור המשרה לקורות החיים שלך</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-black/30 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-[#1a79f6] flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
              <div>
                <h4 className="font-bold text-white mb-1">עיצוב פשוט וברור</h4>
                <p className="text-gray-400">הימנע מטבלאות, תמונות ועיצובים מורכבים שהמערכת לא יכולה לקרוא</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-black/30 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-[#1a79f6] flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
              <div>
                <h4 className="font-bold text-white mb-1">פורמט PDF או DOCX</h4>
                <p className="text-gray-400">שלח בפורמט שהמערכת יכולה לסרוק - לא תמונה!</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-black/30 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-[#1a79f6] flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
              <div>
                <h4 className="font-bold text-white mb-1">כותרות סטנדרטיות</h4>
                <p className="text-gray-400">השתמש ב"ניסיון תעסוקתי", "השכלה", "כישורים" - לא בשמות יצירתיים</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-black/30 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-[#1a79f6] flex items-center justify-center text-white font-bold flex-shrink-0">5</div>
              <div>
                <h4 className="font-bold text-white mb-1">התאם כל פעם מחדש</h4>
                <p className="text-gray-400">עדכן את הקו"ח בהתאם לכל משרה ספציפית</p>
              </div>
            </div>
          </div>
        </div>

        {/* Article 2: HR Tips */}
        <div className="relative rounded-2xl p-6 md:p-8 mb-8 backdrop-blur-sm border border-green-500/30 bg-green-900/10">
          <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-6 flex items-center gap-3">
            <Users className="w-8 h-8" />
            👔 5 טיפים לבלוט מול HR
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-black/30 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
              <div>
                <h4 className="font-bold text-white mb-1">פתיחה חזקה עם תקציר מקצועי</h4>
                <p className="text-gray-400">3-4 שורות שמסכמות את הערך שאתה מביא - זה הדבר הראשון שקוראים</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-black/30 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
              <div>
                <h4 className="font-bold text-white mb-1">הישגים מדידים, לא רק תפקידים</h4>
                <p className="text-gray-400">"הגדלתי מכירות ב-30%" עדיף על "אחראי על מכירות"</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-black/30 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
              <div>
                <h4 className="font-bold text-white mb-1">עיצוב מקצועי ונקי</h4>
                <p className="text-gray-400">קל לקריאה, ברור ובלי שגיאות כתיב - רושם ראשוני קריטי</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-black/30 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
              <div>
                <h4 className="font-bold text-white mb-1">פרופיל לינקדאין מעודכן</h4>
                <p className="text-gray-400">HR בודקים את הלינקדאין - וודא שהוא תואם לקורות החיים</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-black/30 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold flex-shrink-0">5</div>
              <div>
                <h4 className="font-bold text-white mb-1">מכתב מקדים מותאם אישית</h4>
                <p className="text-gray-400">מכתב קצר שמראה שהשקעת ומתאים ספציפית לחברה</p>
              </div>
            </div>
          </div>
        </div>

        {/* Article 3: Where to Send CV */}
        <div className="relative rounded-2xl p-6 md:p-8 mb-8 backdrop-blur-sm border border-purple-500/30 bg-purple-900/10">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-400 mb-6 flex items-center gap-3">
            <Send className="w-8 h-8" />
            🧪 שיטות מתקדמות לשליחת קו"ח
          </h2>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-4 p-4 bg-black/30 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">IN</span>
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">שלח ישירות לאנשי צוות בלינקדאין</h4>
                <p className="text-gray-400">מצא עובדים בחברה ושלח הודעה אישית עם הקו"ח</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-black/30 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">💬</span>
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">אותו הדבר דרך וואטסאפ</h4>
                <p className="text-gray-400">אם יש לך מספר טלפון - שלח הודעה מקצועית וקצרה</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-black/30 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">התקשר לחברות והצג את עצמך</h4>
                <p className="text-gray-400">שיחה טלפונית יוצרת רושם אישי ומייצרת חיבור</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-black/30 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                <Handshake className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">לך למיטאפים ואירועי נטוורקינג</h4>
                <p className="text-gray-400">פגישות פנים אל פנים הן הדרך הכי טובה למצוא עבודה</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-purple-500/20 rounded-xl border border-purple-500/40">
            <h4 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
              <Target className="w-5 h-5" />
              טיפ זהב
            </h4>
            <p className="text-gray-300">
              80% מהמשרות לא מפורסמות! רוב ההזדמנויות מגיעות דרך קשרים אישיים ופנייה ישירה לחברות.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center rounded-2xl p-8 bg-gradient-to-r from-[#1a79f6]/20 to-blue-600/20 border border-[#1a79f6]/40">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">מוכן להתחיל?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            צור קשר עוד היום ונבנה לך קורות חיים שיפתחו דלתות
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-[#1a79f6] text-white hover:bg-blue-700 font-bold py-3 px-8 rounded-xl transition-all"
            >
              צור קשר
            </a>
            <a 
              href="https://wa.me/972556611594" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition-all"
            >
              וואטסאפ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVServicesPage;
