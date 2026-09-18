import { cn } from "@/lib/utils";
import { socials } from "@/config/site";

const abbrev: Record<string, string> = {
  twitch: "TW",
  kick: "KI",
  youtube: "YT",
  tiktok: "TT",
  instagram: "IG",
  x: "X",
  discord: "DC",
};

export function SocialRow({ className, variant = "default" }: { className?: string; variant?: "default" | "compact" }) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {socials.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${s.label} — opens in a new tab`}
            className={cn(
              "flex items-center justify-center rounded-lg border border-bg-line font-mono text-[11px] font-bold text-ink-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-buddy-green/50 hover:text-buddy-green",
              variant === "compact" ? "h-8 w-8" : "h-9 w-9"
            )}
          >
            {abbrev[s.icon] ?? s.label.slice(0, 2).toUpperCase()}
          </a>
        </li>
      ))}
    </ul>
  );
}
