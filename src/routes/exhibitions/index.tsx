import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Star } from "lucide-react";

import heroExhibition from "@/assets/hero-exhibition.jpg";
import { PageHero, SectionHeading } from "@/components/Sections";
import { Badge } from "@/components/ui/badge";
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

function ExhibitionCard({ slug }: { slug: string }) {
  const { p, t } = useI18n();
  const e = exhibitions.find((x) => x.slug === slug)!;

  return (
    <Link
      to="/exhibitions/$slug"
      params={{ slug: e.slug }}
      className="surface-card flex flex-col p-6"
    >
      <div className="flex flex-wrap items-center gap-2">
        {e.owned && (
          <Badge className="gap-1">
            <Star className="size-3" />
            {t("ourExhibitions")}
          </Badge>
        )}
        <Badge variant="outline">{p(e.sector)}</Badge>
      </div>
      <h3 className="mt-4 text-lg font-bold text-primary">{p(e.name)}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p(e.short)}</p>
      <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-sm">
        <span className="text-muted-foreground">
          {e.editions.length} {t("editions")}
        </span>
        <span className="inline-flex items-center gap-1 font-semibold text-primary">
          {t("timeline")}
          <ArrowUpRight className="size-4" />
        </span>
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

      {/* Owned exhibitions — special section */}
      <section className="relative overflow-hidden py-20">
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
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {owned.map((e) => (
              <div key={e.slug} className="surface-card overflow-hidden p-0">
                <div className="brand-gradient px-7 py-6 text-primary-foreground">
                  <p className="eyebrow">{p(e.sector)}</p>
                  <h3 className="mt-2 text-xl font-bold">{p(e.name)}</h3>
                  <p className="mt-1 text-xs text-primary-foreground/70" dir="ltr">
                    since {e.started}
                  </p>
                </div>
                <div className="p-7">
                  <p className="text-sm leading-relaxed text-muted-foreground">{p(e.short)}</p>
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {e.stats.map((s) => (
                      <div key={s.value}>
                        <p className="font-display text-2xl font-bold text-primary">{s.value}</p>
                        <p className="text-xs text-muted-foreground">{p(s.label)}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                    {e.editions.slice(0, 4).map((ed) => (
                      <Badge key={ed.year} variant="secondary" dir="ltr">
                        {ed.year}
                      </Badge>
                    ))}
                  </div>
                  <Link
                    to="/exhibitions/$slug"
                    params={{ slug: e.slug }}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent-foreground"
                  >
                    {t("timeline")}
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow={t("otherExhibitions")}
            title={t("currentExhibitions")}
            description={p({
              ar: "معارض قائمة حالياً أو مقبلة، تُنظَّم بالشراكة مع الاتحادات والجمعيات المتخصصة.",
              en: "Currently running or upcoming exhibitions organised in partnership with specialised federations and societies.",
            })}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {current.map((e) => (
              <ExhibitionCard key={e.slug} slug={e.slug} />
            ))}
          </div>

          <div className="mt-20">
            <SectionHeading eyebrow={t("past")} title={t("pastExhibitions")} />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {past.map((e) => (
                <ExhibitionCard key={e.slug} slug={e.slug} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
