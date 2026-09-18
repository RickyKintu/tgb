export const site = {
  name: "The Gambling Buddies",
  shortName: "TGB",
  tagline: "Gambling is better with your buddies.",
  description:
    "The Gambling Buddies is a creator-led entertainment crew. Claim the bonus, climb the leaderboard, join the crew.",
  url: "https://thegamblingbuddies.com",
  locale: "en_US",
  themeColor: "#05050A",
  foundedYear: 2023,
};

// Leading "/" matters: these are sections on the homepage, so a bare
// "#bonus" only works while already on "/" — from any other route (e.g.
// /responsible-gambling) a plain hash link does nothing, since there's no
// navigation, just an in-page anchor jump with no matching element. "/#bonus"
// navigates to the homepage first and then jumps to the section, so the nav,
// footer and buttons all work as a way back home from every page.
export const nav = [
  { label: "Bonus", href: "/#bonus" },
  { label: "Leaderboard", href: "/#leaderboard" },
];

// Only the platforms TGB is actually active on right now — swap these hrefs
// for the real handles before launch.
export const socials = [
  { label: "Instagram", href: "https://instagram.com/thegamblingbuddies", icon: "instagram" },
  { label: "Twitter", href: "https://x.com/thegamblingbuddies", icon: "twitter" },
  { label: "Kick", href: "https://kick.com/thegamblingbuddies", icon: "kick" },
  { label: "Discord", href: "https://discord.gg/tgb", icon: "discord" },
];

export const primaryCta = {
  label: "Bonuses",
  href: "/#bonus",
};

export const secondaryCta = {
  label: "Leaderboards",
  href: "/#leaderboard",
};
