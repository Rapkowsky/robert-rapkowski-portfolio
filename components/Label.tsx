import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
// const cubicSlideUp = [0.45, 0, 0.55, 1];
const main = [0.7, 0, 0.2, 1];

const elementSlideUp = {
  exit: {
    y: 100,
    opacity: 0,
    transition: { duration: 1, ease: main },
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: main },
  },
};

interface LabelProps {
  text: string;
  className?: string;
}

const Label = ({ text, className }: LabelProps) => {
  const header = useRef(null);
  const isInView = useInView(header, { once: true });
  return (
    <motion.p
      ref={header}
      initial="exit"
      variants={elementSlideUp}
      animate={isInView ? "enter" : "exit"}
      className={cn(
        "mb-20 self-start text-xs uppercase text-rrGrayText will-change-transform",
        className,
      )}
    >
      {text}
    </motion.p>
  );
};

export default Label;
