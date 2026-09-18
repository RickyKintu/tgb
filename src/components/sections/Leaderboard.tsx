import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Countdown } from "@/components/ui/Countdown";
import {
  fallbackLeaderboard,
  fallbackRaceCode,
  fallbackRaceDescription,
  leaderboardCountdown,
  leaderboardParticipantCount,
  leaderboardSeason,
  buddyOfTheMonth,
  type LeaderboardEntry,
} from "@/config/leaderboard";
import { getRainRaces, pickFeaturedRace } from "@/lib/rain";
import { cn, formatUSD } from "@/lib/utils";

type BoardData = {
  entries: LeaderboardEntry[];
  endsAt: string;
  raceCode: string;
  raceDescription: string;
  isLive: boolean;
};

async function getLeaderboardData(): Promise<BoardData> {
  const races = await getRainRaces({ participantCount: leaderboardParticipantCount });
  const race = pickFeaturedRace(races);

  if (!race || race.participants.length === 0) {
    return {
      entries: fallbackLeaderboard,
      endsAt: leaderboardCountdown,
      raceCode: fallbackRaceCode,
      raceDescription: fallbackRaceDescription,
      isLive: false,
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
    entries,
    endsAt: race.ends_at,
    raceCode: race.code,
    raceDescription: race.description,
    isLive: true,
  };
}

export async function Leaderboard() {
  const { entries, endsAt, raceCode, raceDescription, isLive } = await getLeaderboardData();

  return (
    <section id="leaderboard" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-10">
        <div>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Buddy Leaderboard"
              title="Climb it. Get paid for climbing it."
              description={`${raceDescription} Top ${entries.length} split real prizes — no minimum follower count, no favorites.`}
            />
          </div>

          <Reveal className="mt-8 flex flex-wrap items-center gap-4">
            <Badge tone="green" pulse={isLive}>
              {isLive ? "Live now" : leaderboardSeason}
            </Badge>
            <Badge tone="gold">Use code {raceCode}</Badge>
            <div className="flex items-center gap-2 text-xs text-ink-dim">
              <span>Resets in</span>
              <Countdown target={endsAt} />
            </div>
          </Reveal>

          <Reveal className="mt-8 overflow-hidden rounded-2xl border border-bg-line">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-bg-line bg-bg-elevated text-xs uppercase tracking-widest text-ink-dim">
                  <th className="px-5 py-3 font-medium">Rank</th>
                  <th className="px-5 py-3 font-medium">Buddy</th>
                  <th className="hidden px-5 py-3 font-medium sm:table-cell">Wagered</th>
                  <th className="px-5 py-3 font-medium">Prize</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry) => (
                  <tr
                    key={entry.rank}
                    className={cn(
                      "border-b border-bg-line/60 text-sm last:border-b-0",
                      entry.rank <= 3 ? "bg-buddy-green/[0.04]" : "bg-transparent"
                    )}
                  >
                    <td className="px-5 py-4 font-display text-base normal-case text-ink">
                      #{entry.rank}
                    </td>
                    <td className="px-5 py-4 font-medium text-ink">{entry.handle}</td>
                    <td className="hidden px-5 py-4 font-mono tabular-nums text-ink-soft sm:table-cell">
                      {formatUSD(entry.wagered)}
                    </td>
                    <td className="px-5 py-4 text-ink-soft">{entry.prize}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <p className="mt-4 text-xs text-ink-dim">
            {isLive
              ? "Live wager data via Rain.gg, refreshed every few minutes."
              : "Showing placeholder standings — connect a live race to replace this."}
          </p>
        </div>

        <Reveal className="flex flex-col justify-between rounded-3xl border border-buddy-gold/25 bg-gradient-to-b from-buddy-gold/[0.08] to-transparent p-8">
          <div>
            <Badge tone="gold">Buddy of the Month</Badge>
            {/* Name always matches #1 on the table to the left (live or
                fallback) so the two never disagree — only the quote/stats
                below are static editorial copy. */}
            <p className="mt-6 font-display text-4xl normal-case tracking-tight text-ink">
              {entries[0]?.handle ?? buddyOfTheMonth.handle}
            </p>
            <p className="mt-4 text-sm italic leading-relaxed text-ink-soft">
              &ldquo;{buddyOfTheMonth.quote}&rdquo;
            </p>
          </div>
          <div className="mt-8 space-y-1 border-t border-bg-line pt-5 text-xs text-ink-dim">
            <p>{buddyOfTheMonth.since}</p>
            <p>{buddyOfTheMonth.wins}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
