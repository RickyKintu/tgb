import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import type { BonusOffer } from "@/config/bonuses";

export function BonusCard({ name, siteLabel, mainBonusTitle, extras, code, ctaLabel, ctaHref, comingSoon }: BonusOffer) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-3xl border p-7 sm:p-8",
        comingSoon
          ? "border-dashed border-bg-line/80 bg-bg-card/40"
          : "border-bg-line bg-bg-card shadow-[0_0_0_1px_rgba(57,255,106,0.04)]"
      )}
    >
      <div className="flex flex-col items-center text-center">
        <div
          className={cn(
            "flex h-14 w-14 items-center justify-center rounded-2xl border font-display text-xl normal-case tracking-tight",
            comingSoon
              ? "border-dashed border-bg-line text-ink-dim"
              : "border-buddy-green/30 bg-buddy-green/[0.08] text-buddy-green"
          )}
          aria-hidden
        >
          {comingSoon ? "?" : name.charAt(0)}
        </div>
        <p className="mt-4 font-display text-lg normal-case tracking-tight text-ink">{name}</p>
        <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-ink-dim">{siteLabel}</p>
      </div>

      <div className="mt-6 border-t border-bg-line pt-6">
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-buddy-green">
          {comingSoon ? "Coming Soon" : "Main Bonus"}
        </p>
        <p
          className={cn(
            "mt-3 font-display text-xl normal-case leading-tight tracking-tight",
            comingSoon ? "text-ink-dim" : "text-ink"
          )}
        >
          {mainBonusTitle}
        </p>
      </div>

      {extras.length > 0 && (
        <div className="mt-6 border-t border-bg-line pt-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-ink-dim">Extras</p>
          <ul className="mt-3 space-y-2.5">
            {extras.map((extra) => (
              <li key={extra} className="flex items-start gap-2.5 text-sm text-ink-soft">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-dim" aria-hidden />
                {extra}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-auto flex flex-col items-stretch gap-3 pt-7">
        {code && (
          <div className="flex items-center justify-between rounded-xl border border-bg-line bg-bg/60 px-4 py-2.5 font-mono text-sm">
            <span className="text-ink-dim">Code</span>
            <span className="font-bold tracking-[0.15em] text-buddy-green">{code}</span>
          </div>
        )}

        {comingSoon || !ctaHref ? (
          <span className="inline-flex cursor-not-allowed items-center justify-center rounded-full border border-bg-line px-6 py-3 text-sm font-semibold text-ink-dim">
            {ctaLabel}
          </span>
        ) : (
          <Button href={ctaHref} className="w-full">
            {ctaLabel}
          </Button>
        )}
      </div>
    </div>
  );
}
