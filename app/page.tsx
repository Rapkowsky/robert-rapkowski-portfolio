"use client";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SlidingImages from "@/components/SlidingImages";
import Intro from "@/components/Intro";
import { SkillsSection } from "@/components/SkillsSection";
import { JourneySection } from "@/components/JourneySection";
// import Preloader from "@/components/Preloader";
// import { AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";
// import { Numbers } from "@/components/Numbers";

const Home = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // Smooth scroll

  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     const locomotiveScroll = new LocomotiveScroll();
  //     setTimeout(() => {
  //       setIsLoading(false);

  //       document.body.style.cursor = "default";

  //       window.scrollTo(0, 0);
  //     }, 2000);
  //   })();
  // }, []);

  return (
    <main>
      {/* <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence> */}
      <HeroSection />
      <Intro />
      <SkillsSection />
      <ProjectsSection />
      <JourneySection />
      <SlidingImages />
      <Footer />
    </main>
  );
};

export default Home;
