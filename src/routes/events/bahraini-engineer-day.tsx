import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, MapPin, Users } from "lucide-react";

import heroEvents from "@/assets/hero-events.jpg";
import { PageHero, SectionHeading } from "@/components/Sections";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/events/bahraini-engineer-day")({
  head: () => ({
    meta: [
      { title: "يوم المهندس البحريني | BSE Event" },
      {
        name: "description",
        content: "احتفالية وطنية سنوية تكرّم المهندس البحريني وتبرز إنجازاته في مشاريع المملكة الكبرى، مع معرض مصاحب وجلسات حوارية.",
      },
      { property: "og:title", content: "يوم المهندس البحريني | BSE Event" },
      {
        property: "og:description",
        content: "احتفالية وطنية سنوية تكرّم المهندس البحريني وتبرز إنجازاته في مشاريع المملكة الكبرى.",
      },
    ],
  }),
  component: BahrainiEngineerDay,
});

function BahrainiEngineerDay() {
  const { p, t } = useI18n();

  const highlights = [
    { ar: "تكريم المهندسين المتميزين وأصحاب المسيرة المهنية", en: "Honouring distinguished engineers and lifetime achievers" },
    { ar: "معرض لمشاريع هندسية وطنية بمشاركة الشركات", en: "Showcase of national engineering projects with companies" },
    { ar: "جلسة حوارية مع قيادات القطاع الهندسي", en: "Panel session with engineering sector leaders" },
    { ar: "فرص ظهور واضحة للرعاة على المسرح والمطبوعات", en: "Clear sponsor visibility on stage and in print" },
  ];

  const stats = [
    { value: "800+", label: { ar: "حاضر", en: "Attendees" } },
    { value: "30+", label: { ar: "مكرّم", en: "Honourees" } },
    { value: "12+", label: { ar: "جهة راعية", en: "Sponsors" } },
  ];

  const program = [
    { time: "17:30", title: { ar: "استقبال الضيوف والتسجيل", en: "Guest reception & registration" } },
    { time: "18:15", title: { ar: "الكلمات الرسمية وكلمة الجمعية", en: "Official addresses & BSE remarks" } },
    { time: "19:00", title: { ar: "حفل التكريم", en: "Awards ceremony" } },
    { time: "20:00", title: { ar: "جولة في معرض المشاريع ولقاءات مهنية", en: "Projects showcase tour & networking" } },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("navEvents")}
        title={p({ ar: "يوم المهندس البحريني", en: "Bahraini Engineer Day" })}
        description={p({
          ar: "احتفالية وطنية سنوية تكرّم المهندس البحريني وتبرز إنجازاته في مشاريع المملكة الكبرى، مع معرض مصاحب وجلسات حوارية.",
          en: "An annual national celebration honouring Bahraini engineers and their contribution to the Kingdom's major projects, with an accompanying showcase and panel sessions.",
        })}
        image={heroEvents}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <Link
          to="/events"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent-foreground"
        >
          ← {t("backToEvents")}
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">{t("upcoming")}</Badge>
              <Badge variant="outline">{p({ ar: "فعالية وطنية", en: "National event" })}</Badge>
            </div>
            
            <h2 className="mt-6 text-2xl font-bold text-primary">
              {p({ ar: "عن الفعالية", en: "About the event" })}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {p({
                ar: "يوم المهندس البحريني هو أبرز فعالية وطنية ينظمها قسم الفعاليات، ويُقام بحضور رسمي رفيع لتكريم المهندسين والمهندسات المتميزين وإبراز إسهام المهنة الهندسية في مشاريع البنية التحتية والطاقة والإسكان في المملكة. يشمل البرنامج حفل تكريم، ومعرضاً لمشاريع هندسية وطنية، وجلسة حوارية مع قيادات القطاع، ولقاءات تواصل مهني للحضور والرعاة.",
                en: "Bahraini Engineer Day is the department's flagship national event, held with senior official attendance to honour distinguished engineers and highlight the profession's contribution to the Kingdom's infrastructure, energy and housing projects. The programme includes an awards ceremony, a national engineering projects showcase, a leadership panel and networking for attendees and sponsors.",
              })}
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
              {stats.map((s) => (
                <div key={s.value}>
                  <p className="font-display text-3xl font-bold text-primary">{s.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{p(s.label)}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-10 text-xl font-bold text-primary">
              {p({ ar: "أبرز ما يميز الفعالية", en: "Event highlights" })}
            </h3>
            <div className="mt-4 space-y-3">
              {highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 size-2 shrink-0 rounded-full bg-accent" />
                  <p className="text-sm text-muted-foreground">{p(highlight)}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-10 text-xl font-bold text-primary">
              {p({ ar: "الجمهور المستهدف", en: "Target audience" })}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {p({
                ar: "المهندسون وأعضاء الجمعية، الجهات الحكومية، الشركات الراعية، الإعلام.",
                en: "Engineers and BSE members, government entities, sponsoring companies and media.",
              })}
            </p>
          </div>

          <aside className="space-y-6">
            <div className="surface-card p-6">
              <h3 className="text-lg font-bold text-primary">{p({ ar: "تفاصيل الفعالية", en: "Event details" })}</h3>
              <dl className="mt-4 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <CalendarDays className="mt-0.5 size-5 shrink-0 text-accent" />
                  <div>
                    <dt className="text-muted-foreground">{p({ ar: "التاريخ", en: "Date" })}</dt>
                    <dd className="mt-1 font-semibold text-foreground">{p({ ar: "سنوياً", en: "Annually" })}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-accent" />
                  <div>
                    <dt className="text-muted-foreground">{p({ ar: "المكان", en: "Venue" })}</dt>
                    <dd className="mt-1 font-semibold text-foreground">{p({ ar: "قاعة كبرى — مملكة البحرين", en: "Grand hall — Kingdom of Bahrain" })}</dd>
                  </div>
                </div>
              </dl>
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

      {/* Program */}
      <section className="band-blue relative overflow-hidden py-24">
        <div className="dot-grid-light absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading
            eyebrow={p({ ar: "البرنامج", en: "Programme" })}
            title={p({ ar: "جدول الفعالية", en: "Event schedule" })}
            description={p({
              ar: "الجدول الزمني للفعالية مع الجلسات والأنشطة",
              en: "Event timeline with sessions and activities",
            })}
          />

          <div className="mt-12 space-y-4">
            {program.map((item, i) => (
              <div key={i} className="glass-panel flex gap-4 p-6">
                <span className="shrink-0 font-mono text-lg font-bold text-accent" dir="ltr">
                  {item.time}
                </span>
                <p className="text-base text-primary-foreground">{p(item.title)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
