import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

const slider1 = [
  {
    color: "#F3F4F6",
    src: "petsoft.png",
  },
  {
    color: "#F9FAFB",
    src: "portfolioFooter.png",
  },
  {
    color: "#E5E7EB",
    src: "portfolio.png",
  },
  {
    color: "#D1D5DB",
    src: "mat.png",
  },
];

const slider2 = [
  {
    color: "#def0eb",
    src: "petsoft.png",
  },
  {
    color: "#D6D6D6",
    src: "portfolioProjects.png",
  },
  {
    color: "#CFCFCF",
    src: "matContact.png",
  },
  {
    color: "#CFCFCF",
    src: "matContact.png",
  },
];

export default function SlidingImages() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 700]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -700]);
  const height = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <div
      ref={container}
      className="relative z-[1] flex flex-col items-center justify-center bg-white duration-500 ease-rrSmooth dark:bg-rrDark"
    >
      <motion.div
        style={{ x: x1 }}
        className="relative left-[-50vw] mb-[5vw] flex w-[200vw] gap-[5vw]"
      >
        {slider1.map((project, i) => {
          return (
            <div
              key={i}
              className="flex h-[30vw] w-1/4 items-center justify-center duration-500 ease-rrSmooth"
              style={{ backgroundColor: project.color }}
            >
              <div
                key={i}
                className="relative h-[80%] w-[90%] duration-500 ease-rrSmooth dark:h-full dark:w-full"
              >
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${project.src}`}
                  className="object-cover object-top"
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className="relative right-[-50vw] flex w-[200vw] gap-[5vw] pb-yMobile md:pb-yTablet lg:pb-yDesktop"
      >
        {slider2.map((project, i) => {
          return (
            <div
              key={i}
              className="flex h-[30vw] w-1/4 items-center justify-center duration-500 ease-rrSmooth"
              style={{ backgroundColor: project.color }}
            >
              <div
                key={i}
                className="relative h-[80%] w-[90%] duration-500 ease-rrSmooth dark:h-full dark:w-full"
              >
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${project.src}`}
                  className="object-cover object-top"
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ height }} className="relative w-full">
        <div className="absolute left-[-10%] z-[1] h-[1600%] w-[120%] rounded-bl-[50%] rounded-br-[50%] rounded-tl-none rounded-tr-none bg-white duration-500 ease-rrSmooth dark:bg-rrDark"></div>
      </motion.div>
    </div>
  );
}
