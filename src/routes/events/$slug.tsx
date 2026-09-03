import { createFileRoute, notFound } from "@tanstack/react-router";

import { EventDetailPage } from "@/components/events/EventDetailPage";
import { eventCovers } from "@/lib/presentation";
import { findEvent } from "@/lib/detail-loaders";
import { events } from "@/data/content";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const event = findEvent(params.slug);
    if (!event) {
      throw notFound();
    }
    return {
      event,
      relatedEvents: events.filter((candidate) => candidate.slug !== event.slug).slice(0, 4),
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "الفعالية غير موجودة | BSE Event" }, { name: "robots", content: "noindex" }],
      };
    }

    return {
      meta: [
        { title: `${loaderData.event.title.ar} | BSE Event` },
        { name: "description", content: loaderData.event.summary.ar },
        { property: "og:title", content: `${loaderData.event.title.ar} | BSE Event` },
        { property: "og:description", content: loaderData.event.summary.ar },
      ],
    };
  },
  component: EventSlugRoute,
});

function EventSlugRoute() {
  const { event, relatedEvents } = Route.useLoaderData();
  return <EventDetailPage event={event} cover={eventCovers[event.cover]} relatedEvents={relatedEvents} />;
}
