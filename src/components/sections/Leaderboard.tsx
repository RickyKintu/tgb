import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Countdown } from "@/components/ui/Countdown";
import { leaderboard, leaderboardSeason, leaderboardCountdown, buddyOfTheMonth } from "@/config/leaderboard";
import { formatNumber } from "@/lib/utils";
import { cn } from "@/lib/utils";

const trendGlyph = { up: "▲", down: "▼", same: "—" } as const;
const trendColor = {
  up: "text-buddy-green",
  down: "text-buddy-pink",
  same: "text-ink-dim",
} as const;

export function Leaderboard() {
  return (
    <section id="leaderboard" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-10">
        <div>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Buddy Leaderboard"
              title="Climb it. Get paid for climbing it."
              description="Every wager counts toward the weekly board. Top eight split real prizes — no minimum follower count, no favorites."
            />
          </div>

          <Reveal className="mt-8 flex flex-wrap items-center gap-4">
            <Badge tone="green">{leaderboardSeason}</Badge>
            <div className="flex items-center gap-2 text-xs text-ink-dim">
              <span>Resets in</span>
              <Countdown target={leaderboardCountdown} />
            </div>
          </Reveal>

          <Reveal className="mt-8 overflow-hidden rounded-2xl border border-bg-line">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-bg-line bg-bg-elevated text-xs uppercase tracking-widest text-ink-dim">
                  <th className="px-5 py-3 font-medium">Rank</th>
                  <th className="px-5 py-3 font-medium">Buddy</th>
                  <th className="hidden px-5 py-3 font-medium sm:table-cell">Points</th>
                  <th className="px-5 py-3 font-medium">Prize</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((entry) => (
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
                      {formatNumber(entry.points)}
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-ink-soft">{entry.prize}</span>
                      <span className={cn("ml-2 inline-block text-xs", trendColor[entry.trend])} aria-hidden>
                        {trendGlyph[entry.trend]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>

        <Reveal className="flex flex-col justify-between rounded-3xl border border-buddy-gold/25 bg-gradient-to-b from-buddy-gold/[0.08] to-transparent p-8">
          <div>
            <Badge tone="gold">Buddy of the Month</Badge>
            <p className="mt-6 font-display text-4xl normal-case tracking-tight text-ink">
              {buddyOfTheMonth.handle}
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
