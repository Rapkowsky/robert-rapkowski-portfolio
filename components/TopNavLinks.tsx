import React, { useEffect, useState } from "react";

import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";
import IndicatorLink from "./IndicatorLink";

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

const TopNavLinks = () => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  useEffect(() => {
    setSelectedIndicator(pathname);
  }, [pathname]);
  return (
    <div className="hidden items-center pr-[115px] lg:flex">
      <div className="mr-5">
        <ThemeToggle />
      </div>
      {navItems.map((data, index) => {
        return (
          <div
            key={index}
            onMouseLeave={() => {
              setSelectedIndicator(pathname);
            }}
          >
            <IndicatorLink
              variant="topNav"
              data={{ ...data, index }}
              isActive={selectedIndicator == data.href}
              setSelectedIndicator={setSelectedIndicator}
            ></IndicatorLink>
          </div>
        );
      })}
    </div>
  );
};

export default TopNavLinks;
