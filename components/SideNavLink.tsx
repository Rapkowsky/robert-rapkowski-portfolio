import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "@/lib/Animations";
import MagneticWrapper from "./MagneticWrapper";

type LinkProps = {
  data: {
    title: string;
    href: string;
    index: number;
  };
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
};

export default function SideNavLink({
  data,
  isActive,
  setSelectedIndicator,
}: LinkProps) {
  const { title, href, index } = data;

  return (
    <MagneticWrapper>
      <motion.div
        className="relative ml-[30px] flex w-fit items-center"
        onMouseEnter={() => {
          setSelectedIndicator(href);
        }}
        custom={index}
        variants={slide}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <motion.div
          variants={scale}
          animate={isActive ? "open" : "closed"}
          className="pointer-events-none absolute left-[-30px] h-[10px] w-[10px] rounded-full bg-white"
        ></motion.div>
        <Link href={href} className="font-light text-white no-underline">
          {title}
        </Link>
      </motion.div>
    </MagneticWrapper>
  );
}
