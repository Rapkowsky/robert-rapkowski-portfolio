import React, { useEffect, useRef } from "react";
import { animate, motion, useInView } from "framer-motion";
import { mainAnim } from "@/lib/Animations";
import { cn } from "@/lib/utils";

interface NumbersProps {
  className?: string;
}

export const Numbers = ({ className }: NumbersProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center md:flex-row",
        className,
      )}
    >
      <Stat
        num={8}
        suffix=" +"
        subheading="Years of experience in the IT industry"
      />
      <Divider />
      <Stat num={500} suffix=" +" subheading="Coded landing pages" />
      <Divider />
      <Stat
        num={200}
        suffix=" +"
        subheading="Projects completed in the last year"
      />
    </div>
  );
};

interface Props {
  num: number;
  suffix: string;
  decimals?: number;
  subheading: string;
}

const Stat = ({ num, suffix, decimals = 0, subheading }: Props) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: mainAnim }}
      viewport={{ amount: 1 }}
      className="flex w-full max-w-[500px] flex-col items-center py-14 text-rrDark dark:text-white md:py-0"
    >
      <p className="mb-2 text-center text-7xl font-semibold md:text-6xl lg:text-8xl">
        <span ref={ref}></span>
        {suffix}
      </p>
      <p className="max-w-36 text-center xl:max-w-44">{subheading}</p>
    </motion.div>
  );
};

const Divider = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3.5, ease: mainAnim }}
      viewport={{ amount: 1 }}
      className="h-[1px] w-12 bg-grayLight dark:bg-primary md:h-12 md:w-[1px]"
    />
  );
};
