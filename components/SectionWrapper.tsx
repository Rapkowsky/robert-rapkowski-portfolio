import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  bgWrapperColor?: string;
}

export default function SectionWrapper({
  children,
  className,
  bgWrapperColor,
}: SectionWrapperProps) {
  return (
    <section className={cn("", bgWrapperColor)}>
      <div
        className={cn(
          "mx-auto w-full max-w-[1600px] px-xMobile py-yMobile min-[500px]:px-px500 md:px-xTablet md:py-yTablet xl:px-xDesktop xl:py-yDesktop",
          className,
        )}
      >
        {children}
      </div>
    </section>
  );
}
