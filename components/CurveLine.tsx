import React from "react";
import { motion } from "framer-motion";
import { mainAnim } from "@/lib/Animations";

export default function CurveLine() {
  const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`;

  const curve = {
    initial: {
      d: initialPath,
      z: 0,
    },
    enter: {
      z: 0,
      d: targetPath,
      transition: { duration: 1.15, ease: mainAnim },
    },
    exit: {
      z: 0,
      d: initialPath,
      transition: { duration: 0.8, ease: mainAnim },
    },
  };

  return (
    <svg className="absolute left-[-99px] top-0 h-full w-[100px] fill-rrGray stroke-none">
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
        style={{ transform: "translateZ(0)" }}
      ></motion.path>
    </svg>
  );
}
