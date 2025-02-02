"use client";
import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import BurgerMenu from "./BurgerMenu";
import Magnetic from "./Magnetic";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const header = useRef(null);
  const burgerMenuRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(burgerMenuRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        // Visible right after header nav
        // end: 68,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(burgerMenuRef.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(burgerMenuRef.current, {
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

        <div className="flex items-center">
          <Magnetic>
            <div className="group relative z-[1] flex cursor-pointer flex-col p-[15px]">
              <a className="cursor-pointer">Work</a>
              <div className="absolute left-[50%] top-[45px] h-[5px] w-[5px] -translate-x-1/2 scale-0 rounded-full bg-white transition duration-300 ease-rrSmooth group-hover:scale-100"></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className="group relative z-[1] flex cursor-pointer flex-col p-[15px]">
              <a className="cursor-pointer">About</a>
              <div className="absolute left-[50%] top-[45px] h-[5px] w-[5px] -translate-x-1/2 scale-0 rounded-full bg-white transition duration-300 ease-rrSmooth group-hover:scale-100"></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className="group relative z-[1] flex cursor-pointer flex-col p-[15px]">
              <a className="cursor-pointer">Contact</a>
              <div className="absolute left-[50%] top-[45px] h-[5px] w-[5px] -translate-x-1/2 scale-0 rounded-full bg-white transition duration-300 ease-rrSmooth group-hover:scale-100"></div>
            </div>
          </Magnetic>
        </div>
      </div>
      <BurgerMenu
        ref={burgerMenuRef}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </>
  );
}
