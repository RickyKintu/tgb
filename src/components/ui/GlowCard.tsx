import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function GlowCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-bg-line bg-bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-buddy-green/40 hover:bg-bg-card",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(220px circle at var(--x,50%) var(--y,0%), rgba(57,255,106,0.12), transparent 70%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
