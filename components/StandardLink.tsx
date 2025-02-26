import React from "react";
import Link from "next/link";
import MagneticWrapper from "./MagneticWrapper";

interface StandardLinkProps {
  href?: string;
  children: React.ReactNode;
  variant?: "internal" | "external";
}

const StandardLink: React.FC<StandardLinkProps> = ({
  href = "/",
  children,
  variant = "internal",
}) => {
  if (variant === "external") {
    return (
      <MagneticWrapper>
        <Link
          href={href}
          className="group relative z-[1] flex cursor-pointer flex-col p-[15px] will-change-transform"
        >
          {children}
          <div className="absolute left-[50%] top-[45px] h-[5px] w-[5px] -translate-x-1/2 scale-0 rounded-full bg-white transition duration-400 ease-rrEaseBtnHover group-hover:scale-100"></div>
        </Link>
      </MagneticWrapper>
    );
  }

  return (
    <MagneticWrapper>
      <Link
        href={href}
        className="relative m-0 cursor-pointer after:absolute after:left-1/2 after:mt-[2px] after:block after:h-[1px] after:w-0 after:translate-x-[-50%] after:bg-white after:duration-400 after:ease-rrEaseBtnHover hover:after:w-full"
      >
        {children}
      </Link>
    </MagneticWrapper>
  );
};

export default StandardLink;
