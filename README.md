# THE GAMBLING BUDDIES — Website

The official site for TGB: a creator-led gambling entertainment brand. Built with
Next.js 16 (App Router), TypeScript, Tailwind CSS and Framer Motion.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000. Production build:

```bash
npm run build
npm run start
```

## Accessing it from another device on your network

`npm run dev` and `npm run start` bind to `-H 0.0.0.0`, so the server listens on every
network interface, not just `localhost`. To open it from your phone or another
computer on the same Wi-Fi/LAN, use this machine's local IP instead — e.g.
`http://192.168.0.7:3000`.

If that doesn't load in dev mode, two things to check:

1. **Windows Firewall** — the first time you run `npm run dev`, Windows may prompt to
   allow Node.js through the firewall on private networks. Allow it (or add an inbound
   rule for TCP port 3000 if you don't get the prompt).
2. **`allowedDevOrigins`** in `next.config.mjs` — Next.js's dev server blocks
   cross-origin requests for its dev assets by default. This project already allowlists
   `192.168.0.7` and the rest of that `/24` (`192.168.0.*`). If your LAN IP is on a
   different subnet, add it there too.

`npm run start` (the production server) doesn't have this dev-origin restriction — once
you `npm run build`, `npm run start` and hit it from another device, only the firewall
rule above applies.

## Fonts (no external network calls)

Fonts are self-hosted via `@fontsource/anton` and `@fontsource/inter` (imported in
`src/app/layout.tsx`) instead of `next/font/google`. This was a deliberate choice: it
removes a build-time dependency on Google's font CDN, works fully offline, and avoids
any FOUC. If you'd rather use `next/font/google`, swap the imports back — nothing else
depends on this choice.

## Architecture

Everything a non-engineer would want to edit lives in `src/config/*.ts` — no component
code needs to change to update copy, stats, creators, partners, etc.

- `src/config/site.ts` — brand name, tagline, nav links, social links, CTA labels/URLs
- `src/config/creators.ts` — the Buddies roster (handles, platforms, follower counts, live status)
- `src/config/leaderboard.ts` — weekly leaderboard entries, season label, reset countdown, Buddy of the Month
- `src/config/rewards.ts` — reward tier ladder + active Buddy Drops codes
- `src/config/giveaways.ts` — active giveaways + live community challenges
- `src/config/partners.ts` — partner/operator cards (**placeholder brands — replace before launch**, see below)
- `src/config/testimonials.ts` — community quotes + the stat strip numbers

Everything else is organized as:

- `src/app/` — routes: `/` (homepage), `/responsible-gambling`, plus `sitemap.ts`,
  `robots.ts`, `opengraph-image.tsx` (dynamic OG image, no static asset needed), `icon.tsx`
- `src/components/hero/` — the cinematic intro sequence + hero
- `src/components/sections/` — every homepage section, in the order they render on `/`
- `src/components/layout/` — Navbar, MobileMenu, Footer, AgeGate, SkipLink
- `src/components/ui/` — reusable primitives (Button, Badge, Reveal/RevealGroup scroll
  animations, Countdown, StatTile, Marquee, GlowCard, AvatarTile, Logo, SocialRow)
- `src/lib/motion.ts` — the shared Framer Motion variants/easing used everywhere, so the
  whole site's motion language stays consistent from one file

## Before you launch — replace these placeholders

1. **Partners** (`src/config/partners.ts`) — the four partner cards (REELHOUSE, LINEUP,
   SPINCREW, DICEROW) are fictional placeholders. Swap in your real, licensed operator
   partnerships and their actual bonus codes/terms before this goes live.
2. **Social + Discord links** (`src/config/site.ts`) — point `socials` and `primaryCta`
   at your real Twitch/Kick/YouTube/TikTok/Instagram/X/Discord.
3. **Domain** — update `site.url` in `site.ts` (used for metadata, sitemap, OG tags,
   JSON-LD) once you have a production domain.
4. **Creator roster / leaderboard / rewards / giveaways** — all seeded with realistic
   placeholder data so the site is fully populated out of the box; wire these to your
   real stream schedule, leaderboard feed and promo calendar when ready (see "Going
   live with real data" below).
5. **Responsible gambling helplines** (`src/app/responsible-gambling/page.tsx`) — the
   `helplines` list covers the US/UK/Canada + one global self-exclusion tool. Add or
   adjust for the jurisdictions you actually operate in, and have this page reviewed
   against your compliance requirements before launch — it's a strong starting point,
   not a substitute for legal review.

## Going live with real data

Every data file in `src/config/` is plain, typed TypeScript — the simplest upgrade
path is to keep hand-editing these files (a PR per content update). When you're ready
to automate it, each file's shape is the contract: swap the static arrays for a fetch
from your own API/CMS/database at the top of `page.tsx` (or inside each section
component) without touching any markup.

## Compliance features already built in

- 18+ age gate on first visit (`AgeGate.tsx`, `sessionStorage`-free — persists via
  `localStorage` so returning visitors aren't re-gated every session)
- `/responsible-gambling` page with tools + regional helplines, linked from the footer
  and the age gate
- Footer disclaimer clarifying TGB is a content brand, not an operator, and that
  partner offers are independent, licensed third parties
- Partner cards each carry "18+ · T&Cs apply"

## Accessibility

- Skip-to-content link, semantic landmarks, visible focus states site-wide
- All interactive controls keyboard-reachable; mobile menu traps scroll and closes on Escape
- `prefers-reduced-motion` is respected everywhere (global CSS override + the cinematic
  intro skips straight to its end state + `StatTile`/`Countdown` skip animated counting)
- Color palette checked for contrast against the near-black background

## Performance & SEO

- Static generation for every route (`○ (Static)` on `next build`)
- Self-hosted fonts (no external font request at runtime)
- Dynamic OG image + favicon generated at build time via `next/og` (no binary assets to
  keep in sync)
- `sitemap.xml`, `robots.txt`, full Open Graph/Twitter card metadata, Organization
  JSON-LD in `layout.tsx`

## Linting

```bash
npx eslint .
```

Uses `eslint-config-next`'s native flat config (no `next lint` — that command was
removed in Next 16; `npx eslint .` is the direct replacement).
