import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, Download, MapPin, Users } from "lucide-react";

import heroConference from "@/assets/hero-conference.jpg";
import { PageHero, SectionHeading } from "@/components/Sections";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { conferences, type Conference } from "@/data/content";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/conferences/$slug")({
  loader: ({ params }) => {
    const conference = conferences.find((c) => c.slug === params.slug);
    if (!conference) throw notFound();
    return { conference };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "غير متوفر | BSE Event" }, { name: "robots", content: "noindex" }],
      };
    }
    const { conference } = loaderData;
    return {
      meta: [
        { title: `${conference.title.ar} | BSE Event` },
        { name: "description", content: conference.summary.ar },
        { property: "og:title", content: `${conference.title.ar} | BSE Event` },
        { property: "og:description", content: conference.summary.ar },
      ],
    };
  },
  component: ConferenceDetail,
});

function ConferenceDetail() {
  const { conference: c } = Route.useLoaderData() as { conference: Conference };
  const { p, t, lang } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t("navConferences")}
        title={p(c.title)}
        description={p(c.summary)}
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
              <Badge variant={c.status === "upcoming" ? "default" : "secondary"}>
                {c.status === "upcoming" ? t("upcoming") : t("past")}
              </Badge>
              <Badge variant="outline">{p(c.edition)}</Badge>
            </div>
            
            <h2 className="mt-6 text-2xl font-bold text-primary">
              {p({ ar: "عن المؤتمر", en: "About the conference" })}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{p(c.description)}</p>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6">
              {c.stats.slice(0, 4).map((s) => (
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
              {c.tracks.map((track, i) => (
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
              {c.organisers.map((org, i) => (
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
                    <dd className="mt-1 font-semibold text-foreground" dir="ltr">
                      {p(c.date)}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-accent" />
                  <div>
                    <dt className="text-muted-foreground">{p({ ar: "المكان", en: "Venue" })}</dt>
                    <dd className="mt-1 font-semibold text-foreground">{p(c.venue)}</dd>
                    <dd className="mt-1 text-xs text-muted-foreground">{p(c.venueNote)}</dd>
                  </div>
                </div>
              </dl>
              
              {c.mapUrl && (
                <Button asChild variant="outline" className="mt-5 w-full gap-2">
                  <a href={c.mapUrl} target="_blank" rel="noreferrer">
                    <MapPin className="size-4" />
                    {p({ ar: "عرض الخريطة", en: "View map" })}
                  </a>
                </Button>
              )}
            </div>

            {c.brochureUrl && (
              <div className="surface-card p-6">
                <h3 className="text-lg font-bold text-primary">{p({ ar: "البروشور", en: "Brochure" })}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {p({ ar: "تحميل البروشور الرسمي للمؤتمر", en: "Download the official conference brochure" })}
                </p>
                <Button asChild variant="default" className="mt-4 w-full gap-2">
                  <a href={c.brochureUrl} target="_blank" rel="noreferrer">
                    <Download className="size-4" />
                    {p({ ar: "تحميل البروشور", en: "Download brochure" })}
                  </a>
                </Button>
              </div>
            )}

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
            {c.schedule.map((day, dayIndex) => (
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
      {c.speakers.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <SectionHeading
            eyebrow={p({ ar: "المتحدثون", en: "Speakers" })}
            title={p({ ar: "متحدثو المؤتمر", en: "Conference speakers" })}
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {c.speakers.map((speaker, i) => (
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
      )}
    </>
  );
}
