import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import { ReactLenis } from "@/lib/lenis";
import Footer from "@/components/Footer";
import FooterInfo from "@/components/FooterInfo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Robert Rapkowski portfolio",
  description: "Welcome to Robert Rapkowski portfolio",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <body
          className={`${geistSans.variable} ${geistMono.variable} bg-white antialiased duration-500 dark:bg-black`}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            {children}
          </ThemeProvider>
          <Footer />
          <FooterInfo />
        </body>
      </ReactLenis>
    </html>
  );
};

export default RootLayout;
