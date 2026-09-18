import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { Countdown } from "@/components/ui/Countdown";
import { Button } from "@/components/ui/Button";
import { giveaways, challenges } from "@/config/giveaways";
import { formatNumber } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";
import { primaryCta } from "@/config/site";

export function GiveawaysSection() {
  return (
    <section id="giveaways" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Giveaways & challenges"
        title="Your name could be here."
        description="Every giveaway is open to the whole crew. Every challenge is one we’re chasing live, together."
      />

      <RevealGroup className="mt-14 grid gap-5 lg:grid-cols-2">
        {giveaways.map((g) => (
          <Reveal key={g.title} variants={fadeUp}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-bg-line bg-bg-card p-7">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl normal-case tracking-tight text-ink">
                    {g.title}
                  </h3>
                  <span className="shrink-0 font-display text-2xl normal-case text-gradient-gold">
                    {g.prizePool}
                  </span>
                </div>
                <p className="mt-3 text-sm text-ink-soft">{g.requirement}</p>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-bg-line pt-5">
                <div className="text-xs text-ink-dim">
                  <span className="font-semibold text-ink-soft">{formatNumber(g.entries)}</span> entries
                  so far
                </div>
                <Countdown target={g.closesIn} />
              </div>
            </div>
          </Reveal>
        ))}
      </RevealGroup>

      <div className="mt-20 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading eyebrow="Live challenges" title="What we’re chasing right now." />
      </div>

      <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {challenges.map((c) => (
          <Reveal key={c.title} variants={fadeUp}>
            <div className="rounded-2xl border border-bg-line bg-bg-card p-6">
              <span className="font-mono text-xs uppercase tracking-widest text-buddy-violet">
                {c.buddy}
              </span>
              <h3 className="mt-2 font-display text-lg normal-case tracking-tight text-ink">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-ink-soft">{c.goal}</p>
              <div className="mt-5">
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink/[0.08]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-buddy-violet to-buddy-green"
                    style={{ width: `${c.progress}%` }}
                  />
                </div>
                <p className="mt-2 text-right text-xs text-ink-dim">{c.progress}% there</p>
              </div>
            </div>
          </Reveal>
        ))}
      </RevealGroup>

      <Reveal className="mt-14 flex justify-center">
        <Button href={primaryCta.href} variant="secondary">
          Get entry alerts in Discord
        </Button>
      </Reveal>
    </section>
  );
}
