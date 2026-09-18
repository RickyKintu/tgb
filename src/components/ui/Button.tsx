import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external,
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 will-change-transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-offset-4";

  const variants = {
    primary:
      "bg-buddy-green text-bg shadow-glow hover:shadow-[0_0_60px_rgba(57,255,106,0.45)]",
    secondary:
      "bg-ink/[0.06] text-ink border border-bg-line backdrop-blur hover:bg-ink/[0.1] hover:border-ink/20",
    ghost: "text-ink hover:text-buddy-green",
  };

  const sizes = {
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const isExternal = external ?? href.startsWith("http");

  const content = (
    <>
      <span>{children}</span>
      <span
        aria-hidden
        className="inline-block transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, variants[variant], sizes[size], className)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)}>
      {content}
    </Link>
  );
}
