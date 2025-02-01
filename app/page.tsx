"use client";
import Description from "@/components/Description";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
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
    </main>
  );
};

export default Home;
