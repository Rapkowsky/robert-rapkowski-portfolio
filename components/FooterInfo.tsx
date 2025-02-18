import React from "react";
import CurrentYear from "./CurrentYear";
import StandardLink from "./StandardLink";

const FooterInfo = () => {
  return (
    <section className="bg-rrDark">
      <div className="relative mx-auto flex max-w-[1900px] justify-between px-xMobile py-10">
        <div className="absolute left-[20px] top-0 h-[1px] w-[calc(100%-40px)] bg-rrGrayBorder md:hidden" />
        <div className="flex items-end gap-3">
          <span className="flex flex-col gap-3">
            <h3 className="m-0 text-xs font-light text-rrGrayText hover:after:w-full">
              VERSION
            </h3>

            <CurrentYear />
          </span>
        </div>
        <div className="flex flex-col gap-[10px]">
          <p className="m-0 text-xs font-light text-rrGrayText hover:after:w-full">
            SOCIALS
          </p>

          <div className="flex space-x-5 text-white">
            <StandardLink href="https://www.linkedin.com/in/robert-rapkowski/details/experience/?locale=en_US">
              Linkedin
            </StandardLink>
            <StandardLink>Instagram</StandardLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterInfo;
