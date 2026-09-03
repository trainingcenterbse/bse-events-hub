import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function TypographyH1({ className, ...props }: ComponentProps<"h1">) {
  return <h1 className={cn("bse-display text-4xl leading-[1.12] text-bse-indigo sm:text-5xl", className)} {...props} />;
}

export function TypographyH2({ className, ...props }: ComponentProps<"h2">) {
  return <h2 className={cn("bse-display text-3xl leading-[1.15] text-bse-indigo sm:text-4xl", className)} {...props} />;
}

export function TypographyH3({ className, ...props }: ComponentProps<"h3">) {
  return <h3 className={cn("bse-display text-xl leading-[1.25] text-bse-indigo sm:text-2xl", className)} {...props} />;
}

export function TypographyP({ className, ...props }: ComponentProps<"p">) {
  return <p className={cn("bse-body text-base leading-[1.9] text-bse-ink-muted", className)} {...props} />;
}
