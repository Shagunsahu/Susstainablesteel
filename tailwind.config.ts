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
        border: "#2d2d2d", // Dark gray borders
        input: "#1c1c1c", // Card/surface color for inputs
        ring: "#FFD700", // Yellow focus ring
        
        // --- DARK THEME: BLACK/ZINC WITH YELLOW & RED ACCENTS ---
        background: "#111111", // zinc-950 (Dominant base background)
        foreground: "#F3F4F6", // gray-100 (White text)

        primary: {
          DEFAULT: "#FFD700", // yellow-400 (Main buttons, icons, headings)
          foreground: "#111111", // Black text on yellow
        },
        secondary: {
          DEFAULT: "#1c1c1c", // zinc-900 (Secondary elements)
          foreground: "#F3F4F6", // White text
        },
        destructive: {
          DEFAULT: "#E63946", // red-500 (Error messages, urgent)
          foreground: "#F3F4F6",
        },
        muted: {
          DEFAULT: "#2d2d2d", // Dark gray (Muted background)
          foreground: "#9CA3AF", // Medium gray (Muted text)
        },
        accent: {
          DEFAULT: "#E63946", // red-500 (Accents, urgent tags)
          foreground: "#F3F4F6",
        },
        popover: {
          DEFAULT: "#1c1c1c",
          foreground: "#F3F4F6",
        },
        card: {
          DEFAULT: "#1c1c1c", // zinc-900 (Cards, forms, testimonials)
          foreground: "#F3F4F6",
        },
        // Brand colors
        steel: {
          black: "#111111",
          surface: "#1c1c1c",
          yellow: "#FFD700",
          red: "#E63946",
          white: "#F3F4F6",
          gray: "#9CA3AF",
        },
        sidebar: {
          DEFAULT: "#111111",
          foreground: "#F3F4F6",
          primary: "#FFD700",
          "primary-foreground": "#111111",
          accent: "#E63946",
          "accent-foreground": "#F3F4F6",
          border: "#2d2d2d",
          ring: "#FFD700",
        },
      },
      backgroundImage: {
        "gradient-red-yellow": "linear-gradient(135deg, #E63946, #FFD700)",
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