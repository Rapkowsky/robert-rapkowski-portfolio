"use client";

import Header from "@/components/header";
import HeroWrapper from "@/components/hero-wrapper";
import ProjectsWrapper from "@/components/projects-wrapper";
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
      <Header />
      <HeroWrapper />
      <ProjectsWrapper />
    </main>
  );
};

export default Home;
