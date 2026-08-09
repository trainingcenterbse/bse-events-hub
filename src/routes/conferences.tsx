import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { useState } from "react";

import heroConference from "@/assets/hero-conference.jpg";
import { CountUp, Reveal } from "@/components/Reveal";
import { PageHero, SectionHeading } from "@/components/Sections";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { conferences } from "@/data/content";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/conferences")({
  head: () => ({
    meta: [
      { title: "المؤتمرات | BSE Event" },
      {
        name: "description",
        content:
          "مؤتمرات جمعية المهندسين البحرينية: الملتقى الهندسي الخليجي، مؤتمر الصيانة MAINTCON، المؤتمر العربي لتكنولوجيا المعلومات، ومؤتمر الشرق الأوسط للتآكل.",
      },
      { property: "og:title", content: "المؤتمرات | BSE Event" },
      {
        property: "og:description",
        content: "قائمة المؤتمرات الحالية والسابقة التي تنظمها أو تستضيفها جمعية المهندسين البحرينية.",
      },
    ],
  }),
  component: Conferences,
});

const impact = [
  { value: "26", label: { ar: "نسخة من الملتقى الهندسي الخليجي", en: "Editions of the Gulf Engineering Forum" } },
  { value: "150+", label: { ar: "ورقة فنية محكّمة", en: "Peer-reviewed technical papers" } },
  { value: "20+", label: { ar: "دولة مشاركة", en: "Countries represented" } },
];

function Conferences() {
  const { p, t } = useI18n();
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");

  const list = conferences.filter((c) => filter === "all" || c.status === filter);

  const filters = [
    { key: "all" as const, label: p({ ar: "الكل", en: "All" }) },
    { key: "upcoming" as const, label: t("upcoming") },
    { key: "past" as const, label: t("past") },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("navConferences")}
        title={p({ ar: "المؤتمرات الهندسية", en: "Engineering conferences" })}
        description={p({
          ar: "مؤتمرات إقليمية ودولية متخصصة تنظمها الجمعية أو تستضيفها بالشراكة مع الاتحادات والجمعيات المهنية، بأوراق فنية محكّمة ومعارض مصاحبة.",
          en: "Specialised regional and international conferences organised or hosted by BSE with professional federations, featuring peer-reviewed papers and accompanying exhibitions.",
        })}
        image={heroConference}
      />

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:grid-cols-3 sm:px-6">
          {impact.map((s, i) => (
            <Reveal key={s.value} delay={i * 0.08} className="border-s-2 border-accent/50 ps-5">
              <CountUp value={s.value} className="numeral block text-5xl font-bold text-primary" />
              <p className="mt-3 text-sm text-muted-foreground">{p(s.label)}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionHeading
          eyebrow={p({ ar: "الأجندة", en: "Agenda" })}
          title={p({ ar: "مؤتمراتنا", en: "Our conferences" })}
          action={
            <div className="flex gap-2 rounded-full border border-border bg-card p-1">
              {filters.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setFilter(f.key)}
                  className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                    filter === f.key
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          }
        />

        <div className="mt-14 space-y-7">
          {list.map((c, i) => (
            <Reveal key={c.title.en} delay={i * 0.06}>
              <article className="surface-card relative overflow-hidden p-8 lg:flex lg:items-stretch lg:gap-10 lg:p-10">
                <span
                  className="ghost-numeral pointer-events-none absolute -top-4 end-6 text-[7rem] sm:text-[9rem]"
                  aria-hidden
                >
                  {p(c.date)}
                </span>
                <div className="relative flex shrink-0 flex-col items-start gap-3 lg:w-56">
                  <Badge variant={c.status === "upcoming" ? "default" : "secondary"}>
                    {c.status === "upcoming" ? t("upcoming") : t("past")}
                  </Badge>
                  <p className="numeral text-5xl font-bold text-primary" dir="ltr">
                    {p(c.date)}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent-foreground">
                    {p(c.edition)}
                  </p>
                  <span className="gold-rule mt-2 hidden h-px w-16 lg:block" aria-hidden />
                </div>
                <div className="relative mt-6 flex-1 lg:mt-0 lg:border-s lg:border-border lg:ps-10">
                  <h3 className="font-display text-2xl font-bold text-primary">{p(c.title)}</h3>
                  <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{p(c.summary)}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="size-4 text-accent" />
                      {p(c.venue)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="size-4 text-accent" />
                      {p(c.date)}
                    </span>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {c.tracks.map((tp) => (
                      <Badge key={tp.title.en} variant="outline">
                        {p(tp.title)}
                      </Badge>
                    ))}
                  </div>
                  {c.url && (
                    <Button asChild size="sm" className="mt-6 gap-1.5">
                      <a href={c.url} target="_blank" rel="noreferrer">
                        {t("details")}
                        <ArrowUpRight className="size-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-primary-deep py-24 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="eyebrow">{t("becomeSponsor")}</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            {p({
              ar: "هل ترغب في رعاية مؤتمر أو تقديم ورقة فنية؟",
              en: "Interested in sponsoring a conference or submitting a paper?",
            })}
          </h2>
          <p className="mt-4 leading-relaxed text-primary-foreground/70">
            {p({
              ar: "فريق البرامج العلمية والشراكات يستقبل طلبات الرعاية وملخصات الأوراق الفنية على مدار العام.",
              en: "Our technical programmes and partnerships team receives sponsorship requests and paper abstracts year-round.",
            })}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="secondary">
              <Link to="/sponsors">{t("sponsorTiers")}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href="#contact">{t("contactUs")}</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
