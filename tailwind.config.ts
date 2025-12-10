import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          500: "#C6A15B",
          600: "#A48446",
        },
        charcoal: {
          500: "#3C3C3C",
          900: "#1C1C1C",
        },
        silver: {
          500: "#BDBDBD",
        },
        gray: {
          50: "#F8F8F8",
        },
      },
    },
  },
  plugins: [],
};
export default config;
