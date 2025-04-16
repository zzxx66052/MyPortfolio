import SkillsSection from "@/components/section/SkillSection";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import HeroSection from "../components/layouts/HeroSection";
import AboutMeSection from "../components/section/AboutMeSection";
import ArchivingSection from "@/components/section/ArchivingSection";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import ProjectSection from "@/components/section/ProjectSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ArchivingSection />
      <ProjectSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
