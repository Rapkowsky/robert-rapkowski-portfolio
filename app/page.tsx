"use client";
import Contact from "@/components/contact";
import Description from "@/components/Description";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SlidingImages from "@/components/SlidingImages";
import { useEffect } from "react";

const Home = () => {
  // Smooth scroll
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main>
      <HeroSection />
      <Description />
      <ProjectsSection />
      <SlidingImages />
      <Contact />
    </main>
  );
};

export default Home;
