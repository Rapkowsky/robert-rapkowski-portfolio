"use client";
import SectionWrapper from "@/components/SectionWrapper";
import Title from "@/components/Title";
import { ScrollToTop } from "@/lib/utils";

const page = () => {
  ScrollToTop();
  return (
    <SectionWrapper className="!py-0">
      <div className="flex h-screen flex-col justify-center">
        <Title
          text="The full content on this page will be live by the end of 19.03.2025."
          className="mx-auto !mb-5 w-full max-w-[500px] text-center text-2xl md:text-4xl xl:text-3xl"
        />
        <Title
          text="Thank you for your understanding!"
          className="mx-auto !mb-0 w-full max-w-[500px] text-center text-2xl md:text-4xl xl:text-3xl"
        />
      </div>
    </SectionWrapper>
  );
};

export default page;
