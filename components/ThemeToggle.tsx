"use client";
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
        className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-white border-opacity-40 bg-white bg-opacity-10 shadow-2xl backdrop-blur-[4px] duration-300 ease-rrSmooth hover:scale-[1.1] active:scale-105 dark:bg-gray-950"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <BsSun /> : <BsMoon />}
      </button>
    )
  );
}
