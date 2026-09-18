import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Marquee({
  children,
  className,
  reverse = false,
  speed = "normal",
}: {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  speed?: "normal" | "slow";
}) {
  return (
    <div className={cn("group relative flex overflow-hidden mask-fade-x", className)}>
      <div
        className={cn(
          "flex shrink-0 items-center gap-6 pr-6",
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee",
          reverse && "[animation-direction:reverse]",
          "motion-reduce:animate-none"
        )}
      >
        {children}
      </div>
      <div
        aria-hidden
        className={cn(
          "flex shrink-0 items-center gap-6 pr-6",
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee",
          reverse && "[animation-direction:reverse]",
          "motion-reduce:hidden"
        )}
      >
        {children}
      </div>
    </div>
  );
}
