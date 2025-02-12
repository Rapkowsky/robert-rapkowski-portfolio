import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "@/lib/Animations";
import SideNavLink from "@/components/SideNavLink";
import Curve from "./Curve";
import ThemeToggle from "./ThemeToggle";
import StandardLink from "./StandardLink";

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
      className="duration-800 fixed right-0 top-0 z-30 h-screen w-screen max-w-[800px] bg-rrGray text-white transition-[width] ease-rrEaseBtnHover will-change-transform min-[500px]:w-[70%]"
    >
      <div className="duration-800 box-border flex h-full flex-col justify-between px-5 py-8 transition-[padding] ease-rrEaseBtnHover min-[500px]:px-10 min-[500px]:py-10 lg:px-52 lg:py-36">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="flex flex-col gap-[12px] text-[56px]"
        >
          <div className="border-rrGrayBorder text-rrGrayText mb-10 mt-24 border-b pb-10 text-xs uppercase">
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <SideNavLink
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></SideNavLink>
            );
          })}
        </div>
        <div className="w-ful border-rrGrayBorder flex w-full items-center justify-between border-t pt-10">
          <div className="flex flex-col gap-[10px]">
            <p className="text-rrGrayText m-0 text-xs font-light hover:after:w-full">
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
      <Curve />
    </motion.div>
  );
}
