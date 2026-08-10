import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, LayoutGrid, Star } from "lucide-react";

import heroConference from "@/assets/hero-conference.jpg";
import heroExhibition from "@/assets/hero-exhibition.jpg";
import seminar from "@/assets/seminar.jpg";
import teamWork from "@/assets/team-work.jpg";
import { CountUp, Reveal } from "@/components/Reveal";
import { PageHero, SectionHeading } from "@/components/Sections";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { exhibitions } from "@/data/content";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/exhibitions/")({
  head: () => ({
    meta: [
      { title: "المعارض الحالية والسابقة | BSE Event" },
      {
        name: "description",
        content:
          "معارض جمعية المهندسين البحرينية: المعرض الدولي للدراسات الأكاديمية والهندسية ومعرض كروجن، إضافة إلى المعارض الحالية والسابقة والخط الزمني لكل نسخة.",
      },
      { property: "og:title", content: "المعارض الحالية والسابقة | BSE Event" },
      {
        property: "og:description",
        content: "معارض الجمعية الخاصة ونسخها السنوية، والمعارض الحالية والسابقة المصاحبة للمؤتمرات.",
      },
    ],
  }),
  component: Exhibitions,
});

const covers = [heroExhibition, seminar, heroConference, teamWork];

function ExhibitionCard({ slug, index }: { slug: string; index: number }) {
  const { p, t } = useI18n();
  const e = exhibitions.find((x) => x.slug === slug)!;

  return (
    <Link
      to="/exhibitions/$slug"
      params={{ slug: e.slug }}
      className="showcase-card group flex h-full flex-col bg-card"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={covers[index % covers.length]!}
          alt={p(e.name)}
          width={1600}
          height={1000}
          loading="lazy"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="veil absolute inset-0" />
        <div className="absolute bottom-4 start-5 flex flex-wrap items-center gap-2">
          {e.owned && (
            <Badge className="gap-1">
              <Star className="size-3" />
              {t("ourExhibitions")}
            </Badge>
          )}
          <span className="rounded-full bg-background/15 px-2.5 py-1 text-[11px] font-medium text-primary-foreground backdrop-blur-sm">
            {p(e.sector)}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold text-primary">{p(e.name)}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p(e.short)}</p>
        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <LayoutGrid className="size-3.5 text-accent" />
            {e.editions.length} {t("editions")}
          </span>
          <Button asChild variant="outline" size="sm" className="gap-1.5">
            <span>
              {t("timeline")}
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5" />
            </span>
          </Button>
        </div>
      </div>
    </Link>
  );
}

function Exhibitions() {
  const { p, t } = useI18n();
  const owned = exhibitions.filter((e) => e.owned);
  const current = exhibitions.filter((e) => !e.owned && e.status === "current");
  const past = exhibitions.filter((e) => !e.owned && e.status === "past");

  return (
    <>
      <PageHero
        eyebrow={t("navExhibitions")}
        title={p({ ar: "المعارض", en: "Exhibitions" })}
        description={p({
          ar: "معارض تملكها الجمعية بنسخ سنوية موثقة، ومعارض حالية وسابقة مصاحبة للمؤتمرات المتخصصة. اضغط على أي معرض لعرض الخط الزمني لنسخه وروابط كل نسخة.",
          en: "BSE-owned exhibitions with documented annual editions, plus current and past exhibitions accompanying specialised conferences. Open any exhibition to view its editions timeline and links.",
        })}
        image={heroExhibition}
      />

      {/* Owned exhibitions — flagship treatment */}
      <section className="relative overflow-hidden py-24">
        <div className="kufic-grid absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow={p({ ar: "خاص بالجمعية", en: "BSE owned" })}
            title={t("ourExhibitions")}
            description={p({
              ar: "منصتان تملكهما وتنظمهما جمعية المهندسين البحرينية بشكل كامل، ولكل منهما نسخ سنوية وصفحة خاصة بكل نسخة.",
              en: "Two platforms fully owned and organised by BSE, each with annual editions and a page per edition.",
            })}
          />
          <div className="mt-14 space-y-10">
            {owned.map((e, i) => (
              <Reveal key={e.slug} delay={i * 0.08}>
                <article className="showcase-card grid bg-card lg:grid-cols-5">
                  <div className="relative min-h-[280px] overflow-hidden lg:col-span-2">
                    <img
                      src={i === 0 ? seminar : heroExhibition}
                      alt={p(e.name)}
                      width={1600}
                      height={1000}
                      loading="lazy"
                      className="absolute inset-0 size-full object-cover"
                    />
                    <div className="veil absolute inset-0" />
                    <div className="absolute inset-x-6 bottom-6">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[11px] font-bold text-accent-foreground">
                        <Star className="size-3" />
                        {t("ourExhibitions")}
                      </span>
                      <p className="numeral mt-3 text-6xl font-bold text-primary-foreground/85" dir="ltr">
                        {e.started}
                      </p>
                      <p className="text-xs uppercase tracking-widest text-primary-foreground/60">
                        {p({ ar: "سنة الانطلاق", en: "Launched" })}
                      </p>
                    </div>
                  </div>
                  <div className="p-8 sm:p-10 lg:col-span-3">
                    <p className="eyebrow">{p(e.sector)}</p>
                    <h3 className="mt-3 font-display text-2xl font-bold text-primary sm:text-3xl">
                      {p(e.name)}
                    </h3>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{p(e.short)}</p>
                    <div className="mt-8 grid grid-cols-3 gap-4 rounded-xl bg-secondary/60 p-5">
                      {e.stats.map((s) => (
                        <div key={s.value}>
                          <CountUp value={s.value} className="numeral block text-3xl font-bold text-primary" />
                          <p className="mt-2 text-xs text-muted-foreground">{p(s.label)}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-7 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold text-muted-foreground">{t("editions")}:</span>
                      {e.editions.map((ed) => (
                        <Badge key={ed.year} variant="secondary" dir="ltr">
                          {ed.year}
                        </Badge>
                      ))}
                    </div>
                    <Link
                      to="/exhibitions/$slug"
                      params={{ slug: e.slug }}
                      className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-deep"
                    >
                      {t("timeline")}
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow={t("otherExhibitions")}
            title={t("currentExhibitions")}
            description={p({
              ar: "معارض قائمة حالياً أو مقبلة، تُنظَّم بالشراكة مع الاتحادات والجمعيات المتخصصة.",
              en: "Currently running or upcoming exhibitions organised in partnership with specialised federations and societies.",
            })}
          />
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {current.map((e, i) => (
              <Reveal key={e.slug} delay={i * 0.08} className="h-full">
                <ExhibitionCard slug={e.slug} index={i} />
              </Reveal>
            ))}
          </div>

          <div className="mt-24">
            <SectionHeading eyebrow={t("past")} title={t("pastExhibitions")} />
            <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {past.map((e, i) => (
                <Reveal key={e.slug} delay={i * 0.08} className="h-full">
                  <ExhibitionCard slug={e.slug} index={i + 2} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
