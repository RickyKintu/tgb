import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Badge({
  children,
  tone = "default",
  className,
  pulse = false,
}: {
  children: ReactNode;
  tone?: "default" | "green" | "gold" | "pink" | "violet";
  className?: string;
  pulse?: boolean;
}) {
  const tones = {
    default: "bg-ink/[0.06] text-ink-soft border-bg-line",
    green: "bg-buddy-green/10 text-buddy-green border-buddy-green/30",
    gold: "bg-buddy-gold/10 text-buddy-gold border-buddy-gold/30",
    pink: "bg-buddy-pink/10 text-buddy-pink border-buddy-pink/30",
    violet: "bg-buddy-violet/10 text-buddy-violet border-buddy-violet/30",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest",
        tones[tone],
        className
      )}
    >
      {pulse && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
        </span>
      )}
      {children}
    </span>
  );
}
