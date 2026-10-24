"use client";

import { ArrowUpRight, Code2, Database, Layers3, Terminal } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Container from "../Container/Container";
import SectionHeading from "../SectionHeading";
import { site } from "@/lib/site";

const highlights = [
  {
    number: "01",
    title: "Frontend Engineering",
    description:
      "Responsive, accessible interfaces with React, Next.js, and TypeScript.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "REST APIs, authentication, and application logic that holds under use.",
    icon: Terminal,
  },
  {
    number: "03",
    title: "Data & Architecture",
    description:
      "MongoDB, PostgreSQL, and structured data-driven products.",
    icon: Database,
  },
];

const timeline = [
  {
    year: "2023 — Present",
    title: "Independent full-stack work",
    detail: "Commerce, rentals, and product dashboards built end to end.",
  },
  {
    year: "2023",
    title: "Web Development",
    detail: "Programming Hero — professional JavaScript, React, and Node.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="relative isolate overflow-hidden bg-ink py-24 text-paper sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-gold/[0.06] blur-[120px]" />
      </div>

      <Container>
        <SectionHeading
          index="01"
          eyebrow="Biography"
          title={
            <>
              More than code.
              <br />
              <span className="italic text-paper/45">A builder of</span> ideas.
            </>
          }
        />

        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            <motion.p
              variants={reveal}
              className="font-serif text-2xl leading-9 text-paper/80 sm:text-[1.7rem] sm:leading-10"
            >
              I am {site.name}, a full-stack developer devoted to modern web
              applications that solve real problems with quiet precision.
            </motion.p>

            <motion.p variants={reveal} className="mt-6 text-base leading-8 text-paper/45">
              I work with React, Next.js, TypeScript, Node.js, and databases to
              turn ideas into complete products — from the interface to the API
              and the data that lives underneath.
            </motion.p>

            <motion.p variants={reveal} className="mt-5 text-base leading-8 text-paper/45">
              Through an e-commerce platform and a rental management product, I
              practice integration, data modelling, and the full application
              workflow. I am always refining the craft and ready to contribute
              to a professional team.
            </motion.p>

            <motion.div variants={reveal} className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="/project"
                className="group inline-flex min-h-12 items-center gap-3 bg-gold px-6 text-[12px] font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:bg-paper"
              >
                Explore the work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <span className="text-[11px] uppercase tracking-[0.2em] text-paper/35">
                Always in study
              </span>
            </motion.div>

            <motion.ol
              variants={reveal}
              className="mt-12 space-y-6 border-t border-paper/10 pt-8"
            >
              {timeline.map((item) => (
                <li key={item.title} className="grid gap-1 sm:grid-cols-[140px_1fr]">
                  <span className="font-mono text-[11px] tracking-[0.12em] text-gold">
                    {item.year}
                  </span>
                  <div>
                    <p className="font-medium text-paper/90">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-paper/45">{item.detail}</p>
                  </div>
                </li>
              ))}
            </motion.ol>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.14 } },
            }}
          >
            <motion.div
              variants={reveal}
              className="mb-6 flex items-center justify-between border-b border-paper/10 pb-4"
            >
              <span className="text-[11px] uppercase tracking-[0.24em] text-paper/40">
                Practice
              </span>
              <Layers3 className="h-4 w-4 text-gold" />
            </motion.div>

            <div className="divide-y divide-paper/10">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.article key={item.number} variants={reveal} className="group py-6 first:pt-2">
                    <div className="flex gap-4 sm:gap-5">
                      <span className="pt-1 font-mono text-xs text-paper/25">
                        /{item.number}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="font-serif text-xl tracking-tight text-paper/90 transition-colors group-hover:text-gold">
                            {item.title}
                          </h3>
                          <Icon className="h-5 w-5 shrink-0 text-paper/35 transition-colors group-hover:text-gold" />
                        </div>
                        <p className="mt-2 max-w-sm text-sm leading-7 text-paper/45">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            <motion.div
              variants={reveal}
              className="mt-8 flex items-center justify-between border-t border-paper/10 pt-5"
            >
              <span className="font-mono text-[11px] tracking-wider text-paper/30">
                BASED IN {site.location.toUpperCase()}
              </span>
              <span className="font-mono text-[11px] text-gold">MR / 001</span>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
