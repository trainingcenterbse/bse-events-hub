import { createFileRoute } from "@tanstack/react-router";

import { ConferenceDetailPage } from "@/components/conferences/ConferenceDetailPage";
import { conferenceCovers } from "@/lib/presentation";
import { requireConference } from "@/lib/detail-loaders";

const conference = requireConference("arab-ict-conference-7");

export const Route = createFileRoute("/conferences/arab-ict-conference-7")({
  head: () => ({
    meta: [
      { title: `${conference.title.ar} | BSE Event` },
      { name: "description", content: conference.summary.ar },
    ],
  }),
  component: ArabIctConference7Route,
});

function ArabIctConference7Route() {
  return <ConferenceDetailPage conference={conference} cover={conferenceCovers[conference.cover]} />;
}
