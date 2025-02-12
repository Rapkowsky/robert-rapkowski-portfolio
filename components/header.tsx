"use client";
import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import BurgerButton from "./BurgerButton";
import MagneticWrapper from "./MagneticWrapper";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import StandardNav from "./StandardNav";

export default function Header() {
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

  return (
    <>
      <div
        ref={headerRef}
        className={cn(
          "absolute z-[1] flex w-fit flex-col gap-5 px-5 py-10 font-light text-rrDark dark:text-white lg:justify-between xl:p-[35px]",
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
        <StandardNav />
      </div>
      <BurgerButton
        isActive={isActive}
        setIsActive={setIsActive}
        className="scale-1 lg:hidden"
      />
      <BurgerButton
        className="hidden lg:block"
        ref={BurgerButtonRef}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </>
  );
}
