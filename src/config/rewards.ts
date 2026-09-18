export type RewardTier = {
  tier: string;
  name: string;
  perk: string;
  accent: string;
};

export const rewardTiers: RewardTier[] = [
  {
    tier: "01",
    name: "Rookie Buddy",
    perk: "Discord role, birthday drop, shoutout in weekly recap",
    accent: "text-ink",
  },
  {
    tier: "02",
    name: "Ride or Die",
    perk: "Monthly giveaway entries x3, early access to challenges",
    accent: "text-gradient-green",
  },
  {
    tier: "03",
    name: "Inner Circle",
    perk: "Priority leaderboard prizes, merch drops, buddy meetups",
    accent: "text-gradient-gold",
  },
  {
    tier: "04",
    name: "Buddy Legend",
    perk: "Custom emote, name in credits, 1:1 stream shoutout",
    accent: "text-gradient-gold",
  },
];

export type Drop = {
  code: string;
  title: string;
  detail: string;
  expires: string;
  tag: "New" | "Hot" | "Ending Soon";
};

export const drops: Drop[] = [
  {
    code: "BUDDY50",
    title: "Welcome Pack",
    detail: "Starter boost for new Buddies joining this week",
    expires: "Rolling",
    tag: "New",
  },
  {
    code: "DUCEHEAT",
    title: "Duce’s Heater Bonus",
    detail: "Riding Duce’s streak? This one’s for the crew watching",
    expires: "48h left",
    tag: "Hot",
  },
  {
    code: "SUNDAYRUN",
    title: "Sunday Session Drop",
    detail: "Weekly drop tied to the Sunday group stream",
    expires: "Ends Sunday",
    tag: "Ending Soon",
  },
];
