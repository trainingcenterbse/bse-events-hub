import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "ar" | "en";
export type Localized = { ar: string; en: string };

type Ctx = {
  lang: Lang;
  dir: "rtl" | "ltr";
  setLang: (l: Lang) => void;
  toggle: () => void;
  /** pick localized value */
  p: (v: Localized) => string;
  t: (key: keyof typeof dictionary) => string;
};

const dictionary = {
  brand: { ar: "BSE Event", en: "BSE Event" },
  brandSub: {
    ar: "قسم الفعاليات والمؤتمرات والمعارض",
    en: "Events, Conferences & Exhibitions Department",
  },
  society: { ar: "جمعية المهندسين البحرينية", en: "Bahrain Society of Engineers" },
  navHome: { ar: "الرئيسية", en: "Home" },
  navAbout: { ar: "من نحن", en: "About Us" },
  navTeam: { ar: "فريق العمل", en: "Our Team" },
  navConferences: { ar: "المؤتمرات", en: "Conferences" },
  navExhibitions: { ar: "المعارض", en: "Exhibitions" },
  navEvents: { ar: "الفعاليات", en: "Events" },
  navSponsors: { ar: "الرعاة", en: "Sponsors" },
  sponsorTiers: { ar: "مستويات الرعاية", en: "Sponsorship tiers" },
  ourPartners: { ar: "شركاؤنا ورعاتنا", en: "Our partners & sponsors" },
  visitPartner: { ar: "زيارة الموقع", en: "Visit website" },
  testimonialsTitle: { ar: "شهادات الشركاء", en: "What partners say" },
  howItWorks: { ar: "كيف تصبح راعياً", en: "How to become a sponsor" },
  requestKit: { ar: "اطلب ملف الرعاية", en: "Request the sponsorship kit" },
  benefits: { ar: "ما تحصل عليه", en: "What you get" },
  slots: { ar: "المقاعد المتاحة", en: "Available slots" },
  contactUs: { ar: "تواصل معنا", en: "Contact Us" },

  becomeSponsor: { ar: "كن راعياً", en: "Become a Sponsor" },
  explore: { ar: "استكشف", en: "Explore" },
  viewAll: { ar: "عرض الكل", en: "View all" },
  readMore: { ar: "اقرأ المزيد", en: "Read more" },
  details: { ar: "التفاصيل", en: "Details" },
  upcoming: { ar: "قادم", en: "Upcoming" },
  past: { ar: "سابق", en: "Past" },
  annual: { ar: "سنوي", en: "Annual" },
  timeline: { ar: "الخط الزمني للنسخ", en: "Editions timeline" },
  editions: { ar: "النسخ", en: "Editions" },
  visitSite: { ar: "زيارة موقع النسخة", en: "Visit edition site" },
  backToExhibitions: { ar: "رجوع إلى المعارض", en: "Back to exhibitions" },
  ourExhibitions: { ar: "معارض الجمعية", en: "BSE Owned Exhibitions" },
  otherExhibitions: {
    ar: "معارض ومؤتمرات بالشراكة",
    en: "Partnered exhibitions & expos",
  },
  currentExhibitions: { ar: "المعارض الحالية", en: "Current exhibitions" },
  pastExhibitions: { ar: "المعارض السابقة", en: "Past exhibitions" },
  audienceTitle: { ar: "لمن نقدم خدماتنا", en: "Who we serve" },
  langSwitch: { ar: "English", en: "العربية" },
  rights: {
    ar: "جميع الحقوق محفوظة — جمعية المهندسين البحرينية",
    en: "All rights reserved — Bahrain Society of Engineers",
  },
  quickLinks: { ar: "روابط سريعة", en: "Quick links" },
  address: {
    ar: "مبنى الجمعية، الجفير، مملكة البحرين",
    en: "BSE Building, Juffair, Kingdom of Bahrain",
  },

  /* v3 additions */
  search: { ar: "ابحث في الفعاليات", en: "Search events" },
  filterByType: { ar: "النوع", en: "Type" },
  allTypes: { ar: "كل الأنواع", en: "All types" },
  sortBy: { ar: "الترتيب", en: "Sort" },
  sortDefault: { ar: "الافتراضي", en: "Default" },
  sortAZ: { ar: "أبجدي", en: "A–Z" },
  sortUpcoming: { ar: "القادم أولاً", en: "Upcoming first" },
  noResults: { ar: "لا توجد نتائج مطابقة", en: "No matching results" },
  clearFilters: { ar: "مسح الفلاتر", en: "Clear filters" },
  resultsCount: { ar: "نتيجة", en: "results" },
  standaloneEvents: { ar: "فعاليات رئيسية", en: "Flagship events" },
  programCategories: { ar: "برامج وأنشطة متكررة", en: "Recurring programmes" },
  viewEvent: { ar: "صفحة الفعالية", en: "Event page" },
  backToEvents: { ar: "رجوع إلى الفعاليات", en: "Back to events" },
  backToConferences: { ar: "رجوع إلى المؤتمرات", en: "Back to conferences" },
  aboutEvent: { ar: "عن الفعالية", en: "About the event" },
  aboutConference: { ar: "عن المؤتمر", en: "About the conference" },
  highlights: { ar: "أبرز ما يميزها", en: "Highlights" },
  audience: { ar: "الجمهور المستهدف", en: "Target audience" },
  programAgenda: { ar: "البرنامج", en: "Programme" },
  schedule: { ar: "جدول المؤتمر", en: "Conference schedule" },
  tracks: { ar: "المسارات الفنية", en: "Technical tracks" },
  speakers: { ar: "متحدثون ومشاركون", en: "Speakers & participants" },
  organisers: { ar: "الجهات المنظمة", en: "Organisers" },
  brochure: { ar: "عرض البروشور", en: "View brochure" },
  viewSchedule: { ar: "الجدول الزمني", en: "View schedule" },
  location: { ar: "الموقع", en: "Location" },
  openMap: { ar: "افتح الخريطة", en: "Open map" },
  registerInterest: { ar: "سجّل اهتمامك", en: "Register interest" },
  keyFacts: { ar: "معلومات أساسية", en: "Key facts" },
  ourLeadership: { ar: "قيادة القسم", en: "Department leadership" },
  contactPerson: { ar: "تواصل", en: "Contact" },
  responsibilities: { ar: "مجالات المسؤولية", en: "Areas of responsibility" },
  unitsTitle: { ar: "الوحدات التشغيلية", en: "Operating units" },
} satisfies Record<string, Localized>;

const I18nContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "bse-event-lang";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "ar") setLangState(stored);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      dir,
      setLang,
      toggle: () => setLang(lang === "ar" ? "en" : "ar"),
      p: (v) => v[lang],
      t: (key) => dictionary[key][lang],
    }),
    [lang, dir, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
