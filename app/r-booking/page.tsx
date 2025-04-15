"use client";
import PageWrapper from "@/components/PageWrapper";
import SectionWrapper from "@/components/SectionWrapper";
import Title from "@/components/Title";
import { ScrollToTop, SmoothScroll } from "@/lib/utils";
import { InfoCard } from "@/components/InfoCard";
import Image from "next/image";
import rBooking from "@/public/rBooking.png";
import rBookingMobile from "@/public/rBookingMobile.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ButtonWrapper from "@/components/ButtonWrapper";
import Link from "next/link";
import useWindowResize from "@/components/hooks/UseWindowResize";

const infoData = [
  { header: "Project Type", description: "Demo" },
  { header: "Year", description: "2025" },
  {
    header: "Technology",
    description: [
      "React",
      "React Router",
      "Redux & Redux Toolkit",
      "TanStack Query",
      "Axios",
      "React Hook Form",
      "Tailwind CSS",
      "JavaScript",
      "Zod",
    ],
  },
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
  const y = useTransform(scrollYProgress, [0, 1], ["-30%", "20%"]);

  ScrollToTop();
  SmoothScroll();

  const windowSize = useWindowResize();
  const isMobile = windowSize.width < 768;
  const imageSrc = isMobile ? rBookingMobile : rBooking;
  return (
    <div ref={container} className="min-h-screen">
      <PageWrapper className="">
        <SectionWrapper className="!pb-0">
          <div className="relative flex flex-col">
            <Title text="R-booking" className="!m-0 text-left" />

            <InfoCards data={infoData} />
          </div>
        </SectionWrapper>

        <SectionWrapper className="max-w-[1860px]">
          <div className="relative">
            <motion.div className="absolute inset-0 z-10 flex items-center justify-center will-change-transform">
              <div className="relative duration-3000 ease-rrEaseBtnHover active:scale-[0.25]">
                <ButtonWrapper className="relative flex h-[120px] w-[120px] cursor-pointer items-center justify-center rounded-full bg-bgDark font-medium text-white dark:bg-primary md:h-[170px] md:w-[170px] xl:h-[200px] xl:w-[200px]">
                  <Link
                    href="https://r-booking-project.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-20 flex items-center justify-center"
                  >
                    Live site
                  </Link>
                </ButtonWrapper>
              </div>
            </motion.div>
            <div className="overflow-hidden">
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

const InfoCards = ({ data }: { data: typeof infoData }) => (
  <div className="grid grid-cols-1 gap-10 pt-yMobile md:grid-cols-3 md:pt-yTablet lg:gap-20 xl:pt-yDesktop">
    {data.map((item) => (
      <InfoCard
        key={item.header}
        header={item.header}
        description={item.description}
      />
    ))}
  </div>
);

const ProjectDescription = () => {
  return (
    <SectionWrapper className="max-w-[1860px] !pt-0">
      <div className="prose prose-lg dark:prose-invert mx-auto max-w-4xl">
        <h1 className="mb-10 text-4xl font-bold">Project Description</h1>

        <Section>
          <p className="mb-8 text-lg">
            R-Booking is a web application for browsing and managing rental
            property listings, similar to platforms like Booking.com or Airbnb.
          </p>
        </Section>

        <Section title="Features">
          <ul className="mb-10 list-disc space-y-3 pl-6">
            <li>
              <strong>Browse Listings</strong>: Users can explore available
              rental properties on the homepage.
            </li>
            <li>
              <strong>Filter Listings</strong>: Offers can be filtered by name,
              date, and number of guests.
            </li>
            <li>
              <strong>Listing Details</strong>: Clicking on a listing opens a
              detailed view, including a photo gallery, description, location,
              price, and guest capacity.
            </li>
            <li>
              <strong>Manage Favorites</strong>: Users can add listings to their
              favorites and view them in a dedicated section.
            </li>
            <li>
              <strong>User Authentication</strong>: Login system with form
              validation and JWT handling.
            </li>
            <li>
              <strong>Review System</strong>: Users can browse property reviews
              with star ratings.
            </li>
            <li>
              <strong>Create Listings</strong>: Form that allows users to add
              new rental properties with data validation.
            </li>
          </ul>
        </Section>

        <Section title="Data Storage">
          <ul className="mb-10 list-disc space-y-4 pl-6">
            <li>
              <strong>LocalStorage</strong>:
              <ul className="list-circle mt-2 space-y-2 pl-6">
                <li>
                  Property, location, and user data are stored in LocalStorage
                  to simulate a database.
                </li>
                <li>
                  API query results are cached in LocalStorage with a 5-minute
                  expiration.
                </li>
              </ul>
            </li>
            <li className="mt-3">
              <strong>Application Memory</strong>:
              <ul className="list-circle mt-2 space-y-2 pl-6">
                <li>
                  Access tokens are stored in application memory (not in
                  LocalStorage for security reasons).
                </li>
                <li>
                  Favorite listings state is managed in Redux (reset on page
                  refresh).
                </li>
              </ul>
            </li>
          </ul>
        </Section>

        <Section title="Technologies">
          <ul className="mb-10 grid list-disc grid-cols-1 gap-3 pl-6 md:grid-cols-2 md:items-start">
            <li>
              <strong>React</strong> - Library for building user interfaces.
            </li>
            <li>
              <strong>React Router</strong> - Navigation and routing within the
              application.
            </li>
            <li>
              <strong>Redux & Redux Toolkit</strong> - Global state management.
            </li>
            <li>
              <strong>TanStack Query (React Query)</strong> - Asynchronous state
              management and caching.
            </li>
            <li>
              <strong>Axios</strong> - API communication.
            </li>
            <li>
              <strong>React Hook Form</strong> - Form handling.
            </li>
            <li>
              <strong>Tailwind CSS</strong> - Styling components.
            </li>
            <li>
              <strong>Lucide React</strong> - Icon library.
            </li>
            <li>
              <strong>JavaScript</strong> - Programming language.
            </li>
            <li>
              <strong>Zod</strong> - Data validation.
            </li>
          </ul>
        </Section>

        <Section title="User Authentication">
          <p className="mb-4 text-lg">
            To test the login functionality, use the following credentials:
          </p>
          <div className="mb-10 rounded-md bg-gray-100 p-4 dark:bg-gray-800">
            <p className="mb-2 font-medium">Demo Login Credentials:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                <strong>Email:</strong> rr@demo.com
              </li>
              <li>
                <strong>Password:</strong> rrDemoProject
              </li>
            </ul>
          </div>
        </Section>

        <Section title="Mock API">
          <p className="mb-4 text-lg">
            The application uses a mocked API (powered by MockAdapter for Axios)
            to simulate real server communication. The Mock API supports:
          </p>
          <ul className="mb-10 list-disc space-y-3 pl-6">
            <li>Fetching a list of listings with optional filtering.</li>
            <li>Fetching details of individual listings.</li>
            <li>Fetching reviews for specific listings.</li>
            <li>User authentication (login/logout).</li>
            <li>Refreshing JWT tokens.</li>
            <li>Creating new listings.</li>
          </ul>
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
              http://localhost:5173
            </code>
            .
          </p>
        </Section>

        <Section title="Project Structure">
          <ul className="mb-10 list-disc space-y-3 pl-6">
            <li>
              <strong>components</strong> - All UI components of the
              application.
            </li>
            <li>
              <strong>pages</strong> - Components for application pages.
            </li>
            <li>
              <strong>hooks</strong> - Custom React hooks.
            </li>
            <li>
              <strong>api</strong> - API configuration and mock implementation.
            </li>
            <li>
              <strong>state</strong> - Redux logic.
            </li>
            <li>
              <strong>assets</strong> - Static assets (images, icons).
            </li>
          </ul>
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
