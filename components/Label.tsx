import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
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
  return (
    <motion.p
      initial="exit"
      variants={elementSlideUp}
      whileInView="enter"
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
