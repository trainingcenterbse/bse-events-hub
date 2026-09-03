import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function ClosingCta({
  eyebrow,
  title,
  description,
  action,
  className,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("bg-bse-cta px-6 py-20 text-bse-cta-foreground sm:py-24", className)}>
      <div className="mx-auto flex max-w-[980px] flex-col items-center text-center">
        <p className="text-xs font-bold tracking-[0.16em] text-bse-gold-soft">{eyebrow}</p>
        <h2 className="bse-display mt-4 max-w-3xl text-3xl leading-tight text-white sm:text-5xl">{title}</h2>
        <p className="mt-5 max-w-2xl text-base leading-[1.9] text-white/70">{description}</p>
        <div className="mt-8">{action}</div>
      </div>
    </section>
  );
}
