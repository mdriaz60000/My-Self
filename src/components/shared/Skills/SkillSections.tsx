"use client";

import { Database, Globe2, Server, Wrench } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiMongoose,
  SiRedux,
  SiGit,
  SiGithub,
  SiDocker,
  SiAmazonwebservices,
  SiFirebase,
  SiVercel,
  SiPostman,
} from "react-icons/si";
import { motion, useReducedMotion } from "framer-motion";
import type { IconType } from "react-icons";
import Container from "../Container/Container";
import SectionHeading from "../SectionHeading";

type Skill = {
  name: string;
  icon: IconType;
};

type SkillCategory = {
  number: string;
  title: string;
  description: string;
  icon: typeof Globe2;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    number: "01",
    title: "Frontend",
    description: "Responsive, accessible interfaces.",
    icon: Globe2,
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "Redux", icon: SiRedux },
    ],
  },
  {
    number: "02",
    title: "Backend",
    description: "APIs, auth, and business logic.",
    icon: Server,
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "NestJS", icon: SiNestjs },
    ],
  },
  {
    number: "03",
    title: "Data",
    description: "Schemas, queries, and persistence.",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma", icon: SiPrisma },
      { name: "Mongoose", icon: SiMongoose },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    number: "04",
    title: "Delivery",
    description: "Versioning, testing, and shipping.",
    icon: Wrench,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "AWS", icon: SiAmazonwebservices },
      { name: "Vercel", icon: SiVercel },
      { name: "Postman", icon: SiPostman },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function SkillsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="relative isolate overflow-hidden bg-ink py-24 text-paper sm:py-32">
      <Container>
        <SectionHeading
          align="split"
          index="02"
          eyebrow="Atelier"
          title={
            <>
              Skills &{" "}
              <span className="italic text-paper/40">technology</span>
            </>
          }
          description="The instruments used to shape interfaces, backends, and finished digital products."
        />

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={containerVariants}
          className="grid gap-px overflow-hidden border border-paper/10 bg-paper/10 md:grid-cols-2"
        >
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;

            return (
              <motion.article
                key={category.number}
                variants={cardVariants}
                className="group relative bg-ink p-7 transition-colors duration-300 hover:bg-[#110f0c] sm:p-9"
              >
                <div className="mb-8 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center border border-gold/25 text-gold">
                    <CategoryIcon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-sm text-paper/25">
                    /{category.number}
                  </span>
                </div>

                <h3 className="font-serif text-2xl tracking-tight sm:text-[1.75rem]">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-paper/45">
                  {category.description}
                </p>
                <div className="my-6 h-px bg-paper/10" />
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(({ name, icon: Icon }) => (
                    <div
                      key={name}
                      className="inline-flex items-center gap-2 border border-paper/10 bg-ink px-3 py-2 text-sm text-paper/65 transition-colors hover:border-gold/30 hover:text-gold"
                    >
                      <Icon aria-hidden="true" className="h-4 w-4 shrink-0" />
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
