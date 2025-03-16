"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import SectionWrapper from "./SectionWrapper";
import TitleSlideLeft from "./TitleSlideLeft";
// import Image from "next/image";
// import appTesting from "../public/images/appTesting.jpg";
// import appTesting2 from "../public/images/appTesting2.jpg";
// import wowSchool from "../public/images/wowSchool.jpg";
// import wowSchoolLogo from "../public/images/wowSchoolLogo.svg";
// import tcWork1 from "../public/images/tcWork1.png";
// import tcWork2 from "../public/images/tcWork2.png";
// import tcWork3 from "../public/images/tcWork3.png";
// import tcWork8 from "../public/images/tcWork8.png";
// import tcWork10 from "../public/images/tcWork10.png";
// import tcWork11 from "../public/images/tcWork11.png";
import { easefadeInUp } from "@/lib/Animations";

interface JourneySectionEntry {
  title: string;
  content: React.ReactNode;
}
const defaultMotionProps = {
  initial: { opacity: 0, x: 25 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 1, ease: easefadeInUp },
  viewport: { margin: "-50px 0px -400px" },
};

const data: JourneySectionEntry[] = [
  {
    title: "2015 - 2017",
    content: (
      <motion.div {...defaultMotionProps}>
        <p className="dark:text-textGray mb-8 text-lg font-normal">
          I began my career as a tester, and during those early years in IT, I
          built a solid foundation{" "}
          <span className="text-white">with a strong focus on quality.</span>
        </p>
        {/* <div className="grid grid-cols-2 gap-4">
          <Image
            alt=""
            src={appTesting}
            className="h-20 w-full rounded-lg object-cover shadow-shadowMain md:h-44 lg:h-60"
          />
          <Image
            alt=""
            src={appTesting2}
            className="h-20 w-full rounded-lg object-cover shadow-shadowMain md:h-44 lg:h-60"
          />
        </div> */}
      </motion.div>
    ),
  },
  {
    title: "2016 - 2017",
    content: (
      <motion.div {...defaultMotionProps}>
        <p className="dark:text-textGray mb-8 text-lg font-normal">
          At wowSchool,{" "}
          <span className="text-white">I taught programming basics</span> to
          children aged 7-14. It was a fantastic journey that{" "}
          <span className="text-white">
            nurtured both technical and soft skills.
          </span>
        </p>
        {/* <div className="grid grid-cols-2 gap-4">
          <Image
            alt=""
            src={wowSchool}
            className="h-20 w-full rounded-lg object-cover shadow-shadowMain md:h-44 lg:h-60"
          />
          <Image
            alt=""
            src={wowSchoolLogo}
            className="h-20 w-full rounded-lg object-cover shadow-shadowMain md:h-44 lg:h-60"
          />
        </div> */}
      </motion.div>
    ),
  },
  {
    title: "2017 - 2022",
    content: (
      <motion.div {...defaultMotionProps}>
        <p className="dark:text-textGray mb-8 text-lg font-normal">
          Working as a{" "}
          <span className="text-white">
            Senior QA Specialist immersed me in the intricacies of IT,
            collaborating with developers, graphic designers, and project
            managers within an international team.
          </span>{" "}
          This role enabled me to develop both soft and hard skills, acquiring a
          range of technical expertise that{" "}
          <span className="text-white">
            gradually evolved into the competencies needed to transition into
            Frontend Development.
          </span>
        </p>
        {/* <div className="grid grid-cols-2 gap-4">
          <Image
            alt=""
            src={tcWork3}
            className="h-20 w-full rounded-lg object-cover shadow-shadowMain md:h-44 lg:h-60"
          />
          <Image
            alt=""
            src={tcWork2}
            className="h-20 w-full rounded-lg object-cover shadow-shadowMain md:h-44 lg:h-60"
          />
        </div> */}
      </motion.div>
    ),
  },
  {
    title: "2022 - now",
    content: (
      <motion.div {...defaultMotionProps}>
        <p className="dark:text-textGray mb-8 text-lg font-normal">
          Working as a Frontend Developer is a role in which I{" "}
          <span className="text-white">
            truly thrive and passionately evolve with emerging technologies.
          </span>{" "}
          I aim to deliver{" "}
          <span className="text-white">
            modern, responsive, and high-quality
          </span>{" "}
          websites and applications by utilizing the latest
          technologies—currently <span className="text-white">Next.js</span> and{" "}
          <span className="text-white">React</span> —to provide efficient and
          scalable solutions to clients. My near-future goal is to become a{" "}
          <span className="text-white">Full Stack Developer</span>.
        </p>
        {/* <div className="grid grid-cols-2 gap-4">
          <Image
            alt=""
            src={tcWork1}
            className="h-20 w-full rounded-lg object-cover shadow-shadowMain md:h-44 lg:h-60"
          />
          <Image
            alt=""
            src={tcWork8}
            className="h-20 w-full rounded-lg object-cover shadow-shadowMain md:h-44 lg:h-60"
          />
          <Image
            alt=""
            src={tcWork11}
            className="h-20 w-full rounded-lg object-cover shadow-shadowMain md:h-44 lg:h-60"
          />
          <Image
            alt=""
            src={tcWork10}
            className="h-20 w-full rounded-lg object-cover shadow-shadowMain md:h-44 lg:h-60"
          />
        </div> */}
      </motion.div>
    ),
  },
];

export const JourneySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 50%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <SectionWrapper>
      <TitleSlideLeft text="Journey" />
      <div className="w-full font-sans" ref={containerRef}>
        <div className="mx-auto px-4 py-20 md:px-8">
          <h2 className="mb-4 max-w-4xl text-lg text-black dark:text-white md:text-4xl">
            Changelog from my journey
          </h2>
          <p className="max-w-sm text-sm text-neutral-700 dark:text-neutral-300 md:text-base">
            As a Frontend Developer, I have worked commercially for over the
            past 3 years.
            <br /> Here&apos;s a timeline of my whole IT journey.
          </p>
        </div>

        <div ref={ref} className="relative mx-auto">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:gap-10 md:pt-40"
            >
              <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
                <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-black md:left-3">
                  <div className="h-4 w-4 rounded-full border border-neutral-300 bg-neutral-200 p-2 dark:border-neutral-700 dark:bg-neutral-800" />
                </div>
                <h3 className="dark:text-textGray hidden text-xl font-bold text-neutral-500 md:block md:pl-20 md:text-5xl">
                  {item.title}
                </h3>
              </div>

              <div className="relative w-full pl-20 pr-4 md:pl-4">
                <h3 className="mb-4 block text-left text-2xl font-bold text-neutral-500 dark:text-neutral-500 md:hidden">
                  {item.title}
                </h3>
                {item.content}
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-neutral-700 md:left-8"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-[linear-gradient(to_top,#146ef5,#6e30f8,#c1498b,#fe5766)]"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
