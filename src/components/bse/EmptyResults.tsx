import { SearchX } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function EmptyResults({
  title,
  description,
  actionLabel,
  onReset,
}: {
  title: string;
  description: string;
  actionLabel: string;
  onReset: () => void;
}) {
  return (
    <Card className="border-dashed border-bse-gold bg-white px-6 py-12 text-center shadow-none">
      <span className="mx-auto grid size-12 place-items-center rounded-bse-md bg-bse-canvas-soft text-bse-blue">
        <SearchX className="size-5" aria-hidden="true" />
      </span>
      <h3 className="bse-display mt-4 text-xl text-bse-indigo">{title}</h3>
      <p className="mt-2 text-sm text-bse-ink-muted">{description}</p>
      <Button type="button" className="mt-5" onClick={onReset}>
        {actionLabel}
      </Button>
    </Card>
  );
}
