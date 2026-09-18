"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { site } from "@/config/site";

const STORAGE_KEY = "tgb-intro-seen";
type Phase = "mark" | "reveal" | "tagline" | "exit" | "done";

const LINES = ["THE", "GAMBLING", "BUDDIES"];

export function CinematicIntro() {
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("done");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // This effect runs once on mount to read a client-only storage API (unavailable during
    // SSR) and drive a one-shot, cleanup-guarded animation timeline — an effect, not a
    // render-time computation, is the correct tool here.
    /* eslint-disable react-hooks/set-state-in-effect */
    let seen = true;
    try {
      seen = window.sessionStorage.getItem(STORAGE_KEY) === "true";
    } catch {
      seen = true;
    }

    if (seen) {
      setPhase("done");
      setReady(true);
      return;
    }

    setReady(true);

    if (reduceMotion) {
      setPhase("tagline");
      const t = setTimeout(() => finish(), 900);
      return () => clearTimeout(t);
    }

    setPhase("mark");
    // The mark (logo) gets a beat to actually register before handing off —
    // 700ms fade-in plus a real hold, not an instant cut to the headline.
    // Every other phase keeps its original hold length, just shifted later.
    const timers = [
      setTimeout(() => setPhase("reveal"), 1200),
      setTimeout(() => setPhase("tagline"), 2700),
      setTimeout(() => setPhase("exit"), 3900),
      setTimeout(() => finish(), 4550),
    ];
    return () => timers.forEach(clearTimeout);
    /* eslint-enable react-hooks/set-state-in-effect */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function finish() {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // ignore
    }
    setPhase("done");
  }

  if (!ready) return null;

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-bg"
        >
          <div className="pointer-events-none absolute inset-0 bg-radial-fade" aria-hidden />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "url('/noise.svg')" }}
          />

          {/*
            Absolutely positioned over the whole overlay (not a flex-col
            sibling of the headline below) so it sits exactly where the
            headline sits. The mark fades out in place while the headline
            fades/slides in on top of it — a real crossfade — instead of the
            two stacking as separate flex items and shoving each other
            around for the frame or two they overlap.
          */}
          <AnimatePresence mode="wait">
            {phase === "mark" && (
              <motion.div
                key="mark"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.06, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative">
                  {/* Real TGB mark — same asset as the header/footer logo, not the old text wordmark. */}
                  <Image
                    src="/images/logo.png"
                    alt="TGB"
                    width={132}
                    height={132}
                    priority
                    className="relative drop-shadow-[0_0_24px_rgba(57,255,106,0.5)]"
                  />
                  <motion.span
                    aria-hidden
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 -z-10 blur-2xl"
                    style={{ background: "radial-gradient(circle, rgba(57,255,106,0.35), transparent 70%)" }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {(phase === "reveal" || phase === "tagline" || phase === "exit") && (
            <div className="px-6 text-center">
              <div className="flex flex-col items-center gap-1 sm:gap-2">
                {LINES.map((line, i) => (
                  <span key={line} className="overflow-hidden">
                    <motion.span
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.14 }}
                      className="block font-display text-[13vw] leading-[0.9] tracking-tight text-ink sm:text-[7rem] md:text-[8rem]"
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </div>

              <AnimatePresence>
                {(phase === "tagline" || phase === "exit") && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-6 font-sans text-base text-ink-soft sm:text-lg"
                  >
                    {site.tagline}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          )}

          <button
            type="button"
            onClick={finish}
            className="absolute bottom-8 right-8 rounded-full border border-bg-line px-4 py-2 text-xs font-semibold uppercase tracking-widest text-ink-dim transition-colors hover:border-ink/30 hover:text-ink"
          >
            Skip intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
