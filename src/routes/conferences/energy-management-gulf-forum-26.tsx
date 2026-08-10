import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, Download, MapPin, Users } from "lucide-react";

import heroConference from "@/assets/hero-conference.jpg";
import { PageHero, SectionHeading } from "@/components/Sections";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/conferences/energy-management-gulf-forum-26")({
  head: () => ({
    meta: [
      { title: "مؤتمر ومعرض إدارة الطاقة — الملتقى الهندسي الخليجي 26 | BSE Event" },
      {
        name: "description",
        content: "ملتقى خليجي يجمع جمعيات المهندسين وشركات الطاقة لمناقشة كفاءة الطاقة والتحول نحو الحياد الصفري.",
      },
      { property: "og:title", content: "مؤتمر ومعرض إدارة الطاقة — الملتقى الهندسي الخليجي 26 | BSE Event" },
      {
        property: "og:description",
        content: "ملتقى خليجي يجمع جمعيات المهندسين وشركات الطاقة لمناقشة كفاءة الطاقة والتحول نحو الحياد الصفري.",
      },
    ],
  }),
  component: EnergyManagementGulfForum26,
});

function EnergyManagementGulfForum26() {
  const { p, t } = useI18n();

  const stats = [
    { value: "6", label: { ar: "دول خليجية مشاركة", en: "GCC countries" } },
    { value: "40+", label: { ar: "متحدث ومتحدثة", en: "Speakers" } },
    { value: "1200+", label: { ar: "حاضر متوقع", en: "Expected attendees" } },
    { value: "3", label: { ar: "أيام برنامج", en: "Programme days" } },
  ];

  const tracks = [
    {
      title: { ar: "كفاءة الطاقة في المباني", en: "Energy efficiency in buildings" },
      description: {
        ar: "معايير التشييد الأخضر، العزل الحراري، وأنظمة إدارة الطاقة الذكية.",
        en: "Green building standards, thermal insulation and smart energy management systems.",
      },
    },
    {
      title: { ar: "الطاقة المتجددة والتخزين", en: "Renewables & storage" },
      description: {
        ar: "الطاقة الشمسية والرياح، وتقنيات تخزين الطاقة المتقدمة.",
        en: "Solar and wind power, and advanced energy storage technologies.",
      },
    },
    {
      title: { ar: "التحول الرقمي للمرافق", en: "Digital utilities" },
      description: {
        ar: "الشبكات الذكية، والقياس عن بعد، وتحليل البيانات التشغيلية.",
        en: "Smart grids, remote metering and operational data analytics.",
      },
    },
  ];

  const organisers = [
    { ar: "جمعية المهندسين البحرينية", en: "Bahrain Society of Engineers" },
    { ar: "اتحاد المهندسين الخليجيين", en: "Federation of GCC Engineers" },
  ];

  const schedule = [
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
  ];

  const speakers = [
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
  ];

  return (
    <>
      <PageHero
        eyebrow={t("navConferences")}
        title={p({ ar: "مؤتمر ومعرض إدارة الطاقة — الملتقى الهندسي الخليجي 26", en: "Energy Management Conference & Exhibition — 26th Gulf Engineering Forum" })}
        description={p({
          ar: "ملتقى خليجي يجمع جمعيات المهندسين وشركات الطاقة لمناقشة كفاءة الطاقة والتحول نحو الحياد الصفري.",
          en: "A Gulf-wide forum uniting engineering societies and energy companies around efficiency and the net-zero transition.",
        })}
        image={heroConference}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <Link
          to="/conferences"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent-foreground"
        >
          ← {t("backToConferences")}
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">{t("upcoming")}</Badge>
              <Badge variant="outline">{p({ ar: "النسخة 26", en: "26th Edition" })}</Badge>
            </div>
            
            <h2 className="mt-6 text-2xl font-bold text-primary">
              {p({ ar: "عن المؤتمر", en: "About the conference" })}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {p({
                ar: "تستضيف جمعية المهندسين البحرينية النسخة السادسة والعشرين من الملتقى الهندسي الخليجي تحت عنوان إدارة الطاقة، بالتعاون مع اتحاد المهندسين الخليجيين. يجمع الملتقى صنّاع القرار في قطاع الطاقة والمرافق مع الجامعات ومكاتب الاستشارات الهندسية، ويضم برنامجاً علمياً بأوراق محكّمة، ومعرضاً مصاحباً للتقنيات، وجلسات حوارية حول السياسات والتشريعات وكفاءة الاستهلاك في مباني ومصانع المنطقة.",
                en: "BSE hosts the 26th edition of the Gulf Engineering Forum under the theme of energy management, in cooperation with the Federation of GCC Engineers. The forum brings energy and utility decision makers together with universities and engineering consultancies, featuring a peer-reviewed technical programme, an accompanying technology exhibition and panel sessions on policy, regulation and consumption efficiency across the region's buildings and plants.",
              })}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6">
              {stats.slice(0, 4).map((s) => (
                <div key={s.value}>
                  <p className="font-display text-3xl font-bold text-primary">{s.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{p(s.label)}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-10 text-xl font-bold text-primary">
              {p({ ar: "المسارات الرئيسية", en: "Main tracks" })}
            </h3>
            <div className="mt-4 grid gap-4">
              {tracks.map((track, i) => (
                <div key={i} className="rounded-lg border border-border bg-secondary/30 p-4">
                  <h4 className="font-semibold text-primary">{p(track.title)}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{p(track.description)}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-10 text-xl font-bold text-primary">
              {p({ ar: "المنظمون", en: "Organisers" })}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {organisers.map((org, i) => (
                <Badge key={i} variant="outline">
                  {p(org)}
                </Badge>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="surface-card p-6">
              <h3 className="text-lg font-bold text-primary">{p({ ar: "تفاصيل المؤتمر", en: "Conference details" })}</h3>
              <dl className="mt-4 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <CalendarDays className="mt-0.5 size-5 shrink-0 text-accent" />
                  <div>
                    <dt className="text-muted-foreground">{p({ ar: "التاريخ", en: "Date" })}</dt>
                    <dd className="mt-1 font-semibold text-foreground" dir="ltr">2025</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-accent" />
                  <div>
                    <dt className="text-muted-foreground">{p({ ar: "المكان", en: "Venue" })}</dt>
                    <dd className="mt-1 font-semibold text-foreground">{p({ ar: "مركز البحرين الدولي للمعارض والمؤتمرات", en: "Bahrain International Exhibition & Convention Centre" })}</dd>
                    <dd className="mt-1 text-xs text-muted-foreground">{p({ ar: "قاعة المؤتمرات الرئيسية مع معرض مصاحب", en: "Main convention hall with accompanying exhibition" })}</dd>
                  </div>
                </div>
              </dl>
              
              <Button asChild variant="outline" className="mt-5 w-full gap-2">
                <a href="https://maps.google.com/?q=Bahrain+International+Exhibition+Centre" target="_blank" rel="noreferrer">
                  <MapPin className="size-4" />
                  {p({ ar: "عرض الخريطة", en: "View map" })}
                </a>
              </Button>
            </div>

            <div className="surface-card p-6">
              <h3 className="text-lg font-bold text-primary">{p({ ar: "البروشور", en: "Brochure" })}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {p({ ar: "تحميل البروشور الرسمي للمؤتمر", en: "Download the official conference brochure" })}
              </p>
              <Button asChild variant="default" className="mt-4 w-full gap-2">
                <a href="https://bse.bh/ar/conferences/" target="_blank" rel="noreferrer">
                  <Download className="size-4" />
                  {p({ ar: "تحميل البروشور", en: "Download brochure" })}
                </a>
              </Button>
            </div>

            <div className="surface-card p-6">
              <h3 className="text-lg font-bold text-primary">{t("becomeSponsor")}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {p({ ar: "تواصل معنا للاستفسار عن فرص الرعاية", en: "Contact us for sponsorship opportunities" })}
              </p>
              <Button asChild className="mt-4 w-full">
                <a href="#contact">{t("contactUs")}</a>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      {/* Schedule */}
      <section className="band-blue relative overflow-hidden py-24">
        <div className="dot-grid-light absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading
            eyebrow={p({ ar: "البرنامج", en: "Programme" })}
            title={p({ ar: "جدول المؤتمر", en: "Conference schedule" })}
            description={p({
              ar: "الجدول الزمني للمؤتمر مع الجلسات والورش العملية",
              en: "Conference timeline with sessions and workshops",
            })}
          />

          <div className="mt-12 space-y-8">
            {schedule.map((day, dayIndex) => (
              <div key={dayIndex} className="glass-panel p-8">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-primary-foreground">
                      {p(day.day)}
                    </h3>
                    <p className="text-sm text-primary-foreground/70">{p(day.date)}</p>
                  </div>
                  <Badge className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
                    {p({ ar: `اليوم ${dayIndex + 1}`, en: `Day ${dayIndex + 1}` })}
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  {day.sessions.map((session, sessionIndex) => (
                    <div key={sessionIndex} className="flex gap-4 rounded-lg bg-white/5 p-4">
                      <span className="shrink-0 font-mono text-sm font-semibold text-accent" dir="ltr">
                        {session.time}
                      </span>
                      <p className="text-sm text-primary-foreground/90">{p(session.title)}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionHeading
          eyebrow={p({ ar: "المتحدثون", en: "Speakers" })}
          title={p({ ar: "متحدثو المؤتمر", en: "Conference speakers" })}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker, i) => (
            <div key={i} className="surface-card p-6">
              <div className="flex items-start gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-full bg-primary/10 font-display text-lg font-bold text-primary">
                  {p(speaker.name).charAt(0)}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-primary">{p(speaker.name)}</h4>
                  <p className="mt-1 text-sm text-accent">{p(speaker.role)}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{p(speaker.org)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
