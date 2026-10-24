import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, ArrowUp } from "lucide-react";
import Container from "../Container/Container";
import { site } from "@/lib/site";

const links = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/project" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-paper/10 bg-ink text-paper">
      <Container>
        <div className="py-14 sm:py-16">
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="text-[11px] uppercase tracking-[0.32em] text-gold">
                Available for work
              </p>
              <p className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
                Let us make something
                <span className="italic text-gold"> lasting.</span>
              </p>
            </div>

            <Link
              href="/#contact"
              className="group inline-flex items-center gap-3 border border-gold bg-gold px-6 py-3 text-[12px] font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:bg-paper"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-14 grid gap-10 border-t border-paper/10 pt-10 md:grid-cols-3">
            <div>
              <Link href="/" className="font-serif text-2xl tracking-tight">
                {site.name}
              </Link>
              <p className="mt-3 max-w-xs text-sm leading-6 text-paper/45">
                {site.role} crafting considered web products from {site.location}.
              </p>
              <div className="mt-5 flex items-center gap-3">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-9 w-9 items-center justify-center border border-paper/15 text-paper/55 transition-colors hover:border-gold/50 hover:text-gold"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center border border-paper/15 text-paper/55 transition-colors hover:border-gold/50 hover:text-gold"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div>
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.28em] text-paper/35">
                Index
              </p>
              <nav className="flex flex-col gap-3">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-paper/55 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.28em] text-paper/35">
                Correspondence
              </p>
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-paper/70 transition-colors hover:text-gold"
              >
                {site.email}
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-paper/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-paper/35">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <Link
              href="/"
              aria-label="Back to top"
              className="flex h-8 w-8 items-center justify-center border border-paper/15 text-paper/50 transition-colors hover:border-gold/50 hover:text-gold"
            >
              <ArrowUp className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
