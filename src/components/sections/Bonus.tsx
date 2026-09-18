import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, Reveal } from "@/components/ui/Reveal";
import { BonusCard } from "@/components/ui/BonusCard";
import { rainOffer, dummyOffers, type BonusOffer } from "@/config/bonuses";
import { getRainRaces, pickFeaturedRace } from "@/lib/rain";

async function getBonusOffers(): Promise<BonusOffer[]> {
  const races = await getRainRaces();
  const race = pickFeaturedRace(races);

  const rain: BonusOffer = race
    ? { ...rainOffer, code: race.code, mainBonusTitle: race.description }
    : rainOffer;

  return [rain, ...dummyOffers];
}

export async function Bonus() {
  const offers = await getBonusOffers();

  return (
    <section id="bonus" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Buddy Bonuses"
        title="Pick a partner. Claim the bonus."
        description="Every casino here is one we actually run with — more are landing as the CPA deals close. Check back for the full lineup."
        align="center"
      />

      <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {offers.map((offer) => (
          <Reveal key={offer.slug} as="div">
            <BonusCard {...offer} />
          </Reveal>
        ))}
      </RevealGroup>
    </section>
  );
}
