import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, MapPin, Tag } from "lucide-react";
import { useState } from "react";

import heroEvents from "@/assets/hero-events.jpg";
import { PageHero, SectionHeading } from "@/components/Sections";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { events } from "@/data/content";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "الفعاليات والأنشطة والندوات | BSE Event" },
      {
        name: "description",
        content:
          "فعاليات وأنشطة وندوات جمعية المهندسين البحرينية: يوم المهندس البحريني، الغبقة الرمضانية، تكريم المتطوعين، الندوات الفنية والزيارات الميدانية.",
      },
      { property: "og:title", content: "الفعاليات والأنشطة والندوات | BSE Event" },
      {
        property: "og:description",
        content: "برنامج فعاليات وأنشطة وندوات الجمعية على مدار العام للأعضاء والمجتمع الهندسي.",
      },
    ],
  }),
  component: Events,
});

function Events() {
  const { p, t } = useI18n();
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");
  const list = events.filter((e) => filter === "all" || e.status === filter);

  const filters = [
    { key: "all" as const, label: p({ ar: "الكل", en: "All" }) },
    { key: "upcoming" as const, label: t("upcoming") },
    { key: "past" as const, label: t("past") },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("navEvents")}
        title={p({ ar: "فعاليات وأنشطة وندوات الجمعية", en: "BSE events, activities & seminars" })}
        description={p({
          ar: "برنامج سنوي متصل من الفعاليات الوطنية والاجتماعية والندوات الفنية والزيارات الميدانية يخدم أعضاء الجمعية والمجتمع الهندسي في المملكة.",
          en: "A continuous annual programme of national and social events, technical seminars and site visits serving members and the engineering community.",
        })}
        image={heroEvents}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow={p({ ar: "البرنامج", en: "Programme" })}
          title={p({ ar: "الفعاليات والأنشطة", en: "Events & activities" })}
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

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((e) => (
            <article key={e.title.en} className="surface-card flex flex-col p-6">
              <div className="flex items-center gap-2">
                <Badge variant={e.status === "upcoming" ? "default" : "secondary"}>
                  {e.status === "upcoming" ? t("upcoming") : t("past")}
                </Badge>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Tag className="size-3.5 text-accent" />
                  {p(e.category)}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-primary">{p(e.title)}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p(e.summary)}</p>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="size-3.5 text-accent" />
                  {p(e.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="size-3.5 text-accent" />
                  {t("address")}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="eyebrow">{t("contactUs")}</p>
          <h2 className="mt-3 text-3xl font-bold text-primary">
            {p({
              ar: "هل لديك فكرة نشاط أو ندوة؟",
              en: "Have an idea for an activity or seminar?",
            })}
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {p({
              ar: "نستقبل مقترحات الأعضاء واللجان الفنية والشركات لتنظيم ندوات وزيارات وورش عمل متخصصة.",
              en: "We welcome proposals from members, technical committees and companies for seminars, visits and specialised workshops.",
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
