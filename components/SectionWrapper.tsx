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
        "mx-auto bg-white px-xMobile py-yMobile pb-52 pt-0 duration-500 ease-rrSmooth dark:bg-rrDark max-[374px]:pb-52 min-[500px]:px-px500 min-[500px]:pb-yMobile md:px-xTablet md:py-yTablet md:pt-0 lg:py-yDesktop lg:pt-0",
        className,
      )}
    >
      {children}
    </section>
  );
}
