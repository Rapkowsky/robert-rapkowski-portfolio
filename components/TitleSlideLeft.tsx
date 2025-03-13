import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { easefadeInUp } from "@/lib/Animations";

interface TitleSlideLeftProps {
  text: string;
  titleClassName?: string;
  gradientAngle?: string;
  gradientLightColor?: string;
  gradientWidth?: string;
  variant?: "white" | "gray";
  animateAutomatically?: boolean;
}

const TitleSlideLeft = ({
  text,
  titleClassName,
  gradientWidth = "150%",
  variant = "white",
  animateAutomatically = false,
}: TitleSlideLeftProps) => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["0.3 end", "1000px end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["-25%", "101%"]);

  const gradientClasses = {
    white: "bg-[linear-gradient(90deg,_#fff0,_white_25%)]",
    gray: "bg-[linear-gradient(90deg,_#fff0,_#f5f5f7_25%)]",
  }[variant];

  const autoAnimationProps = {
    initial: { x: "-25%" },
    animate: { x: "101%" },
    transition: { duration: 2, ease: easefadeInUp },
    style: { width: gradientWidth },
  };

  return (
    <div className="relative overflow-hidden" ref={container}>
      {animateAutomatically ? (
        <motion.div
          {...autoAnimationProps}
          className={`pointer-events-none absolute inset-0 z-[1] cursor-none ${gradientClasses} dark:bg-[linear-gradient(90deg,_#fff0,_black_25%)]`}
        />
      ) : (
        <motion.div
          style={{ x, width: gradientWidth }}
          className={`pointer-events-none absolute inset-0 z-[1] cursor-none ${gradientClasses} dark:bg-[linear-gradient(90deg,_#fff0,_black_25%)]`}
        />
      )}
      <h1
        className={cn(
          "mb-28 self-start text-center text-[min(16vw,60px)] font-semibold uppercase leading-[1.1] tracking-wider text-rrDark dark:text-white md:mb-40 md:text-8xl xl:text-9xl",
          titleClassName,
        )}
      >
        {text}
      </h1>
    </div>
  );
};

export default TitleSlideLeft;
