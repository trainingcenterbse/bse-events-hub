export const conferenceDetailRoutes = {
  "energy-management-gulf-forum-26": "/conferences/energy-management-gulf-forum-26",
  "maintcon-2024": "/conferences/maintcon-2024",
  "arab-ict-conference-7": "/conferences/arab-ict-conference-7",
  "middle-east-corrosion-18": "/conferences/middle-east-corrosion-18",
} as const;

export const eventDetailRoutes = {
  "bahraini-engineer-day": "/events/bahraini-engineer-day",
  "annual-ramadan-ghabga": "/events/annual-ramadan-ghabga",
  "volunteers-recognition": "/events/volunteers-recognition",
  "annual-general-assembly": "/events/annual-general-assembly",
} as const;

export type ConferenceDetailPath = (typeof conferenceDetailRoutes)[keyof typeof conferenceDetailRoutes];
export type EventDetailPath = (typeof eventDetailRoutes)[keyof typeof eventDetailRoutes];

export function getConferenceDetailRoute(slug: string): ConferenceDetailPath {
  const route = conferenceDetailRoutes[slug as keyof typeof conferenceDetailRoutes];
  if (!route) {
    throw new Error(`No conference detail route found for slug: ${slug}`);
  }
  return route;
}

export function getEventDetailRoute(slug: string): EventDetailPath {
  const route = eventDetailRoutes[slug as keyof typeof eventDetailRoutes];
  if (!route) {
    throw new Error(`No event detail route found for slug: ${slug}`);
  }
  return route;
}
