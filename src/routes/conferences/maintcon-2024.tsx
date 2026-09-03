import { createFileRoute } from "@tanstack/react-router";

import { ConferenceDetailPage } from "@/components/conferences/ConferenceDetailPage";
import { conferenceCovers } from "@/lib/presentation";
import { requireConference } from "@/lib/detail-loaders";

const conference = requireConference("maintcon-2024");

export const Route = createFileRoute("/conferences/maintcon-2024")({
  head: () => ({
    meta: [
      { title: `${conference.title.ar} | BSE Event` },
      { name: "description", content: conference.summary.ar },
    ],
  }),
  component: Maintcon2024Route,
});

function Maintcon2024Route() {
  return <ConferenceDetailPage conference={conference} cover={conferenceCovers[conference.cover]} />;
}
