import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        "bg-deep": "#020617", // almost black
        "bg-elevated": "#02081b",
        "bg-card": "#020617",
        "brand-teal": "#22d3ee",
        "brand-teal-soft": "#0f172a",
        "brand-gold": "#facc15",
      },
      boxShadow: {
        "soft-lg": "0 24px 60px rgba(15,23,42,0.8)",
      },
      borderRadius: {
        "3xl": "1.75rem",
      },
      keyframes: {
        "marquee-slow": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "marquee-slow": "marquee-slow 25s linear infinite",
        "fade-up": "fade-up 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
