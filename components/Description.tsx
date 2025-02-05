import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "@/lib/Animations";

import ButtonWrapper from "./ButtonWrapper";

export default function Description() {
  const phrase =
    "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
  const description = useRef(null);
  const isInView = useInView(description, { margin: "-150px" });
  return (
    <div
      ref={description}
      className="bg-bl mt-[200px] flex justify-center pl-[200px] pr-[200px] text-white"
    >
      <div className="relative flex max-w-[1400px] gap-[50px]">
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

        <div data-scroll data-scroll-speed={0.1}>
          <div className="relative duration-3000 ease-rrEaseBtnHover active:scale-[0.25]">
            <ButtonWrapper className="relative flex h-[200px] w-[200px] cursor-pointer items-center justify-center rounded-full bg-main font-[700] shadow-[0px_8px_200px_rgba(149,157,165,0.2)] shadow-black">
              <p className="z-10">About me</p>
            </ButtonWrapper>
            <div className="absolute left-[-230px] top-[90px] z-[-10] h-[390px] w-[590px] rounded-full bg-gradient-to-t from-main via-[#05367f] to-black blur-[200px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
