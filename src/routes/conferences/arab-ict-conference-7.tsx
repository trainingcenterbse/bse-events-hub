import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, Download, MapPin, Users } from "lucide-react";

import heroConference from "@/assets/hero-conference.jpg";
import { PageHero, SectionHeading } from "@/components/Sections";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/conferences/arab-ict-conference-7")({
  head: () => ({
    meta: [
      { title: "المؤتمر العربي السابع لتكنولوجيا المعلومات والاتصالات | BSE Event" },
      {
        name: "description",
        content: "مؤتمر عربي يناقش التحول الرقمي والذكاء الاصطناعي والأمن السيبراني في القطاعات الهندسية.",
      },
      { property: "og:title", content: "المؤتمر العربي السابع لتكنولوجيا المعلومات والاتصالات | BSE Event" },
      {
        property: "og:description",
        content: "مؤتمر عربي يناقش التحول الرقمي والذكاء الاصطناعي والأمن السيبراني في القطاعات الهندسية.",
      },
    ],
  }),
  component: ArabIctConference7,
});

function ArabIctConference7() {
  const { p, t } = useI18n();

  const stats = [
    { value: "12+", label: { ar: "دولة عربية", en: "Arab countries" } },
    { value: "35+", label: { ar: "متحدث", en: "Speakers" } },
    { value: "40+", label: { ar: "ورقة وبحث", en: "Papers & research" } },
    { value: "2", label: { ar: "أيام برنامج", en: "Programme days" } },
  ];

  const tracks = [
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
  ];

  const organisers = [
    { ar: "اتحاد المهندسين العرب", en: "Federation of Arab Engineers" },
    { ar: "جمعية المهندسين البحرينية", en: "Bahrain Society of Engineers" },
  ];

  const schedule = [
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
      date: { ar: "الأوراق والورش", en: "Papers & workshops" },
      sessions: [
        { time: "09:00", title: { ar: "عرض الأوراق الفنية", en: "Technical papers presentation" } },
        { time: "11:00", title: { ar: "ورشة التحول الرقمي", en: "Digital transformation workshop" } },
        { time: "14:00", title: { ar: "التوصيات الختامية", en: "Closing recommendations" } },
      ],
    },
  ];

  const speakers = [
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
    {
      name: { ar: "خبير الأمن السيبراني", en: "Cybersecurity expert" },
      role: { ar: "جلسة الأمن السيبراني", en: "Cybersecurity session" },
      org: { ar: "شركة تقنية", en: "Technology company" },
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("navConferences")}
        title={p({ ar: "المؤتمر العربي السابع لتكنولوجيا المعلومات والاتصالات", en: "7th Arab ICT Conference" })}
        description={p({
          ar: "مؤتمر عربي يناقش التحول الرقمي والذكاء الاصطناعي والأمن السيبراني في القطاعات الهندسية.",
          en: "An Arab conference on digital transformation, artificial intelligence and cybersecurity across engineering sectors.",
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
              <Badge variant="outline">{p({ ar: "النسخة السابعة", en: "7th Edition" })}</Badge>
            </div>
            
            <h2 className="mt-6 text-2xl font-bold text-primary">
              {p({ ar: "عن المؤتمر", en: "About the conference" })}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {p({
                ar: "مؤتمر عربي تشارك الجمعية في تنظيمه ضمن أنشطة اتحاد المهندسين العرب، ويستعرض أثر الذكاء الاصطناعي والحوسبة السحابية والأمن السيبراني على الممارسة الهندسية في القطاعات الحيوية، بمشاركة جامعات وشركات تقنية وجهات تنظيمية من الدول العربية.",
                en: "An Arab conference co-organised by BSE within the Federation of Arab Engineers' activities, examining the impact of AI, cloud computing and cybersecurity on engineering practice in critical sectors, with universities, technology companies and regulators from across the Arab world.",
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
                    <dd className="mt-1 text-xs text-muted-foreground">{p({ ar: "قاعة مؤتمرات مع منطقة عرض للحلول الرقمية", en: "Convention hall with digital solutions showcase" })}</dd>
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
