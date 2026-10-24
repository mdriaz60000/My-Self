"use client";

import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import Container from "../Container/Container";
import { navItems, site } from "@/lib/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash);
    };

    updateHash();

    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, [pathname]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isNavItemActive = (href: string) => {
    const [targetPath, targetHash] = href.split("#");

    const normalizedPath = targetPath || "/";
    const isSamePage = pathname === normalizedPath;

    if (!targetHash) {
      return isSamePage && !activeHash;
    }

    return isSamePage && activeHash === `#${targetHash}`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-paper/10 bg-ink/80 text-paper backdrop-blur-xl">
      <Container>
        <div className="flex h-[76px] items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => {
              setIsOpen(false);
              setActiveHash("");
            }}
            className="group flex shrink-0 items-center gap-3"
          >
            <span className="flex h-8 w-8 items-center justify-center border border-gold/40 font-serif text-sm text-gold">
              MR
            </span>

            <span className="font-serif text-xl tracking-tight sm:text-2xl">
              {site.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 md:flex"
          >
            {navItems.map((item) => {
              const isActive = isNavItemActive(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => {
                    const hash = item.href.includes("#")
                      ? `#${item.href.split("#")[1]}`
                      : "";

                    setActiveHash(hash);
                    setIsOpen(false);
                  }}
                  className={`relative px-4 py-2 text-[12px] uppercase tracking-[0.22em] transition-colors duration-300 ${
                    isActive
                      ? "text-gold"
                      : "text-paper/55 hover:text-paper"
                  }`}
                >
                  {item.name}

                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-4 -bottom-1 h-px bg-gold"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}

            {/* Resume */}
            <Link
              href={site.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="group ml-4 inline-flex items-center gap-2 border border-gold bg-gold px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:bg-paper"
            >
              Resume

              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center border border-paper/15 text-paper transition-colors hover:border-gold/50 hover:text-gold md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                transition={{ duration: 0.15 }}
                className="flex"
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden md:hidden"
            >
              <div className="space-y-1 border-t border-paper/10 py-4">
                {navItems.map((item, index) => {
                  const isActive = isNavItemActive(item.href);

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        aria-current={isActive ? "location" : undefined}
                        onClick={() => {
                          const hash = item.href.includes("#")
                            ? `#${item.href.split("#")[1]}`
                            : "";

                          setActiveHash(hash);
                          setIsOpen(false);
                        }}
                        className={`flex items-center justify-between px-4 py-3 text-sm tracking-wide transition-colors ${
                          isActive
                            ? "bg-gold/10 text-gold"
                            : "text-paper/70 hover:bg-paper/[0.04] hover:text-paper"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Mobile Resume */}
                <Link
                  href={site.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="mt-3 flex items-center justify-center gap-2 bg-gold px-5 py-3 text-[12px] font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:bg-paper"
                >
                  View Resume

                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
