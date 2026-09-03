import confEnergy from "@/assets/conf-energy.jpg";
import confMaint from "@/assets/conf-maint.jpg";
import heroConference from "@/assets/hero-conference.jpg";
import heroEvents from "@/assets/hero-events.jpg";
import heroExhibition from "@/assets/hero-exhibition.jpg";
import heroSponsors from "@/assets/hero-sponsors.jpg";
import seminar from "@/assets/seminar.jpg";
import teamWork from "@/assets/team-work.jpg";
import type { Conference, EventItem } from "@/data/content";

export const conferenceCovers: Record<Conference["cover"], string> = {
  energy: confEnergy,
  maint: confMaint,
  ict: heroConference,
  corrosion: seminar,
};

export const eventCovers: Record<EventItem["cover"], string> = {
  gala: heroSponsors,
  events: heroEvents,
  team: teamWork,
  conference: heroConference,
  seminar,
  exhibition: heroExhibition,
};

export const exhibitionCovers: Record<string, string> = {
  "international-academic-engineering-studies-expo": heroExhibition,
  crogen: seminar,
  "gulf-engineering-forum-energy-management": heroConference,
  maintcon: confMaint,
  "middle-east-corrosion-conference": heroConference,
};
