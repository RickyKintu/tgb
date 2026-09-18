// One card per casino/partner we have a CPA deal with, rendered in the
// Bonuses grid (see BonusCard + the Bonus section). Rain.gg is the one real
// integration right now — its code/description are overridden with live
// data from Rain's API when available (see src/components/sections/Bonus.tsx),
// falling back to the values below if the API is unreachable.
//
// The rest are dummy placeholder cards: TGB doesn't have those partner deals
// live yet. Keep them in the grid (comingSoon: true) so the layout reads
// correctly with several cards, and swap each one out for a real entry —
// name, code, extras, ctaHref — the moment a real CPA link exists. Nothing
// about the shape needs to change, only the values.
import { fallbackRaceCode, fallbackRaceDescription } from "@/config/leaderboard";

export type BonusOffer = {
  slug: string;
  name: string;
  siteLabel: string;
  mainBonusTitle: string;
  extras: string[];
  code?: string;
  ctaLabel: string;
  ctaHref?: string;
  comingSoon?: boolean;
};

export const rainOffer: BonusOffer = {
  slug: "rain",
  name: "Rain.gg",
  siteLabel: "RAIN.GG",
  mainBonusTitle: fallbackRaceDescription,
  extras: [
    "Live wager race — top 5 split the prize pool",
    "Every dollar wagered counts toward the leaderboard",
    "No minimum follower count, no favorites",
  ],
  code: fallbackRaceCode,
  ctaLabel: "Go to Rain.gg",
  ctaHref: "https://rain.gg",
};

// TODO: replace each of these with a real partner once the CPA link is in —
// same shape as rainOffer above (name, siteLabel, mainBonusTitle, extras,
// code, ctaLabel, ctaHref), just drop comingSoon.
export const dummyOffers: BonusOffer[] = [
  {
    slug: "dummy-1",
    name: "Casino Partner",
    siteLabel: "COMING SOON",
    mainBonusTitle: "Partner offer landing soon.",
    extras: ["Deposit bonus or lossback", "Details drop once the deal is live"],
    ctaLabel: "Coming Soon",
    comingSoon: true,
  },
  {
    slug: "dummy-2",
    name: "Casino Partner",
    siteLabel: "COMING SOON",
    mainBonusTitle: "Partner offer landing soon.",
    extras: ["Deposit bonus or lossback", "Details drop once the deal is live"],
    ctaLabel: "Coming Soon",
    comingSoon: true,
  },
];
