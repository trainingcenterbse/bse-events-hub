import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, MapPin, Users } from "lucide-react";

import heroEvents from "@/assets/hero-events.jpg";
import { PageHero, SectionHeading } from "@/components/Sections";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { events, type EventItem } from "@/data/content";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const event = events.find((e) => e.slug === params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "غير متوفر | BSE Event" }, { name: "robots", content: "noindex" }],
      };
    }
    const { event } = loaderData;
    return {
      meta: [
        { title: `${event.title.ar} | BSE Event` },
        { name: "description", content: event.summary.ar },
        { property: "og:title", content: `${event.title.ar} | BSE Event` },
        { property: "og:description", content: event.summary.ar },
      ],
    };
  },
  component: EventDetail,
});

function EventDetail() {
  const { event: e } = Route.useLoaderData() as { event: EventItem };
  const { p, t, lang } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t("navEvents")}
        title={p(e.title)}
        description={p(e.summary)}
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
              <Badge variant={e.status === "upcoming" ? "default" : "secondary"}>
                {e.status === "upcoming" ? t("upcoming") : t("past")}
              </Badge>
              <Badge variant="outline">{p(e.category)}</Badge>
            </div>
            
            <h2 className="mt-6 text-2xl font-bold text-primary">
              {p({ ar: "عن الفعالية", en: "About the event" })}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{p(e.description)}</p>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
              {e.stats.map((s) => (
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
              {e.highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 size-2 shrink-0 rounded-full bg-accent" />
                  <p className="text-sm text-muted-foreground">{p(highlight)}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-10 text-xl font-bold text-primary">
              {p({ ar: "الجمهور المستهدف", en: "Target audience" })}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p(e.audience)}</p>
          </div>

          <aside className="space-y-6">
            <div className="surface-card p-6">
              <h3 className="text-lg font-bold text-primary">{p({ ar: "تفاصيل الفعالية", en: "Event details" })}</h3>
              <dl className="mt-4 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <CalendarDays className="mt-0.5 size-5 shrink-0 text-accent" />
                  <div>
                    <dt className="text-muted-foreground">{p({ ar: "التاريخ", en: "Date" })}</dt>
                    <dd className="mt-1 font-semibold text-foreground">{p(e.date)}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-accent" />
                  <div>
                    <dt className="text-muted-foreground">{p({ ar: "المكان", en: "Venue" })}</dt>
                    <dd className="mt-1 font-semibold text-foreground">{p(e.venue)}</dd>
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
            {e.program.map((item, i) => (
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
