export type Testimonial = {
  handle: string;
  quote: string;
  context: string;
};

export const testimonials: Testimonial[] = [
  {
    handle: "@brokebutbullish",
    quote: "Joined for the giveaways, stayed for the group chat. This is the only stream I watch live anymore.",
    context: "Buddy since Season 2",
  },
  {
    handle: "@parlayqueen",
    quote: "Won my first leaderboard prize in week two. Duce actually remembered my name on stream.",
    context: "Inner Circle member",
  },
  {
    handle: "@nightowl_47",
    quote: "It genuinely feels like a group of friends who happen to stream. Not a casino ad with a face on it.",
    context: "Discord regular",
  },
];

export type CommunityStat = {
  label: string;
  value: number;
  prefix?: string;
};

export const communityStats: CommunityStat[] = [
  { label: "Buddies in Discord", value: 38400 },
  { label: "Hours streamed / mo", value: 640 },
  { label: "Given away this year", value: 214000, prefix: "$" },
  { label: "Countries repping TGB", value: 61 },
];
