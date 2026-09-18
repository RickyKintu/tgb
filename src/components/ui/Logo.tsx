import { cn } from "@/lib/utils";
import Link from "next/link";

export function Logo({ className, size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl",
  };

  return (
    <Link
      href="#top"
      className={cn(
        "group inline-flex items-center gap-2 font-display leading-none tracking-tight",
        sizes[size],
        className
      )}
      aria-label="The Gambling Buddies — home"
    >
      <span className="flex items-center">
        <span className="text-ink">TG</span>
        <span className="relative text-buddy-green">
          B
          <span className="absolute -right-1 -top-1 h-1.5 w-1.5 rounded-full bg-buddy-green shadow-glow transition-transform duration-300 group-hover:scale-125" />
        </span>
      </span>
    </Link>
  );
}
