import { createFileRoute } from "@tanstack/react-router";

import { ConferenceDetailPage } from "@/components/conferences/ConferenceDetailPage";
import { conferenceCovers } from "@/lib/presentation";
import { requireConference } from "@/lib/detail-loaders";

const conference = requireConference("energy-management-gulf-forum-26");

export const Route = createFileRoute("/conferences/energy-management-gulf-forum-26")({
  head: () => ({
    meta: [
      { title: `${conference.title.ar} | BSE Event` },
      { name: "description", content: conference.summary.ar },
    ],
  }),
  component: EnergyManagementGulfForum26Route,
});

function EnergyManagementGulfForum26Route() {
  return <ConferenceDetailPage conference={conference} cover={conferenceCovers[conference.cover]} />;
}
