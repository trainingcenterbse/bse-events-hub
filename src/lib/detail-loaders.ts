import { conferences, events, type Conference, type EventItem } from "@/data/content";

export function findConference(slug: string): Conference | undefined {
  return conferences.find((conference) => conference.slug === slug);
}

export function findEvent(slug: string): EventItem | undefined {
  return events.find((event) => event.slug === slug);
}

export function requireConference(slug: string): Conference {
  const conference = findConference(slug);
  if (!conference) {
    throw new Error(`Unknown conference slug: ${slug}`);
  }
  return conference;
}

export function requireEvent(slug: string): EventItem {
  const event = findEvent(slug);
  if (!event) {
    throw new Error(`Unknown event slug: ${slug}`);
  }
  return event;
}
