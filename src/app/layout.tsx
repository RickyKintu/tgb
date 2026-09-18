import type { Metadata, Viewport } from "next";
import "@fontsource/anton/400.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "./globals.css";
import { site } from "@/config/site";
import { SkipLink } from "@/components/layout/SkipLink";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AgeGate } from "@/components/layout/AgeGate";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.shortName}`,
    template: `%s · ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "The Gambling Buddies",
    "TGB",
    "gambling streamers",
    "casino streamers",
    "gambling community",
    "leaderboard rewards",
    "gambling giveaways",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    locale: site.locale,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon",
  },
};

export const viewport: Viewport = {
  themeColor: site.themeColor,
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The Gambling Buddies",
  alternateName: "TGB",
  url: "https://thegamblingbuddies.com",
  description: "A creator-led gambling entertainment brand: claim the bonus, climb the leaderboard.",
  sameAs: [
    "https://instagram.com/thegamblingbuddies",
    "https://x.com/thegamblingbuddies",
    "https://kick.com/thegamblingbuddies",
    "https://discord.gg/tgb",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SkipLink />
        <AgeGate />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
