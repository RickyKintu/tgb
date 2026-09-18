import { Hero } from "@/components/hero/Hero";
import { Bonus } from "@/components/sections/Bonus";
import { Leaderboard } from "@/components/sections/Leaderboard";

export default function Home() {
  return (
    <>
      <Hero />
      <Bonus />
      <Leaderboard />
    </>
  );
}
