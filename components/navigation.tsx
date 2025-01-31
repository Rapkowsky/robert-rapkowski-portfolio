import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "@/lib/animations";
import LinkComponent from "@/components/LinkComponent";
import Curve from "./Curve";

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

export default function Navigation() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed right-0 top-0 z-30 h-screen bg-black text-white"
    >
      <div className="box-border flex h-full flex-col justify-between p-[100px]">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="mt-[80px] flex flex-col gap-[12px] text-[56px]"
        >
          <div className="mb-[40px] border-b border-[rgb(153,153,153)] text-[11px] uppercase text-[rgb(153,153,153)]">
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <LinkComponent
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></LinkComponent>
            );
          })}
        </div>
        <div className="flex w-full justify-between gap-[40px] text-[12px]">
          <a>Awwwards</a>
          <a>Instagram</a>
          <a>Dribble</a>
          <a>LinkedIn</a>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
