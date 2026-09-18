import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Responsible Gambling",
  description:
    "TGB’s commitment to responsible, entertainment-first gambling content, plus tools and helplines if it stops being fun.",
};

const tools = [
  {
    title: "Set a budget before you watch",
    copy: "Decide what you’re comfortable losing before a session — on stream or off. If a partner site offers deposit limits, self-exclusion or cool-off tools, use them.",
  },
  {
    title: "It’s entertainment, not income",
    copy: "Nothing on TGB — leaderboards, drops, giveaways included — should be treated as a way to make money. Streams are content. Wins on camera are not typical outcomes.",
  },
  {
    title: "Track the time, not just the money",
    copy: "Long sessions distort judgment. If you’ve lost track of how long you’ve been watching or playing along, that’s worth noticing.",
  },
  {
    title: "You can always step back",
    copy: "Muting a stream, leaving the Discord for a bit, or self-excluding from a partner site is never something you need to explain to anyone here.",
  },
];

const helplines = [
  {
    region: "United States",
    name: "National Council on Problem Gambling",
    contact: "1-800-GAMBLER · ncpgambling.org",
  },
  {
    region: "United Kingdom",
    name: "GamCare / National Gambling Helpline",
    contact: "0808 8020 133 · gamcare.org.uk",
  },
  {
    region: "Canada",
    name: "Connex Ontario / provincial helplines",
    contact: "1-866-531-2600 · connexontario.ca",
  },
  {
    region: "Global self-exclusion",
    name: "GAMSTOP (UK) / Gamban (multi-region app)",
    contact: "gamstop.co.uk · gamban.com",
  },
];

export default function ResponsibleGamblingPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-32 sm:px-8">
      <SectionHeading
        eyebrow="18+ · Please read"
        title="We’d rather you stick around than burn out."
        description={`${site.name} makes entertainment content about gambling. We are not a gambling operator, we don’t accept wagers, and we don’t hold anyone’s money. If any part of watching, playing along, or chasing a leaderboard spot stops feeling fun, that’s the moment to step back — not push through.`}
      />

      <div className="mt-16 grid gap-5 sm:grid-cols-2">
        {tools.map((t) => (
          <div key={t.title} className="rounded-2xl border border-bg-line bg-bg-card p-6">
            <h2 className="font-display text-xl normal-case tracking-tight text-ink">{t.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{t.copy}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="font-display text-3xl">Get help, confidentially.</h2>
        <p className="mt-3 max-w-2xl text-sm text-ink-soft">
          These organizations are independent of TGB and any partner brand. Reaching out is free,
          confidential, and doesn&rsquo;t require you to have &ldquo;hit bottom&rdquo; first.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-bg-line">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-bg-line bg-bg-elevated text-xs uppercase tracking-widest text-ink-dim">
                <th className="px-5 py-3 font-medium">Region</th>
                <th className="px-5 py-3 font-medium">Organization</th>
                <th className="px-5 py-3 font-medium">Contact</th>
              </tr>
            </thead>
            <tbody>
              {helplines.map((h) => (
                <tr key={h.region} className="border-b border-bg-line/60 last:border-b-0">
                  <td className="px-5 py-4 text-ink-soft">{h.region}</td>
                  <td className="px-5 py-4 text-ink">{h.name}</td>
                  <td className="px-5 py-4 text-ink-soft">{h.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-16 rounded-2xl border border-bg-line bg-bg-elevated/60 p-6 text-xs leading-relaxed text-ink-dim">
        This page is provided for general information and does not constitute medical, legal or
        financial advice. Age and availability of any gambling-adjacent product referenced by TGB
        or its partners vary by jurisdiction — you are responsible for confirming what&rsquo;s legal
        where you live. Must be 18+, or the legal gambling age in your jurisdiction if higher.
      </div>
    </div>
  );
}
