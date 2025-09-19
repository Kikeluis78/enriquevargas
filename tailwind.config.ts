import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        whatsappGlow: {
          "0%, 100%": { transform: "scale(1)", boxShadow: "0 0 20px rgba(16,185,129,0.8)" },
          "50%": { transform: "scale(1.15)", boxShadow: "0 0 40px rgba(16, 185, 129, 1)" },
        },
      },
      animation: {
        "whatsapp-glow": "whatsappGlow 1.8s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
