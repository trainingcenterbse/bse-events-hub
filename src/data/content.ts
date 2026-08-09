import type { Localized } from "@/lib/i18n";

export type Edition = {
  year: string;
  title: Localized;
  venue: Localized;
  note: Localized;
  url?: string;
};

export type Exhibition = {
  slug: string;
  owned: boolean;
  status: "current" | "past";
  name: Localized;
  short: Localized;
  description: Localized;
  sector: Localized;
  started: string;
  stats: { value: string; label: Localized }[];
  editions: Edition[];
};

export const exhibitions: Exhibition[] = [
  {
    slug: "international-academic-engineering-studies-expo",
    owned: true,
    status: "current",
    name: {
      ar: "المعرض الدولي للدراسات الأكاديمية والهندسية",
      en: "International Exhibition for Academic & Engineering Studies",
    },
    short: {
      ar: "منصة الجمعية الأكبر للتعليم الهندسي العالي، بالتعاون مع وزارة التربية والتعليم ومجلس التعليم العالي.",
      en: "BSE's flagship higher-education platform, organized with the Ministry of Education and the Higher Education Council.",
    },
    description: {
      ar: "معرض تنظمه جمعية المهندسين البحرينية سنوياً ليجمع الجامعات المحلية والإقليمية والعالمية مع طلبة الثانوية والخريجين والمهندسين الباحثين عن الدراسات العليا. يوفر المعرض جلسات إرشاد أكاديمي ومهني، ولقاءات مباشرة مع ممثلي الجامعات، وبرنامج ندوات متخصص في الاعتماد الأكاديمي للبرامج الهندسية.",
      en: "An annual BSE exhibition bringing local, regional and international universities face to face with secondary students, graduates and engineers seeking postgraduate study. It offers academic and career guidance sessions, direct meetings with university representatives, and a seminar programme focused on accreditation of engineering programmes.",
    },
    sector: { ar: "التعليم الهندسي", en: "Engineering education" },
    started: "2016",
    stats: [
      { value: "60+", label: { ar: "جامعة ومؤسسة عارضة", en: "Exhibiting institutions" } },
      { value: "12K+", label: { ar: "زائر في كل نسخة", en: "Visitors per edition" } },
      { value: "9", label: { ar: "نسخ منذ الانطلاق", en: "Editions to date" } },
    ],
    editions: [
      {
        year: "2026",
        title: { ar: "النسخة التاسعة", en: "9th Edition" },
        venue: { ar: "مركز البحرين الدولي للمعارض", en: "Bahrain International Exhibition Centre" },
        note: {
          ar: "التسجيل مفتوح للعارضين والرعاة مع مسار جديد للذكاء الاصطناعي في التعليم الهندسي.",
          en: "Exhibitor and sponsor registration open, with a new track on AI in engineering education.",
        },
        url: "https://bse.bh/ar/",
      },
      {
        year: "2024",
        title: { ar: "النسخة الثامنة", en: "8th Edition" },
        venue: { ar: "مركز البحرين الدولي للمعارض", en: "Bahrain International Exhibition Centre" },
        note: {
          ar: "افتُتحت برعاية وزارة التربية والتعليم ومجلس التعليم العالي بمشاركة جامعات خليجية وأوروبية.",
          en: "Opened under the Ministry of Education and Higher Education Council with Gulf and European universities.",
        },
      },
      {
        year: "2023",
        title: { ar: "النسخة السابعة", en: "7th Edition" },
        venue: { ar: "مقر الجمعية، الجفير", en: "BSE Headquarters, Juffair" },
        note: {
          ar: "ركزت على التخصصات الهندسية المستقبلية والتحول الرقمي في الجامعات.",
          en: "Focused on future engineering disciplines and digital transformation in universities.",
        },
      },
      {
        year: "2019",
        title: { ar: "النسخة السادسة", en: "6th Edition" },
        venue: { ar: "مركز البحرين الدولي للمعارض", en: "Bahrain International Exhibition Centre" },
        note: {
          ar: "أول نسخة تضم منطقة مخصصة للإرشاد المهني وبرامج الابتعاث.",
          en: "First edition with a dedicated career-guidance and scholarship zone.",
        },
      },
    ],
  },
  {
    slug: "crogen",
    owned: true,
    status: "current",
    name: {
      ar: "معرض ومؤتمر كروجن CROGEN",
      en: "CROGEN Exhibition & Conference",
    },
    short: {
      ar: "منصة الجمعية المتخصصة في التبريد وتوليد الطاقة وكفاءة الاستهلاك في مملكة البحرين والمنطقة.",
      en: "BSE's specialised platform for cooling, power generation and energy efficiency in Bahrain and the region.",
    },
    description: {
      ar: "كروجن معرض ومؤتمر تملكه وتنظمه جمعية المهندسين البحرينية، ويجمع شركات التبريد والتكييف وتوليد الطاقة والمقاولات مع الجهات الحكومية والمطورين والاستشاريين. يشمل برنامجاً فنياً بأوراق عمل محكّمة، ومنطقة عرض تقنية، وجلسات مطابقة أعمال بين الموردين والمشاريع الكبرى.",
      en: "CROGEN is a BSE-owned exhibition and conference gathering cooling, HVAC, power generation and contracting companies with government entities, developers and consultants. It features a peer-reviewed technical programme, a technology showcase and business matchmaking sessions between suppliers and major projects.",
    },
    sector: { ar: "التبريد والطاقة", en: "Cooling & energy" },
    started: "2018",
    stats: [
      { value: "80+", label: { ar: "جهة عارضة", en: "Exhibitors" } },
      { value: "30+", label: { ar: "ورقة عمل فنية", en: "Technical papers" } },
      { value: "5", label: { ar: "نسخ منذ الانطلاق", en: "Editions to date" } },
    ],
    editions: [
      {
        year: "2026",
        title: { ar: "النسخة الخامسة", en: "5th Edition" },
        venue: { ar: "مركز البحرين الدولي للمعارض", en: "Bahrain International Exhibition Centre" },
        note: {
          ar: "محورها كفاءة الطاقة وتبريد المناطق ضمن مستهدفات الحياد الصفري 2060.",
          en: "Themed on energy efficiency and district cooling within the Net Zero 2060 targets.",
        },
        url: "https://bse.bh/ar/",
      },
      {
        year: "2024",
        title: { ar: "النسخة الرابعة", en: "4th Edition" },
        venue: { ar: "مركز البحرين الدولي للمعارض", en: "Bahrain International Exhibition Centre" },
        note: {
          ar: "شهدت إطلاق جائزة أفضل مشروع تبريد مستدام بالتعاون مع القطاع الخاص.",
          en: "Launched the Sustainable Cooling Project Award in cooperation with the private sector.",
        },
      },
      {
        year: "2022",
        title: { ar: "النسخة الثالثة", en: "3rd Edition" },
        venue: { ar: "مقر الجمعية، الجفير", en: "BSE Headquarters, Juffair" },
        note: {
          ar: "نسخة هجينة جمعت الحضور المباشر مع بث مباشر للجلسات الفنية.",
          en: "A hybrid edition combining in-person attendance with live-streamed technical sessions.",
        },
      },
      {
        year: "2018",
        title: { ar: "النسخة الأولى", en: "1st Edition" },
        venue: { ar: "مقر الجمعية، الجفير", en: "BSE Headquarters, Juffair" },
        note: {
          ar: "انطلاقة كروجن كملتقى وطني لقطاع التبريد وتوليد الطاقة.",
          en: "CROGEN launched as a national forum for the cooling and power generation sector.",
        },
      },
    ],
  },
  {
    slug: "gulf-engineering-forum-energy-management",
    owned: false,
    status: "current",
    name: {
      ar: "الملتقى الهندسي الخليجي 26 — مؤتمر ومعرض إدارة الطاقة",
      en: "26th Gulf Engineering Forum — Energy Management Conference & Exhibition",
    },
    short: {
      ar: "الملتقى الهندسي الخليجي باستضافة الجمعية بالتعاون مع اتحاد المهندسين الخليجيين.",
      en: "The Gulf Engineering Forum hosted by BSE with the Federation of GCC Engineers.",
    },
    description: {
      ar: "ملتقى خليجي يقام كل عامين وتستضيف الجمعية نسخته السادسة والعشرين تحت عنوان إدارة الطاقة، بمشاركة جمعيات المهندسين الخليجية وشركات الطاقة والمرافق، ويضم معرضاً مصاحباً وبرنامجاً علمياً موسعاً.",
      en: "A biennial Gulf forum whose 26th edition is hosted by BSE under the theme of energy management, with GCC engineering societies, energy and utility companies, an accompanying exhibition and an extensive technical programme.",
    },
    sector: { ar: "إدارة الطاقة", en: "Energy management" },
    started: "2025",
    stats: [
      { value: "6", label: { ar: "دول خليجية مشاركة", en: "GCC countries" } },
      { value: "40+", label: { ar: "متحدث", en: "Speakers" } },
      { value: "26", label: { ar: "النسخة الحالية", en: "Current edition" } },
    ],
    editions: [
      {
        year: "2025",
        title: { ar: "النسخة السادسة والعشرون", en: "26th Edition" },
        venue: { ar: "مملكة البحرين", en: "Kingdom of Bahrain" },
        note: {
          ar: "مؤتمر ومعرض إدارة الطاقة باستضافة جمعية المهندسين البحرينية.",
          en: "Energy Management Conference & Exhibition hosted by BSE.",
        },
        url: "https://bse.bh/ar/",
      },
    ],
  },
  {
    slug: "maintcon",
    owned: false,
    status: "past",
    name: {
      ar: "مؤتمر ومعرض الصيانة والاعتمادية وإدارة الأصول MAINTCON",
      en: "MAINTCON — Maintenance, Reliability & Asset Management Conference & Exhibition",
    },
    short: {
      ar: "المؤتمر الدولي السابع للصيانة والاعتمادية وإدارة الأصول بالتعاون مع جمعية الخليج للصيانة والموثوقية.",
      en: "The 7th international maintenance and reliability conference, with the Gulf Society for Maintenance & Reliability.",
    },
    description: {
      ar: "مؤتمر ومعرض دولي تستضيفه جمعية الخليج للصيانة والموثوقية بالتعاون مع جمعية المهندسين البحرينية، ويعد المرجع الإقليمي لممارسات الصيانة والاعتمادية وإدارة الأصول في القطاعات النفطية والصناعية والمرافق.",
      en: "An international conference and exhibition hosted by the Gulf Society for Maintenance & Reliability in cooperation with BSE — the regional reference for maintenance, reliability and asset management practice across oil, industry and utilities.",
    },
    sector: { ar: "الصيانة وإدارة الأصول", en: "Maintenance & asset management" },
    started: "2024",
    stats: [
      { value: "7", label: { ar: "نسخة دولية", en: "International editions" } },
      { value: "50+", label: { ar: "شركة عارضة", en: "Exhibiting companies" } },
      { value: "3", label: { ar: "أيام برنامج فني", en: "Days of technical programme" } },
    ],
    editions: [
      {
        year: "2024",
        title: { ar: "MAINTCON 2024 — النسخة السابعة", en: "MAINTCON 2024 — 7th Edition" },
        venue: { ar: "مملكة البحرين", en: "Kingdom of Bahrain" },
        note: {
          ar: "بالتعاون مع جمعية الخليج للصيانة والموثوقية GSMR.",
          en: "In cooperation with the Gulf Society for Maintenance & Reliability (GSMR).",
        },
        url: "https://maintcon.org/",
      },
      {
        year: "2019",
        title: { ar: "MAINTCON — النسخة السادسة", en: "MAINTCON — 6th Edition" },
        venue: { ar: "مملكة البحرين", en: "Kingdom of Bahrain" },
        note: {
          ar: "ركزت على التحول الرقمي في الصيانة التنبؤية.",
          en: "Focused on digital transformation in predictive maintenance.",
        },
      },
    ],
  },
  {
    slug: "middle-east-corrosion-conference",
    owned: false,
    status: "past",
    name: {
      ar: "مؤتمر ومعرض الشرق الأوسط للتآكل 18",
      en: "18th Middle East Corrosion Conference & Exhibition",
    },
    short: {
      ar: "أحد أعرق المؤتمرات المتخصصة التي تشارك الجمعية في تنظيمها منذ عقود.",
      en: "One of the region's longest-running specialised conferences co-organised by BSE.",
    },
    description: {
      ar: "مؤتمر ومعرض متخصص في علوم التآكل وحماية المنشآت والأنابيب، يجمع خبراء من قطاع النفط والغاز والمرافق والصناعات التحويلية، ويضم معرضاً تقنياً وورش عمل معتمدة.",
      en: "A specialised conference and exhibition on corrosion science and asset protection, gathering experts from oil & gas, utilities and manufacturing, with a technical exhibition and accredited workshops.",
    },
    sector: { ar: "النفط والغاز", en: "Oil & gas" },
    started: "2022",
    stats: [
      { value: "18", label: { ar: "نسخة", en: "Editions" } },
      { value: "20+", label: { ar: "دولة مشاركة", en: "Countries represented" } },
      { value: "100+", label: { ar: "بحث علمي", en: "Technical papers" } },
    ],
    editions: [
      {
        year: "2022",
        title: { ar: "النسخة الثامنة عشرة", en: "18th Edition" },
        venue: { ar: "مملكة البحرين", en: "Kingdom of Bahrain" },
        note: {
          ar: "بمشاركة كبرى شركات النفط والغاز في المنطقة.",
          en: "With participation of the region's leading oil & gas companies.",
        },
      },
    ],
  },
];

export type ConferenceSession = { time: string; title: Localized; speaker?: Localized };
export type ConferenceDay = { day: Localized; date: Localized; sessions: ConferenceSession[] };

export type Conference = {
  slug: string;
  cover: "energy" | "maint" | "ict" | "corrosion";
  title: Localized;
  edition: Localized;
  date: Localized;
  venue: Localized;
  venueNote: Localized;
  mapUrl: string;
  status: "upcoming" | "past";
  topics: Localized[];
  summary: Localized;
  description: Localized;
  organisers: Localized[];
  stats: { value: string; label: Localized }[];
  tracks: { title: Localized; description: Localized }[];
  speakers: { name: Localized; role: Localized; org: Localized }[];
  schedule: ConferenceDay[];
  brochureUrl?: string;
  url?: string;
};

export const conferences: Conference[] = [
  {
    slug: "energy-management-gulf-forum-26",
    cover: "energy",
    title: {
      ar: "مؤتمر ومعرض إدارة الطاقة — الملتقى الهندسي الخليجي 26",
      en: "Energy Management Conference & Exhibition — 26th Gulf Engineering Forum",
    },
    edition: { ar: "النسخة 26", en: "26th Edition" },
    date: { ar: "2025", en: "2025" },
    venue: { ar: "مركز البحرين الدولي للمعارض والمؤتمرات", en: "Bahrain International Exhibition & Convention Centre" },
    venueNote: {
      ar: "قاعة المؤتمرات الرئيسية مع معرض مصاحب على مساحة 4,000 م² وقاعتان للجلسات المتوازية.",
      en: "Main convention hall with a 4,000 m² accompanying exhibition and two parallel-session halls.",
    },
    mapUrl: "https://maps.google.com/?q=Bahrain+International+Exhibition+Centre",
    status: "upcoming",
    summary: {
      ar: "ملتقى خليجي يجمع جمعيات المهندسين وشركات الطاقة لمناقشة كفاءة الطاقة والتحول نحو الحياد الصفري.",
      en: "A Gulf-wide forum uniting engineering societies and energy companies around efficiency and the net-zero transition.",
    },
    description: {
      ar: "تستضيف جمعية المهندسين البحرينية النسخة السادسة والعشرين من الملتقى الهندسي الخليجي تحت عنوان إدارة الطاقة، بالتعاون مع اتحاد المهندسين الخليجيين. يجمع الملتقى صنّاع القرار في قطاع الطاقة والمرافق مع الجامعات ومكاتب الاستشارات الهندسية، ويضم برنامجاً علمياً بأوراق محكّمة، ومعرضاً مصاحباً للتقنيات، وجلسات حوارية حول السياسات والتشريعات وكفاءة الاستهلاك في مباني ومصانع المنطقة.",
      en: "BSE hosts the 26th edition of the Gulf Engineering Forum under the theme of energy management, in cooperation with the Federation of GCC Engineers. The forum brings energy and utility decision makers together with universities and engineering consultancies, featuring a peer-reviewed technical programme, an accompanying technology exhibition and panel sessions on policy, regulation and consumption efficiency across the region's buildings and plants.",
    },
    organisers: [
      { ar: "جمعية المهندسين البحرينية", en: "Bahrain Society of Engineers" },
      { ar: "اتحاد المهندسين الخليجيين", en: "Federation of GCC Engineers" },
    ],
    stats: [
      { value: "6", label: { ar: "دول خليجية مشاركة", en: "GCC countries" } },
      { value: "40+", label: { ar: "متحدث ومتحدثة", en: "Speakers" } },
      { value: "1200+", label: { ar: "حاضر متوقع", en: "Expected attendees" } },
      { value: "3", label: { ar: "أيام برنامج", en: "Programme days" } },
    ],
    tracks: [
      {
        title: { ar: "كفاءة الطاقة في المباني", en: "Energy efficiency in buildings" },
        description: {
          ar: "أنظمة التبريد وأكواد البناء الأخضر والتحكم الذكي في الأحمال.",
          en: "Cooling systems, green building codes and smart load control.",
        },
      },
      {
        title: { ar: "الطاقة المتجددة والتخزين", en: "Renewables & storage" },
        description: {
          ar: "المشاريع الشمسية، وتكامل الشبكة، وحلول تخزين الطاقة في المنطقة.",
          en: "Solar projects, grid integration and regional energy storage solutions.",
        },
      },
      {
        title: { ar: "السياسات والتشريعات", en: "Policy & regulation" },
        description: {
          ar: "مستهدفات الحياد الصفري 2060 وأدوات التنظيم والحوافز.",
          en: "Net Zero 2060 targets, regulatory instruments and incentives.",
        },
      },
      {
        title: { ar: "التحول الرقمي للمرافق", en: "Digital utilities" },
        description: {
          ar: "الشبكات الذكية، والقياس عن بعد، وتحليل البيانات التشغيلية.",
          en: "Smart grids, remote metering and operational data analytics.",
        },
      },
    ],
    speakers: [
      {
        name: { ar: "رئيس جمعية المهندسين البحرينية", en: "President, Bahrain Society of Engineers" },
        role: { ar: "كلمة الافتتاح", en: "Opening address" },
        org: { ar: "جمعية المهندسين البحرينية", en: "BSE" },
      },
      {
        name: { ar: "ممثل هيئة الكهرباء والماء", en: "Electricity & Water Authority representative" },
        role: { ar: "جلسة السياسات", en: "Policy session" },
        org: { ar: "مملكة البحرين", en: "Kingdom of Bahrain" },
      },
      {
        name: { ar: "خبير كفاءة الطاقة", en: "Energy efficiency expert" },
        role: { ar: "ورقة فنية محكّمة", en: "Peer-reviewed paper" },
        org: { ar: "اتحاد المهندسين الخليجيين", en: "Federation of GCC Engineers" },
      },
    ],
    schedule: [
      {
        day: { ar: "اليوم الأول", en: "Day one" },
        date: { ar: "الافتتاح والجلسات العامة", en: "Opening & plenary" },
        sessions: [
          { time: "08:30", title: { ar: "التسجيل واستقبال الضيوف", en: "Registration & guest reception" } },
          { time: "09:30", title: { ar: "حفل الافتتاح الرسمي وجولة المعرض", en: "Official opening & exhibition tour" } },
          { time: "11:00", title: { ar: "الجلسة العامة: إدارة الطاقة في الخليج", en: "Plenary: energy management in the Gulf" } },
          { time: "14:00", title: { ar: "جلسة السياسات والتشريعات", en: "Policy & regulation panel" } },
        ],
      },
      {
        day: { ar: "اليوم الثاني", en: "Day two" },
        date: { ar: "الأوراق الفنية", en: "Technical papers" },
        sessions: [
          { time: "09:00", title: { ar: "مسار كفاءة الطاقة في المباني", en: "Buildings efficiency track" } },
          { time: "11:30", title: { ar: "مسار الطاقة المتجددة والتخزين", en: "Renewables & storage track" } },
          { time: "14:00", title: { ar: "ورش عمل تقنية بالتوازي", en: "Parallel technical workshops" } },
        ],
      },
      {
        day: { ar: "اليوم الثالث", en: "Day three" },
        date: { ar: "الختام والتوصيات", en: "Closing & recommendations" },
        sessions: [
          { time: "09:00", title: { ar: "مسار التحول الرقمي للمرافق", en: "Digital utilities track" } },
          { time: "11:00", title: { ar: "جلسة مطابقة أعمال للعارضين", en: "Exhibitor business matchmaking" } },
          { time: "13:00", title: { ar: "التوصيات الختامية والتكريم", en: "Closing recommendations & awards" } },
        ],
      },
    ],
    brochureUrl: "https://bse.bh/ar/conferences/",
    url: "https://bse.bh/ar/conferences/",
  },
  {
    slug: "maintcon-2024",
    cover: "maint",
    title: {
      ar: "المؤتمر الدولي السابع للصيانة والاعتمادية وإدارة الأصول MAINTCON 2024",
      en: "7th International Maintenance, Reliability & Asset Management Conference (MAINTCON 2024)",
    },
    edition: { ar: "النسخة السابعة", en: "7th Edition" },
    date: { ar: "2024", en: "2024" },
    venue: { ar: "مملكة البحرين", en: "Kingdom of Bahrain" },
    venueNote: {
      ar: "قاعة مؤتمرات مع معرض تقني لشركات الصيانة وإدارة الأصول.",
      en: "Convention hall with a technical exhibition for maintenance and asset management firms.",
    },
    mapUrl: "https://maps.google.com/?q=Kingdom+of+Bahrain",
    status: "past",
    summary: {
      ar: "بالتعاون مع جمعية الخليج للصيانة والموثوقية GSMR، ويعد المرجع الإقليمي لممارسات الصيانة وإدارة الأصول.",
      en: "Held with the Gulf Society for Maintenance & Reliability (GSMR); the regional benchmark for maintenance and asset management.",
    },
    description: {
      ar: "مؤتمر ومعرض دولي متخصص في الصيانة والاعتمادية وإدارة الأصول، يُعقد بالتعاون مع جمعية الخليج للصيانة والموثوقية GSMR ومشاركة كبرى شركات النفط والصناعة والمرافق في المنطقة. يقدم المؤتمر أوراقاً فنية محكّمة وورش عمل معتمدة ومعرضاً للحلول التقنية في المراقبة التنبؤية وإدارة دورة حياة الأصول.",
      en: "An international conference and exhibition on maintenance, reliability and asset management, held with the Gulf Society for Maintenance & Reliability (GSMR) and the region's leading oil, industrial and utility companies. It delivers peer-reviewed papers, accredited workshops and an exhibition of technologies for predictive monitoring and asset lifecycle management.",
    },
    organisers: [
      { ar: "جمعية الخليج للصيانة والموثوقية GSMR", en: "Gulf Society for Maintenance & Reliability (GSMR)" },
      { ar: "جمعية المهندسين البحرينية", en: "Bahrain Society of Engineers" },
    ],
    stats: [
      { value: "7", label: { ar: "نسخة دولية", en: "International editions" } },
      { value: "50+", label: { ar: "شركة عارضة", en: "Exhibiting companies" } },
      { value: "60+", label: { ar: "ورقة فنية", en: "Technical papers" } },
      { value: "3", label: { ar: "أيام برنامج", en: "Programme days" } },
    ],
    tracks: [
      {
        title: { ar: "الصيانة التنبؤية", en: "Predictive maintenance" },
        description: {
          ar: "تحليل الاهتزاز والتصوير الحراري وأنظمة المراقبة اللحظية.",
          en: "Vibration analysis, thermography and real-time monitoring systems.",
        },
      },
      {
        title: { ar: "إدارة الأصول", en: "Asset management" },
        description: {
          ar: "معيار ISO 55000 ودورة حياة الأصول وتكلفة الملكية.",
          en: "ISO 55000, asset lifecycle and total cost of ownership.",
        },
      },
      {
        title: { ar: "الموثوقية والسلامة", en: "Reliability & safety" },
        description: {
          ar: "تحليل الأعطال الجذرية وثقافة السلامة في المصانع.",
          en: "Root cause failure analysis and plant safety culture.",
        },
      },
      {
        title: { ar: "الصيانة الرقمية", en: "Digital maintenance" },
        description: {
          ar: "التوأم الرقمي وأنظمة CMMS والذكاء الاصطناعي في الصيانة.",
          en: "Digital twins, CMMS platforms and AI in maintenance.",
        },
      },
    ],
    speakers: [
      {
        name: { ar: "رئيس جمعية الخليج للصيانة والموثوقية", en: "GSMR Chairman" },
        role: { ar: "كلمة الافتتاح", en: "Opening address" },
        org: { ar: "GSMR", en: "GSMR" },
      },
      {
        name: { ar: "خبير اعتمادية صناعية", en: "Industrial reliability expert" },
        role: { ar: "جلسة رئيسية", en: "Keynote session" },
        org: { ar: "قطاع النفط والغاز", en: "Oil & gas sector" },
      },
      {
        name: { ar: "ممثل شركة مرافق وطنية", en: "National utility representative" },
        role: { ar: "دراسة حالة", en: "Case study" },
        org: { ar: "مملكة البحرين", en: "Kingdom of Bahrain" },
      },
    ],
    schedule: [
      {
        day: { ar: "اليوم الأول", en: "Day one" },
        date: { ar: "الافتتاح والجلسات الرئيسية", en: "Opening & keynotes" },
        sessions: [
          { time: "08:30", title: { ar: "التسجيل وافتتاح المعرض التقني", en: "Registration & technical exhibition opening" } },
          { time: "10:00", title: { ar: "جلسة رئيسية: مستقبل الصيانة في الخليج", en: "Keynote: the future of maintenance in the Gulf" } },
          { time: "13:30", title: { ar: "مسار الصيانة التنبؤية", en: "Predictive maintenance track" } },
        ],
      },
      {
        day: { ar: "اليوم الثاني", en: "Day two" },
        date: { ar: "الأوراق وورش العمل", en: "Papers & workshops" },
        sessions: [
          { time: "09:00", title: { ar: "مسار إدارة الأصول ISO 55000", en: "ISO 55000 asset management track" } },
          { time: "11:30", title: { ar: "ورشة تحليل الأعطال الجذرية", en: "Root cause failure analysis workshop" } },
          { time: "14:00", title: { ar: "مسار الصيانة الرقمية", en: "Digital maintenance track" } },
        ],
      },
      {
        day: { ar: "اليوم الثالث", en: "Day three" },
        date: { ar: "الزيارات الميدانية والختام", en: "Site visits & closing" },
        sessions: [
          { time: "09:00", title: { ar: "زيارات ميدانية لمصانع ومرافق", en: "Site visits to plants and facilities" } },
          { time: "13:00", title: { ar: "تكريم أفضل الأوراق الفنية", en: "Best technical paper awards" } },
        ],
      },
    ],
    brochureUrl: "https://maintcon.org/",
    url: "https://maintcon.org/",
  },
  {
    slug: "arab-ict-conference-7",
    cover: "ict",
    title: {
      ar: "المؤتمر العربي السابع لتكنولوجيا المعلومات والاتصالات",
      en: "7th Arab ICT Conference",
    },
    edition: { ar: "النسخة السابعة", en: "7th Edition" },
    date: { ar: "2024", en: "2024" },
    venue: { ar: "مملكة البحرين", en: "Kingdom of Bahrain" },
    venueNote: {
      ar: "قاعة مؤتمرات مع منطقة عرض للحلول الرقمية والشركات الناشئة.",
      en: "Convention hall with a showcase area for digital solutions and startups.",
    },
    mapUrl: "https://maps.google.com/?q=Kingdom+of+Bahrain",
    status: "past",
    summary: {
      ar: "مؤتمر عربي يناقش التحول الرقمي والذكاء الاصطناعي والأمن السيبراني في القطاعات الهندسية.",
      en: "An Arab conference on digital transformation, artificial intelligence and cybersecurity across engineering sectors.",
    },
    description: {
      ar: "مؤتمر عربي تشارك الجمعية في تنظيمه ضمن أنشطة اتحاد المهندسين العرب، ويستعرض أثر الذكاء الاصطناعي والحوسبة السحابية والأمن السيبراني على الممارسة الهندسية في القطاعات الحيوية، بمشاركة جامعات وشركات تقنية وجهات تنظيمية من الدول العربية.",
      en: "An Arab conference co-organised by BSE within the Federation of Arab Engineers' activities, examining the impact of AI, cloud computing and cybersecurity on engineering practice in critical sectors, with universities, technology companies and regulators from across the Arab world.",
    },
    organisers: [
      { ar: "اتحاد المهندسين العرب", en: "Federation of Arab Engineers" },
      { ar: "جمعية المهندسين البحرينية", en: "Bahrain Society of Engineers" },
    ],
    stats: [
      { value: "12+", label: { ar: "دولة عربية", en: "Arab countries" } },
      { value: "35+", label: { ar: "متحدث", en: "Speakers" } },
      { value: "40+", label: { ar: "ورقة وبحث", en: "Papers & research" } },
      { value: "2", label: { ar: "أيام برنامج", en: "Programme days" } },
    ],
    tracks: [
      {
        title: { ar: "الذكاء الاصطناعي التطبيقي", en: "Applied artificial intelligence" },
        description: {
          ar: "تطبيقات الذكاء الاصطناعي في التصميم الهندسي والتشغيل.",
          en: "AI applications in engineering design and operations.",
        },
      },
      {
        title: { ar: "الأمن السيبراني للأنظمة الصناعية", en: "Cybersecurity for industrial systems" },
        description: {
          ar: "حماية أنظمة التحكم الصناعي والبنية التحتية الحيوية.",
          en: "Protecting industrial control systems and critical infrastructure.",
        },
      },
      {
        title: { ar: "التحول الرقمي المؤسسي", en: "Enterprise digital transformation" },
        description: {
          ar: "منهجيات التحول الرقمي في الجهات الهندسية والحكومية.",
          en: "Digital transformation methodologies in engineering and government entities.",
        },
      },
    ],
    speakers: [
      {
        name: { ar: "ممثل اتحاد المهندسين العرب", en: "Federation of Arab Engineers representative" },
        role: { ar: "كلمة الافتتاح", en: "Opening address" },
        org: { ar: "اتحاد المهندسين العرب", en: "Federation of Arab Engineers" },
      },
      {
        name: { ar: "باحث في الذكاء الاصطناعي", en: "Artificial intelligence researcher" },
        role: { ar: "جلسة رئيسية", en: "Keynote session" },
        org: { ar: "جامعة إقليمية", en: "Regional university" },
      },
    ],
    schedule: [
      {
        day: { ar: "اليوم الأول", en: "Day one" },
        date: { ar: "الافتتاح والجلسات الرئيسية", en: "Opening & keynotes" },
        sessions: [
          { time: "09:00", title: { ar: "الافتتاح وكلمات الجهات المنظمة", en: "Opening and organiser addresses" } },
          { time: "10:30", title: { ar: "جلسة الذكاء الاصطناعي في الهندسة", en: "AI in engineering session" } },
          { time: "13:30", title: { ar: "جلسة الأمن السيبراني الصناعي", en: "Industrial cybersecurity session" } },
        ],
      },
      {
        day: { ar: "اليوم الثاني", en: "Day two" },
        date: { ar: "الأوراق العلمية والختام", en: "Papers & closing" },
        sessions: [
          { time: "09:00", title: { ar: "عرض الأوراق العلمية المقبولة", en: "Accepted paper presentations" } },
          { time: "12:00", title: { ar: "منطقة الشركات الناشئة", en: "Startup showcase" } },
          { time: "14:00", title: { ar: "البيان الختامي والتوصيات", en: "Closing statement & recommendations" } },
        ],
      },
    ],
  },
  {
    slug: "middle-east-corrosion-18",
    cover: "corrosion",
    title: {
      ar: "مؤتمر ومعرض الشرق الأوسط الثامن عشر للتآكل",
      en: "18th Middle East Corrosion Conference & Exhibition",
    },
    edition: { ar: "النسخة 18", en: "18th Edition" },
    date: { ar: "2022", en: "2022" },
    venue: { ar: "مملكة البحرين", en: "Kingdom of Bahrain" },
    venueNote: {
      ar: "قاعة مؤتمرات ومعرض تقني لشركات المواد والطلاءات وحماية الأنابيب.",
      en: "Convention hall and technical exhibition for materials, coatings and pipeline protection companies.",
    },
    mapUrl: "https://maps.google.com/?q=Kingdom+of+Bahrain",
    status: "past",
    summary: {
      ar: "أعرق المؤتمرات المتخصصة في علوم التآكل وحماية الأصول الصناعية في المنطقة.",
      en: "The region's most established specialised conference on corrosion science and industrial asset protection.",
    },
    description: {
      ar: "مؤتمر ومعرض متخصص يعقد كل عامين في مملكة البحرين، ويعد الأعرق في المنطقة في علوم التآكل وحماية الأصول. يجمع خبراء النفط والغاز والمرافق والصناعات التحويلية حول أحدث أبحاث المواد والطلاءات وأنظمة الحماية الكاثودية، مع ورش عمل معتمدة ومعرض تقني موسع.",
      en: "A biennial specialised conference and exhibition held in Bahrain — the region's longest-running platform on corrosion science and asset protection. It gathers experts from oil & gas, utilities and manufacturing around the latest research in materials, coatings and cathodic protection, with accredited workshops and an extensive technical exhibition.",
    },
    organisers: [
      { ar: "جمعية المهندسين البحرينية", en: "Bahrain Society of Engineers" },
      { ar: "لجنة التآكل الخليجية", en: "Gulf Corrosion Committee" },
    ],
    stats: [
      { value: "18", label: { ar: "نسخة", en: "Editions" } },
      { value: "20+", label: { ar: "دولة مشاركة", en: "Countries represented" } },
      { value: "100+", label: { ar: "بحث علمي", en: "Technical papers" } },
      { value: "3", label: { ar: "أيام برنامج", en: "Programme days" } },
    ],
    tracks: [
      {
        title: { ar: "حماية الأنابيب", en: "Pipeline protection" },
        description: {
          ar: "الحماية الكاثودية وفحص الأنابيب وإدارة سلامة الخطوط.",
          en: "Cathodic protection, pipeline inspection and line integrity management.",
        },
      },
      {
        title: { ar: "المواد والطلاءات", en: "Materials & coatings" },
        description: {
          ar: "الطلاءات المتقدمة والسبائك المقاومة للتآكل في البيئات الحارة.",
          en: "Advanced coatings and corrosion-resistant alloys in hot environments.",
        },
      },
      {
        title: { ar: "التآكل في النفط والغاز", en: "Corrosion in oil & gas" },
        description: {
          ar: "دراسات حالة من المصافي وحقول الإنتاج ومحطات المعالجة.",
          en: "Case studies from refineries, production fields and processing plants.",
        },
      },
    ],
    speakers: [
      {
        name: { ar: "خبير دولي في علوم التآكل", en: "International corrosion science expert" },
        role: { ar: "جلسة رئيسية", en: "Keynote session" },
        org: { ar: "مركز بحثي دولي", en: "International research centre" },
      },
      {
        name: { ar: "ممثل شركة نفط وطنية", en: "National oil company representative" },
        role: { ar: "دراسة حالة صناعية", en: "Industrial case study" },
        org: { ar: "قطاع النفط والغاز", en: "Oil & gas sector" },
      },
    ],
    schedule: [
      {
        day: { ar: "اليوم الأول", en: "Day one" },
        date: { ar: "الافتتاح والجلسات العامة", en: "Opening & plenary" },
        sessions: [
          { time: "08:30", title: { ar: "التسجيل وافتتاح المعرض", en: "Registration & exhibition opening" } },
          { time: "10:00", title: { ar: "جلسة رئيسية في علوم التآكل", en: "Corrosion science keynote" } },
          { time: "13:30", title: { ar: "مسار حماية الأنابيب", en: "Pipeline protection track" } },
        ],
      },
      {
        day: { ar: "اليوم الثاني", en: "Day two" },
        date: { ar: "الأبحاث وورش العمل", en: "Research & workshops" },
        sessions: [
          { time: "09:00", title: { ar: "مسار المواد والطلاءات", en: "Materials & coatings track" } },
          { time: "12:00", title: { ar: "ورشة الحماية الكاثودية المعتمدة", en: "Accredited cathodic protection workshop" } },
        ],
      },
      {
        day: { ar: "اليوم الثالث", en: "Day three" },
        date: { ar: "دراسات الحالة والختام", en: "Case studies & closing" },
        sessions: [
          { time: "09:00", title: { ar: "دراسات حالة من المصافي", en: "Refinery case studies" } },
          { time: "12:30", title: { ar: "التوصيات الختامية", en: "Closing recommendations" } },
        ],
      },
    ],
  },
];


export type EventItem = {
  title: Localized;
  category: Localized;
  date: Localized;
  summary: Localized;
  status: "upcoming" | "past";
};

export const events: EventItem[] = [
  {
    title: { ar: "يوم المهندس البحريني", en: "Bahraini Engineer Day" },
    category: { ar: "فعالية وطنية", en: "National event" },
    date: { ar: "سنوياً", en: "Annually" },
    status: "upcoming",
    summary: {
      ar: "احتفالية وطنية سنوية تكرّم المهندس البحريني وتبرز إنجازاته في مشاريع المملكة الكبرى، مع معرض مصاحب وجلسات حوارية.",
      en: "An annual national celebration honouring Bahraini engineers and their contribution to the Kingdom's major projects, with an accompanying showcase and panel sessions.",
    },
  },
  {
    title: { ar: "الغبقة الرمضانية السنوية", en: "Annual Ramadan Ghabga" },
    category: { ar: "لقاء اجتماعي", en: "Networking gathering" },
    date: { ar: "رمضان — سنوياً", en: "Ramadan — annually" },
    status: "past",
    summary: {
      ar: "لقاء اجتماعي سنوي يجمع أعضاء الجمعية وشركاءها من القطاعين العام والخاص في أجواء رمضانية.",
      en: "An annual social gathering bringing together BSE members and partners from the public and private sectors.",
    },
  },
  {
    title: { ar: "تكريم المتطوعين", en: "Volunteers Recognition Ceremony" },
    category: { ar: "حفل تكريم", en: "Awards ceremony" },
    date: { ar: "ديسمبر — سنوياً", en: "December — annually" },
    status: "past",
    summary: {
      ar: "حفل تكريم أكثر من 150 متطوعاً من أعضاء الجمعية تقديراً لعطائهم خلال العام، تزامناً مع الأعياد الوطنية.",
      en: "A ceremony honouring more than 150 volunteering members for their contribution during the year, timed with the National Day celebrations.",
    },
  },
  {
    title: { ar: "الجمعية العمومية السنوية", en: "Annual General Assembly" },
    category: { ar: "اجتماع مؤسسي", en: "Corporate meeting" },
    date: { ar: "أبريل — سنوياً", en: "April — annually" },
    status: "past",
    summary: {
      ar: "اجتماع أعضاء الجمعية في المقر بالجفير لمناقشة التقارير السنوية وانتخاب مجلس الإدارة، وينظمه القسم لوجستياً بالكامل.",
      en: "Members convene at the Juffair headquarters to review annual reports and elect the board — organised end-to-end by the department.",
    },
  },
  {
    title: { ar: "الندوات الفنية المتخصصة", en: "Specialised Technical Seminars" },
    category: { ar: "ندوة", en: "Seminar" },
    date: { ar: "برنامج شهري", en: "Monthly programme" },
    status: "upcoming",
    summary: {
      ar: "برنامج شهري من الندوات وورش العمل في التخصصات المدنية والكهربائية والميكانيكية والرقمية، بالتعاون مع اللجان الفنية للجمعية.",
      en: "A monthly programme of seminars and workshops across civil, electrical, mechanical and digital disciplines, run with BSE's technical committees.",
    },
  },
  {
    title: { ar: "زيارات المشاريع الهندسية", en: "Engineering Site Visits" },
    category: { ar: "نشاط ميداني", en: "Field activity" },
    date: { ar: "على مدار العام", en: "Year-round" },
    status: "upcoming",
    summary: {
      ar: "زيارات ميدانية لمشاريع البنية التحتية والمصانع والمرافق الحيوية في المملكة لأعضاء الجمعية والطلبة.",
      en: "Field visits to infrastructure projects, plants and critical facilities across the Kingdom for members and students.",
    },
  },
  {
    title: { ar: "ملتقى المهندسين الشباب", en: "Young Engineers Forum" },
    category: { ar: "ملتقى", en: "Forum" },
    date: { ar: "سنوياً", en: "Annually" },
    status: "upcoming",
    summary: {
      ar: "ملتقى يستهدف الخريجين الجدد بجلسات إرشاد مهني ومعرض توظيف مصغر بمشاركة الشركات الهندسية.",
      en: "A forum for fresh graduates with career-guidance sessions and a compact recruitment showcase with engineering firms.",
    },
  },
];

export type Service = {
  title: Localized;
  description: Localized;
  icon: string;
};

export const services: Service[] = [
  {
    icon: "Calendar",
    title: { ar: "تنظيم وإدارة الفعاليات", en: "Event planning & management" },
    description: {
      ar: "إدارة كاملة للفعالية من الفكرة إلى التقرير الختامي: الجدول الزمني، الموقع، التسجيل، والتشغيل اليومي.",
      en: "End-to-end delivery from concept to closing report: timeline, venue, registration and day-to-day operations.",
    },
  },
  {
    icon: "Presentation",
    title: { ar: "المؤتمرات والبرامج العلمية", en: "Conferences & technical programmes" },
    description: {
      ar: "بناء البرنامج العلمي، ولجان التحكيم، واستقطاب المتحدثين، وإدارة الأوراق الفنية المحكّمة.",
      en: "Building the technical programme, review committees, speaker acquisition and peer-reviewed paper management.",
    },
  },
  {
    icon: "Store",
    title: { ar: "المعارض ومساحات العرض", en: "Exhibitions & floor management" },
    description: {
      ar: "تصميم مخطط الأرضية، وبيع وإدارة الأجنحة، وتنسيق المقاولين والتشغيل الفني للمعرض.",
      en: "Floorplan design, booth sales and management, contractor coordination and technical operations.",
    },
  },
  {
    icon: "Handshake",
    title: { ar: "الرعايات والشراكات", en: "Sponsorship & partnerships" },
    description: {
      ar: "باقات رعاية مصممة حسب أهداف الشريك، مع تقارير عائد ظهور واضحة بعد كل فعالية.",
      en: "Sponsorship packages tailored to partner objectives, with clear post-event visibility and ROI reporting.",
    },
  },
  {
    icon: "Users",
    title: { ar: "خدمة الحضور والتسجيل", en: "Attendee experience & registration" },
    description: {
      ar: "أنظمة تسجيل رقمية، وشارات، ومسارات دخول سلسة، ودعم مباشر للحضور طوال أيام الفعالية.",
      en: "Digital registration, badging, smooth entry flows and on-site support throughout the event days.",
    },
  },
  {
    icon: "Megaphone",
    title: { ar: "التسويق والتغطية الإعلامية", en: "Marketing & media coverage" },
    description: {
      ar: "حملات رقمية، وعلاقات إعلامية محلية وخليجية، وإنتاج محتوى بصري احترافي للفعالية.",
      en: "Digital campaigns, local and Gulf media relations, and professional visual content production.",
    },
  },
];

export const audiences: { title: Localized; description: Localized; cta: Localized }[] = [
  {
    title: { ar: "رعاة الفعاليات", en: "Event sponsors" },
    description: {
      ar: "باقات رعاية متدرجة تمنح حضوراً مباشراً أمام صنّاع القرار في القطاع الهندسي بالمملكة والخليج.",
      en: "Tiered sponsorship packages placing your brand in front of engineering decision-makers in Bahrain and the Gulf.",
    },
    cta: { ar: "اطلب ملف الرعاية", en: "Request the sponsorship kit" },
  },
  {
    title: { ar: "الحضور والزوار", en: "Attendees & visitors" },
    description: {
      ar: "برامج فنية وندوات وزيارات ميدانية وفرص تواصل مهني على مدار العام لأعضاء الجمعية والمهتمين.",
      en: "Technical programmes, seminars, site visits and year-round professional networking for members and guests.",
    },
    cta: { ar: "تصفح الفعاليات", en: "Browse events" },
  },
  {
    title: { ar: "الشركات العارضة", en: "Exhibiting companies" },
    description: {
      ar: "أجنحة عرض في معارض متخصصة تصل بمنتجاتكم إلى المشغلين والاستشاريين والمقاولين مباشرة.",
      en: "Booths in specialised exhibitions that connect your products directly with operators, consultants and contractors.",
    },
    cta: { ar: "احجز جناحك", en: "Book a booth" },
  },
  {
    title: { ar: "شركات التنظيم والموردون", en: "Organisers & suppliers" },
    description: {
      ar: "شراكات تشغيلية مع شركات التنظيم ومزودي الخدمات اللوجستية والتقنية لتنفيذ فعاليات بمعايير عالية.",
      en: "Operational partnerships with organising firms and logistics or technical suppliers to deliver to a high standard.",
    },
    cta: { ar: "سجّل كمورد", en: "Register as a supplier" },
  },
];

export const stats: { value: string; label: Localized }[] = [
  { value: "40+", label: { ar: "عاماً من العمل الهندسي", en: "Years of engineering work" } },
  { value: "120+", label: { ar: "فعالية وندوة سنوياً", en: "Events & seminars a year" } },
  { value: "7K+", label: { ar: "عضو ومنتسب", en: "Members & affiliates" } },
  { value: "25+", label: { ar: "شريك ورعاة", en: "Partners & sponsors" } },
];

export const goals: { title: Localized; description: Localized }[] = [
  {
    title: { ar: "منصة وطنية للمعرفة الهندسية", en: "A national platform for engineering knowledge" },
    description: {
      ar: "أن يكون القسم الجهة الأولى في المملكة لتنظيم المؤتمرات والمعارض الهندسية المتخصصة بمعايير دولية.",
      en: "To be the Kingdom's leading organiser of specialised engineering conferences and exhibitions to international standards.",
    },
  },
  {
    title: { ar: "ربط الصناعة بالمهنة", en: "Connecting industry and the profession" },
    description: {
      ar: "بناء جسور مستدامة بين الشركات والمهندسين والجهات الحكومية عبر برامج فنية وفرص تواصل حقيقية.",
      en: "Building lasting bridges between companies, engineers and government entities through technical programmes and genuine networking.",
    },
  },
  {
    title: { ar: "تمكين المهندس البحريني", en: "Empowering the Bahraini engineer" },
    description: {
      ar: "توفير محتوى تطويري وفرص ظهور مهني للمهندسين الشباب والخريجين ضمن كل فعالية ننظمها.",
      en: "Delivering development content and professional exposure for young engineers and graduates in every event we run.",
    },
  },
  {
    title: { ar: "استدامة الأثر", en: "Sustainable impact" },
    description: {
      ar: "قياس أثر كل فعالية وتوثيقه في تقارير واضحة للشركاء والرعاة، وتطوير النسخ القادمة بناءً عليه.",
      en: "Measuring and documenting the impact of every event for partners and sponsors, and improving the next edition accordingly.",
    },
  },
];

export const teamUnits: {
  unit: Localized;
  size: string;
  role: Localized;
  members: { name: Localized; title: Localized }[];
}[] = [
  {
    unit: { ar: "الإدارة والتخطيط", en: "Leadership & planning" },
    size: "4",
    role: {
      ar: "وضع الاستراتيجية السنوية للفعاليات، واعتماد الميزانيات، والتنسيق مع مجلس إدارة الجمعية.",
      en: "Setting the annual events strategy, approving budgets and coordinating with the BSE board.",
    },
    members: [
      { name: { ar: "رئيس القسم", en: "Head of Department" }, title: { ar: "الإشراف العام", en: "Overall supervision" } },
      { name: { ar: "نائب رئيس القسم", en: "Deputy Head" }, title: { ar: "التخطيط والمتابعة", en: "Planning & follow-up" } },
      { name: { ar: "منسق الشراكات", en: "Partnerships Coordinator" }, title: { ar: "الرعاة والجهات", en: "Sponsors & entities" } },
      { name: { ar: "أمين السر", en: "Secretary" }, title: { ar: "التوثيق والتقارير", en: "Documentation & reporting" } },
    ],
  },
  {
    unit: { ar: "التشغيل واللوجستيات", en: "Operations & logistics" },
    size: "6",
    role: {
      ar: "تنفيذ الفعالية في الموقع: المواقع، المقاولون، الأمن والسلامة، والجدولة اليومية.",
      en: "On-site delivery: venues, contractors, health & safety and daily scheduling.",
    },
    members: [
      { name: { ar: "مدير التشغيل", en: "Operations Manager" }, title: { ar: "إدارة الموقع", en: "Venue management" } },
      { name: { ar: "منسق المعارض", en: "Exhibition Coordinator" }, title: { ar: "مخطط الأرضية والأجنحة", en: "Floorplan & booths" } },
      { name: { ar: "فريق الدعم الميداني", en: "Field Support Team" }, title: { ar: "4 أعضاء", en: "4 members" } },
    ],
  },
  {
    unit: { ar: "البرامج العلمية", en: "Technical programmes" },
    size: "5",
    role: {
      ar: "بناء أجندة المؤتمرات، وتحكيم الأوراق، والتنسيق مع اللجان الفنية والمتحدثين.",
      en: "Building conference agendas, reviewing papers and coordinating technical committees and speakers.",
    },
    members: [
      { name: { ar: "رئيس اللجنة العلمية", en: "Technical Committee Chair" }, title: { ar: "الأجندة العلمية", en: "Technical agenda" } },
      { name: { ar: "محكّمون فنيون", en: "Technical Reviewers" }, title: { ar: "3 أعضاء", en: "3 members" } },
      { name: { ar: "منسق المتحدثين", en: "Speakers Coordinator" }, title: { ar: "الاستضافة والسير الذاتية", en: "Hosting & bios" } },
    ],
  },
  {
    unit: { ar: "التسويق والإعلام", en: "Marketing & media" },
    size: "5",
    role: {
      ar: "الحملات الرقمية، والتغطية الإعلامية، والتصميم، وإنتاج المحتوى المرئي للفعاليات.",
      en: "Digital campaigns, media coverage, design and visual content production.",
    },
    members: [
      { name: { ar: "مدير التسويق", en: "Marketing Manager" }, title: { ar: "الحملات والعلاقات", en: "Campaigns & relations" } },
      { name: { ar: "مصمم جرافيك", en: "Graphic Designer" }, title: { ar: "الهوية البصرية", en: "Visual identity" } },
      { name: { ar: "فريق المحتوى والتصوير", en: "Content & Photography" }, title: { ar: "3 أعضاء", en: "3 members" } },
    ],
  },
  {
    unit: { ar: "خدمة الحضور والتسجيل", en: "Registration & attendee care" },
    size: "4",
    role: {
      ar: "أنظمة التسجيل، والشارات، واستقبال الضيوف، والدعم المباشر خلال أيام الفعالية.",
      en: "Registration systems, badging, guest reception and live support during event days.",
    },
    members: [
      { name: { ar: "مسؤول التسجيل", en: "Registration Lead" }, title: { ar: "الأنظمة والبيانات", en: "Systems & data" } },
      { name: { ar: "فريق الاستقبال", en: "Reception Team" }, title: { ar: "3 أعضاء", en: "3 members" } },
    ],
  },
];
