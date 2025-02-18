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
    color: "bg-[#E4E3E3]",
    colorDark: "dark:bg-[#1c1d20]",
    link: "/matuszewski",
  },
  {
    title: "PetSoft",
    year: "2025",
    scope: "Design & Development",
    src: "petsoft.png",
    color: "bg-[#def0eb]",
    colorDark: "dark:bg-[#1c1d20]",
    link: "/petsoft",
  },
  {
    title: "Portfolio",
    year: "2025",
    scope: "Design & Development",
    src: "portfolio.png",
    color: "bg-[#0A0A0A]",
    colorDark: "dark:bg-[#1c1d20]",
    link: "/",
  },
  {
    title: "Silencio",
    year: "2022",
    scope: "Design & Development",
    src: "silencio.png",
    color: "bg-[#E4E3E3]",
    colorDark: "dark:bg-[#1c1d20]",
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
          <ProjectsHeader />
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
        <SectionWrapper className="!px-0">
          <section className="lg:px flex items-center justify-center bg-white duration-500 ease-rrSmooth dark:bg-rrDark">
            <div className="flex w-[1600px] flex-col items-center justify-center">
              <ProjectsHeader />
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

const ProjectsHeader = () => {
  return (
    <p className="mb-10 self-start text-xs uppercase text-rrGrayText lg:pl-[100px]">
      Recent Projects
    </p>
  );
};
