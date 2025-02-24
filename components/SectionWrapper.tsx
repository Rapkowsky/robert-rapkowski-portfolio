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
    <section className="bg-white duration-500 ease-rrSmooth dark:bg-rrDark">
      <div
        className={cn(
          "mx-auto w-full max-w-[1600px] px-xMobile py-yMobile pt-0 min-[500px]:px-px500 min-[500px]:pb-yMobile md:px-xTablet md:py-yTablet md:pt-0 lg:py-yDesktop lg:pt-0",
          className,
        )}
      >
        {children}
      </div>
    </section>
  );
}
