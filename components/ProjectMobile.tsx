import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const imageVariants = {
  hidden: { y: 60, opacity: 0.75, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { ease: [0.25, 1, 0.5, 1], duration: 2.5 },
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
  color: string;
  colorDark: string;
  link: string;
};

export const ProjectMobile = ({
  title,
  scope,
  year,
  src,
  color,
  colorDark,
  link,
}: ProjectMobileProps) => {
  return (
    <Link href={link}>
      <div className="mb-20">
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
        >
          <div
            className={`mb-6 px-7 py-20 duration-500 ease-rrSmooth dark:px-0 dark:py-0 md:mb-12 ${color} ${colorDark}`}
          >
            <Image
              src={`/images/${src}`}
              width={0}
              height={0}
              sizes="(max-width: 500px) 100vw, 500px"
              alt="Project image"
              className="w-full"
            />
          </div>
        </motion.div>

        <motion.p
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          className="text-2xl uppercase text-rrDark dark:text-white md:text-4xl"
        >
          {title}
        </motion.p>

        <motion.div
          variants={dividerVariants}
          initial="hidden"
          whileInView="visible"
          className="my-3 h-[1px] bg-grayLight dark:bg-rrGrayBorder"
        />

        <div className="flex justify-between text-end text-sm uppercase text-rrGrayText">
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
    </Link>
  );
};
