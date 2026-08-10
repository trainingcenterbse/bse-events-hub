import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, Download, MapPin, Users } from "lucide-react";

import heroConference from "@/assets/hero-conference.jpg";
import { PageHero, SectionHeading } from "@/components/Sections";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/conferences/middle-east-corrosion-18")({
  head: () => ({
    meta: [
      { title: "مؤتمر ومعرض الشرق الأوسط الثامن عشر للتآكل | BSE Event" },
      {
        name: "description",
        content: "مؤتمر إقليمي متخصص في علوم وهندسة التآكل، يركز على حماية البنية التحتية الصناعية في البيئة الخليجية.",
      },
      { property: "og:title", content: "مؤتمر ومعرض الشرق الأوسط الثامن عشر للتآكل | BSE Event" },
      {
        property: "og:description",
        content: "مؤتمر إقليمي متخصص في علوم وهندسة التآكل، يركز على حماية البنية التحتية الصناعية في البيئة الخليجية.",
      },
    ],
  }),
  component: MiddleEastCorrosion18,
});

function MiddleEastCorrosion18() {
  const { p, t } = useI18n();

  const stats = [
    { value: "18", label: { ar: "نسخة إقليمية", en: "Regional editions" } },
    { value: "25+", label: { ar: "شركة عارضة", en: "Exhibiting companies" } },
    { value: "45+", label: { ar: "ورقة فنية", en: "Technical papers" } },
    { value: "3", label: { ar: "أيام برنامج", en: "Programme days" } },
  ];

  const tracks = [
    {
      title: { ar: "التآكل في البيئة الخليجية", en: "Corrosion in the Gulf environment" },
      description: {
        ar: "تأثير البيئة الملحية والرطوبة العالية على المعادن والهياكل.",
        en: "Impact of saline environment and high humidity on metals and structures.",
      },
    },
    {
      title: { ar: "الحماية الكاثودية", en: "Cathodic protection" },
      description: {
        ar: "أنظمة الحماية الكاثودية للأنابيب والمنشآت البحرية.",
        en: "Cathodic protection systems for pipelines and offshore structures.",
      },
    },
    {
      title: { ar: "الطلاءات والمواد المقاومة", en: "Coatings and resistant materials" },
      description: {
        ar: "تقنيات الطلاء المتقدمة والمواد المقاومة للتآكل.",
        en: "Advanced coating technologies and corrosion-resistant materials.",
      },
    },
  ];

  const organisers = [
    { ar: "الجمعية العالمية للتآكل NACE", en: "NACE International" },
    { ar: "جمعية المهندسين البحرينية", en: "Bahrain Society of Engineers" },
  ];

  const schedule = [
    {
      day: { ar: "اليوم الأول", en: "Day one" },
      date: { ar: "الافتتاح والجلسات الرئيسية", en: "Opening & keynotes" },
      sessions: [
        { time: "09:00", title: { ar: "التسجيل واستقبال الضيوف", en: "Registration & guest reception" } },
        { time: "10:00", title: { ar: "حفل الافتتاح الرسمي", en: "Official opening ceremony" } },
        { time: "11:00", title: { ar: "الجلسة الرئيسية: تحديات التآكل في الخليج", en: "Keynote: Corrosion challenges in the Gulf" } },
        { time: "14:00", title: { ar: "جلسة الحماية الكاثودية", en: "Cathodic protection session" } },
      ],
    },
    {
      day: { ar: "اليوم الثاني", en: "Day two" },
      date: { ar: "الأوراق وورش العمل", en: "Papers & workshops" },
      sessions: [
        { time: "09:00", title: { ar: "مسار الطلاءات والمواد", en: "Coatings & materials track" } },
        { time: "11:30", title: { ar: "ورشة تقييم التآكل", en: "Corrosion assessment workshop" } },
        { time: "14:00", title: { ar: "مسار التآكل في البنية التحتية", en: "Infrastructure corrosion track" } },
      ],
    },
    {
      day: { ar: "اليوم الثالث", en: "Day three" },
      date: { ar: "الزيارات والختام", en: "Visits & closing" },
      sessions: [
        { time: "09:00", title: { ar: "زيارات ميدانية لمشاريع التآكل", en: "Site visits to corrosion projects" } },
        { time: "13:00", title: { ar: "التوصيات الختامية", en: "Closing recommendations" } },
      ],
    },
  ];

  const speakers = [
    {
      name: { ar: "ممثل NACE International", en: "NACE International representative" },
      role: { ar: "كلمة الافتتاح", en: "Opening address" },
      org: { ar: "الجمعية العالمية للتآكل", en: "NACE International" },
    },
    {
      name: { ar: "خبير التآكل في البيئة البحرية", en: "Marine corrosion expert" },
      role: { ar: "جلسة رئيسية", en: "Keynote session" },
      org: { ar: "شركة نفط خليجية", en: "Gulf oil company" },
    },
    {
      name: { ar: "باحث في الطلاءات المقاومة", en: "Coatings researcher" },
      role: { ar: "ورقة فنية محكّمة", en: "Peer-reviewed paper" },
      org: { ar: "مركز أبحاث صناعي", en: "Industrial research center" },
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("navConferences")}
        title={p({ ar: "مؤتمر ومعرض الشرق الأوسط الثامن عشر للتآكل", en: "18th Middle East Corrosion Conference & Exhibition" })}
        description={p({
          ar: "مؤتمر إقليمي متخصص في علوم وهندسة التآكل، يركز على حماية البنية التحتية الصناعية في البيئة الخليجية.",
          en: "A regional conference specialising in corrosion science and engineering, focusing on protecting industrial infrastructure in the Gulf environment.",
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
              <Badge variant="secondary">{t("past")}</Badge>
              <Badge variant="outline">{p({ ar: "النسخة الثامنة عشرة", en: "18th Edition" })}</Badge>
            </div>
            
            <h2 className="mt-6 text-2xl font-bold text-primary">
              {p({ ar: "عن المؤتمر", en: "About the conference" })}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {p({
                ar: "مؤتمر ومعرض إقليمي متخصص في علوم وهندسة التآكل، يُعقد بالتعاون مع الجمعية العالمية للتآكل NACE ومشاركة شركات النفط والغاز والبتروكيماويات والمرافق في المنطقة. يركز المؤتمر على تحديات التآكل في البيئة الخليجية، ويقدم أوراقاً فنية محكّمة وورش عمل تقنية ومعرضاً للحلول في الحماية الكاثودية والطلاءات والمواد المقاومة.",
                en: "A regional conference and exhibition specialising in corrosion science and engineering, held with NACE International and the region's oil, gas, petrochemical and utility companies. The conference focuses on corrosion challenges in the Gulf environment, delivering peer-reviewed papers, technical workshops and an exhibition of solutions in cathodic protection, coatings and resistant materials.",
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
                    <dd className="mt-1 font-semibold text-foreground" dir="ltr">2024</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-accent" />
                  <div>
                    <dt className="text-muted-foreground">{p({ ar: "المكان", en: "Venue" })}</dt>
                    <dd className="mt-1 font-semibold text-foreground">{p({ ar: "مملكة البحرين", en: "Kingdom of Bahrain" })}</dd>
                    <dd className="mt-1 text-xs text-muted-foreground">{p({ ar: "قاعة مؤتمرات مع معرض للحلول المقاومة للتآكل", en: "Convention hall with corrosion solutions exhibition" })}</dd>
                  </div>
                </div>
              </dl>
              
              <Button asChild variant="outline" className="mt-5 w-full gap-2">
                <a href="https://maps.google.com/?q=Kingdom+of+Bahrain" target="_blank" rel="noreferrer">
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
