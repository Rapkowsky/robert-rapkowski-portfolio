import { cn } from "@/lib/utils";
import React from "react";
import { cva } from "class-variance-authority";

interface TitleProps {
  text: string;
  className?: string;
  variant?: "default" | "gradientColor";
}

const titleVariants = cva(
  "mb-28 self-start text-center text-[min(10vw,100px)] font-semibold uppercase leading-[1.1] tracking-wider md:mb-40",
  {
    variants: {
      variant: {
        default: "",
        gradientColor: "bg-textGradient bg-clip-text text-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Title = ({ text, className, variant, ...props }: TitleProps) => {
  return (
    <h2 {...props} className={cn(titleVariants({ variant }), className)}>
      {text}
    </h2>
  );
};

export default Title;
