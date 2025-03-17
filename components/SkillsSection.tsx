import {
  MotionValue,
  useScroll,
  motion,
  useTransform,
  useInView,
} from "framer-motion";
import React, { useRef } from "react";
import { IconType } from "react-icons";
import { FiCopy } from "react-icons/fi";
import { RiCodeAiFill } from "react-icons/ri";
import Image from "next/image";
import { LuPanelsTopLeft } from "react-icons/lu";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { BsGitlab } from "react-icons/bs";
import { AiFillApi } from "react-icons/ai";
import { GrGraphQl } from "react-icons/gr";
import { SiPagespeedinsights } from "react-icons/si";
import { MdOutlineDevices } from "react-icons/md";
import { TbSeo } from "react-icons/tb";
import { SlMagnifierAdd } from "react-icons/sl";
import { SiAdobephotoshop } from "react-icons/si";
import { SiJira } from "react-icons/si";
import { SiAsana } from "react-icons/si";
import { SiRedmine } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import { PiFigmaLogoDuotone } from "react-icons/pi";
import { FaSass } from "react-icons/fa";
import asana from "@/public/asana.svg";
import figma from "@/public/figma.svg";
import office from "@/public/office.svg";
import { FaApple } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { cn } from "@/lib/utils";
import useWindowResize from "./hooks/UseWindowResize";
import { easefadeInUp } from "@/lib/Animations";
import TitleSlideLeft from "./TitleSlideLeft";
import SectionWrapper from "./SectionWrapper";

export const SkillsSection = () => {
  const cardsRef = useRef(null);
  const { scrollYProgress: cardsScrollYProgress } = useScroll({
    target: cardsRef,
    offset: ["start start", "end start"],
  });

  return (
    <>
      <SectionWrapper className="!pb-0">
        <TitleSlideLeft text="Technology Stack" titleClassName="!m-0" />
      </SectionWrapper>
      <div ref={cardsRef} className="relative">
        {CARDS.map((c, idx) => (
          <Card
            key={c.id}
            card={c}
            scrollYProgress={cardsScrollYProgress}
            position={idx + 1}
          />
        ))}
      </div>
    </>
  );
};

interface CardProps {
  position: number;
  card: CardType;
  scrollYProgress: MotionValue;
}

const Card = ({ position, card, scrollYProgress }: CardProps) => {
  const { width } = useWindowResize();
  const CARD_HEIGHT = width >= 768 ? 1000 : width > 500 ? 900 : 800;

  const scaleFromPct = (position - 1) / CARDS.length;
  const y = useTransform(scrollYProgress, [scaleFromPct, 1], [0, -CARD_HEIGHT]);

  const isOddCard = position % 2;
  const h3Ref = useRef(null);
  const h3InView = useInView(h3Ref, {
    margin: "0px 0px -200px",
    amount: 1,
    once: true,
  });
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isWrapperInView = useInView(wrapperRef, {
    margin: "200px 0px",
  });
  return (
    <motion.div
      ref={wrapperRef}
      style={{
        height: CARD_HEIGHT,
        y: position === CARDS.length ? undefined : y,
        background: isOddCard ? "black" : "white",
        color: isOddCard ? "white" : "black",
        willChange: isWrapperInView ? "transform" : undefined,
      }}
      className="sticky top-0 flex w-full origin-top flex-col items-center justify-center gap-10 px-4 md:gap-14"
    >
      <motion.div className="flex flex-col items-center gap-6">
        <card.Icon className="text-6xl" />

        <motion.h3
          ref={h3Ref}
          className={`text-center text-4xl font-semibold !leading-[1.1] duration-1000 md:text-6xl ${h3InView ? "bg-textGradient bg-clip-text text-transparent" : ""}`}
        >
          {card.title}
        </motion.h3>

        <p className="max-w-lg text-center text-sm md:text-base">
          {card.description}
        </p>
      </motion.div>

      <motion.div
        className="flex max-w-[1000px] flex-wrap gap-3 min-[500px]:gap-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: easefadeInUp,
        }}
        viewport={{ once: true }}
      >
        {card.id === 1 &&
          skillIcons.development.map((skill) => (
            <div
              key={skill.name}
              className="flex w-[80px] flex-col items-center min-[500px]:w-[90px]"
            >
              <skill.Icon
                className={cn(
                  "h-10 w-10 min-[500px]:h-12 min-[500px]:w-12",
                  skill.customClass,
                )}
              />
              <span className="mt-2 text-center text-sm">{skill.name}</span>
            </div>
          ))}
        {card.id === 2 &&
          skillIcons.design.map((skill) => (
            <div
              key={skill.name}
              className="flex w-[80px] flex-col items-center min-[500px]:w-[90px]"
            >
              {skill.name === "Figma" ? (
                <Image
                  src={figma}
                  alt={skill.name}
                  className={cn(
                    "h-10 w-10 min-[500px]:h-12 min-[500px]:w-12",
                    skill.customClass,
                  )}
                />
              ) : (
                <skill.Icon
                  className={cn(
                    "h-10 w-10 min-[500px]:h-12 min-[500px]:w-12",
                    skill.customClass,
                  )}
                />
              )}
              <span className="mt-2 text-center text-sm">{skill.name}</span>
            </div>
          ))}
        {card.id === 3 &&
          skillIcons.management.map((skill) => (
            <div
              key={skill.name}
              className="flex w-[80px] flex-col items-center min-[500px]:w-[90px]"
            >
              {skill.name === "Asana" ? (
                <Image
                  src={asana}
                  alt={skill.name}
                  className={cn(
                    "h-10 w-10 min-[500px]:h-12 min-[500px]:w-12",
                    skill.customClass,
                  )}
                />
              ) : skill.name === "Office 365" ? (
                <Image
                  src={office}
                  alt={skill.name}
                  className={cn(
                    "h-10 w-10 min-[500px]:h-12 min-[500px]:w-12",
                    skill.customClass,
                  )}
                />
              ) : (
                <skill.Icon
                  className={cn(
                    "h-10 w-10 min-[500px]:h-12 min-[500px]:w-12",
                    skill.customClass,
                  )}
                />
              )}

              <span className="mt-2 text-center text-sm">{skill.name}</span>
            </div>
          ))}
      </motion.div>
    </motion.div>
  );
};

type CardType = {
  id: number;
  Icon: IconType;
  title: string;
  description: string;
};

const CARDS: CardType[] = [
  {
    id: 1,
    Icon: RiCodeAiFill,
    title: "Development",
    description:
      "Crafting high-performing websites using primarily Next.js and React. Proficiency in core HTML, CSS, and JavaScript, enabling me to design responsive, accessible, digital experiences that align with unique business needs.",
  },
  {
    id: 2,
    Icon: LuPanelsTopLeft,
    title: "UX/UI Design",
    description:
      "Frontend Developer skilled in UX/UI design, delivering responsive, SEO-friendly, and pixel-perfect digital experiences using Figma and Photoshop.",
  },
  {
    id: 3,
    Icon: FiCopy,
    title: "Management tools",
    description:
      "Experienced with management tools like Jira, Asana, EasyRedmine, and Office 365, enabling seamless adaptation to similar systems.",
  },
];

export interface IconCardType {
  Icon: IconType;
  name: string;
  customClass?: string;
}

export interface SkillIconsType {
  development: IconCardType[];
  design: IconCardType[];
  management: IconCardType[];
}

const skillIcons: SkillIconsType = {
  development: [
    { Icon: SiNextdotjs, name: "Next.js", customClass: "text-white" },
    { Icon: FaReact, name: "React", customClass: "text-[#58c4dc]" },
    { Icon: SiRedux, name: "Redux", customClass: "text-[#7a50be]" },
    { Icon: SiTypescript, name: "Typescript", customClass: "text-[#2f73c0]" },
    {
      Icon: SiJavascript,
      name: "JavaScript",
      customClass: "text-[#f0da1c]",
    },
    {
      Icon: RiTailwindCssFill,
      name: "Tailwind CSS",
      customClass: "text-[#37b7f0]",
    },
    { Icon: FaHtml5, name: "HTML5", customClass: "text-[#e96328]" },
    { Icon: FaCss3Alt, name: "CSS", customClass: "text-[#2f69ef]" },
    { Icon: FaSass, name: "SASS", customClass: "text-[#d06a9d]" },
    { Icon: FaGitAlt, name: "GIT", customClass: "text-[#f1563b]" },
    { Icon: BsGitlab, name: "GitLab", customClass: "text-[#e34a30]" },
    { Icon: AiFillApi, name: "API", customClass: "text-white" },
    { Icon: GrGraphQl, name: "GraphQL", customClass: "text-[#e63eae]" },
    {
      Icon: SiPagespeedinsights,
      name: "Performance",
      customClass: "text-[#67b340]",
    },
    { Icon: TbSeo, name: "SEO", customClass: "text-white" },
  ],
  design: [
    { Icon: MdOutlineDevices, name: "RWD", customClass: "text-primary" },
    { Icon: LuPanelsTopLeft, name: "UX/UI", customClass: "text-[#983cc2]" },
    { Icon: SlMagnifierAdd, name: "Pixel Perfect", customClass: "" },
    {
      Icon: PiFigmaLogoDuotone,
      name: "Figma",
      customClass: "",
    },
    {
      Icon: SiAdobephotoshop,
      name: "Photoshop",
      customClass: "text-[#011e36] bg-[#30a7fe] rounded-xl",
    },
  ],
  management: [
    { Icon: SiJira, name: "Jira", customClass: "text-[#2c81fa]" },
    { Icon: SiAsana, name: "Asana", customClass: "" },
    { Icon: SiRedmine, name: "EasyRedmine", customClass: "text-[#d03830]" },
    { Icon: FaMicrosoft, name: "Office 365", customClass: "" },
    { Icon: FaApple, name: "macOS", customClass: "" },
    { Icon: FaWindows, name: "Windows", customClass: "text-[#167eda]" },
  ],
};
