import React, { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface NumbersProps {
  className?: string;
}

export const Numbers = ({ className }: NumbersProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "700px end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["-10%", "101%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={container}
      className={cn(
        "flex flex-col items-center justify-center md:flex-row",
        className,
      )}
    >
      <Stat
        num={10}
        suffix=" +"
        subheading="Years of experience in the IT industry"
        x={x}
      />
      <Divider opacity={opacity} />
      <Stat
        num={100}
        suffix=" +"
        subheading="Developed responsive web application interfaces"
        x={x}
      />
      <Divider opacity={opacity} />
      <Stat
        num={3}
        suffix=" +"
        subheading="Years of professional experience as a Frontend Developer"
        x={x}
      />
    </motion.div>
  );
};

interface Props {
  num: number;
  suffix: string;
  decimals?: number;
  subheading: string;
  x: MotionValue<string>;
}

const Stat = ({ num, suffix, decimals = 0, subheading, x }: Props) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    setHasAnimated(true);

    animate(0, num, {
      duration: 2,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView, hasAnimated]);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const isWrapperInView = useInView(wrapperRef, {
    margin: "200px 0px",
  });
  return (
    <div
      ref={wrapperRef}
      className="text-rrDark relative flex w-full max-w-[500px] flex-col items-center overflow-hidden py-14 dark:text-white md:py-0"
    >
      <motion.div
        style={{ x, willChange: isWrapperInView ? "transform" : undefined }}
        className="pointer-events-none absolute inset-0 z-0 w-[100%] cursor-none bg-[linear-gradient(90deg,_#fff0,_white_25%)] dark:bg-[linear-gradient(90deg,_#fff0,_black_25%)]"
      ></motion.div>
      <p className="mb-2 text-center text-7xl font-semibold md:text-6xl lg:text-8xl">
        <span ref={ref}></span>
        {suffix}
      </p>
      <p className="max-w-[240px] text-center">{subheading}</p>
    </div>
  );
};

interface DividerProps {
  opacity: MotionValue<number>;
}

const Divider = ({ opacity }: DividerProps) => {
  return (
    <motion.div
      style={{ opacity }}
      className="h-[1px] w-12 bg-primary md:h-12 md:w-[1px]"
    />
  );
};
