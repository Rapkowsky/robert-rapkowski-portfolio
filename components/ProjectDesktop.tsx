"use client";
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

export default function ProjectDesktop({
  index,
  title,
  link,
  setModal,
}: ProjectDesktopProps) {
  return (
    <Link href={link} className="w-full">
      <div
        onMouseEnter={() => {
          setModal({ active: true, index });
        }}
        onMouseLeave={() => {
          setModal({ active: false, index });
        }}
        className={`group flex w-full cursor-pointer items-center justify-between ${
          index === 0 ? "border-t-[0.1px]" : ""
        } border-b-[0.1px] border-rrGrayBorder px-[100px] py-[75px] duration-300 ease-rrEaseBtnHover dark:hover:border-white`}
      >
        <h2 className="m-0 text-7xl font-[400] uppercase text-rrDark duration-300 ease-rrEaseBtnHover group-hover:translate-x-[-30px] group-hover:text-rrGrayText dark:text-rrGrayText dark:group-hover:text-white xl:text-8xl">
          {title}
        </h2>
        <p className="text-[19px] font-[300] text-rrDark duration-300 ease-rrEaseBtnHover group-hover:translate-x-[30px] group-hover:text-rrGrayText dark:text-rrGrayText dark:group-hover:text-white">
          Design & Development
        </p>
      </div>
    </Link>
  );
}
