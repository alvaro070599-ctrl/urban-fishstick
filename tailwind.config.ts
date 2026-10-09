import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        panel: "#0d1b2c",
        gold: "#e9b94f",
        cream: "#f7e5b0"
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"]
      },
      boxShadow: {
        gold: "0 12px 40px rgba(233,185,79,.18)"
      }
    }
  },
  plugins: []
};
export default config;
