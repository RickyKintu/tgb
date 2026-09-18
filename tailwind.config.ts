import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#F5F6F8",
          soft: "#B9BAC6",
          dim: "#83838F",
        },
        bg: {
          DEFAULT: "#05050A",
          elevated: "#0E0E16",
          card: "#131320",
          line: "rgba(245,246,248,0.08)",
        },
        buddy: {
          green: "#39FF6A",
          "green-deep": "#1FB854",
          gold: "#FFC94A",
          violet: "#7C5CFF",
          pink: "#FF3D81",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      backgroundImage: {
        "grain": "url('/noise.svg')",
        "radial-fade": "radial-gradient(60% 60% at 50% 0%, rgba(124,92,255,0.25) 0%, rgba(5,5,10,0) 70%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        "pulse-glow": "pulse-glow 2.4s ease-in-out infinite",
        "fade-up": "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
        shimmer: "shimmer 2.5s linear infinite",
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest2: "0.28em",
      },
      boxShadow: {
        glow: "0 0 40px rgba(57,255,106,0.25)",
        "glow-violet": "0 0 60px rgba(124,92,255,0.35)",
        card: "0 8px 40px rgba(0,0,0,0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
