"use client";
import { AnimatePresence } from "framer-motion";
import { forwardRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import SideNav from "./SideNav";
import ButtonWrapper from "./ButtonWrapper";
import { cn } from "@/lib/utils";

type BurgerButtonProps = {
  isActive: boolean;
  setIsActive: (active: boolean) => void;
  className?: string;
};

const BurgerButton = forwardRef<HTMLDivElement, BurgerButtonProps>(function (
  { isActive, setIsActive, className },
  ref,
) {
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <>
      <div
        ref={ref}
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={cn(
          "fixed right-0 top-0 z-40 m-5 scale-0 md:m-10",
          className,
        )}
      >
        <ButtonWrapper className="">
          <div
            className={`relative inset-0 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border border-rrGrayBorder transition-colors duration-1000 ease-rrEaseBurger lg:h-24 lg:w-24 ${isActive ? "bg-primary" : "bg-rrDark dark:bg-rrGray"}`}
          >
            <div
              className={`z-20 w-full before:relative before:m-auto before:block before:h-[1px] before:w-[40%] before:bg-white before:transition-transform before:duration-500 before:ease-rrEaseBurgerLines before:content-[''] after:relative after:m-auto after:block after:h-[1px] after:w-[40%] after:bg-white after:transition-transform after:duration-500 after:ease-rrEaseBurgerLines after:content-[''] ${isActive ? "before:top-0 before:-rotate-45 after:top-[-1px] after:rotate-45" : "before:top-[5px] after:top-[-5px]"}`}
            ></div>
          </div>
        </ButtonWrapper>
      </div>

      <AnimatePresence mode="wait">{isActive && <SideNav />}</AnimatePresence>
    </>
  );
});
BurgerButton.displayName = "BurgerButton";
export default BurgerButton;
