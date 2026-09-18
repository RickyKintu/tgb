import { cn } from "@/lib/utils";
import { socials } from "@/config/site";

const icons: Record<string, React.ReactNode> = {
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  kick: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3 3h5v5.2l3.2-3.2h5.7L11 10l6.3 5H11.7l-3.7-3.7V15H3z" />
    </svg>
  ),
  discord: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.317 4.369A19.79 19.79 0 0 0 15.885 3c-.211.375-.444.879-.608 1.28a18.27 18.27 0 0 0-5.554 0A12.64 12.64 0 0 0 9.115 3a19.736 19.736 0 0 0-4.435 1.37C1.579 9.046.8 13.58 1.19 18.057a19.9 19.9 0 0 0 5.993 3.029c.483-.66.913-1.36 1.283-2.098a12.9 12.9 0 0 1-2.021-.97c.17-.124.336-.253.497-.386 3.898 1.8 8.126 1.8 11.977 0 .163.133.329.262.497.386-.642.383-1.323.71-2.023.971.37.737.799 1.437 1.282 2.097a19.84 19.84 0 0 0 6-3.028c.457-5.191-.822-9.68-3.358-13.688ZM8.673 15.298c-1.171 0-2.13-1.076-2.13-2.396 0-1.32.938-2.397 2.13-2.397 1.201 0 2.16 1.086 2.13 2.397 0 1.32-.938 2.396-2.13 2.396Zm6.664 0c-1.171 0-2.13-1.076-2.13-2.396 0-1.32.938-2.397 2.13-2.397 1.202 0 2.16 1.086 2.13 2.397 0 1.32-.928 2.396-2.13 2.396Z" />
    </svg>
  ),
};

export function SocialRow({ className, variant = "default" }: { className?: string; variant?: "default" | "compact" }) {
  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {socials.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${s.label} — opens in a new tab`}
            className={cn(
              "flex items-center justify-center rounded-xl border border-bg-line text-ink-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-buddy-green/50 hover:bg-buddy-green/[0.06] hover:text-buddy-green",
              variant === "compact" ? "h-9 w-9 [&_svg]:h-4 [&_svg]:w-4" : "h-11 w-11 [&_svg]:h-5 [&_svg]:w-5"
            )}
          >
            {icons[s.icon] ?? s.label.slice(0, 2).toUpperCase()}
          </a>
        </li>
      ))}
    </ul>
  );
}
