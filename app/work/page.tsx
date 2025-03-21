"use client";
import PageWrapper from "@/components/PageWrapper";
import ProjectsSection from "@/components/ProjectsSection";
import SectionWrapper from "@/components/SectionWrapper";
import { ScrollToTop, SmoothScroll } from "@/lib/utils";

const page = () => {
  ScrollToTop();
  SmoothScroll();
  return (
    <PageWrapper className="">
      <SectionWrapper className="!pb-0">
        <div className="flex min-h-screen flex-col justify-center">
          <ProjectsSection />
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
};

export default page;
