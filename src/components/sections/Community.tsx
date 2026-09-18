import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { StatTile } from "@/components/ui/StatTile";
import { Button } from "@/components/ui/Button";
import { testimonials, communityStats } from "@/config/testimonials";
import { primaryCta } from "@/config/site";
import { fadeUp } from "@/lib/motion";

export function Community() {
  return (
    <section id="community" className="relative overflow-hidden border-t border-bg-line">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          eyebrow="The TGB community"
          title="It’s a group chat that livestreams."
          description="Discord is where the real thing happens — picks, banter, giveaway alerts, and a few thousand people who’d notice if you disappeared for a week."
          align="center"
        />

        <RevealGroup className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4">
          {communityStats.map((s) => (
            <Reveal key={s.label} variants={fadeUp} className="text-center">
              <StatTile value={s.value} label={s.label} prefix={s.prefix ?? ""} />
            </Reveal>
          ))}
        </RevealGroup>

        <RevealGroup className="mt-20 grid gap-5 sm:grid-cols-3">
          {testimonials.map((t) => (
            <Reveal key={t.handle} variants={fadeUp}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-bg-line bg-bg-card p-6">
                <p className="text-sm italic leading-relaxed text-ink-soft">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 border-t border-bg-line pt-4">
                  <p className="text-sm font-semibold text-ink">{t.handle}</p>
                  <p className="text-xs text-ink-dim">{t.context}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </RevealGroup>

        <Reveal className="mt-20 flex flex-col items-center gap-6 rounded-3xl border border-bg-line bg-gradient-to-b from-buddy-green/[0.06] to-transparent px-6 py-16 text-center">
          <h3 className="max-w-2xl font-display text-4xl leading-[0.95] sm:text-5xl">
            STOP WATCHING. START <span className="text-gradient-green">BUDDYING.</span>
          </h3>
          <p className="max-w-md text-sm text-ink-soft sm:text-base">
            Free to join. Takes ten seconds. The group chat&rsquo;s already talking about
            tonight&rsquo;s stream.
          </p>
          <Button href={primaryCta.href} size="lg">
            {primaryCta.label}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
