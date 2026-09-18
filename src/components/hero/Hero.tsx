"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AvatarTile } from "@/components/ui/AvatarTile";
import { Badge } from "@/components/ui/Badge";
import { liveNow } from "@/config/creators";
import { primaryCta, secondaryCta } from "@/config/site";
import { EASE_OUT } from "@/lib/motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-16 pt-32 sm:pt-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,246,248,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245,246,248,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(80% 60% at 50% 30%, black 0%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(80% 60% at 50% 30%, black 0%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <Badge tone="green" pulse>
            {liveNow.length} buddies live right now
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: EASE_OUT, delay: 0.1 }}
          className="mt-7 max-w-5xl text-[13vw] leading-[0.92] sm:text-7xl md:text-8xl"
        >
          YOU&rsquo;RE ONE OF THE <span className="text-gradient-green">BUDDIES</span> NOW.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.25 }}
          className="mt-6 max-w-xl text-base text-ink-soft sm:text-lg"
        >
          A creator crew streaming casino floors and sportsbooks together — leaderboards,
          drops, giveaways and a Discord that never really sleeps. Come watch. Come play along.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.38 }}
          className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button href={primaryCta.href} size="lg">
            {primaryCta.label}
          </Button>
          <Button href={secondaryCta.href} variant="secondary" size="lg">
            {secondaryCta.label}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.5 }}
          className="mt-14 flex flex-col items-center gap-3"
        >
          <div className="flex gap-3">
            {liveNow.map((c) => (
              <AvatarTile key={c.handle} initials={c.initials} gradient={c.gradient} size="sm" />
            ))}
          </div>
          <p className="text-xs uppercase tracking-widest text-ink-dim">
            These buddies are streaming live now — Twitch, Kick &amp; YouTube
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-6 items-start justify-center rounded-full border border-bg-line p-1.5"
        >
          <span className="h-1.5 w-1 rounded-full bg-buddy-green" />
        </motion.div>
      </motion.div>
    </section>
  );
}
