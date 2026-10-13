import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import heroEvents from "@/assets/hero-events.jpg";
import { ClosingCta } from "@/components/bse/ClosingCta";
import { EditorialSectionHeading } from "@/components/bse/EditorialSectionHeading";
import { EventFilterBar, type EventFilter } from "@/components/bse/EventFilterBar";
import { EventHighlights } from "@/components/bse/EventHighlights";
import { EventTimelineRow } from "@/components/bse/EventTimelineRow";
import { SharedSplitHero } from "@/components/bse/SharedSplitHero";
import { StatStrip } from "@/components/bse/StatStrip";
import { TypographyH2 } from "@/components/bse/Typography";
import { Button } from "@/components/ui/button";
import { events } from "@/data/content";
import { eventCovers } from "@/lib/presentation";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/events/")({
  head: () => ({
    meta: [
      { title: "الفعاليات والأنشطة والندوات | BSE Event" },
      { name: "description", content: "فعاليات وأنشطة وندوات جمعية المهندسين البحرينية مع صفحات خاصة للفعاليات الرئيسية." },
    ],
  }),
  component: Events,
});

function Events() {
  const { p, t, lang } = useI18n();
  const [filter, setFilter] = useState<EventFilter>("all");
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const categories = useMemo(() => Array.from(new Map(events.map((event) => [event.category.en, p(event.category)])).entries()).map(([value, label]) => ({ value, label })), [p]);
  const filtered = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();
    return events.filter((event) => (filter === "all" || event.status === filter) && (category === "all" || event.category.en === category) && (!query || `${p(event.title)} ${p(event.summary)}`.toLocaleLowerCase().includes(query)));
  }, [category, filter, p, search]);
  const featuredSlugs = ["bahraini-engineer-day", "annual-general-assembly", "annual-ramadan-ghabga"];
  const featured = featuredSlugs.map((slug) => events.find((event) => event.slug === slug)).filter((event): event is (typeof events)[number] => Boolean(event));
  const scale = [
    { value: "120+", label: { ar: "فعالية ونشاط سنويًا", en: "Events & activities a year" } },
    { value: "9000+", label: { ar: "مشارك وحاضر", en: "Participants & attendees" } },
    { value: "150+", label: { ar: "متطوع في التنفيذ", en: "Volunteers in delivery" } },
    { value: "30+", label: { ar: "جهة شريكة", en: "Partner entities" } },
  ];

  return (
    <>
      <SharedSplitHero
        variant="home"
        eyebrow={t("eventsEyebrow")}
        title={t("eventsPageTitle")}
        description={t("eventsPageDesc")}
        image={heroEvents}
        imageAlt={lang === "ar" ? "حفل هندسي وتكريم مهندسين" : "Engineering ceremony honoring engineers"}
        primaryAction={<Button asChild size="lg" className="gap-2 rounded-bse-md bg-bse-gold text-bse-indigo-deep hover:bg-bse-gold-soft"><a href="#programme">{t("discoverProgram")}<span aria-hidden="true">←</span></a></Button>}
        secondaryAction={<Button asChild size="lg" variant="outline" className="gap-2 rounded-bse-md border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"><a href="#contact">{t("suggestEvent")}<span aria-hidden="true">↗</span></a></Button>}
        facts={<div className="mt-12 border-t border-white/15 pt-5 text-xs text-white/65">{t("eventsFacts")}</div>}
      />
      <StatStrip items={scale} />

      <section className="bse-orbital-light bg-white px-6 py-16 sm:py-20">
        <div className="relative z-10 mx-auto max-w-bse-content">
          <EditorialSectionHeading eyebrow={t("flagshipEvents")} title={t("threeMilestones")} description={t("flagshipEventsDesc")} />
          <EventHighlights items={featured.map((event) => ({ event, cover: eventCovers[event.cover] }))} />
        </div>
      </section>

      <section id="programme" className="bse-orbital-light bg-bse-canvas-soft px-6 py-16 sm:py-20">
        <div className="relative z-10 mx-auto max-w-bse-content">
          <EditorialSectionHeading eyebrow={t("annualProgramme")} title={t("eventsAndActivities")} description={t("eventsAndActivitiesDesc")} action={<span className="text-sm text-bse-ink-muted"><strong className="text-bse-indigo">{filtered.length}</strong> {t("results")}</span>} />
          <div className="mt-8"><EventFilterBar filter={filter} onFilterChange={setFilter} category={category} categories={categories} onCategoryChange={setCategory} search={search} onSearchChange={setSearch} /></div>
          <div className="relative mt-8 overflow-hidden rounded-bse-xl border-t-2 border-bse-gold bg-white">
            <div className="pointer-events-none absolute bottom-5 end-[142px] top-5 hidden w-0.5 bg-gradient-to-b from-bse-gold-soft via-bse-gold to-bse-gold-soft lg:block" />
            {filtered.map((event) => <EventTimelineRow key={event.slug} event={event} />)}
          </div>
          {filtered.length === 0 && <div className="mt-8 rounded-bse-xl border border-dashed border-bse-gold bg-white p-10 text-center"><TypographyH2 className="text-2xl">{t("noResultsFound")}</TypographyH2><p className="mt-3 text-sm text-bse-ink-muted">{t("tryDifferentSearchEvent")}</p><Button type="button" className="mt-5 rounded-bse-md" onClick={() => { setFilter("all"); setCategory("all"); setSearch(""); }}>{t("clearFiltersAction")}</Button></div>}
        </div>
      </section>

      <ClosingCta eyebrow={t("eventsClosingEyebrow")} title={t("eventsClosingTitle")} description={t("eventsClosingDesc")} action={<Button asChild size="lg" className="gap-2 rounded-bse-md bg-white text-bse-indigo hover:bg-bse-gold-soft"><a href="mailto:events@bse.bh">{t("suggestEventAction")}<span aria-hidden="true">←</span></a></Button>} />
    </>
  );
}
