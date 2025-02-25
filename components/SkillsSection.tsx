import Image, { StaticImageData } from "next/image";
import Label from "./Label";
import SectionWrapper from "./SectionWrapper";
import nextJs from "@/public/images/nextJs.svg";
import react from "@/public/images/react.svg";
import html5 from "@/public/images/html5.svg";
import js from "@/public/images/js.svg";
import css from "@/public/images/css.svg";
import git from "@/public/images/git.svg";
import rwd from "@/public/images/rwd.svg";
import seo from "@/public/images/seo.svg";
import uxUi from "@/public/images/uxUi.svg";
import api from "@/public/images/api.svg";
import ts from "@/public/images/ts.svg";
import pixelPerfect from "@/public/images/pixelPerfect.svg";
import redux from "@/public/images/redux.svg";
import performance from "@/public/images/performance.svg";
import graphQL from "@/public/images/graphQL.svg";
import figma from "@/public/images/figma.svg";
import jira from "@/public/images/jira.svg";
import asana from "@/public/images/asana.svg";
import er from "@/public/images/er.jpg";
import office from "@/public/images/office.svg";
import ps from "@/public/images/ps.svg";
import tailwind from "@/public/images/tailwind.svg";
import scss from "@/public/images/scss.svg";
import Title from "./Title";

interface Skill {
  name: string;
  imgSrc: StaticImageData;
  imgClass?: string;
}

const development: Skill[] = [
  {
    name: "Next.js",
    imgSrc: nextJs,
    imgClass: "rounded-full border border-white dark:bg-white",
  },
  { name: "React", imgSrc: react },
  { name: "Redux", imgSrc: redux },
  { name: "Typescript", imgSrc: ts },
  { name: "JavaScript", imgSrc: js },
  { name: "Tailwind CSS", imgSrc: tailwind },
  { name: "HTML5", imgSrc: html5 },
  { name: "CSS", imgSrc: css },
  { name: "GIT", imgSrc: git },
  { name: "API", imgSrc: api },
  { name: "GraphQL", imgSrc: graphQL },
  { name: "Performance", imgSrc: performance },
  { name: "SCSS", imgSrc: scss },
];

const design: Skill[] = [
  { name: "RWD", imgSrc: rwd },
  { name: "SEO", imgSrc: seo },
  { name: "UX/UI", imgSrc: uxUi },
  {
    name: "Pixel Perfect",
    imgSrc: pixelPerfect,
    imgClass: "rounded-full border border-white dark:bg-white",
  },
  { name: "Figma", imgSrc: figma },
  { name: "Photoshop", imgSrc: ps },
];
const management: Skill[] = [
  { name: "Jira", imgSrc: jira },
  { name: "Asana", imgSrc: asana },
  { name: "EasyRedmine", imgSrc: er },
  { name: "Office 365", imgSrc: office },
];
const SkillsSection = () => {
  const renderSkills = (skills: Skill[], label: string) => (
    <div className="w-full">
      <Label text={label} className="mb-0" />
      <div className="mb-11 mt-12 h-[1px] bg-grayLight dark:bg-border" />
      <div className="flex flex-wrap gap-10">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex w-[120px] flex-col items-center gap-2 text-rrDark dark:text-white xl:text-xl"
          >
            <Image
              src={skill.imgSrc}
              alt={`${skill.name} logo`}
              className={`h-16 w-16 ${skill.imgClass || ""}`}
            />
            <p className="text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <SectionWrapper>
      <Title text="Tech Stack" />
      <section className="flex flex-wrap gap-24">
        {renderSkills(development, "Development")}
        {renderSkills(design, "Design & Prototyping")}
        {renderSkills(management, "Management / Collaboration")}
      </section>
    </SectionWrapper>
  );
};

export default SkillsSection;
