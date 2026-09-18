"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/ui/Logo";

const STORAGE_KEY = "tgb-age-verified";

export function AgeGate() {
  const [status, setStatus] = useState<"checking" | "hidden" | "shown" | "blocked">("checking");
  const enterRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // localStorage is only available client-side; this mount-time read decides whether the
    // gate needs to render at all, so it must happen in an effect rather than during render.
    /* eslint-disable react-hooks/set-state-in-effect */
    try {
      const verified = window.localStorage.getItem(STORAGE_KEY);
      setStatus(verified === "true" ? "hidden" : "shown");
    } catch {
      setStatus("hidden");
    }
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  useEffect(() => {
    if (status === "shown" || status === "blocked") {
      document.body.style.overflow = "hidden";
      enterRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [status]);

  function confirmAge() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // ignore storage failures — gate simply reappears next visit
    }
    setStatus("hidden");
  }

  if (status === "checking" || status === "hidden") return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-bg p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="age-gate-heading"
      >
        <div className="absolute inset-0 bg-radial-fade" aria-hidden />
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-md rounded-3xl border border-bg-line bg-bg-elevated p-8 text-center shadow-card"
        >
          <Logo size="lg" className="justify-center" />

          {status === "shown" && (
            <>
              <h2 id="age-gate-heading" className="mt-6 font-display text-2xl uppercase">
                Before you come in
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                This is an 18+ space. TGB is entertainment and community content — some sections
                reference gambling and third-party partner offers. Confirm your age to enter.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  ref={enterRef}
                  onClick={confirmAge}
                  className="flex-1 rounded-full bg-buddy-green px-6 py-3 font-semibold text-bg transition-transform hover:-translate-y-0.5"
                >
                  I&rsquo;m 18+ — Let me in
                </button>
                <button
                  onClick={() => setStatus("blocked")}
                  className="flex-1 rounded-full border border-bg-line px-6 py-3 font-semibold text-ink-soft transition-colors hover:text-ink"
                >
                  I&rsquo;m under 18
                </button>
              </div>
              <p className="mt-5 text-[11px] text-ink-dim">
                By entering you agree this is for entertainment purposes and you understand gambling
                carries financial risk.
              </p>
            </>
          )}

          {status === "blocked" && (
            <>
              <h2 id="age-gate-heading" className="mt-6 font-display text-2xl uppercase">
                This one&rsquo;s not for you yet
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                TGB content isn&rsquo;t available if you&rsquo;re under 18. Come back and join the
                crew when you&rsquo;re old enough — we&rsquo;ll be here.
              </p>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
