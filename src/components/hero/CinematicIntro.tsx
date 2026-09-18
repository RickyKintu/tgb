"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
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
    const timers = [
      setTimeout(() => setPhase("reveal"), 950),
      setTimeout(() => setPhase("tagline"), 2450),
      setTimeout(() => setPhase("exit"), 3650),
      setTimeout(() => finish(), 4300),
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
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-bg"
        >
          <div className="pointer-events-none absolute inset-0 bg-radial-fade" aria-hidden />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "url('/noise.svg')" }}
          />

          <AnimatePresence mode="wait">
            {phase === "mark" && (
              <motion.div
                key="mark"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.4 } }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative font-display text-6xl tracking-tight text-ink sm:text-7xl"
              >
                TG<span className="text-buddy-green">B</span>
                <motion.span
                  aria-hidden
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 -z-10 blur-2xl"
                  style={{ background: "radial-gradient(circle, rgba(57,255,106,0.35), transparent 70%)" }}
                />
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
