// Registry of leaderboard sources shown in the Buddy Leaderboard section's
// switcher (see LeaderboardSwitcher). Rain is TGB's one live integration
// right now; Gamba has no partner integration yet, so its data is just a
// "coming soon" state in Leaderboard.tsx — add a real source here (and wire
// up its data the way rain.ts does) once there's something to fetch.
export type LeaderboardSourceMeta = {
  slug: string;
  label: string;
};

export const leaderboardSources: LeaderboardSourceMeta[] = [
  { slug: "rain", label: "Rain" },
  { slug: "gamba", label: "Gamba" },
];
