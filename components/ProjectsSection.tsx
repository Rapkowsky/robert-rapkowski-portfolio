"use client";

import { useState } from "react";
import Modal from "./Modal";
import { ProjectMobile } from "./ProjectMobile";
import useWindowResize from "./hooks/UseWindowResize";
import ProjectDesktop from "./ProjectDesktop";
import SectionWrapper from "./SectionWrapper";

export const projects = [
  {
    title: "Matuszewski",
    year: "2024",
    scope: "Design & Development",
    src: "mat.png",
    color: "#132030",
  },
  {
    title: "PetSoft",
    year: "2025",
    scope: "Design & Development",
    src: "karola.png",
    color: "#2c9676",
  },
  {
    title: "Portfolio",
    year: "2025",
    scope: "Design & Development",
    src: "portfolio.png",
    color: "#EFE8D3",
  },
  {
    title: "Silencio",
    year: "2022",
    scope: "Design & Development",
    src: "silencio.png",
    color: "#706D63",
  },
];

export default function ProjectsSection() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { width } = useWindowResize();
  const isMobile = width < 1024;
  if (width === 0) return null;

  return (
    <>
      {isMobile ? (
        <SectionWrapper>
          {projects.map((project, idx) => {
            return (
              <ProjectMobile
                key={idx}
                title={project.title}
                year={project.year}
                scope={project.scope}
                src={project.src}
                idx={idx}
              />
            );
          })}
        </SectionWrapper>
      ) : (
        <section className="flex min-h-screen items-center justify-center bg-white duration-500 ease-rrSmooth dark:bg-rrDark lg:px">
          <div className="flex w-[1600px] flex-col items-center justify-center">
            {projects.map((project, index) => {
              return (
                <ProjectDesktop
                  index={index}
                  title={project.title}
                  setModal={setModal}
                  key={index}
                />
              );
            })}
          </div>
          <Modal modal={modal} projects={projects} />
        </section>
      )}
    </>
  );
}
