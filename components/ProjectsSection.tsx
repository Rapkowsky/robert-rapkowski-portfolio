"use client";

import { useState } from "react";
import { ProjectMobile } from "./ProjectMobile";
import useWindowResize from "./hooks/UseWindowResize";
import ProjectDesktop from "./ProjectDesktop";
import SectionWrapper from "./SectionWrapper";
import TitleSlideLeft from "./TitleSlideLeft";
import ProjectModal from "./ProjectModal";
import { usePathname } from "next/navigation";

export const projects = [
  {
    title: "DevHub",
    year: "2025",
    scope: "Fullstack application",
    src: "devhub-bg-git.png",
    color: "bg-[#E4E3E3]",
    colorDark: "dark:bg-[#f0f0f0]",
    link: "/devhub",
  },
  {
    title: "Zoofy",
    year: "2025",
    scope: "Fullstack application",
    src: "zoofy.png",
    color: "bg-[#def0eb]",
    colorDark: "dark:bg-[#f0f0f0]",
    link: "/zoofy",
  },
  {
    title: "R-booking",
    year: "2025",
    scope: "Frontend application",
    src: "rBooking.png",
    color: "bg-[#def0eb]",
    colorDark: "dark:bg-[#f0f0f0]",
    link: "/r-booking",
  },
  {
    title: "Matuszewski",
    year: "2024",
    scope: "Animated Website",
    src: "mat.png",
    color: "bg-[#E4E3E3]",
    colorDark: "dark:bg-[#f0f0f0]",
    link: "/matuszewski",
  },
  {
    title: "Movie app",
    year: "2025",
    scope: "Frontend application",
    src: "movieApp.png",
    color: "bg-[#def0eb]",
    colorDark: "dark:bg-[#f0f0f0]",
    link: "/movie-app",
  },
  {
    title: "Portfolio",
    year: "2025",
    scope: "Animated Website",
    src: "work1.png",
    color: "bg-[#0A0A0A]",
    colorDark: "dark:bg-[#f0f0f0]",
    link: "/portfolio",
  },
];

export default function ProjectsSection() {
  const pathname = usePathname();
  const isWorkPage = pathname === "/work";
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { width } = useWindowResize();
  const isMobile = width < 1024;
  if (width === 0) return null;

  return (
    <div id="works">
      {isMobile ? (
        <SectionWrapper>
          {!isWorkPage && <TitleSlideLeft text="Recent projects" />}
          <section>
            {projects.map((project, idx) => {
              return (
                <ProjectMobile
                  key={idx}
                  title={project.title}
                  year={project.year}
                  scope={project.scope}
                  src={project.src}
                  idx={idx}
                  color={project.color}
                  colorDark={project.colorDark}
                  link={project.link}
                />
              );
            })}
          </section>
        </SectionWrapper>
      ) : (
        <SectionWrapper className="max-w-[1860px] !px-0">
          {!isWorkPage && <TitleSlideLeft text="Recent projects" />}
          <section className="lg:px flex items-center justify-center">
            <div className="flex w-full flex-col items-center justify-center">
              {projects.map((project, index) => {
                return (
                  <ProjectDesktop
                    index={index}
                    title={project.title}
                    setModal={setModal}
                    key={index}
                    scope={project.scope}
                    link={project.link}
                  />
                );
              })}
            </div>
            <ProjectModal modal={modal} projects={projects} />
          </section>
        </SectionWrapper>
      )}
    </div>
  );
}
