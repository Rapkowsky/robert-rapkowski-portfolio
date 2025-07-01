import { useRef } from "react";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import Image from "next/image";

const slider1 = [
  {
    bgColor: "bg-[#F3F4F6] dark:bg-transparent",
    src: "zoofy.png",
  },
  {
    bgColor: "bg-[#F9FAFB] dark:bg-transparent",
    src: "portfolioFooter.png",
  },
  {
    bgColor: "bg-[#E5E7EB] dark:bg-transparent",
    src: "portfolio.png",
  },
  {
    bgColor: "bg-[#D1D5DB] dark:bg-transparent",
    src: "mat.png",
  },
];

const slider2 = [
  {
    bgColor: "bg-[#def0eb] dark:bg-transparent",
    src: "zoofy.png",
  },
  {
    bgColor: "bg-[#D6D6D6] dark:bg-transparent",
    src: "portfolioProjects.png",
  },
  {
    bgColor: "bg-[#CFCFCF] dark:bg-transparent",
    src: "movieApp.png",
  },
  {
    bgColor: "bg-[#CFCFCF] dark:bg-transparent",
    src: "devhub-bg-git.png",
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

  const isSlidingContainerInView = useInView(container, {
    margin: "200px 0px",
  });
  return (
    <div
      ref={container}
      className="relative z-[1] flex flex-col items-center justify-center overflow-hidden bg-white pt-yMobile duration-500 dark:bg-black md:pt-yTablet xl:pt-yDesktop"
    >
      <motion.div
        style={{ x: x1 }}
        className={`relative left-[-50vw] mb-[5vw] flex w-[350vw] gap-[5vw] md:w-[200vw] ${isSlidingContainerInView ? "will-change-transform" : ""}`}
      >
        {slider1.map((project, i) => {
          return (
            <div
              key={i}
              className={`flex h-[56vw] w-1/4 items-center justify-center md:h-[30vw] ${project.bgColor}`}
            >
              <div
                key={i}
                className="relative h-[80%] w-[90%] transition-[width,height] duration-500 dark:h-full dark:w-full"
              >
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/${project.src}`}
                  className="object-cover object-top"
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className={`relative right-[-50vw] flex w-[350vw] gap-[5vw] pb-yMobile md:w-[200vw] md:pb-yTablet lg:pb-yDesktop ${isSlidingContainerInView ? "will-change-transform" : ""}`}
      >
        {slider2.map((project, i) => {
          return (
            <div
              key={i}
              className={`flex h-[56vw] w-1/4 items-center justify-center md:h-[30vw] ${project.bgColor}`}
            >
              <div
                key={i}
                className="relative h-[80%] w-[90%] transition-[width,height] duration-500 dark:h-full dark:w-full"
              >
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/${project.src}`}
                  className="object-cover object-top"
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ height }} className="relative w-full">
        <div className="absolute left-[-10%] z-[1] h-[1600%] w-[120%] rounded-bl-[50%] rounded-br-[50%] rounded-tl-none rounded-tr-none bg-white duration-500 dark:bg-black"></div>
      </motion.div>
    </div>
  );
}
