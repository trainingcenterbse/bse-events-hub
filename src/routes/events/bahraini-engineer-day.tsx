import { createFileRoute } from "@tanstack/react-router";

import { EventDetailPage } from "@/components/events/EventDetailPage";
import { eventCovers } from "@/lib/presentation";
import { events } from "@/data/content";
import { requireEvent } from "@/lib/detail-loaders";

const event = requireEvent("bahraini-engineer-day");
const relatedEvents = events.filter((candidate) => candidate.slug !== event.slug).slice(0, 4);

export const Route = createFileRoute("/events/bahraini-engineer-day")({
  head: () => ({
    meta: [
      { title: `${event.title.ar} | BSE Event` },
      { name: "description", content: event.summary.ar },
    ],
  }),
  component: BahrainiEngineerDayRoute,
});

function BahrainiEngineerDayRoute() {
  return <EventDetailPage event={event} cover={eventCovers[event.cover]} relatedEvents={relatedEvents} />;
}
