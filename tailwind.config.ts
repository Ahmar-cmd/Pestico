import type { Config } from "tailwindcss";

export default {
  content: [
   "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#21c58e",
        dimWhite: "#808080",
        service: "#eaf8f3",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        abrilFatface: ["Abril Fatface", "serif"],
      }
    },
  },
  plugins: [],
} satisfies Config;
