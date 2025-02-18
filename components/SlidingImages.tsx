import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

const slider1 = [
  {
    color: "black",
    src: "c2.jpg",
  },
  {
    color: "black",
    src: "decimal.jpg",
  },
  {
    color: "black",
    src: "funny.jpg",
  },
  {
    color: "black",
    src: "google.jpg",
  },
];

const slider2 = [
  {
    color: "black",
    src: "maven.jpg",
  },
  {
    color: "black",
    src: "panda.jpg",
  },
  {
    color: "black",
    src: "powell.jpg",
  },
  {
    color: "black",
    src: "wix.jpg",
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
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

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
              className="flex h-[36vw] w-1/4 items-center justify-center"
              style={{ backgroundColor: project.color }}
            >
              <div key={i} className="relative h-[80%] w-[80%]">
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${project.src}`}
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className="relative right-[-50vw] flex w-[200vw] gap-[5vw]"
      >
        {slider2.map((project, i) => {
          return (
            <div
              key={i}
              className="flex h-[36vw] w-1/4 items-center justify-center"
              style={{ backgroundColor: project.color }}
            >
              <div key={i} className="relative h-[80%] w-[80%]">
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ height }} className="bg:white relative w-full">
        <div className="absolute left-[-10%] z-[1] h-[1600%] w-[120%] rounded-bl-[50%] rounded-br-[50%] rounded-tl-none rounded-tr-none bg-white duration-500 ease-rrSmooth dark:bg-rrDark"></div>
      </motion.div>
    </div>
  );
}
