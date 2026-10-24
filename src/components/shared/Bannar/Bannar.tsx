"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Github } from "lucide-react";
import { SiPostgresql, SiMongodb } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { Atom, Database } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "../Container/Container";
import { site } from "@/lib/site";

const technologies = [
  { name: "React", icon: Atom },
  { name: "Next.js", icon: RiNextjsLine },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Database", icon: Database },
  { name: "MongoDB", icon: SiMongodb },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroBanner() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate min-h-[calc(100svh-76px)] overflow-hidden bg-ink text-paper"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_42%,rgba(198,163,106,0.12),transparent_46%)]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(239,232,216,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(239,232,216,0.45)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <Container>
        <div className="grid min-h-[calc(100svh-76px)] items-center gap-10 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:py-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="relative z-10 order-2 lg:order-1"
          >
            <motion.div variants={reveal} className="mb-7 flex items-center gap-4">
              <span className="h-px w-8 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.32em] text-paper/50">
                {site.role} · {site.location}
              </span>
            </motion.div>

            <motion.p
              variants={reveal}
              className="mb-4 text-[13px] uppercase tracking-[0.28em] text-gold"
            >
              Portfolio, {new Date().getFullYear()}
            </motion.p>

            <motion.h1
              variants={reveal}
              className="max-w-3xl font-serif text-5xl leading-[0.96] tracking-[-0.03em] sm:text-6xl md:text-7xl xl:text-[5.75rem]"
            >
              Digital work,
              <br />
              <span className="italic text-gold">classically</span> made
              <span className="text-gold">.</span>
            </motion.h1>

            <motion.p
              variants={reveal}
              className="mt-8 max-w-lg text-base leading-8 text-paper/55 sm:text-lg"
            >
              I am {site.name}. I design and build modern web applications with
              Next.js, React, Node.js, and considered databases — products that
              feel quiet, reliable, and complete.
            </motion.p>

            <motion.div variants={reveal} className="mt-8 flex flex-wrap gap-2.5">
              {technologies.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  title={name}
                  className="flex h-11 w-11 items-center justify-center border border-paper/12 bg-paper/[0.03] text-paper/70 transition-colors hover:border-gold/40 hover:text-gold"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">{name}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={reveal} className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="group inline-flex min-h-12 items-center gap-3 bg-gold px-6 text-[12px] font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:bg-paper"
              >
                Let&apos;s work together
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center gap-2 border border-paper/15 px-6 text-[12px] uppercase tracking-[0.16em] text-paper/80 transition-colors hover:border-paper/40"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
            </motion.div>

            <motion.div
              variants={reveal}
              className="mt-12 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-paper/35"
            >
              <ArrowDownRight className="h-4 w-4 text-gold" />
              Scroll to the archive
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative order-1 mx-auto flex w-full max-w-[440px] items-end justify-center lg:order-2 lg:mx-0 lg:ml-auto"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-8 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/15 blur-[90px] sm:h-80 sm:w-80"
            />
            <div className="absolute -inset-3 border border-gold/20" />
            <div className="absolute left-5 top-5 h-full w-full border border-paper/10" />

            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full"
            >
              <Image
                src="/images/my.png"
                alt={`${site.name} — ${site.role}`}
                width={444}
                height={562}
                priority
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 444px, 40vw"
                className="relative z-10 mx-auto h-auto max-h-[562px] w-full object-contain object-bottom"
              />
            </motion.div>

            <div className="absolute bottom-10 -left-1 z-20 border border-paper/12 bg-ink/90 px-4 py-3 backdrop-blur-xl sm:-left-8">
              <p className="text-[10px] uppercase tracking-[0.22em] text-paper/45">
                Atelier
              </p>
              <p className="mt-1 font-serif text-lg text-gold">Full-Stack Craft</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
