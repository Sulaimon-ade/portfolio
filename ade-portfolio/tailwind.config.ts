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
        yellow: {
          DEFAULT: "#FFD600",
          dim: "#BFA000",
        },
        bg: {
          DEFAULT: "#0A0A0A",
          2: "#111111",
          3: "#181818",
        },
        card: "#141414",
        border: {
          DEFAULT: "#222222",
          light: "#2A2A2A",
        },
        muted: "#888888",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
      },
      animation: {
        pulse2: "pulse2 2s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
      },
      keyframes: {
        pulse2: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
