import { ExternalLink, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";

export function MapPreview({
  venue,
  mapUrl,
  label = "الموقع",
}: {
  venue: string;
  mapUrl: string;
  label?: string;
}) {
  return (
    <div className="overflow-hidden border border-bse-hairline bg-white">
      <div className="bse-map-grid relative h-36">
        <div className="absolute left-1/2 top-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-white bg-bse-indigo text-bse-gold shadow-lg">
          <MapPin className="size-5" aria-hidden="true" />
        </div>
        <span className="absolute bottom-3 end-3 rounded bg-white/90 px-2 py-1 text-xs font-semibold text-bse-indigo">البحرين</span>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2">
          <MapPin className="size-4 text-bse-gold" aria-hidden="true" />
          <h3 className="bse-display text-lg text-bse-indigo">{label}</h3>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-bse-ink-muted">{venue}</p>
        <Button asChild variant="outline" className="mt-4 w-full gap-2">
          <a href={mapUrl} target="_blank" rel="noreferrer">
            <ExternalLink className="size-4" aria-hidden="true" />
            افتح الخريطة
          </a>
        </Button>
      </div>
    </div>
  );
}
