import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors (from Design Document)
        ivory: "#F8F7F6",
        charcoal: "#2C2A26",
        "antique-gold": "#B88F14",
        gold: "#B88F14",
        // Extended palette
        "charcoal-light": "rgba(44, 42, 38, 0.7)",
        "charcoal-border": "rgba(44, 42, 38, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        // Typography Scale (from Design Document)
        "display-xl": ["72px", { lineHeight: "1.1", fontWeight: "600" }],
        "display-lg": ["56px", { lineHeight: "1.15", fontWeight: "600" }],
        "display-md": ["40px", { lineHeight: "1.2", fontWeight: "600" }],
        "heading-lg": ["32px", { lineHeight: "1.3", fontWeight: "600" }],
        "heading-md": ["24px", { lineHeight: "1.4", fontWeight: "600" }],
        "heading-sm": ["20px", { lineHeight: "1.4", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        "caption": ["12px", { lineHeight: "1.4", fontWeight: "400" }],
      },
      spacing: {
        // 8px rhythm system
        "18": "72px",
        "22": "88px",
        "26": "104px",
        "30": "120px",
      },
      maxWidth: {
        "container": "1200px",
        "content": "800px",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
