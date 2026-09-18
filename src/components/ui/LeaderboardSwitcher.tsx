"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Countdown } from "@/components/ui/Countdown";
import { cn, formatUSD } from "@/lib/utils";
import type { LeaderboardEntry } from "@/config/leaderboard";

export type LeaderboardSourceData = {
  slug: string;
  label: string;
  isLive: boolean;
  comingSoon: boolean;
  entries: LeaderboardEntry[];
  endsAt?: string;
  code?: string;
  seasonLabel?: string;
  note: string;
};

export function LeaderboardSwitcher({ sources }: { sources: LeaderboardSourceData[] }) {
  const [active, setActive] = useState(sources[0]?.slug);
  const source = sources.find((s) => s.slug === active) ?? sources[0];

  if (!source) return null;

  return (
    <div>
      {/* Which partner's leaderboard: more get added here as CPA deals go live. */}
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Leaderboard">
        {sources.map((s) => (
          <button
            key={s.slug}
            type="button"
            role="tab"
            aria-selected={s.slug === source.slug}
            onClick={() => setActive(s.slug)}
            className={cn(
              "rounded-full border px-5 py-2 text-sm font-semibold transition-colors",
              s.slug === source.slug
                ? "border-buddy-green bg-buddy-green text-bg"
                : "border-bg-line text-ink-soft hover:border-ink/30 hover:text-ink"
            )}
          >
            {s.label}
          </button>
        ))}
      </div>

      {source.comingSoon ? (
        <div className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-dashed border-bg-line px-6 py-16 text-center">
          <Badge tone="default">Coming Soon</Badge>
          <p className="mt-4 max-w-sm text-sm text-ink-soft">{source.note}</p>
        </div>
      ) : (
        <>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Badge tone="green" pulse={source.isLive}>
              {source.isLive ? "Live now" : source.seasonLabel ?? "Season"}
            </Badge>
            {source.code && <Badge tone="gold">Use code {source.code}</Badge>}
            {source.endsAt && (
              <div className="flex items-center gap-2 text-xs text-ink-dim">
                <span>Resets in</span>
                <Countdown target={source.endsAt} />
              </div>
            )}
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-bg-line">
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
                {source.entries.map((entry) => (
                  <tr
                    key={entry.rank}
                    className={cn(
                      "border-b border-bg-line/60 text-sm last:border-b-0",
                      entry.rank <= 3 ? "bg-buddy-green/[0.04]" : "bg-transparent"
                    )}
                  >
                    <td className="px-5 py-4 font-display text-base normal-case text-ink">#{entry.rank}</td>
                    <td className="px-5 py-4 font-medium text-ink">{entry.handle}</td>
                    <td className="hidden px-5 py-4 font-mono tabular-nums text-ink-soft sm:table-cell">
                      {formatUSD(entry.wagered)}
                    </td>
                    <td className="px-5 py-4 text-ink-soft">{entry.prize}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-ink-dim">{source.note}</p>
        </>
      )}
    </div>
  );
}
