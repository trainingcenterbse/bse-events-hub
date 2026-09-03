import type { ReactNode } from "react";

import { TypographyH2 } from "@/components/bse/Typography";
import { cn } from "@/lib/utils";

export function EditorialSectionHeading({
  eyebrow,
  title,
  description,
  action,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-5 border-b border-bse-hairline pb-8 sm:flex-row sm:items-end sm:justify-between", className)}>
      <div className="max-w-2xl">
        {eyebrow && <p className="text-xs font-bold tracking-[0.16em] text-bse-gold">{eyebrow}</p>}
        <TypographyH2 className="mt-3">{title}</TypographyH2>
        {description && <p className="mt-4 text-base leading-[1.9] text-bse-ink-muted">{description}</p>}
      </div>
      {action}
    </div>
  );
}
