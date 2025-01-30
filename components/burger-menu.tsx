"use client";
import { useState } from "react";

export default function BurgerMenu() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onClick={() => {
        setIsActive(!isActive);
      }}
      className="fixed right-0 top-0 z-10 m-[20px] flex h-[80px] w-[80px] cursor-pointer items-center justify-center rounded-full bg-[#455CE9]"
    >
      <div
        className={`relative w-full before:relative before:top-[5px] before:m-auto before:block before:h-[1px] before:w-[40%] before:bg-white before:transition-transform before:duration-500 before:ease-[cubic-bezier(0.25,1,0.5,1)] before:content-[''] after:relative after:top-[-5px] after:m-auto after:block after:h-[1px] after:w-[40%] after:bg-white after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.25,1,0.5,1)] after:content-[''] ${isActive ? "before:top-0 before:-rotate-45 after:top-[-1px] after:rotate-45" : ""}`}
      ></div>
    </div>
  );
}
