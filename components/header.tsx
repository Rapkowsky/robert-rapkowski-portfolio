"use client";
import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import BurgerButton from "./BurgerButton";
import ThemeToggle from "./ThemeToggle";

import StandardLink from "./StandardLink";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const header = useRef(null);
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

  return (
    <>
      <div
        ref={header}
        className="absolute top-0 z-[1] box-border flex w-full items-center justify-between p-[35px] font-light text-white"
      >
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

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <StandardLink variant="external">Work</StandardLink>
          <StandardLink variant="external">About</StandardLink>
          <StandardLink variant="external">Contact</StandardLink>
        </div>
      </div>
      <BurgerButton
        ref={BurgerButtonRef}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </>
  );
}
