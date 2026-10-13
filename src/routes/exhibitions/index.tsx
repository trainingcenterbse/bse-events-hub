import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpLeft, CalendarDays, Handshake, LayoutGrid } from "lucide-react";

import heroExhibition from "@/assets/hero-exhibition.jpg";
import { ClosingCta } from "@/components/bse/ClosingCta";
import { EditorialSectionHeading } from "@/components/bse/EditorialSectionHeading";
import { ExhibitionListItem } from "@/components/bse/ExhibitionListItem";
import { SharedSplitHero } from "@/components/bse/SharedSplitHero";
import { StatStrip } from "@/components/bse/StatStrip";
import { TypographyH2, TypographyP } from "@/components/bse/Typography";
import { Button } from "@/components/ui/button";
import { exhibitions } from "@/data/content";
import { exhibitionCovers } from "@/lib/presentation";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/exhibitions/")({
  head: () => ({
    meta: [
      { title: "المعارض الحالية والسابقة | BSE Event" },
      {
        name: "description",
        content: "معارض جمعية المهندسين البحرينية: منصات مملوكة، ومعارض شريكة، ونسخ موثقة لكل دورة.",
      },
    ],
  }),
  component: Exhibitions,
});

function ExhibitionCover({ className = "" }: { className?: string }) {
  const { t, lang } = useI18n();
  return (
    <div className={`relative overflow-hidden rounded-bse-xl bg-bse-indigo ${className}`}>
      <img
        src={heroExhibition}
        alt={lang === "ar" ? "قاعة معرض هندسي في البحرين" : "Engineering exhibition hall in Bahrain"}
        width={1600}
        height={1000}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bse-indigo-deep/90 via-bse-indigo/35 to-transparent" />
      <div className="absolute inset-x-6 bottom-6 text-white">
        <p className="text-xs font-bold tracking-[0.16em] text-bse-gold-soft">BSE EXHIBITION PLATFORM</p>
        <p className="bse-display mt-2 text-xl">{t("knowledgeMeetingOpportunity")}</p>
      </div>
    </div>
  );
}

function Exhibitions() {
  const { p, t, lang } = useI18n();
  const owned = exhibitions.filter((exhibition) => exhibition.owned);
  const current = exhibitions.filter((exhibition) => !exhibition.owned && exhibition.status === "current");
  const past = exhibitions.filter((exhibition) => !exhibition.owned && exhibition.status === "past");
  const metrics = [
    { value: "02", label: { ar: "منصات مملوكة للجمعية", en: "BSE-owned platforms" } },
    { value: "09+", label: { ar: "نسخة موثقة عبر منصاتنا", en: "Documented editions" } },
    { value: "60+", label: { ar: "جامعة وجهة عارضة", en: "Universities & exhibitors" } },
    { value: "12K+", label: { ar: "زائر في كل نسخة", en: "Visitors per edition" } },
  ];

  return (
    <>
      <SharedSplitHero
        variant="home"
        eyebrow={t("exhibitionsEyebrow")}
        title={t("exhibitionsPageTitle")}
        description={t("exhibitionsPageDesc")}
        image={heroExhibition}
        imageAlt={lang === "ar" ? "زوار وشركات في معرض هندسي" : "Visitors and companies at an engineering exhibition"}
        primaryAction={
          <Button asChild size="lg" className="gap-2 rounded-bse-md bg-bse-gold text-bse-indigo-deep hover:bg-bse-gold-soft">
            <a href="#owned-exhibitions">{t("exploreExhibitions")}<ArrowUpLeft className="size-4" aria-hidden="true" /></a>
          </Button>
        }
        secondaryAction={
          <Button asChild size="lg" variant="outline" className="gap-2 rounded-bse-md border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
            <a href="mailto:events@bse.bh">{t("requestExhibitorKit")}<ArrowUpLeft className="size-4" aria-hidden="true" /></a>
          </Button>
        }
        facts={<div className="mt-12 border-t border-white/15 pt-5 text-xs text-white/65">{t("exhibitionFacts")}</div>}
      />

      <StatStrip items={metrics} />

      <section id="owned-exhibitions" className="bse-orbital-light bg-bse-canvas-soft px-6 py-20 sm:py-24">
        <div className="relative z-10 mx-auto max-w-bse-content">
          <EditorialSectionHeading
            eyebrow={t("exhibitionRegister")}
            title={t("ownedPlatforms")}
            description={t("ownedPlatformsDesc")}
            action={<span className="text-sm text-bse-ink-muted"><strong className="text-bse-indigo">{owned.length}</strong> {t("majorPlatforms")}</span>}
          />
          <div className="mt-10 space-y-6">
            {owned.map((exhibition, index) => (
              <ExhibitionListItem
                key={exhibition.slug}
                exhibition={exhibition}
                cover={exhibitionCovers[exhibition.slug] ?? heroExhibition}
                featured={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bse-orbital-light bg-white px-6 py-20 sm:py-24">
        <div className="relative z-10 mx-auto max-w-bse-content">
          <div className="grid items-center gap-10 border-b border-bse-hairline pb-14 lg:grid-cols-[minmax(0,1fr)_minmax(280px,.7fr)]">
            <div>
              <p className="text-xs font-bold tracking-[0.16em] text-bse-gold">{t("exhibitionsPartners")}</p>
              <TypographyH2 className="mt-3">{t("eachEditionOpensDoor")}</TypographyH2>
              <TypographyP className="mt-5 max-w-2xl">{t("eachEditionOpensDoorDesc")}</TypographyP>
            </div>
            <ExhibitionCover className="min-h-[230px]" />
          </div>

          <div id="current-exhibitions" className="scroll-mt-28 pt-14">
            <EditorialSectionHeading
              eyebrow={t("currentProgramme")}
              title={t("currentExhibitionsTitle")}
              description={t("currentExhibitionsDesc")}
              action={<span className="inline-flex items-center gap-2 text-sm text-bse-ink-muted"><CalendarDays className="size-4 text-bse-gold" aria-hidden="true" /><strong className="text-bse-indigo">{current.length}</strong> {t("currentExhibitionsCount")}</span>}
            />
            <div className="mt-10 space-y-6">
              {current.map((exhibition) => (
                <ExhibitionListItem key={exhibition.slug} exhibition={exhibition} cover={exhibitionCovers[exhibition.slug] ?? heroExhibition} />
              ))}
            </div>
          </div>

          <div id="past-exhibitions" className="scroll-mt-28 pt-16">
            <EditorialSectionHeading
              eyebrow={t("archive")}
              title={t("pastExhibitionsTitle")}
              description={t("pastExhibitionsDesc")}
              action={<span className="inline-flex items-center gap-2 text-sm text-bse-ink-muted"><LayoutGrid className="size-4 text-bse-gold" aria-hidden="true" /><strong className="text-bse-indigo">{past.length}</strong> {t("archivedExhibitionsCount")}</span>}
            />
            <div className="mt-10 space-y-6">
              {past.map((exhibition) => (
                <ExhibitionListItem key={exhibition.slug} exhibition={exhibition} cover={exhibitionCovers[exhibition.slug] ?? heroExhibition} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ClosingCta
        eyebrow={t("exhibitionsClosingEyebrow")}
        title={t("exhibitionsClosingTitle")}
        description={t("exhibitionsClosingDesc")}
        action={
          <Button asChild size="lg" className="gap-2 rounded-bse-md bg-white text-bse-indigo hover:bg-bse-gold-soft">
            <a href="mailto:events@bse.bh">{t("contactExhibitionsTeam")}<Handshake className="size-4" aria-hidden="true" /></a>
          </Button>
        }
      />
    </>
  );
}
