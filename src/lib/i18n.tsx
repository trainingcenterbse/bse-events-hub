import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/* 
 * Developed by Ultra Cube Team
 * www.ucubetech.com
 * https://github.com/ultra-cube
 */

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
  navVenueRental: { ar: "تأجير القاعات", en: "Venue Rental" },
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

  /* Home page */
  heroEyebrow: { ar: "40 عاماً من الأثر", en: "40 Years of Impact" },
  heroTitle: { ar: "منصة البحرين للمعرفة الهندسية واللقاء المهني", en: "Bahrain's Platform for Engineering Knowledge & Professional Networking" },
  heroDescription: { ar: "نصمم مؤتمرات ومعارض وفعاليات تجعل الخبرة الهندسية قابلة للقاء والتعلم والشراكة — من الفكرة إلى التقرير الختامي.", en: "We design conferences, exhibitions, and events that make engineering expertise accessible for connection, learning, and partnership — from idea to final report." },
  exploreConferences: { ar: "استكشف المؤتمرات", en: "Explore Conferences" },
  learnAboutServices: { ar: "تعرّف على خدماتنا", en: "Learn About Our Services" },
  exploreSectionEyebrow: { ar: "استكشف المنصة", en: "Explore the Platform" },
  exploreSectionTitle: { ar: "كل ما تحتاجه لبناء حضور هندسي مؤثر", en: "Everything You Need to Build an Impactful Engineering Presence" },
  exploreSectionDescription: { ar: "خمسة مسارات واضحة، لكل منها محتوى وخطوة تالية تساعدك على الوصول إلى الأشخاص والفرص المناسبة.", en: "Five clear paths, each with content and next steps to help you reach the right people and opportunities." },
  featured: { ar: "رئيسي", en: "Featured" },
  conferencesCount: { ar: "مؤتمرات رئيسية", en: "Major Conferences" },
  exhibitionsCount: { ar: "منصات مملوكة", en: "Owned Platforms" },
  eventsCount: { ar: "فعالية سنوية", en: "Annual Events" },
  partnershipsCount: { ar: "شراكات قابلة للقياس", en: "Measurable Partnerships" },
  teamCount: { ar: "فريق متعدد التخصصات", en: "Multidisciplinary Team" },
  conferencesDescription: { ar: "برامج علمية محكّمة، متحدثون متخصصون، ومعارض مصاحبة تجمع القطاع والمهنة.", en: "Peer-reviewed scientific programs, specialized speakers, and accompanying exhibitions that bring together industry and profession." },
  exhibitionsDescription: { ar: "معارض متخصصة تصل الجامعات والشركات بالمهندسين وصنّاع القرار.", en: "Specialized exhibitions connecting universities and companies with engineers and decision-makers." },
  eventsDescription: { ar: "فعاليات وطنية واجتماعية وبرامج تخدم أعضاء الجمعية والمجتمع الهندسي.", en: "National and social events and programs serving BSE members and the engineering community." },
  sponsorsDescription: { ar: "باقات رعاية واضحة وتقارير أثر تساعد الشريك على اتخاذ القرار.", en: "Clear sponsorship packages and impact reports helping partners make informed decisions." },
  teamDescription: { ar: "خبرة تشغيلية وفنية وإعلامية في نقطة تواصل واحدة.", en: "Operational, technical, and media expertise in a single point of contact." },
  planVisit: { ar: "خطط لزيارتك", en: "Plan Your Visit" },
  planAttendance: { ar: "خطط لحضورك", en: "Plan Your Attendance" },
  requestSponsorship: { ar: "اطلب ملف الرعاية", en: "Request Sponsorship Kit" },
  learnWorkflow: { ar: "تعرّف على طريقة العمل", en: "Learn Our Workflow" },
  knowledgePlatform: { ar: "منصة المعرفة", en: "Knowledge Platform" },
  conferencesSectionTitle: { ar: "مؤتمرات تبدأ من سؤال واضح وتنتهي بأثر قابل للقياس", en: "Conferences That Start with a Clear Question and End with Measurable Impact" },
  conferencesSectionDescription: { ar: "نستضيف برامج تجمع جمعيات المهندسين وصنّاع القرار والجامعات وشركات الطاقة والصناعة حول موضوعات عملية تخدم المنطقة.", en: "We host programs bringing engineering societies, decision-makers, universities, and energy and industry companies together on practical topics serving the region." },
  nextEdition: { ar: "النسخة القادمة", en: "Next Edition" },
  discoverConferences: { ar: "اكتشف تفاصيل المؤتمرات", en: "Discover Conference Details" },
  gulfForumEdition: { ar: "نسخة الملتقى الخليجي", en: "Gulf Forum Edition" },
  speakersCount: { ar: "متحدثًا ومتحدثة", en: "Speakers" },
  programDays: { ar: "أيام من البرنامج", en: "Days of Program" },
  workflowSectionTitle: { ar: "كيف نحول الفكرة إلى فعالية", en: "How We Transform Ideas into Events" },
  workflowSectionDescription: { ar: "مسار واضح يربط التخطيط بالتنفيذ والتوثيق، حتى يعرف كل شريك ما سيحدث ومتى.", en: "A clear path connecting planning to execution and documentation, so every partner knows what will happen and when." },
  ideaStep: { ar: "الفكرة والهدف", en: "Idea & Objective" },
  ideaStepDesc: { ar: "نحدد الجمهور والنتيجة ونطاق المشروع قبل أي خطوة.", en: "We define the audience, outcome, and project scope before any step." },
  programStep: { ar: "البرنامج والشركاء", en: "Program & Partners" },
  programStepDesc: { ar: "نبني المحتوى ونستقطب المتحدثين وننسق الشركاء.", en: "We build content, attract speakers, and coordinate partners." },
  deliveryStep: { ar: "التنفيذ في الموقع", en: "On-site Delivery" },
  deliveryStepDesc: { ar: "تشغيل وتسجيل وسلامة وتجربة حضور متسقة.", en: "Operations, recording, safety, and consistent attendee experience." },
  reportStep: { ar: "التقرير والأثر", en: "Report & Impact" },
  reportStepDesc: { ar: "نوثق النتائج ونحوّل ما تعلمناه إلى نسخة أقوى.", en: "We document results and transform learnings into a stronger edition." },
  fromIdeaToReport: { ar: "من الفكرة إلى التقرير الختامي", en: "From Idea to Final Report" },
  closingEyebrow: { ar: "الختام يبدأ من محادثة", en: "The Closing Starts with a Conversation" },
  closingTitle: { ar: "هل لديك فعالية تستحق منصة أكبر؟", en: "Do You Have an Event That Deserves a Bigger Platform?" },
  closingDescription: { ar: "شاركنا الفكرة، وسنساعدك على تحويلها إلى تجربة واضحة للحضور وشراكة ذات أثر للراعي.", en: "Share your idea, and we'll help transform it into a clear experience for attendees and an impactful partnership for sponsors." },
  startConversation: { ar: "ابدأ محادثة", en: "Start a Conversation" },

  /* About page */
  aboutEyebrow: { ar: "جمعية المهندسين البحرينية", en: "Bahrain Society of Engineers" },
  aboutTitle: { ar: "نحو منصات هندسية تصنع أثرًا", en: "Towards Engineering Platforms That Make an Impact" },
  aboutDescription: { ar: "نحوّل الخبرة الهندسية إلى لقاءات ومنصات وبرامج منظمة تخدم المهنة، وتربط المهندس بسوق العمل والشركاء وصنّاع القرار.", en: "We transform engineering expertise into meetings, platforms, and organized programs that serve the profession and connect engineers with the market, partners, and decision-makers." },
  learnAboutSection: { ar: "تعرّف على القسم", en: "Learn About the Department" },
  yearsOfExperience: { ar: "عامًا من العمل الهندسي", en: "Years of Engineering Work" },
  aboutSectionEyebrow: { ar: "جمعية المهندسين البحرينية", en: "Bahrain Society of Engineers" },
  aboutSectionTitle: { ar: "جهة مهنية، وقسم ينفّذ الفكرة حتى أثرها", en: "A Professional Entity, A Department That Executes Ideas to Their Impact" },
  aboutSectionDescription: { ar: "جمعية المهندسين البحرينية مؤسسة مهنية تأسست لخدمة المهندسين في مملكة البحرين، وتضم آلاف الأعضاء من مختلف التخصصات الهندسية، ويقع مقرها في الجفير. تعمل الجمعية عبر لجان فنية وأقسام متخصصة لتطوير المهنة ورفع كفاءة الكادر الهندسي الوطني.", en: "The Bahrain Society of Engineers is a professional institution established to serve engineers in the Kingdom of Bahrain, comprising thousands of members from various engineering disciplines, headquartered in Juffair. The Society operates through technical committees and specialized departments to develop the profession and enhance the efficiency of the national engineering workforce." },
  aboutSectionDescription2: { ar: "قسم إدارة الفعاليات والمؤتمرات والمعارض هو الجهة المسؤولة عن تخطيط وتنظيم وتنفيذ جميع المؤتمرات والمعارض والندوات والأنشطة التي تحمل اسم الجمعية. نتعامل مع كل فعالية كمشروع كامل: تحليل الجدوى، بناء البرنامج، استقطاب الرعاة والعارضين، التشغيل الميداني، ثم التقرير الختامي ومؤشرات الأثر.", en: "The Events, Conferences, and Exhibitions Management Department is responsible for planning, organizing, and executing all conferences, exhibitions, seminars, and activities bearing the Society's name. We treat each event as a complete project: feasibility analysis, program building, attracting sponsors and exhibitors, field operations, and then the final report and impact indicators." },
  fourCategories: { ar: "أربع فئات، ومسارات تعامل واضحة لكل شريك وحاضر", en: "Four categories, with clear engagement paths for every partner and attendee" },
  deliveryArm: { ar: "من الفكرة إلى التقرير الختامي", en: "From Idea to Final Report" },
  since1983: { ar: "منذ 1983", en: "Since 1983" },
  buildingPlatforms: { ar: "عامًا من بناء المنصات المهنية في المملكة.", en: "Years of building professional platforms in the Kingdom." },
  servingPartners: { ar: "نخدم الرعاة والحضور والعارضين وشركاء التنظيم عبر باقات ومسارات مخصصة.", en: "We serve sponsors, attendees, exhibitors, and organizing partners through customized packages and pathways." },
  valuesEyebrow: { ar: "مرجعنا في كل قرار", en: "Our Reference in Every Decision" },
  valuesTitle: { ar: "رؤيتنا، رسالتنا، قيمنا", en: "Our Vision, Mission, Values" },
  vision: { ar: "رؤيتنا", en: "Our vision" },
  visionText: { ar: "أن تكون البحرين مركزًا خليجيًا معتمدًا للمؤتمرات والمعارض الهندسية المتخصصة.", en: "For Bahrain to be a recognised Gulf hub for specialised engineering conferences and exhibitions." },
  mission: { ar: "رسالتنا", en: "Our mission" },
  missionText: { ar: "تنظيم فعاليات هندسية ذات أثر قابل للقياس تخدم المهنة والاقتصاد الوطني وتربط المهندس بسوق العمل.", en: "Organising engineering events with measurable impact that serve the profession and connect engineers with the market." },
  values: { ar: "قيمنا", en: "Our values" },
  valuesText: { ar: "المهنية، الشفافية مع الرعاة والشركاء، الجودة في التنفيذ، والاستدامة في اختيار الموضوعات والموردين.", en: "Professionalism, transparency, delivery quality and sustainability in topics and suppliers." },
  strategicGoals: { ar: "الأهداف الاستراتيجية", en: "Strategic Goals" },
  strategicGoalsTitle: { ar: "أربعة أهداف تحكم ما نبنيه", en: "Four Goals That Govern What We Build" },
  strategicGoalsDesc: { ar: "نختار الموضوعات، ونصمم البرامج، ونقيس النتائج وفق هذه الأولويات.", en: "We select topics, design programs, and measure results according to these priorities." },
  executionServices: { ar: "الخدمات التنفيذية", en: "Execution Services" },
  executionServicesTitle: { ar: "ما نقدمه بالتفصيل", en: "What We Offer in Detail" },
  executionServicesDesc: { ar: "فريق واحد ومسار واضح لكل مرحلة من مراحل الفعالية، من التخطيط إلى التغطية والتقرير.", en: "One team and a clear path for every stage of the event, from planning to coverage and reporting." },
  oneTeamSixCapabilities: { ar: "ONE TEAM / SIX CAPABILITIES", en: "ONE TEAM / SIX CAPABILITIES" },
  clearOperations: { ar: "تشغيل واضح. تجربة أفضل.", en: "Clear Operations. Better Experience." },
  clearOperationsDesc: { ar: "كل خدمة مصممة لتزيل التعقيد عن الشريك، وتمنح الحاضر تجربة منظمة.", en: "Each service is designed to remove complexity for partners and provide attendees with an organized experience." },
  aboutClosingEyebrow: { ar: "لنبدأ من احتياجك", en: "Let's Start from Your Need" },
  aboutClosingTitle: { ar: "نحوّل الخبرة الهندسية إلى تجربة منظمة", en: "Transforming Engineering Expertise into an Organized Experience" },
  aboutClosingDesc: { ar: "شاركنا فكرة الفعالية أو هدف الشراكة، وسيصلك المسار الأنسب من فريق القسم.", en: "Share your event idea or partnership objective, and you'll receive the most suitable pathway from our department team." },
  contactOurTeam: { ar: "تواصل مع فريقنا", en: "Contact Our Team" },

  /* Conferences page */
  conferencesEyebrow: { ar: "CONFERENCES / 01", en: "CONFERENCES / 01" },
  conferencesPageTitle: { ar: "المؤتمرات الهندسية", en: "Engineering Conferences" },
  conferencesPageDesc: { ar: "منصات علمية تجمع الخبراء وصنّاع القرار والقطاع الهندسي حول موضوعات الطاقة والصيانة والتقنية والتآكل.", en: "Scientific platforms bringing together experts, decision-makers, and the engineering sector around topics of energy, maintenance, technology, and corrosion." },
  browseConferences: { ar: "تصفح المؤتمرات", en: "Browse Conferences" },
  partnershipOpportunities: { ar: "فرص الشراكة", en: "Partnership Opportunities" },
  conferenceAgenda: { ar: "أجندة 2025 · برامج علمية ومعارض مصاحبة", en: "2025 Agenda · Scientific Programs and Accompanying Exhibitions" },
  conferenceRegister: { ar: "THE CONFERENCE REGISTER", en: "THE CONFERENCE REGISTER" },
  ourConferences: { ar: "مؤتمراتنا", en: "Our Conferences" },
  conferencesPageSectionDesc: { ar: "تعرّف على المؤتمرات التي تستضيفها الجمعية أو تنظمها بالشراكة مع الاتحادات المهنية.", en: "Learn about the conferences hosted by the Society or organized in partnership with professional associations." },
  conferencesDisplayed: { ar: "مؤتمرات معروضة", en: "Conferences Displayed" },
  noConferenceFound: { ar: "لم نعثر على مؤتمر مطابق", en: "No Matching Conference Found" },
  tryDifferentSearch: { ar: "جرّب كلمة بحث مختلفة أو أعد عرض جميع المؤتمرات.", en: "Try a different search term or reset to show all conferences." },
  showAllConferences: { ar: "عرض جميع المؤتمرات", en: "Show All Conferences" },
  yearOnCover: { ar: "السنة على كل غلاف تشير إلى النسخة أو الدورة المعروضة.", en: "The year on each cover indicates the edition or cycle displayed." },
  needPreviousFile: { ar: "تحتاج ملفًا لمؤتمر سابق؟", en: "Need a file for a previous conference?" },
  conferencesClosingEyebrow: { ar: "PARTNERSHIPS", en: "PARTNERSHIPS" },
  conferencesClosingTitle: { ar: "هل لديك مؤتمر قادم؟", en: "Do You Have an Upcoming Conference?" },
  conferencesClosingDesc: { ar: "نحوّل الشراكة إلى برنامج واضح، حضور مؤثر، وتجربة منظمة من الدعوة حتى التقرير الختامي.", en: "We transform partnerships into clear programs, impactful attendance, and organized experiences from invitation to final report." },
  discussPartnership: { ar: "ناقش فرص الشراكة", en: "Discuss Partnership Opportunities" },

  /* Exhibitions page */
  exhibitionsEyebrow: { ar: "EXHIBITIONS / 02", en: "EXHIBITIONS / 02" },
  exhibitionsPageTitle: { ar: "المعارض التي تجعل التخصص قريبًا", en: "Exhibitions That Bring Specialization Closer" },
  exhibitionsPageDesc: { ar: "منصات تعليمية وتقنية تجمع الجامعات والشركات والمهندسين حول حلول واضحة، وتجعل كل نسخة قابلة للرجوع والقياس.", en: "Educational and technical platforms bringing together universities, companies, and engineers around clear solutions, making each edition referenceable and measurable." },
  exploreExhibitions: { ar: "استكشف المعارض", en: "Explore Exhibitions" },
  requestExhibitorKit: { ar: "اطلب ملف العارض", en: "Request Exhibitor Kit" },
  exhibitionFacts: { ar: "منصات الجمعية · معارض شريكة · نسخ موثقة", en: "Society Platforms · Partnered Exhibitions · Documented Editions" },
  exhibitionRegister: { ar: "EXHIBITION REGISTER", en: "EXHIBITION REGISTER" },
  ownedPlatforms: { ar: "منصات تملكها الجمعية", en: "Society-Owned Platforms" },
  ownedPlatformsDesc: { ar: "معارض مملوكة ومدارة بالكامل من جمعية المهندسين البحرينية، لكل منها هوية واضحة ونسخ موثقة ومسار مشاركة قابل للقياس.", en: "Exhibitions fully owned and managed by the Bahrain Society of Engineers, each with a clear identity, documented editions, and measurable participation pathway." },
  majorPlatforms: { ar: "منصات رئيسية", en: "Major Platforms" },
  exhibitionsPartners: { ar: "EXHIBITIONS / PARTNERS", en: "EXHIBITIONS / PARTNERS" },
  eachEditionOpensDoor: { ar: "كل نسخة تفتح بابًا جديدًا للقاء", en: "Each Edition Opens a New Door for Connection" },
  eachEditionOpensDoorDesc: { ar: "ننسّق مع الاتحادات والجامعات والجهات الصناعية لتقديم معارض مصاحبة للمؤتمرات، وبرامج عرض تمنح الزائر صورة عملية عن القطاع.", en: "We coordinate with associations, universities, and industrial entities to provide exhibitions accompanying conferences, and display programs that give visitors a practical view of the sector." },
  currentProgramme: { ar: "CURRENT PROGRAMME", en: "CURRENT PROGRAMME" },
  currentExhibitionsTitle: { ar: "المعارض الحالية", en: "Current Exhibitions" },
  currentExhibitionsDesc: { ar: "معارض قائمة أو مقبلة تُنظّم بالشراكة مع الجهات المتخصصة، مع معلومات النسخ والمشاركة في صفحة كل معرض.", en: "Ongoing or upcoming exhibitions organized in partnership with specialized entities, with edition and participation information on each exhibition's page." },
  currentExhibitionsCount: { ar: "معارض حالية", en: "Current Exhibitions" },
  archive: { ar: "ARCHIVE", en: "ARCHIVE" },
  pastExhibitionsTitle: { ar: "المعارض السابقة", en: "Past Exhibitions" },
  pastExhibitionsDesc: { ar: "أرشيف مختصر للمنصات التي شاركت الجمعية في تنظيمها، مع إبقاء السنة والقطاع والنسخ في الواجهة.", en: "A brief archive of platforms the Society participated in organizing, keeping the year, sector, and edition visible." },
  archivedExhibitionsCount: { ar: "معارض مؤرشفة", en: "Archived Exhibitions" },
  exhibitionsClosingEyebrow: { ar: "EXHIBITION PARTNERSHIPS", en: "EXHIBITION PARTNERSHIPS" },
  exhibitionsClosingTitle: { ar: "هل لديك منتج يستحق أن يُرى؟", en: "Do You Have a Product That Deserves to Be Seen?" },
  exhibitionsClosingDesc: { ar: "شاركنا مجال شركتك وهدف حضورك، وسنقترح لك المسار الأنسب للعرض أو الرعاية أو الشراكة التقنية.", en: "Share your company's field and attendance objective, and we'll suggest the most suitable pathway for exhibition, sponsorship, or technical partnership." },
  contactExhibitionsTeam: { ar: "تواصل مع فريق المعارض", en: "Contact Exhibitions Team" },
  knowledgeMeetingOpportunity: { ar: "معرفة · لقاء · فرصة", en: "Knowledge · Meeting · Opportunity" },

  /* Events page */
  eventsEyebrow: { ar: "الفعاليات والأنشطة والندوات", en: "Events, Activities & Seminars" },
  eventsPageTitle: { ar: "فعاليات تصنع حضورًا للمهندس", en: "Events That Create Presence for Engineers" },
  eventsPageDesc: { ar: "برنامج سنوي من الفعاليات الوطنية والاجتماعية والندوات الفنية والزيارات الميدانية، يربط أعضاء الجمعية بالمهنة وسوق العمل وصنّاع القرار.", en: "An annual program of national and social events, technical seminars, and field visits, connecting Society members with the profession, job market, and decision-makers." },
  discoverProgram: { ar: "اكتشف البرنامج", en: "Discover the Program" },
  suggestEvent: { ar: "اقترح فعالية", en: "Suggest an Event" },
  eventsFacts: { ar: "BSE Event Programme / 2026 · 120+ فعالية سنويًا", en: "BSE Event Programme / 2026 · 120+ Events Annually" },
  flagshipEvents: { ar: "فعاليات رئيسية", en: "Flagship Events" },
  threeMilestones: { ar: "ثلاث محطات تجمع المجتمع الهندسي", en: "Three Milestones That Bring the Engineering Community Together" },
  flagshipEventsDesc: { ar: "صفحات خاصة لكل فعالية رئيسية، بمعلومات واضحة عن البرنامج والمكان والجمهور وفرص المشاركة والرعاية.", en: "Dedicated pages for each flagship event, with clear information about the program, location, audience, and participation and sponsorship opportunities." },
  annualProgramme: { ar: "البرنامج السنوي", en: "Annual Programme" },
  eventsAndActivities: { ar: "الفعاليات والأنشطة", en: "Events & Activities" },
  eventsAndActivitiesDesc: { ar: "ابحث في كامل البرنامج، ثم افتح صفحة الفعالية لمعرفة الجدول والموقع والجمهور المستهدف.", en: "Search the full program, then open the event page to learn about the schedule, location, and target audience." },
  results: { ar: "نتائج", en: "Results" },
  noResultsFound: { ar: "لا توجد نتائج مطابقة", en: "No Matching Results" },
  tryDifferentSearchEvent: { ar: "جرّب كلمة بحث مختلفة أو أعد ضبط الفلاتر.", en: "Try a different search term or reset filters." },
  clearFiltersAction: { ar: "مسح الفلاتر", en: "Clear Filters" },
  eventsClosingEyebrow: { ar: "شراكة تبدأ بفكرة", en: "Partnership Starts with an Idea" },
  eventsClosingTitle: { ar: "هل لديك فكرة نشاط أو ندوة؟", en: "Do You Have an Activity or Seminar Idea?" },
  eventsClosingDesc: { ar: "نستقبل مقترحات الأعضاء واللجان الفنية والشركات لتنظيم فعاليات تصنع أثرًا واضحًا للمجتمع الهندسي.", en: "We welcome proposals from members, technical committees, and companies to organize events that create clear impact for the engineering community." },
  suggestEventAction: { ar: "اقترح فعالية", en: "Suggest an Event" },

  /* Home page slideshow */
  heroSlide1Eyebrow: { ar: "40 عاماً من الأثر", en: "40 Years of Impact" },
  heroSlide1Title: { ar: "منصة البحرين للمعرفة الهندسية واللقاء المهني", en: "Bahrain's Platform for Engineering Knowledge and Professional Meetings" },
  heroSlide1Description: { ar: "نصمم مؤتمرات ومعارض وفعاليات تجعل الخبرة الهندسية قابلة للقاء والتعلم والشراكة — من الفكرة إلى التقرير الختامي.", en: "We design conferences, exhibitions, and events that make engineering expertise meetable, learnable, and partnership-ready — from idea to final report." },
  heroSlide2Eyebrow: { ar: "معارض متخصصة", en: "Specialized Exhibitions" },
  heroSlide2Title: { ar: "حلول تقنية للقطاع الهندسي", en: "Technical Solutions for the Engineering Sector" },
  heroSlide2Description: { ar: "منصات تجمع الجامعات والشركات والمهندسين حول حلول واضحة وتجعل كل نسخة قابلة للقياس.", en: "Platforms bringing together universities, companies, and engineers around clear solutions, making each edition measurable." },
  heroSlide3Eyebrow: { ar: "فعاليات مجتمعية", en: "Community Events" },
  heroSlide3Title: { ar: "برنامج سنوي يربط المهندسين بالمهنة", en: "Annual Program Connecting Engineers to the Profession" },
  heroSlide3Description: { ar: "فعاليات وطنية واجتماعية وندوات فنية تربط أعضاء الجمعية بسوق العمل وصنّاع القرار.", en: "National and social events, technical seminars connecting Society members with the job market and decision-makers." },
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
