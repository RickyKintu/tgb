"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function CopyCode({ code, className }: { code: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API can be unavailable (older browsers, insecure context) —
      // the code is already visible on the button, so this fails silently.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "group inline-flex items-center gap-3 rounded-2xl border border-buddy-green/40 bg-buddy-green/[0.06] px-6 py-4 font-mono text-2xl font-bold tracking-[0.2em] text-buddy-green shadow-glow transition-all duration-200 hover:bg-buddy-green/10 active:scale-[0.98]",
        className
      )}
      aria-live="polite"
    >
      {code}
      <span className="text-xs font-semibold uppercase tracking-widest text-buddy-green/70 group-hover:text-buddy-green">
        {copied ? "Copied!" : "Tap to copy"}
      </span>
    </button>
  );
}
