"use client";

import { motion, useReducedMotion } from "framer-motion";
import Container from "../Container/Container";

const stats = [
  { value: "03", label: "Selected products" },
  { value: "04", label: "Core disciplines" },
  { value: "FS", label: "Frontend to backend" },
  { value: "DHK", label: "Based in Dhaka" },
];

export default function StatsStrip() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Highlights"
      className="border-y border-paper/10 bg-ink"
    >
      <Container>
        <div className="grid grid-cols-2 divide-y divide-paper/10 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="px-4 py-8 sm:px-6 sm:py-10"
            >
              <p className="font-serif text-3xl tracking-tight text-gold sm:text-4xl">
                {item.value}
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-paper/40">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
