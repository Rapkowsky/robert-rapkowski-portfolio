"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Navigation from "./navigation";
import BurgerMenu from "./burger-menu";

export default function Header() {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(button.current, {
            scale: 0,
            duration: 0.25,
            ease: "power1.out",
          });
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
          <p className="group-hover:rotate-360 m-0 transition duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
            ©
          </p>
          <div className="relative ml-[5px] flex overflow-hidden whitespace-nowrap transition duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
            <p className="relative transition duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-[-100%]">
              Code by
            </p>
            <p className="pl-[0.3em] group-hover:translate-x-[-65px] group-hover:pr-[30px]">
              Dennis
            </p>
            <p className="absolute left-[120px] pl-[0.3em] group-hover:translate-x-[-65px]">
              Snellenberg
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="group relative z-[1] flex cursor-pointer flex-col p-[15px]">
            <a className="cursor-pointer">Work</a>
            <div className="absolute left-[50%] top-[45px] h-[5px] w-[5px] -translate-x-1/2 scale-0 rounded-full bg-white transition duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-100"></div>
          </div>
          <div className="group relative z-[1] flex cursor-pointer flex-col p-[15px]">
            <a className="cursor-pointer">About</a>
            <div className="absolute left-[50%] top-[45px] h-[5px] w-[5px] -translate-x-1/2 scale-0 rounded-full bg-white transition duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-100"></div>
          </div>
          <div className="group relative z-[1] flex cursor-pointer flex-col p-[15px]">
            <a className="cursor-pointer">Contact</a>
            <div className="absolute left-[50%] top-[45px] h-[5px] w-[5px] -translate-x-1/2 scale-0 rounded-full bg-white transition duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-100"></div>
          </div>
        </div>
      </div>
      <BurgerMenu />
      <AnimatePresence mode="wait">
        {isActive && <Navigation />}
      </AnimatePresence>
    </>
  );
}
