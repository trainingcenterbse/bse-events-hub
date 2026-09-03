import type { ReactNode } from "react";

import { MapPin } from "lucide-react";

import { TypographyH1 } from "@/components/bse/Typography";

export type SharedSplitHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryAction?: ReactNode;
  secondaryAction?: ReactNode;
  facts?: ReactNode;
  variant?: "home" | "about";
};

export function SharedSplitHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  primaryAction,
  secondaryAction,
  facts,
  variant = "home",
}: SharedSplitHeroProps) {
  return (
    <section className="grid min-h-[500px] grid-cols-1 lg:min-h-[570px] lg:grid-cols-2" dir="ltr">
      <div className="relative order-2 min-h-[330px] overflow-hidden bg-bse-indigo-deep lg:order-1 lg:min-h-0">
        <img
          src={image}
          alt={imageAlt}
          width={1920}
          height={1088}
          loading="eager"
          decoding="async"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="bse-photo-wash absolute inset-0" />
        <div className="bse-blueprint pointer-events-none absolute inset-0 opacity-35" />
        <div className="absolute inset-x-6 bottom-6 border-t border-white/25 pt-4 text-right text-white sm:inset-x-10 sm:bottom-10">
          <div className="flex items-center justify-between gap-4 text-xs">
            <span className="font-semibold tracking-[0.12em] text-bse-gold-soft">BSE / 1983—2026</span>
            <span className="text-white/70">التخطيط · التشغيل · الأثر</span>
          </div>
        </div>
      </div>

      <div className="relative order-1 flex flex-col justify-center overflow-hidden bg-bse-indigo px-6 py-14 text-white sm:px-12 lg:order-2 lg:px-16">
        <div className="absolute inset-y-0 start-0 w-1 bg-bse-gold" />
        <div className="absolute -bottom-28 -start-20 size-80 rounded-full border border-white/10" aria-hidden="true" />
        <div className="absolute -bottom-12 start-4 size-52 rounded-full border border-bse-gold/20" aria-hidden="true" />
        <div className="relative max-w-[560px]" dir="rtl">
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold tracking-[0.14em] text-bse-gold-soft">
            <span className="h-px w-10 bg-bse-gold" aria-hidden="true" />
            <span>{eyebrow}</span>
            {variant === "home" && <span className="font-sans text-white/70">BSE EVENT</span>}
          </div>
          <TypographyH1 className="mt-6 max-w-[620px] text-white sm:text-[3.25rem]">
            {title}
          </TypographyH1>
          <p className="mt-6 max-w-[500px] text-base leading-[1.95] text-white/75">{description}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            {primaryAction}
            {secondaryAction}
          </div>
          {facts ?? (
            <div className="mt-12 flex items-center gap-3 border-t border-white/15 pt-5 text-xs text-white/60">
              <MapPin className="size-4 text-bse-gold-soft" aria-hidden="true" />
              <span>مملكة البحرين · جمعية المهندسين البحرينية</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
