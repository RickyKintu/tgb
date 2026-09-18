import { Hero } from "@/components/hero/Hero";
import { LiveBar } from "@/components/sections/LiveBar";
import { AboutBuddies } from "@/components/sections/AboutBuddies";
import { WatchLive } from "@/components/sections/WatchLive";
import { Leaderboard } from "@/components/sections/Leaderboard";
import { RewardsDrops } from "@/components/sections/RewardsDrops";
import { GiveawaysSection } from "@/components/sections/Giveaways";
import { Partners } from "@/components/sections/Partners";
import { Community } from "@/components/sections/Community";

export default function Home() {
  return (
    <>
      <Hero />
      <LiveBar />
      <AboutBuddies />
      <WatchLive />
      <Leaderboard />
      <RewardsDrops />
      <GiveawaysSection />
      <Partners />
      <Community />
    </>
  );
}
