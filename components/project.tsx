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
      className="group flex w-full cursor-pointer items-center justify-between border-t border-[rgb(201,201,201)] px-[100px] py-[50px] transition duration-300 hover:opacity-50"
    >
      <h2 className="m-0 text-[90px] font-[500] transition-transform duration-300 group-hover:translate-x-[-30px]">
        {title}
      </h2>
      <p className="text-[19px] font-[300] transition-transform duration-300 group-hover:translate-x-[30px]">
        Design & Development
      </p>
    </div>
  );
}
