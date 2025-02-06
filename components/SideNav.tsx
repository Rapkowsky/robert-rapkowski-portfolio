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
      className="fixed right-0 top-0 z-30 h-screen bg-rrGray text-white"
    >
      <div className="box-border flex h-full flex-col justify-between px-[200px] py-[100px]">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="mt-[80px] flex flex-col gap-[12px] text-[56px]"
        >
          <div className="mb-20 border-b border-rrGrayLight pb-10 text-[11px] uppercase text-rrGrayLight">
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
            <p className="m-0 font-light text-rrGrayLight hover:after:w-full">
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
