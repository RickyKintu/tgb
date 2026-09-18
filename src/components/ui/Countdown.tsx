"use client";

import { useEffect, useState } from "react";

function getTimeLeft(target: string) {
  const diff = Math.max(0, new Date(target).getTime() - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds, expired: diff <= 0 };
}

export function Countdown({ target, className }: { target: string; className?: string }) {
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    // Server and client can disagree on "now", so the first tick is computed client-side in
    // an effect (not during render) to keep SSR output stable and avoid a hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTime(getTimeLeft(target));
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (!time) {
    return (
      <div className={className} aria-hidden>
        <span className="tabular-nums opacity-0">00d 00h 00m 00s</span>
      </div>
    );
  }

  const units = [
    { label: "d", value: time.days },
    { label: "h", value: time.hours },
    { label: "m", value: time.minutes },
    { label: "s", value: time.seconds },
  ];

  return (
    <div className={className} role="timer" aria-live="off">
      <span className="sr-only">
        {time.expired
          ? "Closed"
          : `${time.days} days ${time.hours} hours ${time.minutes} minutes ${time.seconds} seconds remaining`}
      </span>
      <div aria-hidden className="flex items-center gap-1.5 font-mono tabular-nums">
        {time.expired ? (
          <span>Closed</span>
        ) : (
          units.map((u, i) => (
            <span key={u.label} className="flex items-center gap-1.5">
              <span className="rounded-md bg-ink/[0.06] px-2 py-1 text-sm font-semibold text-ink">
                {String(u.value).padStart(2, "0")}
                <span className="ml-0.5 text-ink-dim">{u.label}</span>
              </span>
              {i < units.length - 1 && <span className="text-ink-dim">:</span>}
            </span>
          ))
        )}
      </div>
    </div>
  );
}
