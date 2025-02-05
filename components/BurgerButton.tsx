"use client";
import { AnimatePresence, motion } from "framer-motion";
import { forwardRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import SideNavigation from "./SideNavigation";

type BurgerButtonProps = {
  isActive: boolean;
  setIsActive: (active: boolean) => void;
};

const BurgerButton = forwardRef<HTMLDivElement, BurgerButtonProps>(function (
  { isActive, setIsActive },
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
        className={`fixed right-0 top-0 z-50 m-[20px] flex h-[80px] w-[80px] scale-0 cursor-pointer items-center justify-center rounded-full transition-colors duration-1000 ease-rrEaseBurger ${isActive ? "bg-primary" : "bg-black dark:bg-[#1c1d20]"}`}
      >
        <div
          className={`w-full before:relative before:m-auto before:block before:h-[1px] before:w-[40%] before:bg-white before:transition-transform before:duration-500 before:ease-rrEaseBurgerLines before:content-[''] after:relative after:m-auto after:block after:h-[1px] after:w-[40%] after:bg-white after:transition-transform after:duration-500 after:ease-rrEaseBurgerLines after:content-[''] ${isActive ? "before:top-0 before:-rotate-45 after:top-[-1px] after:rotate-45" : "before:top-[5px] after:top-[-5px]"}`}
        ></div>
      </div>

      <AnimatePresence mode="wait">
        {isActive && (
          <>
            <SideNavigation />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.45, 0, 0.55, 1] }}
              className="fixed z-[20] h-screen w-screen bg-[linear-gradient(to_right,hsla(220,13%,0%,.3)_40%,hsla(220,13%,0%,1)_80%)]"
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
});
BurgerButton.displayName = "BurgerButton";
export default BurgerButton;
