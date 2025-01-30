"use client";
import React from "react";

type ModalState = {
  active: boolean;
  index: number;
};

type ProjectProps = {
  index: number;
  title: string;
  setModal: (state: ModalState) => void;
};

export default function Project({ index, title, setModal }: ProjectProps) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="group flex w-full cursor-pointer items-center justify-between border-t border-[#d7d7d8] px-[100px] py-[50px] transition duration-300"
    >
      <h2 className="m-0 text-[90px] font-[500] transition-all duration-300 group-hover:translate-x-[-30px] group-hover:text-[#b4b5b6]">
        {title}
      </h2>
      <p className="text-[19px] font-[300] transition-all duration-300 group-hover:translate-x-[30px] group-hover:text-[#b4b5b6]">
        Design & Development
      </p>
    </div>
  );
}
