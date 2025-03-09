import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        xMobile: "20px",
        px500: "50px",
        xTablet: "80px",
        xDesktop: "150px",
        yMobile: "110px",
        yTablet: "135px",
        yDesktop: "175px",
      },
      boxShadow: {
        shadowMain: "2px 4px 12px #00000014",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "900": "900ms",
        "3000": "3000ms",
      },
      transitionTimingFunction: {
        rrSmooth: "cubic-bezier(0.45,0,0.55,1)",
        rrEaseBurger: "cubic-bezier(0,0.55,0.45,1)",
        rrEaseBurgerLines: "cubic-bezier(0.25,1,0.5,1)",
        rrEaseBtnHover: "cubic-bezier(0.5,1,0.89,1)",
        rrEaseMain: "cubic-bezier(.7,0,.2,1)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "#146ef5",
        primaryDarker: "#0a61e5",
        rrGrayBg: "#f5f5f7",
        rrGray: "#171717",
        rrGrayBorder: "#494a4d",
        rrGrayText: "#86868b",
        rrDark: "#080808",
        grayLight: "#d7d7d8",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
