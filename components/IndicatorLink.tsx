"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "@/lib/Animations";
import MagneticWrapper from "./MagneticWrapper";

type LinkProps = {
  data: {
    title: string;
    href: string;
    index: number;
  };
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
  variant?: "default" | "topNav";
};

export default function IndicatorLink({
  data,
  isActive,
  setSelectedIndicator,
  variant = "default",
}: LinkProps) {
  const { title, href, index } = data;

  if (variant === "topNav") {
    return (
      <MagneticWrapper>
        <motion.div
          className="relative flex w-fit px-5"
          onMouseEnter={() => setSelectedIndicator(href)}
          custom={index}
          variants={slide}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <motion.div
            variants={scale}
            animate={isActive ? "open" : "closed"}
            className="pointer-events-none absolute bottom-[-20px] left-1/2 h-1.5 w-1.5 rounded-full bg-white"
          />
          <div className="duration-500 ease-rrEaseButter active:scale-75">
            <Link href={href}>{title}</Link>
          </div>
        </motion.div>
      </MagneticWrapper>
    );
  }

  return (
    <MagneticWrapper>
      <motion.div
        className="relative ml-[30px] flex w-fit items-center transition-[margin] duration-800 ease-rrEaseBtnHover xl:ml-0"
        onMouseEnter={() => setSelectedIndicator(href)}
        custom={index}
        variants={slide}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <motion.div
          variants={scale}
          animate={isActive ? "open" : "closed"}
          className="pointer-events-none absolute left-[-30px] h-[10px] w-[10px] rounded-full bg-white"
        />

        <Link
          href={href}
          className="font-normal text-white no-underline duration-500 ease-rrEaseButter active:scale-75"
        >
          {title}
        </Link>
      </motion.div>
    </MagneticWrapper>
  );
}
