export type LeaderboardEntry = {
  rank: number;
  handle: string;
  wagered: number;
  prize: string;
};

export const leaderboardSeason = "SEASON 4 · WEEK 3";

// How many positions to show. Passed to Rain.gg as `participant_count`.
export const leaderboardParticipantCount = 5;

// Shown if the live Rain.gg race can't be reached (no API key configured,
// request failed, no active race, etc.) — used as-is, plus the countdown
// and code/description below, so the section never renders empty.
export const leaderboardCountdown = "2026-09-22T23:59:59-04:00";
export const fallbackRaceCode = "TGB";
export const fallbackRaceDescription = "Apply code TGB to win!";
export const fallbackLeaderboard: LeaderboardEntry[] = [
  { rank: 1, handle: "duce_", wagered: 1842.5, prize: "$250" },
  { rank: 2, handle: "notmadsy", wagered: 1390, prize: "$100" },
  { rank: 3, handle: "xREN99", wagered: 980.75, prize: "$75" },
  { rank: 4, handle: "pipbets", wagered: 640.2, prize: "$50" },
  { rank: 5, handle: "tinytilt", wagered: 410.9, prize: "$25" },
];
