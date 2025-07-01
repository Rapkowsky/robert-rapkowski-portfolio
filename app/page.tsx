"use client";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SlidingImages from "@/components/SlidingImages";
import Intro from "@/components/Intro";
import { SkillsSection } from "@/components/SkillsSection";
import { JourneySection } from "@/components/JourneySection";
import { ScrollToTop, SmoothScroll } from "@/lib/utils";
import WhyMe from "@/components/WhyMe";

const Home = () => {
  SmoothScroll();

  ScrollToTop();
  return (
    <main>
      {/* <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence> */}
      <HeroSection />
      <Intro />
      <ProjectsSection />
      <WhyMe />
      {/* <TechCarousel /> */}
      <SkillsSection />
      <JourneySection />
      <SlidingImages />
    </main>
  );
};

export default Home;
