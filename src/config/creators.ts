export type Creator = {
  handle: string;
  realVibe: string; // one-line personality tag
  role: string; // what they’re known for
  platform: "Twitch" | "Kick" | "YouTube";
  followers: number;
  isLive: boolean;
  initials: string;
  gradient: string; // tailwind gradient classes
  streak?: string;
};

export const creators: Creator[] = [
  {
    handle: "MADSY",
    realVibe: "Loud wins, louder losses",
    role: "Slots & Sunday chaos",
    platform: "Kick",
    followers: 184000,
    isLive: true,
    initials: "MD",
    gradient: "from-buddy-green to-buddy-gold",
    streak: "7-day heater",
  },
  {
    handle: "COACH PIP",
    realVibe: "Bankroll strategist, zero chill",
    role: "Sports betting breakdowns",
    platform: "Twitch",
    followers: 142000,
    isLive: true,
    initials: "CP",
    gradient: "from-buddy-violet to-buddy-pink",
  },
  {
    handle: "REN",
    realVibe: "The calm one. Until 3am",
    role: "Blackjack & high-stakes",
    platform: "Twitch",
    followers: 96500,
    isLive: false,
    initials: "RN",
    gradient: "from-buddy-gold to-buddy-pink",
  },
  {
    handle: "DUCE",
    realVibe: "Self-proclaimed luckiest buddy",
    role: "Bonus hunts & drops",
    platform: "Kick",
    followers: 211000,
    isLive: true,
    initials: "DC",
    gradient: "from-buddy-green to-buddy-violet",
    streak: "on a heater",
  },
  {
    handle: "LOLA",
    realVibe: "Runs the group chat",
    role: "Community & giveaways host",
    platform: "YouTube",
    followers: 78300,
    isLive: false,
    initials: "LL",
    gradient: "from-buddy-pink to-buddy-gold",
  },
  {
    handle: "TINY",
    realVibe: "Biggest bets, smallest budget",
    role: "Underdog plays",
    platform: "Kick",
    followers: 133700,
    isLive: false,
    initials: "TY",
    gradient: "from-buddy-violet to-buddy-green",
  },
];

export const liveNow = creators.filter((c) => c.isLive);
