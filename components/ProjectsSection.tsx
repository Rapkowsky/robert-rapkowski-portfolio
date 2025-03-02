"use client";

import { useState } from "react";
import Modal from "./Modal";
import { ProjectMobile } from "./ProjectMobile";
import useWindowResize from "./hooks/UseWindowResize";
import ProjectDesktop from "./ProjectDesktop";
import SectionWrapper from "./SectionWrapper";
import Label from "./Label";
import Title from "./Title";

export const projects = [
  {
    title: "Matuszewski",
    year: "2024",
    scope: "Design & Development",
    src: "mat.png",
    color: "bg-[#E4E3E3]",
    colorDark: "dark:bg-[#f0f0f0]",
    link: "/matuszewski",
  },
  {
    title: "PetSoft",
    year: "2025",
    scope: "Design & Development",
    src: "petsoft.png",
    color: "bg-[#def0eb]",
    colorDark: "dark:bg-[#f0f0f0]",
    link: "/petsoft",
  },
  {
    title: "Portfolio",
    year: "2025",
    scope: "Design & Development",
    src: "portfolio.png",
    color: "bg-[#0A0A0A]",
    colorDark: "dark:bg-[#f0f0f0]",
    link: "/",
  },
  {
    title: "Silencio",
    year: "2022",
    scope: "Design & Development",
    src: "silencio.png",
    color: "bg-[#E4E3E3]",
    colorDark: "dark:bg-[#f0f0f0]",
    link: "/",
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
          <Title text="Recent projects" />
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
          <Title text="Recent projects" />
          <section className="lg:px flex items-center justify-center">
            <div className="flex w-full flex-col items-center justify-center">
              {projects.map((project, index) => {
                return (
                  <ProjectDesktop
                    index={index}
                    title={project.title}
                    setModal={setModal}
                    key={index}
                    link={project.link}
                  />
                );
              })}
            </div>
            <Modal modal={modal} projects={projects} />
          </section>
        </SectionWrapper>
      )}
    </>
  );
}
