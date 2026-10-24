"use client";

import {
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Container as ContainerIcon,
  GitBranch,
  Server,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "../Container/Container";
import SectionHeading from "../SectionHeading";
import { site } from "@/lib/site";

const explorations = [
  {
    number: "01",
    title: "Cloud & AWS",
    description:
      "Infrastructure, deployment, and the foundations of scalable applications.",
    label: "Cloud computing",
    icon: Cloud,
  },
  {
    number: "02",
    title: "Docker & Containers",
    description:
      "Images, Compose, and environments that remain consistent from desk to production.",
    label: "DevOps",
    icon: ContainerIcon,
  },
  {
    number: "03",
    title: "Backend Architecture",
    description:
      "API design, authentication, modelling, and systems that stay maintainable.",
    label: "System design",
    icon: Server,
  },
  {
    number: "04",
    title: "Intelligent products",
    description:
      "How APIs, search, and language models can make a web product more useful.",
    label: "Applied AI",
    icon: BrainCircuit,
  },
];

export default function CurrentlyExploring() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="exploring" className="relative overflow-hidden bg-ink py-24 text-paper sm:py-32">
      <Container>
        <SectionHeading
          align="split"
          index="04"
          eyebrow="Study"
          title={
            <>
              Currently <span className="italic text-gold">exploring</span>
            </>
          }
          description="Curiosity beyond the comfort of the current stack — learning by building."
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-paper/10 bg-paper/10 sm:grid-cols-2">
          {explorations.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.number}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: reduceMotion ? 0 : index * 0.1 }}
                className="group relative flex min-h-[270px] flex-col bg-ink p-6 transition-colors duration-300 hover:bg-[#110f0c] sm:p-8"
              >
                <div className="mb-10 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center border border-paper/12 text-gold transition-all duration-300 group-hover:border-gold/40">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-xs text-paper/30">/ {item.number}</span>
                </div>
                <div className="mt-auto">
                  <p className="mb-3 font-mono text-[10px] tracking-[0.22em] text-gold/80 uppercase">
                    {item.label}
                  </p>
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <h3 className="font-serif text-2xl tracking-tight">{item.title}</h3>
                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-paper/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold"
                    />
                  </div>
                  <p className="max-w-md text-sm leading-7 text-paper/50">{item.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-paper/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <GitBranch size={16} className="text-gold" />
            <p className="text-sm text-paper/50">
              Learning through experiments, projects, and documentation.
            </p>
          </div>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 text-sm text-gold transition-colors hover:text-paper"
          >
            Follow the journey
            <ArrowUpRight size={16} />
          </a>
        </div>
      </Container>
    </section>
  );
}
