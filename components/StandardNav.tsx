import React from "react";
import StandardLink from "./StandardLink";
import ThemeToggle from "./ThemeToggle";

const StandardNav = () => {
  return (
    <div className="hidden items-center gap-2 md:flex">
      <ThemeToggle />
      <StandardLink variant="external">Work</StandardLink>
      <StandardLink variant="external">About</StandardLink>
      <StandardLink href="/contact" variant="external">
        Contact
      </StandardLink>
    </div>
  );
};

export default StandardNav;
