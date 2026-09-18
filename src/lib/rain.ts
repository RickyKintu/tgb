// Server-only client for the Rain.gg affiliate API (https://api.rain.gg/docs).
// Never import this from a "use client" component — RAIN_API_KEY must stay
// on the server. See RAIN_API_KEY in .env.example for setup.
//
// This is TGB's first live partner leaderboard integration (Rain.gg), used
// here as the test case. More casino/partner leaderboards are expected to
// follow the same shape later: a small server-only `src/lib/<partner>.ts`
// client, called from a Server Component, with a static fallback so the
// section never renders empty if a partner's API is down.

const RAIN_API_BASE = "https://api.rain.gg/v1";

export type RainRaceParticipant = {
  id: string;
  user_id: string;
  race_id: string;
  username: string;
  /** Total wagered during the race, in dollars. */
  wagered: number;
  wagered_excluding_boost?: number;
  boosted_amount?: number;
  experience: number;
  /** 1-indexed leaderboard position. */
  position: number;
  /** Prize for this position, in cents. */
  prize: number;
  avatar: { small: string; medium: string; large: string };
};

export type RainRace = {
  id: string;
  code: string;
  name: string;
  description: string;
  status: string;
  starts_at: string;
  ends_at: string;
  ended_at?: string;
  created_at: string;
  recurring_interval?: string;
  /** Prize per position, in cents, in position order. */
  payout_distribution: number[];
  participants: RainRaceParticipant[];
};

type RainRacesResponse = {
  code: number;
  results: RainRace[];
};

/**
 * Fetches Rain.gg's live affiliate race(s) — the same wager-race data shown
 * on rain.gg itself, including participants ordered by wagered highest to
 * lowest.
 *
 * Returns an empty array (never throws) if the API key isn't configured, the
 * request fails, or the response can't be parsed — callers should fall back
 * to static placeholder data in that case so the section never renders empty.
 *
 * Rain.gg's docs ask integrators to cache this for at least 10 minutes since
 * the endpoint is rate limited; we do that via Next.js's fetch `revalidate`.
 */
export async function getRainRaces({
  participantCount = 5,
}: { participantCount?: number } = {}): Promise<RainRace[]> {
  const apiKey = process.env.RAIN_API_KEY;
  if (!apiKey) {
    return [];
  }

  try {
    const res = await fetch(`${RAIN_API_BASE}/affiliates/races?participant_count=${participantCount}`, {
      headers: { "x-api-key": apiKey },
      next: { revalidate: 600 },
    });

    if (!res.ok) {
      console.error(`[rain] races request failed: HTTP ${res.status}`);
      return [];
    }

    const data = (await res.json()) as RainRacesResponse;
    return data.results ?? [];
  } catch (err) {
    console.error("[rain] races request errored:", err);
    return [];
  }
}

/** Picks the race to feature: the currently active one, or the first result as a fallback. */
export function pickFeaturedRace(races: RainRace[]): RainRace | undefined {
  return races.find((r) => r.status.toUpperCase() === "ACTIVE") ?? races[0];
}
