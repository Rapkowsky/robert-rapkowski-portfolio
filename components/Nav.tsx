"use client";
import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import BurgerButton from "./BurgerButton";
import MagneticWrapper from "./MagneticWrapper";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import TopNavLinks from "./TopNavLinks";
import useWindowResize from "./hooks/UseWindowResize";
import Clock from "./Clock";

export default function Nav() {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);
  const headerRef = useRef(null);
  const BurgerButtonRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(BurgerButtonRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: 68,
        onLeave: () => {
          gsap.to(BurgerButtonRef.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(BurgerButtonRef.current, {
            scale: 0,
            duration: 0.25,
            ease: "power1.out",
          });
          setIsActive(false);
        },
      },
    });
  }, []);

  const { width } = useWindowResize();
  const isMobile = width < 1024;

  return (
    <>
      <div
        ref={headerRef}
        className={cn(
          "text-rrDark absolute z-[3] flex w-fit flex-col gap-5 px-5 py-10 font-light dark:text-white md:w-full md:flex-row md:justify-between xl:p-[35px]",
          { "text-white": pathname === "/" },
        )}
      >
        <MagneticWrapper>
          <Link href="/">
            <div className="group flex cursor-pointer">
              <p className="m-0 duration-500 ease-rrSmooth group-hover:rotate-[360deg]">
                ©
              </p>
              <div className="relative ml-[5px] flex overflow-hidden whitespace-nowrap">
                <p className="pr-[5px] duration-500 ease-rrSmooth group-hover:translate-x-[-65px]">
                  Code by
                </p>
                <p className="duration-500 ease-rrSmooth group-hover:translate-x-[-65px] group-hover:pr-[30px]">
                  Robert
                </p>
                <p className="absolute left-[120px] duration-500 ease-rrSmooth group-hover:translate-x-[-65px]">
                  Rapkowski
                </p>
              </div>
            </div>
          </Link>
        </MagneticWrapper>
        <div className="flex items-center">
          <TopNavLinks />
          <Clock />
        </div>
      </div>
      <BurgerButton
        isActive={isActive}
        setIsActive={setIsActive}
        className={`${isMobile ? "scale-1 lg:hidden" : "hidden lg:block"}`}
        {...(!isMobile && { ref: BurgerButtonRef })}
      />
      <AnimatePresence mode="wait">
        {isActive && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.7, 0, 0.2, 1] }}
              className="fixed z-20 h-full w-full bg-[linear-gradient(to_right,hsla(220,13%,0%,.3)_40%,hsla(220,13%,0%,1)_80%)] opacity-0 ease-rrEaseBtnHover"
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
