export type Partner = {
  name: string;
  category: string;
  offer: string;
  code: string;
};

// Placeholder partner slate — swap for real, licensed operators before launch.
// TGB stays the hero; partners live inside the TGB world, not above it.
export const partners: Partner[] = [
  { name: "REELHOUSE", category: "Casino", offer: "150% up to $1,000 + 50 spins", code: "TGB150" },
  { name: "LINEUP", category: "Sportsbook", offer: "First bet on us, up to $250", code: "TGBBET" },
  { name: "SPINCREW", category: "Casino", offer: "$25 no-deposit for Buddies", code: "TGBFREE" },
  { name: "DICEROW", category: "Live Casino", offer: "Weekly rakeback boost", code: "TGBLIVE" },
];
