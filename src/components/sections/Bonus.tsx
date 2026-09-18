import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CopyCode } from "@/components/ui/CopyCode";
import { fallbackRaceCode, fallbackRaceDescription } from "@/config/leaderboard";
import { getRainRaces, pickFeaturedRace } from "@/lib/rain";

async function getBonusData() {
  const races = await getRainRaces();
  const race = pickFeaturedRace(races);

  return {
    code: race?.code ?? fallbackRaceCode,
    description: race?.description ?? fallbackRaceDescription,
  };
}

export async function Bonus() {
  const { code, description } = await getBonusData();

  return (
    <section id="bonus" className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Buddy Bonus"
        title="Your bonus is one code away."
        description={`${description} Drop it on Rain.gg and you're in — plus every dollar you wager counts toward the live leaderboard below.`}
        align="center"
      />

      <Reveal className="mt-10 flex flex-col items-center gap-6">
        <CopyCode code={code} />

        <Button href="https://rain.gg" size="lg">
          Go to Rain.gg
        </Button>

        <p className="max-w-sm text-xs leading-relaxed text-ink-dim">
          18+ only. Rain.gg is an independent, licensed third-party partner — TGB doesn&rsquo;t
          accept wagers or hold funds. T&amp;Cs apply.
        </p>
      </Reveal>
    </section>
  );
}
