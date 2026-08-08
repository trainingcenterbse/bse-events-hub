import type { Localized } from "@/lib/i18n";

export type SponsorTier = {
  key: string;
  name: Localized;
  price: Localized;
  slots: Localized;
  headline: Localized;
  benefits: Localized[];
  featured?: boolean;
};

export const sponsorTiers: SponsorTier[] = [
  {
    key: "strategic",
    name: { ar: "الراعي الاستراتيجي", en: "Strategic Partner" },
    price: { ar: "حسب الفعالية", en: "Event-based" },
    slots: { ar: "جهة واحدة فقط", en: "One partner only" },
    headline: {
      ar: "أعلى مستويات الظهور مع شراكة كاملة في هوية الفعالية.",
      en: "Highest visibility with full co-branding across the event identity.",
    },
    benefits: [
      { ar: "شعار الشريك بجانب هوية الفعالية في كل المواد", en: "Logo alongside the event identity across all materials" },
      { ar: "كلمة رئيسية في الجلسة الافتتاحية", en: "Keynote slot in the opening session" },
      { ar: "جناح عرض في الموقع الأبرز (36 م²)", en: "Prime exhibition stand (36 sqm)" },
      { ar: "20 دعوة VIP للعشاء الرسمي", en: "20 VIP invitations to the official dinner" },
      { ar: "تقرير أثر وظهور إعلامي مفصل بعد الفعالية", en: "Detailed post-event impact & media report" },
    ],
    featured: true,
  },
  {
    key: "platinum",
    name: { ar: "الرعاية البلاتينية", en: "Platinum Sponsor" },
    price: { ar: "باقة موسعة", en: "Extended package" },
    slots: { ar: "3 جهات", en: "3 partners" },
    headline: {
      ar: "حضور قوي في البرنامج العلمي ومساحة عرض متقدمة.",
      en: "Strong presence in the technical programme with a premium stand.",
    },
    benefits: [
      { ar: "جناح عرض 24 م² في الصف الأمامي", en: "24 sqm front-row stand" },
      { ar: "جلسة فنية برعاية الشريك", en: "A sponsored technical session" },
      { ar: "شعار على خلفية المسرح والشاشات", en: "Logo on stage backdrop and screens" },
      { ar: "12 دعوة للحضور الكامل", en: "12 full-access delegate passes" },
      { ar: "مادة تعريفية في حافظة الحضور", en: "Insert in the delegate pack" },
    ],
  },
  {
    key: "gold",
    name: { ar: "الرعاية الذهبية", en: "Gold Sponsor" },
    price: { ar: "باقة قياسية", en: "Standard package" },
    slots: { ar: "5 جهات", en: "5 partners" },
    headline: {
      ar: "توازن بين الظهور والتواصل المباشر مع الحضور.",
      en: "A balance of visibility and direct engagement with attendees.",
    },
    benefits: [
      { ar: "جناح عرض 12 م²", en: "12 sqm stand" },
      { ar: "شعار في الموقع الإلكتروني والحملة الرقمية", en: "Logo on the website and digital campaign" },
      { ar: "6 دعوات حضور", en: "6 delegate passes" },
      { ar: "قائمة بيانات الحضور المهتمين (باختيارهم)", en: "Opt-in attendee lead list" },
    ],
  },
  {
    key: "supporting",
    name: { ar: "الرعاية الداعمة", en: "Supporting Sponsor" },
    price: { ar: "باقة مرنة", en: "Flexible package" },
    slots: { ar: "مفتوح", en: "Open" },
    headline: {
      ar: "مناسبة للشركات الناشئة ومكاتب الاستشارات الصغيرة.",
      en: "Ideal for startups and boutique consultancies.",
    },
    benefits: [
      { ar: "طاولة عرض في منطقة التواصل", en: "Table-top display in the networking area" },
      { ar: "شعار في لوحة الرعاة", en: "Logo on the sponsors wall" },
      { ar: "3 دعوات حضور", en: "3 delegate passes" },
    ],
  },
];

export type Partner = {
  name: Localized;
  sector: Localized;
  tier: Localized;
  url: string;
};

export const partners: Partner[] = [
  {
    name: { ar: "وزارة الأشغال", en: "Ministry of Works" },
    sector: { ar: "جهة حكومية", en: "Government entity" },
    tier: { ar: "شريك استراتيجي", en: "Strategic partner" },
    url: "https://www.mow.gov.bh/",
  },
  {
    name: { ar: "وزارة التربية والتعليم", en: "Ministry of Education" },
    sector: { ar: "التعليم", en: "Education" },
    tier: { ar: "شريك استراتيجي", en: "Strategic partner" },
    url: "https://www.moe.gov.bh/",
  },
  {
    name: { ar: "مجلس التعليم العالي", en: "Higher Education Council" },
    sector: { ar: "التعليم العالي", en: "Higher education" },
    tier: { ar: "شريك أكاديمي", en: "Academic partner" },
    url: "https://www.moedu.gov.bh/hec/",
  },
  {
    name: { ar: "شركة نفط البحرين (بابكو)", en: "Bapco Energies" },
    sector: { ar: "النفط والطاقة", en: "Oil & energy" },
    tier: { ar: "رعاية بلاتينية", en: "Platinum sponsor" },
    url: "https://www.bapcoenergies.com/",
  },
  {
    name: { ar: "شركة ألمنيوم البحرين (ألبا)", en: "Aluminium Bahrain (Alba)" },
    sector: { ar: "الصناعة", en: "Industry" },
    tier: { ar: "رعاية بلاتينية", en: "Platinum sponsor" },
    url: "https://www.albasmelter.com/",
  },
  {
    name: { ar: "هيئة الكهرباء والماء", en: "Electricity & Water Authority" },
    sector: { ar: "المرافق", en: "Utilities" },
    tier: { ar: "رعاية ذهبية", en: "Gold sponsor" },
    url: "https://www.mew.gov.bh/",
  },
  {
    name: { ar: "بتلكو", en: "Batelco" },
    sector: { ar: "الاتصالات", en: "Telecom" },
    tier: { ar: "رعاية ذهبية", en: "Gold sponsor" },
    url: "https://www.batelco.com/",
  },
  {
    name: { ar: "جامعة البحرين", en: "University of Bahrain" },
    sector: { ar: "التعليم", en: "Education" },
    tier: { ar: "شريك أكاديمي", en: "Academic partner" },
    url: "https://www.uob.edu.bh/",
  },
  {
    name: { ar: "اتحاد المهندسين الخليجيين", en: "Federation of GCC Engineers" },
    sector: { ar: "اتحاد مهني", en: "Professional federation" },
    tier: { ar: "شريك تنظيمي", en: "Organising partner" },
    url: "https://www.gccengineers.org/",
  },
  {
    name: { ar: "جمعية الخليج للصيانة والموثوقية", en: "Gulf Society for Maintenance & Reliability" },
    sector: { ar: "الصيانة والاعتمادية", en: "Maintenance & reliability" },
    tier: { ar: "شريك تنظيمي", en: "Organising partner" },
    url: "https://maintcon.org/",
  },
  {
    name: { ar: "مركز البحرين الدولي للمعارض", en: "Bahrain International Exhibition Centre" },
    sector: { ar: "المواقع والمرافق", en: "Venues" },
    tier: { ar: "شريك الموقع", en: "Venue partner" },
    url: "https://www.biecbh.com/",
  },
  {
    name: { ar: "غرفة تجارة وصناعة البحرين", en: "Bahrain Chamber of Commerce & Industry" },
    sector: { ar: "قطاع الأعمال", en: "Business" },
    tier: { ar: "شريك داعم", en: "Supporting partner" },
    url: "https://www.bcci.bh/",
  },
];

export type Testimonial = {
  quote: Localized;
  name: Localized;
  role: Localized;
};

export const testimonials: Testimonial[] = [
  {
    quote: {
      ar: "الرعاية مع قسم الفعاليات في جمعية المهندسين منحتنا وصولاً مباشراً إلى المهندسين والاستشاريين المعنيين بمشاريعنا، والتقرير الختامي كان مفصلاً وواضحاً.",
      en: "Sponsoring with BSE's events department gave us direct access to the engineers and consultants relevant to our projects, and the closing report was detailed and clear.",
    },
    name: { ar: "مدير التسويق", en: "Marketing Director" },
    role: { ar: "شركة طاقة وطنية — راعٍ بلاتيني", en: "National energy company — Platinum sponsor" },
  },
  {
    quote: {
      ar: "التنظيم المهني في المعرض الدولي للدراسات الأكاديمية والهندسية جعل جناحنا مزدحماً على مدار أيام المعرض، وحققنا أهداف التسجيل قبل نهاية النسخة.",
      en: "The professional delivery of the International Exhibition for Academic & Engineering Studies kept our stand busy throughout, and we hit our enrolment targets before the edition ended.",
    },
    name: { ar: "مسؤول القبول الدولي", en: "International Admissions Lead" },
    role: { ar: "جامعة مشاركة — عارض", en: "Participating university — Exhibitor" },
  },
  {
    quote: {
      ar: "فريق كروجن تعامل مع متطلباتنا الفنية بمرونة عالية، ومنطقة العرض التقنية كانت أفضل ما شاركنا فيه إقليمياً.",
      en: "The CROGEN team handled our technical requirements with real flexibility, and the technology showcase was the best we have joined regionally.",
    },
    name: { ar: "مدير عام", en: "General Manager" },
    role: { ar: "شركة تبريد وتكييف — راعٍ ذهبي", en: "HVAC & cooling company — Gold sponsor" },
  },
];

export const sponsorSteps: { title: Localized; text: Localized }[] = [
  {
    title: { ar: "تحديد الأهداف", en: "Define the objectives" },
    text: {
      ar: "جلسة قصيرة نفهم فيها جمهورك المستهدف وأهدافك التسويقية والتجارية من الرعاية.",
      en: "A short session to understand your target audience and the commercial goals behind the sponsorship.",
    },
  },
  {
    title: { ar: "اختيار الباقة", en: "Select the package" },
    text: {
      ar: "نرشح لك الفعالية والمستوى الأنسب، ويمكن تخصيص العناصر حسب ميزانيتك.",
      en: "We recommend the right event and tier, with elements tailored to your budget.",
    },
  },
  {
    title: { ar: "التنفيذ والظهور", en: "Delivery & visibility" },
    text: {
      ar: "ننفّذ كامل عناصر الظهور قبل وخلال الفعالية: الحملة، الجناح، الجلسات، والضيافة.",
      en: "We deliver every visibility element before and during the event: campaign, stand, sessions and hospitality.",
    },
  },
  {
    title: { ar: "تقرير الأثر", en: "Impact report" },
    text: {
      ar: "تقرير ختامي بالأرقام: الحضور، التغطية الإعلامية، التفاعل الرقمي، وفرص الأعمال.",
      en: "A closing report with the numbers: attendance, media coverage, digital engagement and business leads.",
    },
  },
];
