"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

type ModalState = {
  active: boolean;
  index: number;
};

type ProjectDesktopProps = {
  index: number;
  title: string;
  link: string;
  setModal: (state: ModalState) => void;
};

const titleVariants = {
  hidden: { y: 200 },
  visible: {
    y: 0,
    transition: { ease: [0.5, 1, 0.89, 1], duration: 0.75 },
  },
};

export default function ProjectDesktop({
  index,
  title,
  link,
  setModal,
}: ProjectDesktopProps) {
  return (
    <Link href={link} className="w-full">
      <motion.div
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        onMouseEnter={() => {
          setModal({ active: true, index });
        }}
        onMouseLeave={() => {
          setModal({ active: false, index });
        }}
        className={`group flex w-full cursor-pointer items-center justify-between ${
          index === 0 ? "border-t-[1px]" : ""
        } border-b-[1px] border-grayLight px-[80px] py-20 duration-300 ease-rrEaseBtnHover dark:border-border dark:hover:border-white xl:px-xDesktop xl:py-24`}
      >
        <h2 className="m-0 text-7xl font-[400] uppercase text-rrDark duration-300 ease-rrEaseBtnHover group-hover:translate-x-[-30px] group-hover:text-rrGrayText dark:text-rrGrayText dark:group-hover:text-white xl:text-8xl">
          {title}
        </h2>
        <p className="text-[19px] font-[300] text-rrDark duration-300 ease-rrEaseBtnHover group-hover:translate-x-[30px] group-hover:text-rrGrayText dark:text-rrGrayText dark:group-hover:text-white">
          Design & Development
        </p>
      </motion.div>
    </Link>
  );
}
