"use client";
import PageWrapper from "@/components/PageWrapper";
import SectionWrapper from "@/components/SectionWrapper";
import Title from "@/components/Title";
import { ScrollToTop, SmoothScroll } from "@/lib/utils";
import { InfoCard } from "@/components/InfoCard";
import Image from "next/image";
import petsoft from "@/public/zoofy.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ButtonWrapper from "@/components/ButtonWrapper";
import useWindowResize from "@/components/hooks/UseWindowResize";
import Link from "next/link";
// import portfolioPerformanceD from "@/public/portfolioPerformanceD.png";
// import portfolioPerformanceM from "@/public/portfolioPerformanceM.png";

const infoData = [
  { header: "Project Type", description: "Private" },
  { header: "Role / Services", description: ["Development", "Design"] },
  { header: "Year", description: "2025" },
  { header: "Technology", description: ["Next.js", "React", "Tailwind"] },
];

const Page = () => {
  return (
    <div>
      <Section1 />
      <ProjectDescription />
    </div>
  );
};

export default Page;

const Section1 = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  ScrollToTop();
  SmoothScroll();

  const windowSize = useWindowResize();
  const isMobile = windowSize.width < 768;
  const imageSrc = isMobile ? petsoft : petsoft;
  return (
    <div ref={container} className="min-h-screen">
      <PageWrapper className="">
        <SectionWrapper className="!pb-0">
          <div className="relative flex flex-col">
            <Title text="Zoofy" className="!m-0 text-left" />

            <div className="grid grid-cols-1 gap-10 pt-yMobile md:grid-cols-3 md:pt-yTablet lg:gap-20 xl:pt-yDesktop">
              {infoData.map((item, i) => (
                <div key={i}>
                  <InfoCard
                    header={item.header}
                    description={item.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="max-w-[1860px]">
          <div className="relative">
            <motion.div className="absolute inset-0 z-10 flex items-center justify-center will-change-transform">
              <div className="relative duration-3000 ease-rrEaseBtnHover active:scale-[0.25]">
                <ButtonWrapper className="relative flex h-[120px] w-[120px] cursor-pointer items-center justify-center rounded-full bg-bgDark font-medium text-white dark:bg-primary md:h-[170px] md:w-[170px] xl:h-[200px] xl:w-[200px]">
                  <Link
                    href="https://rr-zoofy.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-20 flex items-center justify-center"
                  >
                    Live site
                  </Link>
                </ButtonWrapper>
              </div>
            </motion.div>
            <div className="overflow-hidden bg-[#2e9677]">
              <motion.div
                style={{ y, willChange: "transform" }}
                className="relative will-change-transform"
              >
                <Image
                  src={imageSrc}
                  alt="Matuszewski Project image"
                  className="scale-[1.1]"
                />
              </motion.div>
            </div>
          </div>
        </SectionWrapper>
      </PageWrapper>
    </div>
  );
};

const ProjectDescription = () => {
  return (
    <SectionWrapper className="max-w-[1860px] !pt-0">
      <div className="prose prose-lg dark:prose-invert mx-auto max-w-4xl">
        <h1 className="mb-10 text-4xl font-bold">Project Description</h1>

        <Section>
          <p className="mb-8 text-lg">
            Zoofy is a full-stack web application designed to perform CRUD
            (Create, Read, Update, Delete) operations. Zoofy delivers a seamless
            and efficient user experience for managing data. Additionally, the
            application includes authentication functionality powered by
            NextAuth, enabling secure user login and session management.
          </p>
        </Section>

        <Section title="Features">
          <ul className="mb-10 list-disc space-y-3 pl-6">
            <li>User Registration: Create new user accounts.</li>
            <li>Authentication: Log in and log out securely using NextAuth.</li>
            <li>Payment System: Integrated payment functionality.</li>
            <li>
              Pet Management:
              <ul className="list-disc space-y-2 pl-6 pt-2">
                <li>Add a new pet to the database.</li>
                <li>Edit existing pet details.</li>
                <li>View the list of created pets.</li>
                <li>Delete pets from the database.</li>
              </ul>
            </li>
          </ul>
        </Section>

        <Section title="Technologies">
          <ul className="mb-10 grid list-disc grid-cols-1 gap-3 pl-6 md:grid-cols-2 md:items-start">
            <li>Next.js</li>
            <li>React</li>
            <li>Tailwind</li>
            <li>React Hook Form</li>
            <li>TypeScript</li>
            <li>Prisma</li>
            <li>Zod</li>
            <li>Shadcn</li>
          </ul>
        </Section>

        <Section title="User Authentication">
          <p className="mb-4 text-lg">
            To test the login functionality, create a new personal account or
            use the following credentials:
          </p>
          <div className="mb-10 rounded-md bg-gray-100 p-4 dark:bg-gray-800">
            <p className="mb-2 font-medium">Demo Login Credentials:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                <strong>Email:</strong> example@gmail.com
              </li>
              <li>
                <strong>Password:</strong> example
              </li>
            </ul>
          </div>
        </Section>

        <Section title="Running the Project">
          <pre className="mb-8 grid overflow-x-auto rounded-md bg-gray-100 p-4 dark:bg-gray-800">
            <code className="text-sm"># Install dependencies: npm install</code>{" "}
            <code className="text-sm">
              # Start the development server: npm run dev
            </code>
          </pre>
          <p className="mb-10 text-lg">
            Once started, the application will be available at{" "}
            <code className="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-800">
              http://localhost:3000
            </code>
            .
          </p>
        </Section>
      </div>
    </SectionWrapper>
  );
};

interface SectionProps {
  title?: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <div>
      {title && <h2 className="mb-6 mt-12 text-2xl font-semibold">{title}</h2>}
      {children}
    </div>
  );
};

// const performanceData = [
//   {
//     src: portfolioPerformanceD,
//     alt: "Matuszewski Performance",
//     className: "",
//   },
//   {
//     src: portfolioPerformanceM,
//     alt: "Matuszewski Performance",
//     className: "px-16 max-w-[300px] md:px-0  mx-auto justify-end",
//   },
// ];
// const Section2 = () => {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start end", "end start"],
//   });
//   const y = useTransform(scrollYProgress, [0, 1], [300, -300]);
//   return (
//     <div ref={container} className="from-black to-bgGray">
//       <SectionWrapper className="flex min-h-[100vh] items-center justify-center !pt-0">
//         <motion.div
//           style={{ y, willChange: "transform" }}
//           className="flex flex-col gap-20 md:flex-row"
//         >
//           {performanceData.map((item, index) => (
//             <div key={index} className={`flex flex-col ${item.className}`}>
//               <Image src={item.src} alt={item.alt} className="" />
//             </div>
//           ))}
//         </motion.div>
//       </SectionWrapper>
//     </div>
//   );
// };
