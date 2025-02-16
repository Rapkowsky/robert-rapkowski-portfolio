import { motion } from "framer-motion";
import Image from "next/image";

const imageVariants = {
  hidden: { y: 60, opacity: 0.75, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { ease: [0.25, 1, 0.5, 1], duration: 1.5 },
  },
};

const titleVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { ease: [0.5, 1, 0.89, 1], duration: 0.75 },
  },
};

const dividerVariants = {
  hidden: { width: "0%" },
  visible: {
    width: "100%",
    transition: { ease: [0.5, 1, 0.89, 1], duration: 0.8, delay: 0.75 },
  },
};

const scopeVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { ease: [0.5, 1, 0.89, 1], duration: 0.75, delay: 0.3 },
  },
};

const yearVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { ease: [0.5, 1, 0.89, 1], duration: 0.75, delay: 1.5 },
  },
};

type ProjectMobileProps = {
  title: string;
  year: string;
  scope: string;
  idx: number;
  src: string;
};

export const ProjectMobile = ({
  title,
  scope,
  year,
  src,
}: ProjectMobileProps) => {
  return (
    <div className="mb-20">
      <motion.div
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
      >
        <Image
          src={`/images/${src}`}
          width={0}
          height={0}
          sizes="(max-width: 500px) 100vw, 500px"
          alt="Project image"
          className="mb-6 h-auto w-full"
        />
      </motion.div>

      <motion.p
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        className="text-2xl uppercase text-rrDark dark:text-white"
      >
        {title}
      </motion.p>

      <motion.div
        variants={dividerVariants}
        initial="hidden"
        whileInView="visible"
        className="bg-grayLight my-3 h-[1px] dark:bg-rrGrayBorder"
      />

      <div className="flex justify-between text-end text-sm uppercase text-zinc-500">
        <motion.p
          variants={scopeVariants}
          initial="hidden"
          whileInView="visible"
          className="text-sm uppercase"
        >
          {scope}
        </motion.p>
        <motion.p
          variants={yearVariants}
          initial="hidden"
          whileInView="visible"
        >
          {year}
        </motion.p>
      </div>
    </div>
  );
};
