import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { SocialRow } from "@/components/ui/SocialRow";
import { nav, site } from "@/config/site";

export function Footer() {
  return (
    <footer className="relative isolate border-t border-bg-line bg-bg-elevated/60">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-glow-green opacity-70" />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo size="lg" />
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              {site.tagline} A creator-led crew streaming, competing, giving back and building a
              community that treats gambling like entertainment — not a job.
            </p>
            <SocialRow className="mt-6" />
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest2 text-ink-dim">
              The Site
            </p>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-ink-soft transition-colors hover:text-ink">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest2 text-ink-dim">
              Info
            </p>
            <ul className="space-y-3">
              <li>
                <Link href="/responsible-gambling" className="text-sm text-ink-soft transition-colors hover:text-ink">
                  Responsible Gambling
                </Link>
              </li>
              <li>
                <a href="mailto:partnerships@thegamblingbuddies.com" className="text-sm text-ink-soft transition-colors hover:text-ink">
                  Partner With Us
                </a>
              </li>
              <li>
                <a href="mailto:hello@thegamblingbuddies.com" className="text-sm text-ink-soft transition-colors hover:text-ink">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-bg-line bg-bg/60 p-6">
          <p className="text-xs leading-relaxed text-ink-dim">
            <span className="font-semibold text-ink-soft">18+ only.</span> The Gambling Buddies is an
            entertainment and content brand. We do not accept wagers, hold funds, or operate gambling
            services — any offers shown are provided by independent, licensed third-party partners, and
            you&rsquo;re responsible for confirming eligibility and legality in your jurisdiction
            before signing up anywhere. Gambling involves real financial risk. If it stops being
            fun, it&rsquo;s time to step back —{" "}
            <a href="tel:1-800-426-2537" className="text-ink-soft underline underline-offset-2 hover:text-buddy-green">
              1-800-GAMBLER
            </a>{" "}
            is free and confidential. See our{" "}
            <Link href="/responsible-gambling" className="text-ink-soft underline underline-offset-2 hover:text-buddy-green">
              Responsible Gambling
            </Link>{" "}
            page for tools and resources.
          </p>
        </div>

        <div className="mt-8 flex flex-col-reverse items-center justify-between gap-4 border-t border-bg-line pt-8 sm:flex-row">
          <p className="text-xs text-ink-dim">
            © {new Date().getFullYear()} The Gambling Buddies. All rights reserved.
          </p>
          <p className="text-xs text-ink-dim">Built for the crew, not the algorithm.</p>
        </div>
      </div>
    </footer>
  );
}
