import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { LeaderboardSwitcher, type LeaderboardSourceData } from "@/components/ui/LeaderboardSwitcher";
import {
  fallbackLeaderboard,
  fallbackRaceCode,
  leaderboardCountdown,
  leaderboardParticipantCount,
  leaderboardSeason,
  type LeaderboardEntry,
} from "@/config/leaderboard";
import { leaderboardSources } from "@/config/leaderboards";
import { getRainRaces, pickFeaturedRace } from "@/lib/rain";
import { formatUSD } from "@/lib/utils";

async function getRainSource(): Promise<LeaderboardSourceData> {
  const races = await getRainRaces({ participantCount: leaderboardParticipantCount });
  const race = pickFeaturedRace(races);

  if (!race || race.participants.length === 0) {
    return {
      slug: "rain",
      label: "Rain",
      isLive: false,
      comingSoon: false,
      entries: fallbackLeaderboard,
      endsAt: leaderboardCountdown,
      code: fallbackRaceCode,
      seasonLabel: leaderboardSeason,
      note: "Showing placeholder standings — connect a live race to replace this.",
    };
  }

  const entries: LeaderboardEntry[] = [...race.participants]
    .sort((a, b) => a.position - b.position)
    .slice(0, leaderboardParticipantCount)
    .map((p) => ({
      rank: p.position,
      handle: p.username,
      wagered: p.wagered,
      prize: formatUSD(p.prize / 100),
    }));

  return {
    slug: "rain",
    label: "Rain",
    isLive: true,
    comingSoon: false,
    entries,
    endsAt: race.ends_at,
    code: race.code,
    note: "Live wager data via Rain.gg, refreshed every few minutes.",
  };
}

function getGambaSource(): LeaderboardSourceData {
  return {
    slug: "gamba",
    label: "Gamba",
    isLive: false,
    comingSoon: true,
    entries: [],
    note: "The Gamba leaderboard is on its way — check back soon.",
  };
}

async function getSources(): Promise<LeaderboardSourceData[]> {
  const bySlug: Record<string, LeaderboardSourceData> = {
    rain: await getRainSource(),
    gamba: getGambaSource(),
  };
  // Ordered by the registry in config, so adding a new source there is
  // enough to place its button — no reordering logic needed here.
  return leaderboardSources.map((s) => bySlug[s.slug]).filter(Boolean);
}

export async function Leaderboard() {
  const sources = await getSources();

  return (
    <section id="leaderboard" className="relative isolate mx-auto max-w-4xl px-5 py-24 sm:px-8 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-glow-green" />

      <SectionHeading
        eyebrow="Buddy Leaderboard"
        title="Climb it. Get paid for climbing it."
        description="Every partner runs its own race. Pick one below to see live standings and how to get on the board."
      />

      <Reveal className="mt-10">
        <LeaderboardSwitcher sources={sources} />
      </Reveal>
    </section>
  );
}
