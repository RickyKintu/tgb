import { cn } from "@/lib/utils";

export function AvatarTile({
  initials,
  gradient,
  size = "md",
  isLive = false,
  className,
}: {
  initials: string;
  gradient: string;
  size?: "sm" | "md" | "lg";
  isLive?: boolean;
  className?: string;
}) {
  const sizes = {
    sm: "h-10 w-10 text-sm",
    md: "h-14 w-14 text-base",
    lg: "h-20 w-20 text-xl",
  };

  return (
    <div className={cn("relative shrink-0", className)}>
      <div
        className={cn(
          "flex items-center justify-center rounded-2xl bg-gradient-to-br font-display text-bg",
          gradient,
          sizes[size]
        )}
      >
        {initials}
      </div>
      {isLive && (
        <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 rounded-full border-2 border-bg bg-buddy-pink px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
          Live
        </span>
      )}
    </div>
  );
}
