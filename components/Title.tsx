import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { mainAnim } from "@/lib/Animations";

interface TitleProps {
  text: string;
  className?: string;
}

const Title = ({ text, className }: TitleProps) => {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2, ease: mainAnim }}
      viewport={{ amount: 1 }}
      className={cn(
        "mb-28 self-start text-[min(16vw,60px)] font-semibold uppercase leading-[1.1] text-rrDark will-change-[transform,opacity] dark:text-white md:mb-40 md:text-8xl xl:text-9xl tracking-wider",
        className,
      )}
    >
      {text}
    </motion.h1>
  );
};

export default Title;
