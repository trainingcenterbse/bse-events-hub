import { createFileRoute } from "@tanstack/react-router";

import { ConferenceDetailPage } from "@/components/conferences/ConferenceDetailPage";
import { conferenceCovers } from "@/lib/presentation";
import { requireConference } from "@/lib/detail-loaders";

const conference = requireConference("middle-east-corrosion-18");

export const Route = createFileRoute("/conferences/middle-east-corrosion-18")({
  head: () => ({
    meta: [
      { title: `${conference.title.ar} | BSE Event` },
      { name: "description", content: conference.summary.ar },
    ],
  }),
  component: MiddleEastCorrosion18Route,
});

function MiddleEastCorrosion18Route() {
  return <ConferenceDetailPage conference={conference} cover={conferenceCovers[conference.cover]} />;
}
