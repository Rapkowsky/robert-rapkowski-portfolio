"use client";

import BurgerMenu from "@/components/burger-menu";
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
      <HeroWrapper />
      <ProjectsWrapper />
      <BurgerMenu />
    </main>
  );
};

export default Home;
