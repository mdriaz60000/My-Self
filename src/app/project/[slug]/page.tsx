"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/shared/Container/Container";
import { projects } from "@/lib/projectData";

export default function ProjectDetailsPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const project = projects.find((item) => item.slug === slug);
  const reduceMotion = useReducedMotion();

  if (!project) return notFound();

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-ink text-paper">
      <Container>
        <div className="py-12 sm:py-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link
              href="/project"
              className="group inline-flex items-center gap-2 text-sm text-paper/50 transition-colors hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to the archive
            </Link>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-10 mt-10 sm:mt-14"
          >
            <div className="mb-5 flex items-center gap-4">
              <span className="font-mono text-[11px] tracking-[0.28em] text-gold">
                {String(projects.indexOf(project) + 1).padStart(2, "0")}
              </span>
              <span className="h-px w-10 bg-gold/50" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-paper/45">
                Case study
              </span>
            </div>
            <h1 className="max-w-5xl font-serif text-4xl leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-paper/55 sm:text-lg">
              {project.description}
            </p>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative overflow-hidden border border-paper/10"
          >
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
              />
            </div>
          </motion.div>

          <section className="mt-10 border-b border-paper/10 pb-10">
            <p className="mb-4 text-[11px] uppercase tracking-[0.24em] text-paper/40">
              Materials
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-paper/12 px-4 py-2 text-xs text-paper/65"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          <div className="grid gap-12 py-12 lg:grid-cols-[1fr_280px] lg:gap-16">
            <section>
              <p className="mb-4 text-[11px] uppercase tracking-[0.24em] text-gold">
                Overview
              </p>
              <h2 className="font-serif text-3xl tracking-tight">The brief</h2>
              <p className="mt-5 text-base leading-8 text-paper/55">
                {project.fullDetails || project.description}
              </p>
            </section>

            <aside className="h-fit border border-paper/10 bg-[#100e0c] p-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-paper/40">
                Visit
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-between bg-gold px-5 text-sm font-medium text-ink hover:bg-paper"
                >
                  <span className="inline-flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Live demo
                  </span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={project.frontendGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-between border border-paper/15 px-5 text-sm text-paper/80 hover:text-gold"
                >
                  <span className="inline-flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    Frontend
                  </span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                {project.backendGithub ? (
                  <a
                    href={project.backendGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-between border border-paper/15 px-5 text-sm text-paper/80 hover:text-gold"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      Backend
                    </span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </aside>
          </div>

          {projects.length > 1 ? (
            <div className="border-t border-paper/10 pt-8">
              <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-paper/35">
                Continue
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {projects
                  .filter((item) => item.slug !== project.slug)
                  .slice(0, 2)
                  .map((item) => (
                    <Link
                      key={item.slug}
                      href={`/project/${item.slug}`}
                      className="group flex items-center justify-between gap-4 border border-paper/10 p-4 transition-colors hover:border-gold/35"
                    >
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-paper/35">
                          Next study
                        </p>
                        <p className="mt-1 truncate font-serif text-lg text-paper/85 group-hover:text-gold">
                          {item.title}
                        </p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-paper/40 group-hover:text-gold" />
                    </Link>
                  ))}
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
