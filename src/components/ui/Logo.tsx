import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const sizes = {
  sm: { img: 36, text: "text-lg" },
  md: { img: 46, text: "text-2xl" },
  lg: { img: 68, text: "text-4xl" },
};

export function Logo({
  className,
  size = "md",
  wordmark = false,
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  wordmark?: boolean;
}) {
  const s = sizes[size];

  return (
    <Link
      href="#top"
      className={cn("group inline-flex items-center gap-2.5 leading-none", className)}
      aria-label="The Gambling Buddies — home"
    >
      <Image
        src="/images/logo.png"
        alt=""
        width={s.img}
        height={s.img}
        className="shrink-0 drop-shadow-[0_0_14px_rgba(57,255,106,0.45)] transition-transform duration-300 group-hover:scale-105"
        priority
      />
      {wordmark && (
        <span className={cn("font-display tracking-tight text-ink", s.text)}>
          TG<span className="text-buddy-green">B</span>
        </span>
      )}
    </Link>
  );
}
