import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "@/lib/Animations";

import ButtonWrapper from "./ButtonWrapper";
import Link from "next/link";

export default function Description() {
  const phrase =
    "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
  const description = useRef(null);
  const isInView = useInView(description, { margin: "-150px" });
  return (
    <div
      ref={description}
      className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-white px-[200px] duration-500 ease-rrSmooth dark:bg-rrDark"
    >
      <div className="relative flex max-w-[1400px] gap-[50px] text-rrDark dark:text-white">
        <p className="m-0 gap-[8px] text-[36px] leading-[1.3]">
          {phrase.split(" ").map((word, index) => {
            return (
              <span
                className="relative mr-[3px] inline-flex overflow-hidden"
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
          className="w-[80%] text-[18px] font-[300] opacity-0"
          variants={opacity}
          animate={isInView ? "open" : "closed"}
        >
          The combination of my passion for design, code & interaction positions
          me in a unique place in the web design world.
        </motion.p>

        <div data-scroll data-scroll-speed={0.1} className="will-change-auto">
          <div className="relative duration-3000 ease-rrEaseBtnHover active:scale-[0.25]">
            <ButtonWrapper className="relative flex h-[200px] w-[200px] cursor-pointer items-center justify-center rounded-full bg-rrDark font-[700] text-white dark:bg-primary">
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
