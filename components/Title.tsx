import { cn } from "@/lib/utils";
import React from "react";

interface TitleProps {
  text: string;
  className?: string;
}

const Title = ({ text, className }: TitleProps) => {
  return (
    <h1
      className={cn(
        "mb-28 self-start text-center text-[min(16vw,60px)] font-semibold uppercase leading-[1.1] tracking-wider text-rrDark dark:text-white md:mb-40 md:text-8xl xl:text-9xl",
        className,
      )}
    >
      {text}
    </h1>
  );
};

export default Title;
