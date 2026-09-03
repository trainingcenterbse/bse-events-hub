import { Link } from "@tanstack/react-router";
import { ArrowUpLeft, CalendarDays, LayoutGrid, Star } from "lucide-react";

import { TypographyH3 } from "@/components/bse/Typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Exhibition } from "@/data/content";
import { useI18n } from "@/lib/i18n";

export function ExhibitionListItem({
  exhibition,
  cover,
  featured = false,
}: {
  exhibition: Exhibition;
  cover: string;
  featured?: boolean;
}) {
  const { p, t } = useI18n();
  const statusLabel = exhibition.status === "current" ? t("currentExhibitions") : t("pastExhibitions");

  return (
    <Card
      className={`group overflow-hidden rounded-bse-xl border-bse-hairline bg-white p-0 shadow-[0_16px_38px_-28px_rgba(14,12,31,.46)] transition duration-300 hover:-translate-y-0.5 hover:border-bse-blue ${
        featured ? "border-t-4 border-t-bse-gold" : ""
      }`}
      dir="ltr"
    >
      <div className="grid min-h-[330px] lg:grid-cols-[32%_1fr]">
        <div className="relative min-h-[230px] overflow-hidden bg-bse-indigo-deep lg:min-h-full">
          <img
            src={cover}
            alt={`${p(exhibition.name)} — غلاف المعرض`}
            width={1600}
            height={1000}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-bse-indigo-deep/45" />
          <div className="absolute inset-x-5 top-5 flex flex-wrap items-center justify-between gap-2">
            <Badge
              className={
                exhibition.status === "current"
                  ? "rounded-bse-md bg-bse-gold text-bse-indigo-deep hover:bg-bse-gold-soft"
                  : "rounded-bse-md bg-white/90 text-bse-indigo hover:bg-white"
              }
              dir="rtl"
            >
              {statusLabel}
            </Badge>
            {exhibition.owned && (
              <Badge className="rounded-bse-md border-white/20 bg-bse-indigo/75 text-white" dir="rtl">
                <Star className="size-3" aria-hidden="true" />
                {t("ourExhibitions")}
              </Badge>
            )}
          </div>
          <div className="absolute inset-x-5 bottom-5">
            <p className="font-sans text-7xl font-semibold leading-none tracking-[-0.08em] text-white/45" dir="ltr">
              {exhibition.started}
            </p>
            <p className="mt-2 text-xs font-semibold text-white/70">{p({ ar: "سنة الانطلاق", en: "Launched" })}</p>
          </div>
        </div>

        <div className="relative flex flex-col justify-between p-7 sm:p-9" dir="rtl">
          <span className="pointer-events-none absolute left-7 top-7 hidden font-sans text-7xl font-semibold leading-none tracking-[-0.08em] text-bse-indigo/[.06] sm:block" dir="ltr">
            {exhibition.started}
          </span>
          <div className="relative max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold tracking-[0.14em] text-bse-gold">
              <span>{p(exhibition.sector)}</span>
              <span className="size-1 rounded-full bg-bse-hairline" aria-hidden="true" />
              <span className="font-sans tracking-normal text-bse-ink-muted" dir="ltr">
                {exhibition.editions.length} {t("editions")}
              </span>
            </div>
            <Link to="/exhibitions/$slug" params={{ slug: exhibition.slug }} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bse-blue focus-visible:ring-offset-4">
              <TypographyH3 className="mt-4 max-w-2xl text-2xl leading-[1.35] text-bse-indigo sm:text-3xl">
                {p(exhibition.name)}
              </TypographyH3>
            </Link>
            <p className="mt-3 max-w-2xl text-sm leading-[1.9] text-bse-ink-muted sm:text-base">{p(exhibition.short)}</p>
          </div>

          <div className="relative mt-7">
            <div className="grid max-w-3xl grid-cols-1 gap-4 border-y border-bse-hairline py-4 sm:grid-cols-3">
              {exhibition.stats.map((stat) => (
                <div key={`${stat.value}-${stat.label.en}`} className="flex items-start gap-2 border-s border-bse-hairline px-3 first:border-s-0">
                  <LayoutGrid className="mt-0.5 size-4 shrink-0 text-bse-gold" aria-hidden="true" />
                  <span className="min-w-0">
                    <strong className="block font-sans text-lg leading-none text-bse-indigo" dir="ltr">{stat.value}</strong>
                    <span className="mt-1 block text-xs leading-relaxed text-bse-ink-muted">{p(stat.label)}</span>
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2 text-xs text-bse-ink-muted">
                <CalendarDays className="size-4 text-bse-gold" aria-hidden="true" />
                <span className="font-semibold">{t("editions")}:</span>
                {exhibition.editions.slice(0, 4).map((edition) => (
                  <Badge key={edition.year} variant="secondary" className="rounded-bse-md" dir="ltr">{edition.year}</Badge>
                ))}
              </div>
              <Button asChild variant={featured ? "default" : "outline"} className="gap-2 rounded-bse-md">
                <Link to="/exhibitions/$slug" params={{ slug: exhibition.slug }}>
                  {t("timeline")}
                  <ArrowUpLeft className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
