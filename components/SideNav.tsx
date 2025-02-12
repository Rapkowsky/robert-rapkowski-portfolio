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
      className="fixed right-0 top-0 z-30 h-screen w-[600px] bg-rrGray text-white"
    >
      <div className="box-border flex h-full flex-col justify-between p-5">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="flex flex-col gap-[12px] text-[56px]"
        >
          <div className="border-rrGrayBorder text-rrGrayText mb-10 mt-24 border-b pb-10 text-[11px] uppercase">
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
        <div className="w-ful flex w-[300px] items-center justify-between gap-[40px] text-[12px]">
          <div className="flex flex-col gap-[10px]">
            <p className="text-rrGrayText m-0 font-light hover:after:w-full">
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
