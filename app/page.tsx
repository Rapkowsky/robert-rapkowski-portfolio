"use client";
import Contact from "@/components/Contact";
import Description from "@/components/Description";
import HeroSection from "@/components/HeroSection";
import Preloader from "@/components/Preloader";
import ProjectsSection from "@/components/ProjectsSection";
import SlidingImages from "@/components/SlidingImages";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Smooth scroll
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
      // setTimeout(() => {
      //   setIsLoading(false);

      //   document.body.style.cursor = "default";

      //   window.scrollTo(0, 0);
      // }, 2000);
    })();
  }, []);

  return (
    <main className="duration transition-all duration-300 dark:bg-black">
      {/* <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence> */}
      <HeroSection />
      <Description />
      <ProjectsSection />
      <SlidingImages />
      <Contact />
    </main>
  );
};

export default Home;
