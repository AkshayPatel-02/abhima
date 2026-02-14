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
        // Light Beige Theme - Warm, Premium Color Palette
        ivory: "#F5F1E8",           // Light warm beige (was #FEFDFB)
        beige: "#F5F1E8",           // Alias for ivory
        "beige-light": "#FAF8F3",   // Lighter beige for subtle contrast

        charcoal: "#3D3226",        // Warm dark brown (was #2B2B2B cool gray)
        "charcoal-5": "rgba(61, 50, 38, 0.05)",
        "charcoal-10": "rgba(61, 50, 38, 0.10)",
        "charcoal-20": "rgba(61, 50, 38, 0.20)",
        "charcoal-50": "rgba(61, 50, 38, 0.50)",
        "charcoal-70": "rgba(61, 50, 38, 0.70)",
        "charcoal-90": "rgba(61, 50, 38, 0.90)",

        gold: "#C9A86A",            // Antique Gold (unchanged - already warm)
        "antique-gold": "#C9A86A",  // Alias

        // Additional warm tones for depth
        "warm-brown": "#5C4A3A",    // Medium warm brown for accents
        "soft-taupe": "#A89B8F",    // Soft taupe for subtle elements

        error: "#C1554D",           // Warm red (softer than #D32F2F)
        success: "#388E3C",
        warning: "#F57C00",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
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
        // Only functional animations allowed (Design Document compliant)
        "fade-in": "fadeIn 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
