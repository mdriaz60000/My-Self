import AboutSection from "@/components/shared/about/AboutSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return <AboutSection />;
}
