import type { LucideIcon } from "lucide-react";

export function MetaItem({
  icon: Icon,
  label,
  value,
  className,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={`flex min-w-0 items-start gap-2 ${className ?? ""}`}>
      <Icon className="mt-0.5 size-5 shrink-0 text-bse-gold" aria-hidden="true" />
      <span className="min-w-0">
        <span className="block text-xs font-semibold text-bse-ink-muted">{label}</span>
        <strong className="mt-1 block text-sm leading-relaxed text-bse-indigo">{value}</strong>
      </span>
    </div>
  );
}
