export type Giveaway = {
  title: string;
  prizePool: string;
  entries: number;
  closesIn: string; // ISO date string
  requirement: string;
};

export const giveaways: Giveaway[] = [
  {
    title: "September Buddy Bash",
    prizePool: "$5,000",
    entries: 4821,
    closesIn: "2026-09-30T23:59:59-04:00",
    requirement: "Be in the Discord + active on leaderboard",
  },
  {
    title: "Buddy Pick: Underdog Parlay",
    prizePool: "$750 + Merch Box",
    entries: 1209,
    closesIn: "2026-09-21T20:00:00-04:00",
    requirement: "React in #buddy-picks before kickoff",
  },
];

export type Challenge = {
  title: string;
  buddy: string;
  goal: string;
  progress: number; // 0-100
};

export const challenges: Challenge[] = [
  {
    title: "Hit a 100x or bust",
    buddy: "MADSY",
    goal: "Landing a 100x multiplier live on stream",
    progress: 64,
  },
  {
    title: "Beat the group avg. wager",
    buddy: "DUCE",
    goal: "Out-wager the crew’s weekly average",
    progress: 88,
  },
  {
    title: "7 buddy picks in a row",
    buddy: "COACH PIP",
    goal: "Hit 7 community-voted picks consecutively",
    progress: 42,
  },
];
