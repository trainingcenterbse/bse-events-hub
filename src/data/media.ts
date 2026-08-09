import confEnergy from "@/assets/conf-energy.jpg";
import confMaint from "@/assets/conf-maint.jpg";
import heroConference from "@/assets/hero-conference.jpg";
import heroEvents from "@/assets/hero-events.jpg";
import heroExhibition from "@/assets/hero-exhibition.jpg";
import heroSponsors from "@/assets/hero-sponsors.jpg";
import person1 from "@/assets/person-1.jpg";
import person2 from "@/assets/person-2.jpg";
import person3 from "@/assets/person-3.jpg";
import person4 from "@/assets/person-4.jpg";
import person5 from "@/assets/person-5.jpg";
import person6 from "@/assets/person-6.jpg";
import seminar from "@/assets/seminar.jpg";
import teamWork from "@/assets/team-work.jpg";

export const conferenceCovers: Record<string, string> = {
  energy: confEnergy,
  maint: confMaint,
  ict: heroConference,
  corrosion: heroExhibition,
};

export const eventCovers: Record<string, string> = {
  gala: heroSponsors,
  events: heroEvents,
  team: teamWork,
  conference: heroConference,
  seminar: seminar,
  exhibition: heroExhibition,
};

export const personPhotos: Record<string, string> = {
  p1: person1,
  p2: person2,
  p3: person3,
  p4: person4,
  p5: person5,
  p6: person6,
};
