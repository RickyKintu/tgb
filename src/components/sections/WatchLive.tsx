"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { AvatarTile } from "@/components/ui/AvatarTile";
import { Badge } from "@/components/ui/Badge";
import { creators } from "@/config/creators";
import { formatNumber } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";
import { motion } from "framer-motion";

const platformBase: Record<string, string> = {
  Twitch: "https://twitch.tv/",
  Kick: "https://kick.com/",
  YouTube: "https://youtube.com/@",
};

function streamUrl(handle: string, platform: string) {
  const slug = handle.toLowerCase().replace(/[^a-z0-9]/g, "");
  return `${platformBase[platform] ?? "#"}${slug}`;
}

export function WatchLive() {
  return (
    <section id="live" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Watch live"
          title="Who’s up right now."
          description="Six buddies, three platforms, one group chat running underneath all of it. Pick a stream and jump in."
        />
      </div>

      <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {creators.map((c) => (
          <Reveal key={c.handle} variants={fadeUp}>
            <a
              href={streamUrl(c.handle, c.platform)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch ${c.handle} on ${c.platform} — opens in a new tab`}
              className="group relative block overflow-hidden rounded-2xl border border-bg-line bg-bg-card transition-all duration-300 hover:-translate-y-1 hover:border-buddy-green/40"
            >
              <div className={`relative aspect-video w-full bg-gradient-to-br ${c.gradient} opacity-90`}>
                <div className="absolute inset-0 bg-bg/40 transition-opacity duration-300 group-hover:bg-bg/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-bg/70 text-ink backdrop-blur"
                    aria-hidden
                  >
                    ▶
                  </motion.span>
                </div>
                {c.isLive && (
                  <span className="absolute left-3 top-3">
                    <Badge tone="pink" pulse>
                      Live
                    </Badge>
                  </span>
                )}
                <span className="absolute right-3 top-3 rounded-full bg-bg/60 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink backdrop-blur">
                  {c.platform}
                </span>
              </div>

              <div className="flex items-center gap-3 p-4">
                <AvatarTile initials={c.initials} gradient={c.gradient} size="sm" />
                <div className="min-w-0">
                  <p className="truncate font-display text-lg normal-case tracking-tight text-ink">
                    {c.handle}
                  </p>
                  <p className="truncate text-xs text-ink-dim">{c.role}</p>
                </div>
                <span className="ml-auto shrink-0 text-xs font-medium text-ink-dim">
                  {formatNumber(c.followers)}
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </RevealGroup>
    </section>
  );
}
