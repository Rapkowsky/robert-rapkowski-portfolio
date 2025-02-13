import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "@/lib/Animations";
import ButtonWrapper from "./ButtonWrapper";
import Link from "next/link";

export default function Description() {
  const phrase =
    "Crafting modern and interactive websites and apps that help brands shine. Specializing in Next.js and React, I deliver refined, responsive digital experiences alongside cutting edge solutions.";
  const description = useRef(null);
  const isInView = useInView(description, { margin: "-150px" });
  return (
    <div
      ref={description}
      className="relative flex items-center justify-center overflow-hidden bg-white px-5 py-28 duration-500 ease-rrSmooth dark:bg-rrDark"
    >
      <div className="relative flex max-w-[1400px] flex-col gap-16 text-rrDark dark:text-white">
        <p className="text-2xl xl:text-4xl">
          {phrase.split(" ").map((word, index) => {
            return (
              <span
                className="relative mr-[10px] inline-flex overflow-hidden"
                key={index}
              >
                <motion.span
                  key={index}
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p
          className="w-[80%] pr-[70px] font-[300] opacity-0 xl:text-xl"
          variants={opacity}
          animate={isInView ? "open" : "closed"}
        >
          Years of working with UX designers on diverse projects have sharpened
          my technical skills to implement these solutions and fueled my ability
          to deliver UX solutions that make a real impact.
        </motion.p>

        <div
          data-scroll
          data-scroll-speed={0.1}
          className="absolute bottom-0 right-0"
        >
          <div className="relative duration-3000 ease-rrEaseBtnHover active:scale-[0.25]">
            <ButtonWrapper className="relative flex h-[140px] w-[140px] cursor-pointer items-center justify-center rounded-full bg-rrDark font-[700] text-white dark:bg-primary md:h-[200px] md:w-[200px]">
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
  );
}
