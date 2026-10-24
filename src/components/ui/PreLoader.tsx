"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";

export default function Preloader() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const key = "mr-portfolio-intro-seen";

    try {
      if (sessionStorage.getItem(key)) return;
    } catch {
      // Continue without session storage if unavailable.
    }

    setVisible(true);

    if (reduceMotion) {
      setProgress(100);
      const timeout = window.setTimeout(() => {
        setVisible(false);
        try {
          sessionStorage.setItem(key, "true");
        } catch {}
      }, 250);
      return () => window.clearTimeout(timeout);
    }

    let value = 0;
    const interval = window.setInterval(() => {
      value = Math.min(value + 4, 100);
      setProgress(value);
      if (value >= 100) {
        window.clearInterval(interval);
        window.setTimeout(() => {
          setVisible(false);
          try {
            sessionStorage.setItem(key, "true");
          } catch {}
        }, 220);
      }
    }, 32);

    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="portfolio-intro"
          aria-hidden="true"
          className="fixed inset-0 z-[9999] flex flex-col justify-between overflow-hidden bg-ink px-6 py-8 text-paper sm:px-12 sm:py-10"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            clipPath: reduceMotion ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
          }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="relative flex items-center justify-between">
            <span className="font-mono text-xs tracking-[0.22em] text-gold">
              MR / 001
            </span>
            <span className="font-mono text-[10px] tracking-[0.16em] text-paper/40">
              {site.role.toUpperCase()}
            </span>
          </div>

          <div className="relative py-12">
            <p className="mb-5 font-mono text-[10px] tracking-[0.28em] text-gold">
              EST. ATELIER
            </p>
            <div className="overflow-hidden">
              <motion.h1
                initial={reduceMotion ? false : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-[clamp(3.5rem,12vw,8.5rem)] leading-[0.9] tracking-[-0.04em]"
              >
                Classic
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={reduceMotion ? false : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-1 font-serif italic text-[clamp(3.5rem,12vw,8.5rem)] leading-[0.9] tracking-[-0.04em] text-gold"
              >
                digital work.
              </motion.h2>
            </div>
          </div>

          <div className="relative">
            <div className="mb-3 flex items-end justify-between">
              <span className="font-mono text-[10px] tracking-[0.16em] text-paper/45">
                OPENING THE STUDIO
              </span>
              <span className="font-mono text-3xl tabular-nums text-gold">
                {String(progress).padStart(3, "0")}%
              </span>
            </div>
            <div className="h-px overflow-hidden bg-paper/15">
              <motion.div
                className="h-full bg-gold"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>
            <div className="mt-4 flex justify-between font-mono text-[9px] tracking-[0.15em] text-paper/30">
              <span>{site.name.toUpperCase()}</span>
              <span>BUILT WITH INTENTION</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
