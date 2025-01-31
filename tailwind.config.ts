import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        rrSmooth: "cubic-bezier(0.45, 0, 0.55, 1)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main: "#146ef5",
      },
    },
  },
  plugins: [],
} satisfies Config;
