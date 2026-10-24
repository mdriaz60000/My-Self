"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "split";
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={
        align === "split"
          ? "mb-14 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between"
          : "mb-14 md:mb-20"
      }
    >
      <div className="max-w-3xl">
        <div className="mb-5 flex items-center gap-4">
          <span className="font-mono text-[11px] tracking-[0.28em] text-gold">
            {index}
          </span>
          <span className="h-px w-10 bg-gold/50" />
          <span className="text-[11px] uppercase tracking-[0.32em] text-paper/45">
            {eyebrow}
          </span>
        </div>
        <h2 className="font-serif text-4xl leading-[1.08] tracking-[-0.03em] text-paper sm:text-5xl md:text-6xl lg:text-[4.25rem]">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-md text-sm leading-7 text-paper/50 md:pb-2 md:text-base md:leading-8">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
