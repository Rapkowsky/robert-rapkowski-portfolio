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
      className={`group flex w-full cursor-pointer items-center justify-between ${
        index === 0 ? "border-t-[0.1px]" : ""
      } border-b-[0.1px] border-[#d7d7d8] px-[100px] py-[75px] text-[#b4b5b6] transition duration-300 hover:border-white`}
    >
      <h2 className="m-0 text-[90px] font-[400] transition-all duration-300 ease-rrSmooth group-hover:translate-x-[-30px] group-hover:text-[white]">
        {title}
      </h2>
      <p className="text-[19px] font-[300] transition-all duration-300 ease-rrSmooth group-hover:translate-x-[30px] group-hover:text-[white]">
        Design & Development
      </p>
    </div>
  );
}
