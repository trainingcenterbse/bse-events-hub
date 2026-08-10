import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Star } from "lucide-react";

import heroExhibition from "@/assets/hero-exhibition.jpg";
import { PageHero, SectionHeading } from "@/components/Sections";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { exhibitions, type Exhibition } from "@/data/content";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/exhibitions/$slug")({
  loader: ({ params }) => {
    const exhibition = exhibitions.find((e) => e.slug === params.slug);
    if (!exhibition) throw notFound();
    return { exhibition };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "غير متوفر | BSE Event" }, { name: "robots", content: "noindex" }],
      };
    }
    const { exhibition } = loaderData;
    return {
      meta: [
        { title: `${exhibition.name.ar} | BSE Event` },
        { name: "description", content: exhibition.short.ar },
        { property: "og:title", content: `${exhibition.name.ar} | BSE Event` },
        { property: "og:description", content: exhibition.short.ar },
      ],
    };
  },
  component: ExhibitionDetail,
});

function ExhibitionDetail() {
  const { exhibition: e } = Route.useLoaderData() as { exhibition: Exhibition };
  const { p, t, lang } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={e.owned ? t("ourExhibitions") : t("otherExhibitions")}
        title={p(e.name)}
        description={p(e.short)}
        image={heroExhibition}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <Link
          to="/exhibitions"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent-foreground"
        >
          ← {t("backToExhibitions")}
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="flex flex-wrap gap-2">
              {e.owned && (
                <Badge className="gap-1">
                  <Star className="size-3" />
                  {t("ourExhibitions")}
                </Badge>
              )}
              <Badge variant="outline">{p(e.sector)}</Badge>
              <Badge variant="secondary">
                {e.status === "current" ? t("currentExhibitions") : t("pastExhibitions")}
              </Badge>
            </div>
            <h2 className="mt-6 text-2xl font-bold text-primary">
              {p({ ar: "عن المعرض", en: "About the exhibition" })}
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
          </div>

          <aside className="surface-card h-fit p-7">
            <h3 className="text-lg font-bold text-primary">{t("becomeSponsor")}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {p({
                ar: "احصل على ملف الرعاية وباقات الأجنحة للنسخة القادمة من هذا المعرض.",
                en: "Get the sponsorship kit and booth packages for the next edition of this exhibition.",
              })}
            </p>
            <Button asChild className="mt-5 w-full">
              <a href="#contact">{t("contactUs")}</a>
            </Button>
            <dl className="mt-6 space-y-3 border-t border-border pt-5 text-sm">
              <div className="flex justify-between gap-3">
                <dt className="text-muted-foreground">{p({ ar: "الانطلاق", en: "Since" })}</dt>
                <dd className="font-semibold text-foreground" dir="ltr">
                  {e.started}
                </dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted-foreground">{t("editions")}</dt>
                <dd className="font-semibold text-foreground">{e.editions.length}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted-foreground">{p({ ar: "القطاع", en: "Sector" })}</dt>
                <dd className="font-semibold text-foreground">{p(e.sector)}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      {/* Timeline */}
      <section className="band-light relative overflow-hidden py-24">
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading
            eyebrow={t("editions")}
            title={t("timeline")}
            description={p({
              ar: "كل نسخة موثقة بسنتها ومكان انعقادها وأبرز ما ميّزها، مع رابط الصفحة الخاصة بها عند توفره.",
              en: "Every edition documented with its year, venue and highlights, with a link to its own page where available.",
            })}
          />

          <div className="mt-16 relative">
            {/* Timeline line */}
            <div className="absolute start-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary/30 to-transparent" />
            
            <ol className="space-y-10">
              {e.editions.map((ed, i) => (
                <li key={ed.year} className="relative ps-16">
                  {/* Timeline node */}
                  <div className={`absolute start-6 top-2 size-5 rounded-full border-4 ${
                    i === 0 
                      ? "border-accent bg-accent shadow-lg shadow-accent/30" 
                      : "border-primary/30 bg-background"
                  }`} />
                  
                  <div className={`showcase-card p-8 ${i === 0 ? "ring-2 ring-accent/20" : ""}`}>
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-display text-4xl font-bold text-primary" dir="ltr">
                          {ed.year}
                        </span>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant={i === 0 ? "default" : "secondary"} className="text-sm">
                            {p(ed.title)}
                          </Badge>
                          {i === 0 && e.status === "current" && (
                            <Badge variant="outline" className="border-accent text-accent">
                              {t("upcoming")}
                            </Badge>
                          )}
                        </div>
                      </div>
                      {i === 0 && (
                        <Badge className="gap-1 bg-accent text-accent-foreground">
                          <Star className="size-3" />
                          {p({ ar: "الأحدث", en: "Latest" })}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="size-4 text-accent" />
                      {p(ed.venue)}
                    </div>
                    
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">{p(ed.note)}</p>
                    
                    {ed.url && (
                      <Button asChild variant="outline" size="sm" className="mt-6 gap-2">
                        <a href={ed.url} target="_blank" rel="noreferrer">
                          {t("visitSite")}
                          <ArrowUpRight className="size-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-16 rounded-xl bg-secondary/50 p-8 text-center">
            <p className="text-sm text-muted-foreground">
              {lang === "ar"
                ? "لطلب أرشيف صور ونتائج النسخ السابقة، تواصل مع فريق القسم."
                : "For the photo archive and results of previous editions, contact the department team."}
            </p>
            <Button asChild variant="link" className="mt-4">
              <a href="#contact">{t("contactUs")}</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
