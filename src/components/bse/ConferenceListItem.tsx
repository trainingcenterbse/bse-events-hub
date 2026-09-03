import { Link } from "@tanstack/react-router";
import { ArrowUpLeft, BookOpen, CalendarDays, MapPin } from "lucide-react";

import { MetaItem } from "@/components/bse/MetaItem";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Conference } from "@/data/content";
import { useI18n } from "@/lib/i18n";

export function ConferenceListItem({
  conference,
  cover,
  featured = false,
}: {
  conference: Conference;
  cover: string;
  featured?: boolean;
}) {
  const { p, t } = useI18n();
  const contentLabel = conference.tracks.length > 0 ? p(conference.tracks[0]!.title) : p(conference.edition);

  return (
    <Card
      className={`group overflow-hidden rounded-bse-xl border-bse-hairline bg-white p-0 shadow-[0_16px_38px_-28px_rgba(14,12,31,.46)] transition duration-300 hover:-translate-y-0.5 hover:border-bse-blue ${
        featured ? "border-t-4 border-t-bse-gold" : ""
      }`}
      dir="ltr"
    >
      <div className="grid min-h-[350px] lg:grid-cols-[34%_1fr]">
        <div className="relative min-h-[240px] overflow-hidden bg-bse-indigo-deep lg:min-h-full">
          <img
            src={cover}
            alt={`${p(conference.title)} — غلاف المؤتمر`}
            width={1200}
            height={900}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-bse-indigo-deep/35" />
          <Badge
            variant={conference.status === "upcoming" ? "default" : "secondary"}
            className={`absolute left-5 top-5 rounded-bse-md ${conference.status === "upcoming" ? "bg-bse-gold text-bse-indigo-deep hover:bg-bse-gold-soft" : "bg-white/90 text-bse-indigo hover:bg-white"}`}
            dir="rtl"
          >
            {conference.status === "upcoming" ? t("upcoming") : t("past")}
          </Badge>
          <span className="absolute bottom-5 left-5 font-sans text-7xl font-semibold leading-none tracking-[-0.08em] text-white/40" dir="ltr">
            {conference.date.ar}
          </span>
        </div>

        <div className="relative flex flex-col justify-between p-7 sm:p-9" dir="rtl">
          <span className="pointer-events-none absolute left-7 top-7 hidden font-sans text-7xl font-semibold leading-none tracking-[-0.08em] text-bse-indigo/[.06] sm:block" dir="ltr">
            {conference.date.ar}
          </span>
          <div className="relative max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold tracking-[0.16em] text-bse-gold">{featured ? "FEATURED CONFERENCE" : p(conference.edition)}</span>
              {featured && <span className="text-xs font-semibold text-bse-ink-muted">{p(conference.edition)}</span>}
            </div>
            <Link
              to="/conferences/$slug"
              params={{ slug: conference.slug }}
              className="block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bse-blue focus-visible:ring-offset-4"
            >
              <h3 className="bse-display mt-4 max-w-2xl text-2xl leading-[1.35] text-bse-indigo sm:text-3xl">{p(conference.title)}</h3>
            </Link>
            <p className="mt-3 max-w-2xl text-sm leading-[1.9] text-bse-ink-muted sm:text-base">{p(conference.summary)}</p>
          </div>

          <div className="relative mt-7">
            <div className="grid max-w-3xl grid-cols-1 gap-4 border-y border-bse-hairline py-4 sm:grid-cols-3">
              <MetaItem icon={CalendarDays} label="التاريخ" value={p(conference.date)} />
              <MetaItem icon={MapPin} label="المكان" value={p(conference.venue)} />
              <MetaItem icon={BookOpen} label="المحتوى" value={contentLabel} />
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <Button asChild variant={featured ? "default" : "outline"} className="gap-2 rounded-bse-md">
                <Link to="/conferences/$slug" params={{ slug: conference.slug }}>
                  {featured ? "شاهد البرنامج والبروشور" : "افتح صفحة المؤتمر"}
                  <ArrowUpLeft className="size-4" aria-hidden="true" />
                </Link>
              </Button>
              <span className="text-xs font-semibold text-bse-ink-muted">{conference.stats[0] ? `${conference.stats[0].value} ${p(conference.stats[0].label)}` : ""}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
