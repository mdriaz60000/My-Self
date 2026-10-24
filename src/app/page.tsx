import { HeroBanner } from "@/components/shared/Bannar/Bannar";
import PageProject from "./project/page";
import SkillsSection from "@/components/shared/Skills/SkillSections";
import ContactSection from "@/components/shared/Contact/ContactSection";
import AboutSection from "@/components/shared/about/AboutSection";
import CurrentlyExploring from "@/components/shared/Skills/CurrentlyExploring";
import StatsStrip from "@/components/shared/Stats/StatsStrip";
import TechMarquee from "@/components/shared/Marquee/TechMarquee";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <StatsStrip />
      <AboutSection />
      <TechMarquee />
      <SkillsSection />
      <PageProject />
      <CurrentlyExploring />
      <ContactSection />
    </>
  );
}
