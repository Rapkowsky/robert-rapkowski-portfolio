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
      className="md:px-pxTablet md:py-pyTablet lg:py-pyDesktop relative flex items-center justify-center bg-white px-pxMobile py-pyMobile pb-52 duration-500 ease-rrSmooth dark:bg-rrDark max-[374px]:pb-52 min-[500px]:px-[50px] min-[500px]:pb-pyMobile"
    >
      <div className="relative flex w-full max-w-[700px] flex-col gap-16 text-rrDark dark:text-white lg:max-w-[1200px] lg:flex-row lg:gap-32">
        <p className="flex max-w-[560px] flex-wrap gap-x-2 text-2xl !leading-[1.2] lg:max-w-full xl:text-4xl">
          {phrase.split(" ").map((word, index) => {
            return (
              <span
                className="relative inline-flex overflow-hidden"
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
        <div className="relative w-full">
          <motion.p
            className="max-w-[260px] font-[300] opacity-0 lg:max-w-full lg:pr-0 xl:text-xl"
            variants={opacity}
            animate={isInView ? "open" : "closed"}
          >
            Years of working with UX designers on diverse projects have
            sharpened my technical skills to implement these solutions and
            fueled my ability to deliver UX solutions that make a real impact.
          </motion.p>

          <div
            data-scroll
            data-scroll-speed={0.1}
            className="absolute bottom-[-130px] right-0 transition-all duration-800 ease-rrEaseBtnHover max-[374px]:bottom-[-100px] min-[500px]:bottom-0 lg:bottom-[-180px]"
          >
            <div className="relative duration-3000 ease-rrEaseBtnHover active:scale-[0.25]">
              <ButtonWrapper className="relative flex h-[150px] w-[150px] cursor-pointer items-center justify-center rounded-full bg-rrDark font-[700] text-white transition-[width_height] duration-800 ease-rrEaseBtnHover dark:bg-primary md:h-[170px] md:w-[170px] xl:h-[200px] xl:w-[200px]">
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
  );
}
