import type { Localized } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export type StatStripItem = {
  value: string;
  label: Localized;
};

export function StatStrip({
  items,
  variant = "dark",
  className,
}: {
  items: StatStripItem[];
  variant?: "dark" | "light";
  className?: string;
}) {
  const { p } = useI18n();

  return (
    <section
      aria-label="الإحصاءات"
      className={cn(
        "border-y border-bse-hairline",
        variant === "dark" ? "bse-stat-strip" : "bg-bse-canvas",
        className,
      )}
    >
      <div className={cn("mx-auto grid max-w-bse-content grid-cols-2 divide-x divide-x-reverse px-6 py-8 sm:grid-cols-4 sm:py-9", variant === "dark" ? "divide-white/10" : "divide-bse-hairline")} dir="ltr">
        {items.map((item) => (
          <div key={`${item.value}-${item.label.en}`} className="px-4 text-center sm:px-7" dir="rtl">
            <p className={cn("bse-display text-4xl leading-none", variant === "dark" ? "text-bse-gold-soft" : "text-bse-blue")}>
              {item.value}
            </p>
            <p className={cn("mt-3 text-xs leading-relaxed", variant === "dark" ? "text-white/65" : "text-bse-ink-muted")}>
              {p(item.label)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
