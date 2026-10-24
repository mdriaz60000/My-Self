"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/shared/Container/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { projects } from "@/lib/projectData";

export default function PageProject() {
  const reduceMotion = useReducedMotion();
  const [featured, ...rest] = projects;

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-ink py-24 text-paper sm:py-32"
    >
      <Container>
        <SectionHeading
          align="split"
          index="03"
          eyebrow="Selected work"
          title={
            <>
              An archive of{" "}
              <span className="italic text-paper/40">products</span>
            </>
          }
          description="Real applications, considered interfaces, and full-stack systems built with care."
        />

        {featured ? (
          <motion.article
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="group mb-6 grid overflow-hidden border border-paper/10 lg:grid-cols-[1.15fr_0.85fr]"
          >
            <Link
              href={`/project/${featured.slug}`}
              className="relative min-h-[280px] overflow-hidden bg-[#110f0c] sm:min-h-[360px]"
            >
              <Image
                src={featured.image}
                alt={`${featured.title} preview`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/10" />
              <span className="absolute left-5 top-5 font-mono text-[11px] tracking-[0.22em] text-gold">
                01 / FEATURED
              </span>
            </Link>
            <div className="flex flex-col justify-between bg-[#100e0c] p-7 sm:p-10">
              <div>
                <h3 className="font-serif text-3xl tracking-tight sm:text-4xl">
                  {featured.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-paper/50 sm:text-base">
                  {featured.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-paper/12 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-paper/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`/project/${featured.slug}`}
                  className="inline-flex min-h-11 items-center gap-2 bg-gold px-5 text-[11px] uppercase tracking-[0.16em] text-ink hover:bg-paper"
                >
                  Case study
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <a
                  href={featured.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 border border-paper/15 px-5 text-[11px] uppercase tracking-[0.16em] text-paper/75 hover:border-gold/40 hover:text-gold"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live
                </a>
              </div>
            </div>
          </motion.article>
        ) : null}

        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: index * 0.1 }}
              className="group flex flex-col overflow-hidden border border-paper/10 bg-[#100e0c]"
            >
              <Link
                href={`/project/${project.slug}`}
                className="relative aspect-[16/10] overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent" />
                <span className="absolute left-4 top-4 font-mono text-[10px] tracking-[0.2em] text-gold">
                  {String(index + 2).padStart(2, "0")} / WORK
                </span>
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-2xl tracking-tight transition-colors group-hover:text-gold">
                  {project.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-paper/50">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-paper/10 px-2.5 py-1 text-[10px] text-paper/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex gap-2 pt-6">
                  <Link
                    href={`/project/${project.slug}`}
                    className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 bg-gold px-3 text-[11px] uppercase tracking-[0.14em] text-ink hover:bg-paper"
                  >
                    Details
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 border border-paper/15 text-[11px] uppercase tracking-[0.14em] text-paper/75 hover:text-gold"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live
                  </a>
                </div>
                <a
                  href={project.frontendGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 border-t border-paper/10 pt-4 text-xs text-paper/40 hover:text-gold"
                >
                  <Github className="h-4 w-4" />
                  Source
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
