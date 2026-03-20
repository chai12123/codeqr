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
        brand: {
          coral: "#F47B5B",
          "coral-dark": "#E06A4A",
          steel: "#6B89B5",
          amber: "#F5A623",
          light: "#92B4D8",
          sand: "#E8BF82",
          black: "#1A1A1A",
          bg: "#EDF3F9",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "var(--font-sarabun)", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(107, 137, 181, 0.1)",
        "card-hover": "0 4px 12px rgba(107, 137, 181, 0.15)",
        menu: "0 2px 8px rgba(107, 137, 181, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
