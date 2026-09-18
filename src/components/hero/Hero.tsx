"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SocialRow } from "@/components/ui/SocialRow";
import { site, primaryCta, secondaryCta } from "@/config/site";
import { EASE_OUT } from "@/lib/motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[92svh] flex-col items-center justify-center overflow-hidden px-5 pb-16 pt-32 text-center sm:px-8 sm:pt-40"
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

      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: EASE_OUT }}
        className="relative"
      >
        <Image
          src="/images/logo.png"
          alt="The Gambling Buddies"
          width={132}
          height={132}
          priority
          className="drop-shadow-[0_0_50px_rgba(57,255,106,0.5)]"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: EASE_OUT, delay: 0.15 }}
        className="mt-8 max-w-4xl text-[13vw] leading-[0.92] sm:text-7xl md:text-8xl"
      >
        YOU&rsquo;RE ONE OF THE <span className="text-gradient-green">BUDDIES</span> NOW.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.3 }}
        className="mt-6 max-w-md text-base text-ink-soft sm:text-lg"
      >
        {site.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.42 }}
        className="mt-9 flex flex-wrap items-center justify-center gap-4"
      >
        <Button href={primaryCta.href} size="lg">
          {primaryCta.label}
        </Button>
        <Button href={secondaryCta.href} size="lg" variant="secondary">
          {secondaryCta.label}
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.54 }}
        className="mt-10 flex flex-col items-center gap-3"
      >
        <p className="text-xs uppercase tracking-widest text-ink-dim">Find the Buddies</p>
        <SocialRow />
      </motion.div>
    </section>
  );
}
