"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { nav, primaryCta } from "@/config/site";
import { SocialRow } from "@/components/ui/SocialRow";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-md md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <motion.nav
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -16, opacity: 0 }}
            transition={{ duration: 0.25, delay: 0.05 }}
            className="flex h-full flex-col justify-between px-6 pb-10 pt-28"
          >
            <ul className="flex flex-col gap-1">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="block border-b border-bg-line py-4 font-display text-3xl uppercase text-ink transition-colors hover:text-buddy-green"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col gap-6">
              <a
                href={primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex w-full items-center justify-center rounded-full bg-buddy-green px-6 py-4 text-center font-semibold text-bg"
              >
                {primaryCta.label}
              </a>
              <SocialRow className="justify-center" />
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
