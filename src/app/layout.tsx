import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar/Navbar";
import { SiteFooter } from "@/components/shared/Footer/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import Preloader from "@/components/ui/PreLoader";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description:
    "Classic full-stack portfolio of Mohammad Riaz. Modern web applications built with Next.js, React, Node.js, and databases.",
  keywords: [
    "Mohammad Riaz",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Dhaka",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description:
      "Selected work and craft in full-stack web development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable} antialiased`}
      >
        <div className="relative min-h-svh bg-ink text-paper">
          <div className="grain" aria-hidden="true" />
          <ScrollProgress />
          <Preloader />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <SiteFooter />
          <CustomCursor />
        </div>
      </body>
    </html>
  );
}
