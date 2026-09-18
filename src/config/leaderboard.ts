export type LeaderboardEntry = {
  rank: number;
  handle: string;
  points: number;
  prize: string;
  trend: "up" | "down" | "same";
};

export const leaderboardSeason = "SEASON 4 · WEEK 3";
export const leaderboardCountdown = "2026-09-22T23:59:59-04:00";

export const leaderboard: LeaderboardEntry[] = [
  { rank: 1, handle: "duce_", points: 284120, prize: "$2,500 + Buddy Ring", trend: "same" },
  { rank: 2, handle: "notmadsy", points: 251800, prize: "$1,500", trend: "up" },
  { rank: 3, handle: "xREN99", points: 198340, prize: "$1,000", trend: "up" },
  { rank: 4, handle: "pipbets", points: 176420, prize: "$500", trend: "down" },
  { rank: 5, handle: "tinytilt", points: 154990, prize: "$250", trend: "up" },
  { rank: 6, handle: "lola.live", points: 132110, prize: "$150", trend: "same" },
  { rank: 7, handle: "gremlin_gg", points: 118700, prize: "$100", trend: "down" },
  { rank: 8, handle: "buddyof2024", points: 109450, prize: "$100", trend: "up" },
];

export const buddyOfTheMonth = {
  handle: "duce_",
  quote: "Started as a viewer. Now I’m the one they clip.",
  since: "Buddy since Feb 2025",
  wins: "3x leaderboard champion",
};
