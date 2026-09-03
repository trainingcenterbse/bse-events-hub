import { Link } from "@tanstack/react-router";
import { ArrowUpLeft, CalendarDays, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { EventItem } from "@/data/content";
import { useI18n } from "@/lib/i18n";

export function EventHighlights({ items }: { items: { event: EventItem; cover: string }[] }) {
  const { p, t } = useI18n();

  return (
    <div className="mt-10 space-y-5">
      {items.map(({ event, cover }, index) => {
        const reverse = index % 2 === 1;
        return (
          <article key={event.slug} className={`grid overflow-hidden rounded-bse-xl border bg-white ${index === 0 ? "border-bse-gold border-e-4" : index === 1 ? "border-bse-blue" : "border-bse-teal-mid bg-[#f4f6f5]"} lg:grid-cols-2`}>
            <div className={`relative min-h-[220px] overflow-hidden ${reverse ? "lg:order-1" : "lg:order-2"}`}>
              <img src={cover} alt={`${p(event.title)} — BSE Event`} width={1600} height={1000} loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover transition duration-500 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-l from-bse-indigo-deep/10 to-bse-indigo-deep/60" />
              <span className="absolute bottom-4 start-4 rounded-bse-md bg-bse-gold px-3 py-1 text-xs font-bold text-bse-indigo-deep">{String(index + 1).padStart(2, "0")} / {p(event.category)}</span>
            </div>
            <div className={`flex flex-col justify-center p-7 sm:p-9 ${reverse ? "lg:order-2" : "lg:order-1"}`}>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant={event.status === "upcoming" ? "default" : "secondary"} className={event.status === "upcoming" ? "bg-[#edf7ef] text-[#27603a] hover:bg-[#edf7ef]" : "bg-bse-canvas-soft text-bse-ink-muted"}>
                  {event.status === "upcoming" ? t("upcoming") : t("past")}
                </Badge>
                <span className="text-xs font-semibold text-bse-gold">{index === 0 ? "أبرز فعالية وطنية" : p(event.category)}</span>
              </div>
              <Link to="/events/$slug" params={{ slug: event.slug }} className="block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bse-blue focus-visible:ring-offset-4">
                <h3 className={`bse-display mt-4 text-2xl leading-tight sm:text-3xl ${index === 2 ? "text-bse-teal" : "text-bse-blue"}`}>{p(event.title)}</h3>
              </Link>
              <p className="mt-3 max-w-2xl text-sm leading-[1.9] text-bse-ink-muted">{p(event.summary)}</p>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-bse-ink-muted">
                <span className="inline-flex items-center gap-2"><CalendarDays className="size-4 text-bse-gold" aria-hidden="true" />{p(event.date)}</span>
                <span className="inline-flex items-center gap-2"><MapPin className="size-4 text-bse-gold" aria-hidden="true" />{p(event.venue)}</span>
              </div>
              <Button asChild variant={index === 0 ? "default" : "outline"} className="mt-7 w-fit gap-2 rounded-bse-md">
                <Link to="/events/$slug" params={{ slug: event.slug }}>افتح صفحة {p(event.title)}<ArrowUpLeft className="size-4" aria-hidden="true" /></Link>
              </Button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
