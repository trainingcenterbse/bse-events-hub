import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, MapPin, Search, Sparkles, Tag } from "lucide-react";
import { useState } from "react";

import heroConference from "@/assets/hero-conference.jpg";
import heroEvents from "@/assets/hero-events.jpg";
import heroExhibition from "@/assets/hero-exhibition.jpg";
import heroSponsors from "@/assets/hero-sponsors.jpg";
import seminar from "@/assets/seminar.jpg";
import teamWork from "@/assets/team-work.jpg";
import { CountUp, Reveal } from "@/components/Reveal";
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

const covers = [heroSponsors, heroEvents, teamWork, heroConference, seminar, heroExhibition];

const scale: { value: string; label: { ar: string; en: string } }[] = [
  { value: "120+", label: { ar: "فعالية ونشاط سنوياً", en: "Events & activities a year" } },
  { value: "9000+", label: { ar: "مشارك وحاضر", en: "Participants & attendees" } },
  { value: "150+", label: { ar: "متطوع في التنفيذ", en: "Volunteers in delivery" } },
  { value: "30+", label: { ar: "جهة شريكة", en: "Partner entities" } },
];

function Events() {
  const { p, t } = useI18n();
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Get unique categories
  const categories = Array.from(new Set(events.map((e) => e.category.en)));
  
  const filteredList = events.filter((e) => {
    const statusMatch = filter === "all" || e.status === filter;
    const categoryMatch = categoryFilter === "all" || e.category.en === categoryFilter;
    const searchMatch = searchQuery === "" || 
      p(e.title).toLowerCase().includes(searchQuery.toLowerCase()) ||
      p(e.summary).toLowerCase().includes(searchQuery.toLowerCase());
    return statusMatch && categoryMatch && searchMatch;
  });

  const filters = [
    { key: "all" as const, label: p({ ar: "الكل", en: "All" }) },
    { key: "upcoming" as const, label: t("upcoming") },
    { key: "past" as const, label: t("past") },
  ];

  const featured = events[0]!;

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

      {/* Scale band */}
      <section className="bg-primary-deep text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 sm:px-6 lg:grid-cols-4">
          {scale.map((s, i) => (
            <Reveal key={s.value} delay={i * 0.08}>
              <CountUp value={s.value} className="numeral block text-5xl font-bold text-accent" />
              <p className="mt-3 text-sm text-primary-foreground/70">{p(s.label)}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured event */}
      <section className="mx-auto max-w-7xl px-4 pt-24 sm:px-6">
        <Reveal>
          <article className="showcase-card grid lg:grid-cols-2">
            <div className="relative min-h-[320px] overflow-hidden">
              <img
                src={heroSponsors}
                alt={p(featured.title)}
                width={1920}
                height={1088}
                loading="lazy"
                className="absolute inset-0 size-full object-cover"
              />
              <div className="veil absolute inset-0 lg:hidden" />
            </div>
            <div className="flex flex-col justify-center bg-card p-8 sm:p-12">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-accent-foreground">
                <Sparkles className="size-3.5" />
                {p({ ar: "الفعالية الأبرز", en: "Flagship event" })}
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold text-primary sm:text-4xl">
                {p(featured.title)}
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{p(featured.summary)}</p>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <CalendarDays className="size-4 text-accent" />
                  {p(featured.date)}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="size-4 text-accent" />
                  {t("address")}
                </span>
              </div>
              <Button asChild className="mt-8 w-fit" size="lg">
                <a href="#contact">{t("contactUs")}</a>
              </Button>
            </div>
          </article>
        </Reveal>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionHeading
          eyebrow={p({ ar: "البرنامج", en: "Programme" })}
          title={p({ ar: "الفعاليات والأنشطة", en: "Events & activities" })}
        />

        {/* Search and filters */}
        <div className="mt-8 space-y-4">
          <div className="relative">
            <Search className="absolute start-3 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
            <input
              type="text"
              placeholder={p({ ar: "ابحث عن فعالية...", en: "Search for an event..." })}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-border bg-card ps-10 pe-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          
          <div className="flex flex-wrap gap-3">
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
            
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="rounded-lg border border-border bg-card px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="all">{p({ ar: "جميع التصنيفات", en: "All categories" })}</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filteredList.map((e, i) => {
            const staticRoute = e.slug === "bahraini-engineer-day" ? "/events/bahraini-engineer-day" :
                                e.slug === "annual-ramadan-ghabga" ? "/events/annual-ramadan-ghabga" :
                                e.slug === "volunteers-recognition" ? "/events/volunteers-recognition" :
                                e.slug === "annual-general-assembly" ? "/events/annual-general-assembly" :
                                "/events/$slug";
            
            return (
              <Reveal key={e.title.en} delay={(i % 3) * 0.08} className="h-full">
                {staticRoute === "/events/$slug" ? (
                  <Link to="/events/$slug" params={{ slug: e.slug }} className="showcase-card group flex h-full flex-col bg-card">
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={covers[i % covers.length]!}
                        alt={p(e.title)}
                        width={1600}
                        height={1000}
                        loading="lazy"
                        className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="veil absolute inset-0" />
                      <span className="numeral absolute bottom-4 end-5 text-4xl font-bold text-primary-foreground/25">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="absolute bottom-4 start-5 flex flex-wrap items-center gap-2">
                        <Badge variant={e.status === "upcoming" ? "default" : "secondary"}>
                          {e.status === "upcoming" ? t("upcoming") : t("past")}
                        </Badge>
                        <span className="flex items-center gap-1.5 rounded-full bg-background/15 px-2.5 py-1 text-[11px] font-medium text-primary-foreground backdrop-blur-sm">
                          <Tag className="size-3" />
                          {p(e.category)}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-lg font-bold text-primary">{p(e.title)}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p(e.summary)}</p>
                      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <CalendarDays className="size-3.5 text-accent" />
                          {p(e.date)}
                        </span>
                        <Button asChild variant="outline" size="sm" className="gap-1.5">
                          <span>
                            {t("details")}
                            <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5" />
                          </span>
                        </Button>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <Link to={staticRoute} className="showcase-card group flex h-full flex-col bg-card">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={covers[i % covers.length]!}
                      alt={p(e.title)}
                      width={1600}
                      height={1000}
                      loading="lazy"
                      className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="veil absolute inset-0" />
                    <span className="numeral absolute bottom-4 end-5 text-4xl font-bold text-primary-foreground/25">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="absolute bottom-4 start-5 flex flex-wrap items-center gap-2">
                      <Badge variant={e.status === "upcoming" ? "default" : "secondary"}>
                        {e.status === "upcoming" ? t("upcoming") : t("past")}
                      </Badge>
                      <span className="flex items-center gap-1.5 rounded-full bg-background/15 px-2.5 py-1 text-[11px] font-medium text-primary-foreground backdrop-blur-sm">
                        <Tag className="size-3" />
                        {p(e.category)}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-bold text-primary">{p(e.title)}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p(e.summary)}</p>
                    <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CalendarDays className="size-3.5 text-accent" />
                        {p(e.date)}
                      </span>
                      <Button asChild variant="outline" size="sm" className="gap-1.5">
                        <span>
                          {t("details")}
                          <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5" />
                        </span>
                      </Button>
                    </div>
                  </div>
                </Link>
                )}
              </Reveal>
            );
          })}
        </div>
        
        {filteredList.length === 0 && (
          <div className="mt-12 text-center py-12">
            <p className="text-lg text-muted-foreground">
              {p({ ar: "لا توجد فعاليات تطابق البحث", en: "No events match your search" })}
            </p>
          </div>
        )}
      </section>

      <section className="band-blue relative overflow-hidden py-24">
        <div className="dot-grid-light absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="eyebrow">{t("contactUs")}</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
            {p({ ar: "هل لديك فكرة نشاط أو ندوة؟", en: "Have an idea for an activity or seminar?" })}
          </h2>
          <p className="mt-4 leading-relaxed text-primary-foreground/70">
            {p({
              ar: "نستقبل مقترحات الأعضاء واللجان الفنية والشركات لتنظيم ندوات وزيارات وورش عمل متخصصة.",
              en: "We welcome proposals from members, technical committees and companies for seminars, visits and specialised workshops.",
            })}
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8">
            <a href="#contact">{t("contactUs")}</a>
          </Button>
        </div>
      </section>
    </>
  );
}
