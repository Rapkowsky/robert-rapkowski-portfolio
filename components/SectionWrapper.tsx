import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section
      className={cn(
        "md:px-xTablet md:py-yTablet lg:py-yDesktop px-xMobile py-yMobile min-[500px]:px-px500 min-[500px]:pb-yMobile mx-auto pb-52 pt-0 max-[374px]:pb-52 md:pt-0 lg:pt-0",
        className,
      )}
    >
      {children}
    </section>
  );
}
