import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { opacitySlideUp, wordSlideUp } from "@/lib/Animations";
import ButtonWrapper from "./ButtonWrapper";
import Link from "next/link";
import SectionWrapper from "./SectionWrapper";
import { Numbers } from "./Numbers";

export default function Intro() {
  const phrase =
    "Crafting modern and interactive websites and apps that help brands shine. Specializing in Next.js and React, I deliver refined, responsive digital experiences alongside cutting edge solutions.";
  const description = useRef(null);
  const isInView = useInView(description, { amount: 1, once: true });
  return (
    <SectionWrapper>
      <div
        ref={description}
        className="relative z-10 flex items-center justify-center duration-500 ease-rrSmooth"
      >
        <div className="relative flex w-full max-w-[700px] flex-col gap-16 text-rrDark dark:text-white lg:max-w-full lg:flex-row lg:gap-32">
          <p className="flex max-w-[560px] flex-wrap gap-x-2 text-2xl !leading-[1.2] lg:max-w-full xl:text-5xl">
            {phrase.split(" ").map((word, index) => {
              return (
                <span
                  className="relative inline-flex overflow-hidden"
                  key={index}
                >
                  <motion.span
                    key={index}
                    variants={wordSlideUp}
                    custom={index}
                    initial="closed"
                    animate={isInView ? "open" : "closed"}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </p>
          <div className="relative w-full">
            <motion.p
              className="max-w-[260px] font-[300] text-rrDark opacity-0 dark:text-grayLight lg:max-w-full lg:pr-0 xl:text-xl"
              variants={opacitySlideUp}
              initial="exit"
              animate={isInView ? "enter" : "exit"}
            >
              Years of working with UX designers on diverse projects have
              sharpened my technical skills to implement these solutions and
              fueled my ability to deliver UX solutions that make a real impact.
            </motion.p>

            <div
              data-scroll
              data-scroll-speed={0.1}
              className="absolute bottom-[-100px] right-0 ease-rrEaseBtnHover max-[374px]:bottom-[-100px] min-[500px]:bottom-0 lg:bottom-[-180px]"
            >
              <div className="relative duration-3000 ease-rrEaseBtnHover active:scale-[0.25]">
                <ButtonWrapper className="relative flex h-[150px] w-[150px] cursor-pointer items-center justify-center rounded-full bg-rrDark font-medium text-white dark:bg-primary md:h-[170px] md:w-[170px] xl:h-[200px] xl:w-[200px]">
                  <Link
                    href="/"
                    className="absolute inset-0 z-20 flex items-center justify-center"
                  >
                    About me
                  </Link>
                </ButtonWrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Numbers className="mt-24 max-[374px]:mt-16 lg:mt-64" />
    </SectionWrapper>
  );
}
