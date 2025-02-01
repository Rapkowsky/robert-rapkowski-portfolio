import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "@/lib/Animations";

export default function Description() {
  const phrase =
    "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div
      ref={description}
      className="mt-[200px] flex justify-center pl-[200px] pr-[200px]"
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
          className="w-[80%] text-[18px] font-[300]"
          variants={opacity}
          animate={isInView ? "open" : "closed"}
        >
          The combination of my passion for design, code & interaction positions
          me in a unique place in the web design world.
        </motion.p>
        <div data-scroll data-scroll-speed={0.1}>
          <div className="absolute left-[calc(100%-200px)] top-[80%] flex h-[180px] w-[180px] cursor-pointer items-center justify-center rounded-full bg-[#1C1D20] text-white">
            <p className="relative z-[1] m-0 text-[16px] font-[300]">
              About me
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
