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

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div
      ref={container}
      className="bg-rrDark relative z-[1] flex min-h-screen flex-col items-center justify-center gap-[3vw]"
    >
      <motion.div
        style={{ x: x1 }}
        className="relative left-[-10vw] flex w-[120vw] gap-[3vw]"
      >
        {slider1.map((project, index) => {
          return (
            <div
              key={index}
              className="flex h-[20vw] w-1/4 items-center justify-center"
              // style={{ backgroundColor: project.color }}
            >
              <div key={index} className="relative h-[80%] w-[80%]">
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
        className="relative left-[-10vw] flex w-[120vw] gap-[3vw]"
      >
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className="flex h-[20vw] w-1/4 items-center justify-center"
              // style={{ backgroundColor: project.color }}
            >
              <div key={index} className="relative h-[80%] w-[80%]">
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
      <motion.div style={{ height }} className="relative mt-[100px]">
        <div className="absolute left-[-10%] z-[1] h-[1550%] w-[120%] rounded-bl-[50%] rounded-br-[50%] rounded-tl-none rounded-tr-none bg-black shadow-[0px_60px_50px_rgba(0,0,0,0.748)]"></div>
      </motion.div>
    </div>
  );
}
