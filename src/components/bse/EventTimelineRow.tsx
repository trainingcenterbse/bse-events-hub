import { Link } from "@tanstack/react-router";
import { ArrowUpLeft, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { EventItem } from "@/data/content";
import { useI18n } from "@/lib/i18n";

export function EventTimelineRow({ event }: { event: EventItem }) {
  const { p, t } = useI18n();

  return (
    <article className="relative z-10 grid gap-4 border-b border-bse-hairline bg-white px-4 py-5 transition-colors hover:bg-[#fffdf7] sm:px-6 lg:grid-cols-[150px_minmax(0,1fr)_235px] lg:items-center">
      <div className="flex items-center gap-2 text-bse-indigo lg:block">
        <span className="text-xs font-semibold text-bse-ink-muted">الموعد</span>
        <strong className="bse-display text-lg">{p(event.date)}</strong>
      </div>
      <div className="min-w-0 lg:pe-8">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant={event.status === "upcoming" ? "default" : "secondary"} className={event.status === "upcoming" ? "bg-bse-gold text-bse-indigo-deep hover:bg-bse-gold-soft" : "bg-bse-canvas-soft text-bse-ink-muted"}>
            {event.status === "upcoming" ? t("upcoming") : t("past")}
          </Badge>
          <span className="text-xs font-semibold text-bse-blue">{p(event.category)}</span>
        </div>
        <Link to="/events/$slug" params={{ slug: event.slug }} className="block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bse-blue focus-visible:ring-offset-4">
          <h3 className="bse-display mt-2 truncate text-xl text-bse-indigo sm:text-2xl">{p(event.title)}</h3>
        </Link>
        <p className="mt-1 line-clamp-2 text-sm leading-[1.8] text-bse-ink-muted">{p(event.summary)}</p>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-bse-hairline pt-3 lg:block lg:border-t-0 lg:pt-0">
        <div className="flex items-center gap-2 text-xs text-bse-ink-muted">
          <MapPin className="size-4 text-bse-gold" aria-hidden="true" />
          <span className="line-clamp-1">{p(event.venue)}</span>
        </div>
        <Button asChild variant="outline" size="sm" className="mt-2 gap-2 rounded-bse-md border-bse-indigo text-bse-indigo hover:bg-bse-indigo hover:text-white">
          <Link to="/events/$slug" params={{ slug: event.slug }}>
            {event.kind === "event" ? "افتح صفحة الفعالية" : "افتح صفحة البرنامج"}
            <ArrowUpLeft className="size-4" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </article>
  );
}
