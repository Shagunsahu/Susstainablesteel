import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // --- UPDATED FONTS FOR PREMIUM LOOK ---
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // Professional body font
        display: ['Playfair Display', 'Georgia', 'serif'], // Elegant heading font
      },
      colors: {
        border: "#1e3a8a", // Blue-900 (Subtle borders)
        input: "#112b5a", // Lighter Navy (Input backgrounds)
        ring: "#00AEEF", // Cyan (Focus rings)
        
        // --- INDUSTRIAL CORE THEME COLORS ---
        background: "#0a1e40", // Deep Navy (Main Background)
        foreground: "#cbd5e1", // Slate-300 (Main Text)

        primary: {
          DEFAULT: "#FF0000", // Brand Red (Buttons/Actions)
          foreground: "#ffffff", // White text on Red
        },
        secondary: {
          DEFAULT: "#112b5a", // Lighter Navy (Secondary elements)
          foreground: "#00AEEF", // Cyan text
        },
        destructive: {
          DEFAULT: "#ef4444", // Red
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#112b5a", // Muted background
          foreground: "#94a3b8", // Muted text
        },
        accent: {
          DEFAULT: "#1e3a8a", // Blue-900
          foreground: "#00AEEF", // Cyan
        },
        popover: {
          DEFAULT: "#112b5a",
          foreground: "#cbd5e1",
        },
        card: {
          DEFAULT: "#112b5a", // Lighter Navy (Card Backgrounds)
          foreground: "#cbd5e1",
        },
        // Legacy support if needed
        steel: {
          blue: "#00AEEF",
          dark: "#0a1e40",
          red: "#FF0000",
          light: "#112b5a",
          gray: "#94a3b8",
        },
        sidebar: {
          DEFAULT: "#0a1e40",
          foreground: "#cbd5e1",
          primary: "#FF0000",
          "primary-foreground": "#ffffff",
          accent: "#1e3a8a",
          "accent-foreground": "#00AEEF",
          border: "#1e3a8a",
          ring: "#00AEEF",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 8px)",
      },
      boxShadow: {
        'card': '0 4px 20px -4px rgba(0, 0, 0, 0.5)',
        'elevated': '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.3)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.6s ease-out forwards",
        "blink": "blink 1s step-end infinite",
        "float": "float 3s ease-in-out infinite",
        blob: "blob 7s infinite",
        marquee: "marquee 60s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;