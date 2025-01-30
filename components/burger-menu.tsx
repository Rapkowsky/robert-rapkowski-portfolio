"use client";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navigation from "./navigation";

export default function BurgerMenu() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setIsActive(!isActive);
          console.log(isActive);
        }}
        className="bg-main fixed right-0 top-0 z-10 m-[20px] flex h-[80px] w-[80px] cursor-pointer items-center justify-center rounded-full"
      >
        <div
          className={`w-full before:relative before:m-auto before:block before:h-[1px] before:w-[40%] before:bg-white before:transition-transform before:duration-500 before:ease-[cubic-bezier(0.25,1,0.5,1)] before:content-[''] after:relative after:m-auto after:block after:h-[1px] after:w-[40%] after:bg-white after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.25,1,0.5,1)] after:content-[''] ${isActive ? "before:top-0 before:-rotate-45 after:top-[-1px] after:rotate-45" : "before:top-[5px] after:top-[-5px]"}`}
        ></div>
      </div>

      <AnimatePresence mode="wait">
        {isActive && <Navigation />}
      </AnimatePresence>
    </>
  );
}
