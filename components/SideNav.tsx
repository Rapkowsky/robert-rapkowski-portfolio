import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "@/lib/Animations";
import IndicatorLink from "@/components/IndicatorLink";

import ThemeToggle from "./ThemeToggle";
import StandardLink from "./StandardLink";
import CurveLine from "./CurveLine";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function SideNav() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed right-0 top-0 z-30 h-screen w-screen bg-rrGray text-white transition-[width] duration-800 ease-rrEaseBtnHover min-[500px]:w-[initial]"
    >
      <div className="box-border flex h-full flex-col justify-between px-5 pb-12 pt-8 transition-[padding] duration-800 ease-rrEaseBtnHover min-[500px]:p-[clamp(50px,10vh,140px)_70px] md:px-[clamp(70px,9vw,220px)]">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="flex flex-col text-[40px] leading-[1.1] md:text-[56px]"
        >
          <div className="mb-10 mt-20 border-b border-rrGrayBorder pb-10 text-xs uppercase text-rrGrayText">
            <p>Navigation</p>
          </div>
          <div className="flex flex-col gap-5 md:gap-9">
            {navItems.map((data, index) => {
              return (
                <IndicatorLink
                  key={index}
                  data={{ ...data, index }}
                  isActive={selectedIndicator == data.href}
                  setSelectedIndicator={setSelectedIndicator}
                ></IndicatorLink>
              );
            })}
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-rrGrayBorder pt-10 transition-[width] duration-800 ease-rrEaseBtnHover min-[500px]:w-[300px] md:w-[350px]">
          <div className="flex flex-col gap-[10px]">
            <p className="m-0 text-xs font-light text-rrGrayText hover:after:w-full">
              Socials
            </p>
            <div className="flex space-x-5">
              <StandardLink>LinkedIn</StandardLink>
              <StandardLink>Instagram</StandardLink>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
      <CurveLine />
    </motion.div>
  );
}
