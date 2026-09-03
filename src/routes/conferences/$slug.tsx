import { createFileRoute, notFound } from "@tanstack/react-router";

import { ConferenceDetailPage } from "@/components/conferences/ConferenceDetailPage";
import { conferenceCovers } from "@/lib/presentation";
import { findConference } from "@/lib/detail-loaders";

export const Route = createFileRoute("/conferences/$slug")({
  loader: ({ params }) => {
    const conference = findConference(params.slug);
    if (!conference) {
      throw notFound();
    }
    return { conference };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "المؤتمر غير موجود | BSE Event" }, { name: "robots", content: "noindex" }],
      };
    }

    return {
      meta: [
        { title: `${loaderData.conference.title.ar} | BSE Event` },
        { name: "description", content: loaderData.conference.summary.ar },
        { property: "og:title", content: `${loaderData.conference.title.ar} | BSE Event` },
        { property: "og:description", content: loaderData.conference.summary.ar },
      ],
    };
  },
  component: ConferenceSlugRoute,
});

function ConferenceSlugRoute() {
  const { conference } = Route.useLoaderData();
  return <ConferenceDetailPage conference={conference} cover={conferenceCovers[conference.cover]} />;
}
