import { useInView, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { opacitySlideUp, wordSlideUp } from "@/lib/Animations";
import ButtonWrapper from "./ButtonWrapper";
import Link from "next/link";
import SectionWrapper from "./SectionWrapper";
import { Numbers } from "./Numbers";

export default function Intro() {
  const phrase =
    "Crafting modern and interactive websites and apps that help brands shine. Specializing in Next.js and React, I deliver refined, responsive digital experiences alongside cutting edge solutions.";
  const description1Ref = useRef(null);
  const isInView1 = useInView(description1Ref, { amount: 0.5, once: true });

  const description2Ref = useRef(null);
  const isInView2 = useInView(description2Ref, { amount: 0.5, once: true });

  const aboutMeBtnRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: aboutMeBtnRef,
    offset: ["start end", "start start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -50]);
  return (
    <SectionWrapper className="pb-0">
      <div className="relative z-10 flex items-center justify-center">
        <div className="relative flex w-full max-w-[700px] flex-col gap-16 text-rrDark dark:text-white lg:max-w-full lg:flex-row lg:gap-32">
          <motion.p
            className="flex max-w-[560px] flex-wrap gap-x-2 text-2xl !leading-[1.2] lg:max-w-full xl:text-5xl"
            ref={description1Ref}
          >
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
                    animate={isInView1 ? "open" : "closed"}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </motion.p>
          <div className="relative w-full">
            <motion.p
              ref={description2Ref}
              className="max-w-[260px] font-[300] text-rrDark opacity-0 dark:text-textGray lg:max-w-full lg:pr-0 xl:text-xl"
              variants={opacitySlideUp}
              initial="exit"
              animate={isInView2 ? "enter" : "exit"}
            >
              Years of working with UX designers on diverse projects have
              sharpened my technical skills to implement these solutions and
              fueled my ability to deliver UX solutions that make a real impact.
            </motion.p>

            <motion.div
              ref={aboutMeBtnRef}
              style={{ y }}
              className="absolute bottom-[-150px] right-0 ease-rrEaseBtnHover min-[500px]:bottom-[-50px] lg:bottom-[-200px]"
            >
              <div className="relative duration-3000 ease-rrEaseBtnHover active:scale-[0.25]">
                <ButtonWrapper className="bg-bgDark relative flex h-[150px] w-[150px] cursor-pointer items-center justify-center rounded-full font-medium text-white dark:bg-primary md:h-[170px] md:w-[170px] xl:h-[200px] xl:w-[200px]">
                  <Link
                    href="/about"
                    className="absolute inset-0 z-20 flex items-center justify-center"
                  >
                    About me
                  </Link>
                </ButtonWrapper>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Numbers className="mt-24 max-[374px]:mt-28 min-[500px]:mt-20 lg:mt-64" />
    </SectionWrapper>
  );
}
