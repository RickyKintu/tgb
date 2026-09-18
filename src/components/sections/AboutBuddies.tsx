import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { fadeUp } from "@/lib/motion";

const pillars = [
  {
    title: "We stream it, live",
    copy: "Slots, sports, blackjack, bonus hunts — most days, one of us is on camera, chat’s rolling, and it’s never a solo act.",
  },
  {
    title: "We compete for you",
    copy: "Leaderboards, buddy picks and challenges turn every session into something you can follow, root for, and cash in on.",
  },
  {
    title: "We give it back",
    copy: "Drops, giveaways and rewards tiers exist so watching pays off, not just playing.",
  },
  {
    title: "We’re actually a group chat",
    copy: "Discord’s the real clubhouse. The stream is just where we hang out loud.",
  },
];

export function AboutBuddies() {
  return (
    <section id="buddies" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Who we are"
        title="Not an operator with a personality. A crew that happens to gamble."
        description="The Gambling Buddies started as a group chat that got out of hand. Now it’s a crew of streamers, a leaderboard people actually care about, and a community that shows up every single day — win or lose."
      />

      <RevealGroup className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-bg-line bg-bg-line sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p) => (
          <Reveal key={p.title} variants={fadeUp} className="bg-bg-elevated p-7">
            <h3 className="font-display text-xl normal-case tracking-tight text-ink">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.copy}</p>
          </Reveal>
        ))}
      </RevealGroup>
    </section>
  );
}
