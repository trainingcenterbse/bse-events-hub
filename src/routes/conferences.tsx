import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { useState } from "react";

import heroConference from "@/assets/hero-conference.jpg";
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

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow={p({ ar: "الأجندة", en: "Agenda" })}
          title={p({ ar: "مؤتمراتنا", en: "Our conferences" })}
          action={
            <div className="flex gap-2">
              {filters.map((f) => (
                <Button
                  key={f.key}
                  size="sm"
                  variant={filter === f.key ? "default" : "outline"}
                  onClick={() => setFilter(f.key)}
                >
                  {f.label}
                </Button>
              ))}
            </div>
          }
        />

        <div className="mt-12 space-y-6">
          {list.map((c) => (
            <article key={c.title.en} className="surface-card p-7 lg:flex lg:items-start lg:gap-8">
              <div className="flex shrink-0 flex-col items-start gap-2 lg:w-48">
                <Badge variant={c.status === "upcoming" ? "default" : "secondary"}>
                  {c.status === "upcoming" ? t("upcoming") : t("past")}
                </Badge>
                <p className="font-display text-3xl font-bold text-primary" dir="ltr">
                  {p(c.date)}
                </p>
                <p className="text-xs text-muted-foreground">{p(c.edition)}</p>
              </div>
              <div className="mt-5 flex-1 lg:mt-0">
                <h3 className="text-xl font-bold text-primary">{p(c.title)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p(c.summary)}</p>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-accent" />
                    {p(c.venue)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="size-3.5 text-accent" />
                    {p(c.date)}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.topics.map((tp) => (
                    <Badge key={tp.en} variant="outline">
                      {p(tp)}
                    </Badge>
                  ))}
                </div>
                {c.url && (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent-foreground"
                  >
                    {t("details")}
                    <ArrowUpRight className="size-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="eyebrow">{t("becomeSponsor")}</p>
          <h2 className="mt-3 text-3xl font-bold text-primary">
            {p({
              ar: "هل ترغب في رعاية مؤتمر أو تقديم ورقة فنية؟",
              en: "Interested in sponsoring a conference or submitting a paper?",
            })}
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {p({
              ar: "فريق البرامج العلمية والشراكات يستقبل طلبات الرعاية وملخصات الأوراق الفنية على مدار العام.",
              en: "Our technical programmes and partnerships team receives sponsorship requests and paper abstracts year-round.",
            })}
          </p>
          <Button asChild size="lg" className="mt-8">
            <a href="#contact">{t("contactUs")}</a>
          </Button>
        </div>
      </section>
    </>
  );
}
