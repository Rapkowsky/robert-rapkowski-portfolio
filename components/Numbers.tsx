import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

export const Numbers = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col items-center justify-center md:flex-row">
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
    </SectionWrapper>
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
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className="flex w-full max-w-[500px] flex-col items-center py-14 text-rrDark dark:text-white md:py-0">
      <p className="mb-2 text-center text-7xl font-semibold md:text-6xl lg:text-8xl">
        <span ref={ref}></span>
        {suffix}
      </p>
      <p className="max-w-36 text-center xl:max-w-44 xl:text-xl">
        {subheading}
      </p>
    </div>
  );
};

const Divider = () => {
  return (
    <div className="h-[1px] w-12 bg-grayLight dark:bg-primary md:h-12 md:w-[1px]" />
  );
};
