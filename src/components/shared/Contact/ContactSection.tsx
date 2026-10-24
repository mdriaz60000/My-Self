"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Github, Linkedin, Mail, Send } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "../Container/Container";
import SectionHeading from "../SectionHeading";
import { site } from "@/lib/site";

const socials = [
  { name: "GitHub", href: site.github, icon: Github },
  { name: "LinkedIn", href: site.linkedin, icon: Linkedin },
];

export default function ContactSection() {
  const reduceMotion = useReducedMotion();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(
      form.subject.trim() || `Portfolio inquiry from ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  const inputClass =
    "w-full border border-paper/12 bg-paper/[0.03] px-4 py-3.5 text-sm text-paper outline-none placeholder:text-paper/25 transition-colors focus:border-gold/60";

  return (
    <section id="contact" className="relative isolate overflow-hidden bg-ink py-24 text-paper sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gold/[0.07] blur-[140px]" />
      </div>

      <Container>
        <SectionHeading
          align="split"
          index="05"
          eyebrow="Correspondence"
          title={
            <>
              Let us build
              <br />
              something <span className="italic text-paper/40">meaningful</span>
            </>
          }
          description="A project, a collaboration, or a role. Write, and we will begin with care."
        />

        <div className="grid gap-px overflow-hidden border border-paper/10 bg-paper/10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.aside
            initial={reduceMotion ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between bg-ink p-7 sm:p-9"
          >
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
                / Atelier
              </span>
              <h3 className="mt-6 font-serif text-3xl tracking-tight">
                Start a conversation.
              </h3>
              <p className="mt-3 text-sm leading-7 text-paper/45">
                Open to web development, collaboration, and joining a team that
                values considered work.
              </p>
              <div className="mt-9 border-t border-paper/10 pt-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-paper/35">
                  Direct line
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-3 inline-flex items-center gap-2 break-all text-sm text-paper/80 transition-colors hover:text-gold"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold" />
                  {site.email}
                </a>
              </div>
            </div>

            <div className="mt-12">
              <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-paper/35">
                Elsewhere
              </p>
              <div className="flex flex-wrap gap-3">
                {socials.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit my ${name} profile`}
                    className="inline-flex items-center gap-2 border border-paper/12 px-4 py-2.5 text-sm text-paper/65 transition-colors hover:border-gold/40 hover:text-gold"
                  >
                    <Icon className="h-4 w-4" />
                    {name}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-3 border-t border-paper/10 pt-6">
                <span className="h-1.5 w-1.5 bg-gold" />
                <span className="text-xs tracking-wide text-paper/45">
                  Open to new opportunities
                </span>
              </div>
            </div>
          </motion.aside>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-ink p-7 sm:p-9"
          >
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-serif text-2xl">A letter</h3>
                <p className="mt-2 text-sm text-paper/40">
                  A few lines about what you are building.
                </p>
              </div>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/25 text-gold">
                <Send className="h-5 w-5" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm text-paper/65">
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => {
                      setSubmitted(false);
                      setForm({ ...form, name: e.target.value });
                    }}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-sm text-paper/65">
                    Email address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    value={form.email}
                    onChange={(e) => {
                      setSubmitted(false);
                      setForm({ ...form, email: e.target.value });
                    }}
                    placeholder="you@studio.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="mb-2 block text-sm text-paper/65">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  maxLength={150}
                  value={form.subject}
                  onChange={(e) => {
                    setSubmitted(false);
                    setForm({ ...form, subject: e.target.value });
                  }}
                  placeholder="Project inquiry / Collaboration"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm text-paper/65">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={5000}
                  rows={5}
                  value={form.message}
                  onChange={(e) => {
                    setSubmitted(false);
                    setForm({ ...form, message: e.target.value });
                  }}
                  placeholder="Tell me about the project, the aim, and the timeline..."
                  className={`${inputClass} min-h-36 resize-y`}
                />
              </div>

              <button
                type="submit"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-3 bg-gold px-6 text-[12px] font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:bg-paper"
              >
                {submitted ? (
                  <>
                    <Check className="h-4 w-4" />
                    Email app opened
                  </>
                ) : (
                  <>
                    Send message
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </>
                )}
              </button>

              {submitted && (
                <p role="status" className="text-center text-xs leading-5 text-paper/50">
                  Your email application should open with the letter prepared.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
