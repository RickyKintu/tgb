"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { nav } from "@/config/site";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <>
      <header
        id="top"
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "border-b border-bg-line bg-bg/80 backdrop-blur-lg" : "border-b border-transparent bg-transparent"
        )}
      >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-bg-line text-ink lg:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <motion.div animate={menuOpen ? "open" : "closed"} className="relative h-4 w-4">
            <motion.span
              variants={{ closed: { rotate: 0, y: -4 }, open: { rotate: 45, y: 0 } }}
              className="absolute left-0 top-1/2 block h-[1.5px] w-4 -translate-y-1/2 bg-ink"
            />
            <motion.span
              variants={{ closed: { rotate: 0, y: 4 }, open: { rotate: -45, y: 0 } }}
              className="absolute left-0 top-1/2 block h-[1.5px] w-4 -translate-y-1/2 bg-ink"
            />
          </motion.div>
        </button>
      </div>
      </header>

      {/*
        Rendered as a sibling of <header>, not a child: the header gets a
        backdrop-blur (backdrop-filter) once the page is scrolled, and a
        backdrop-filter on an ancestor changes the containing block for any
        position:fixed descendant. Nested here, the menu's "fixed inset-0"
        panel would size itself to the header's own short box instead of
        the full viewport, so its background would only cover a thin strip
        at the top and the links would render with nothing behind them.
      */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
