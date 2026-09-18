import { Marquee } from "@/components/ui/Marquee";
import { leaderboard } from "@/config/leaderboard";
import { drops } from "@/config/rewards";
import { creators } from "@/config/creators";

const feed = [
  `${creators[3].handle} just hit a heater — top of the leaderboard`,
  `New drop live: ${drops[1].title}`,
  `${leaderboard[2].handle} climbed to #${leaderboard[2].rank} this week`,
  `${creators[0].handle} is live now on ${creators[0].platform}`,
  `$${(5000).toLocaleString()} giveaway pool open — enter free`,
  `${creators[1].handle} breaking down tonight’s slate`,
  `Buddy of the Month: ${leaderboard[0].handle}`,
  `${drops[2].title} ends this week`,
];

export function LiveBar() {
  return (
    <div className="relative border-y border-bg-line bg-bg-elevated/70 py-3">
      <Marquee>
        {feed.map((item, i) => (
          <span key={i} className="flex items-center gap-6 whitespace-nowrap px-2 text-sm text-ink-soft">
            <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-buddy-green" />
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
