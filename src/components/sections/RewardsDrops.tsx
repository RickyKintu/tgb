import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { GlowCard } from "@/components/ui/GlowCard";
import { rewardTiers, drops } from "@/config/rewards";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

const tagTone = {
  New: "green",
  Hot: "pink",
  "Ending Soon": "gold",
} as const;

export function RewardsDrops() {
  return (
    <section id="rewards" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Buddy Rewards"
        title="The longer you’re in, the more it pays off."
        description="Four tiers, no gimmicks. Show up, stay active in the crew, and the perks climb with you."
      />

      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-bg-line bg-bg-line lg:grid-cols-4">
        {rewardTiers.map((tier, i) => (
          <Reveal key={tier.tier} variants={fadeUp} delay={i * 0.05} className="relative bg-bg-elevated p-7">
            <span className="font-mono text-xs text-ink-dim">TIER {tier.tier}</span>
            <h3 className={cn("mt-3 font-display text-2xl normal-case tracking-tight", tier.accent)}>
              {tier.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{tier.perk}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-20 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading eyebrow="Buddy Drops" title="Live codes. No spam, no catch." />
      </div>

      <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {drops.map((drop) => (
          <Reveal key={drop.code} variants={fadeUp}>
            <GlowCard className="h-full">
              <div className="flex items-start justify-between gap-3">
                <Badge tone={tagTone[drop.tag]}>{drop.tag}</Badge>
                <span className="text-xs text-ink-dim">{drop.expires}</span>
              </div>
              <h3 className="mt-5 font-display text-xl normal-case tracking-tight text-ink">
                {drop.title}
              </h3>
              <p className="mt-2 text-sm text-ink-soft">{drop.detail}</p>
              <div className="mt-5 flex items-center justify-between rounded-xl border border-dashed border-bg-line px-4 py-3">
                <span className="font-mono text-sm font-semibold tracking-widest text-buddy-green">
                  {drop.code}
                </span>
                <span className="text-xs uppercase tracking-widest text-ink-dim">Copy code</span>
              </div>
            </GlowCard>
          </Reveal>
        ))}
      </RevealGroup>
    </section>
  );
}
