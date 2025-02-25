import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TitleProps {
  text: string;
  className?: string;
}

const Title = ({ text, className }: TitleProps) => {
  return (
    <motion.h1
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 2, ease: [0.7, 0, 0.2, 1] }}
      className={cn(
        "mb-24 self-start text-[min(16vw,60px)] font-semibold uppercase leading-[1.1] text-rrDark will-change-transform dark:text-white md:mb-40 md:text-8xl xl:text-9xl",
        className,
      )}
    >
      {text}
    </motion.h1>
  );
};

export default Title;
