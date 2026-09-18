import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { partners } from "@/config/partners";
import { fadeUp } from "@/lib/motion";

export function Partners() {
  return (
    <section id="partners" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Inside the TGB world"
        title="Offers we actually vouch for."
        description="We only work with partners we’d send our own group chat to. Licensed operators, real terms, no fine print traps."
      />

      <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {partners.map((p) => (
          <Reveal key={p.name} variants={fadeUp}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-bg-line bg-bg-elevated/50 p-6 transition-colors duration-300 hover:border-ink/20">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-ink-dim">
                  {p.category}
                </span>
                <p className="mt-2 font-display text-xl normal-case tracking-tight text-ink-soft">
                  {p.name}
                </p>
                <p className="mt-3 text-sm text-ink-soft">{p.offer}</p>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-bg-line pt-4">
                <span className="font-mono text-xs font-semibold tracking-widest text-ink-dim">
                  {p.code}
                </span>
                <span className="text-xs text-ink-dim">18+ · T&amp;Cs apply</span>
              </div>
            </div>
          </Reveal>
        ))}
      </RevealGroup>

      <p className="mt-8 max-w-2xl text-xs leading-relaxed text-ink-dim">
        Partner placements are independent, licensed third parties — not TGB. We may earn a
        commission if you sign up through these links. That never changes what we cover on
        stream or who makes the leaderboard.
      </p>
    </section>
  );
}
