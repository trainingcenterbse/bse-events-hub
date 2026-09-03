import type { ReactNode } from "react";

import { TypographyH1 } from "@/components/bse/Typography";

export function DetailHero({
  image,
  imageAlt,
  eyebrow,
  breadcrumb,
  title,
  description,
  status,
  facts,
  primaryAction,
  secondaryAction,
  panel,
  mode = "cover",
}: {
  image: string;
  imageAlt: string;
  eyebrow: string;
  breadcrumb: string;
  title: string;
  description: string;
  status: ReactNode;
  facts: ReactNode;
  primaryAction: ReactNode;
  secondaryAction?: ReactNode;
  panel?: ReactNode;
  mode?: "cover" | "split";
}) {
  if (mode === "split") {
    return (
      <section className="grid min-h-[460px] grid-cols-1 lg:grid-cols-2" dir="ltr">
        <div className="relative min-h-[300px] overflow-hidden bg-bse-indigo-deep lg:min-h-0">
          <img src={image} alt={imageAlt} width={1920} height={1088} loading="eager" decoding="async" className="absolute inset-0 size-full object-cover" />
          <div className="bse-photo-wash absolute inset-0" />
          <div className="bse-blueprint pointer-events-none absolute inset-0 opacity-35" />
        </div>
        <div className="relative flex flex-col justify-center bg-bse-indigo px-6 py-14 text-white sm:px-12 lg:px-14" dir="rtl">
          <div className="absolute inset-y-0 start-0 w-1 bg-bse-gold" />
          <div className="max-w-[620px]">
            <p className="text-xs font-bold tracking-[0.15em] text-bse-gold-soft">{breadcrumb}</p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {status}
              <span className="text-xs font-semibold tracking-[0.12em] text-white/55">{eyebrow}</span>
            </div>
            <TypographyH1 className="mt-6 text-white sm:text-[3.35rem]">{title}</TypographyH1>
            <p className="mt-5 max-w-xl text-base leading-[1.95] text-white/75">{description}</p>
            <div className="mt-7 flex flex-wrap items-center gap-5 text-sm text-white/75">{facts}</div>
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryAction}
              {secondaryAction}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-[470px] overflow-hidden bg-bse-indigo-deep text-white">
      <img src={image} alt={imageAlt} width={1920} height={1088} loading="eager" decoding="async" className="absolute inset-0 size-full object-cover" />
      <div className="bse-hero-wash absolute inset-0" />
      <div className="bse-blueprint pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto grid min-h-[470px] max-w-bse-content items-center gap-10 px-6 py-16 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,.68fr)]">
        <div className="order-1 max-w-3xl" dir="rtl">
          <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-semibold text-white/70">
            <span>{breadcrumb}</span>
            <span className="text-bse-gold">/</span>
            {status}
          </div>
          <p className="text-xs font-bold tracking-[0.16em] text-bse-gold-soft">{eyebrow}</p>
          <TypographyH1 className="mt-4 text-white sm:text-[3.5rem]">{title}</TypographyH1>
          <p className="mt-5 max-w-2xl text-base leading-[1.9] text-white/78 sm:text-lg">{description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/78">{facts}</div>
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryAction}
            {secondaryAction}
          </div>
        </div>
        {panel && <aside className="order-2" dir="rtl">{panel}</aside>}
      </div>
    </section>
  );
}
