import { motion, useInView } from "framer-motion";
import { elementSlideUp } from "@/lib/Animations";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface LabelProps {
  text: string;
  className?: string;
}

const Label = ({ text, className }: LabelProps) => {
  const header = useRef(null);
  const isInView = useInView(header);
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
