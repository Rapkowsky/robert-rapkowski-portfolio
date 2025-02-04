"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <button
        className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white bg-opacity-10 dark:bg-black"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <AnimatePresence mode="wait">
          {theme === "light" ? (
            <motion.div
              key="sun"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3, ease: [0.45, 0, 0.55, 1] }}
            >
              <BsSun />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3, ease: [0.45, 0, 0.55, 1] }}
            >
              <BsMoon />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    )
  );
}
