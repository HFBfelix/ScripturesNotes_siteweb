import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // "Inter" est excellente, mais on ajoute des polices système arrondies pour le côté "sympathique"
        sans: ['"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      colors: {
        background: "#F2F2F7", // Gris iOS pour le confort visuel
        foreground: "#1C1C1E",
        border: "#E5E5EA",     // Bordures plus discrètes
        input: "#FFFFFF",
        ring: "#2A528A",
        
        primary: {
          DEFAULT: "#2A528A", // Ton bleu officiel réajusté
          foreground: "#FFFFFF",
        },
        
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1C1C1E",
        },

        script: {
          text: "#1C1C1E",
          subtext: "#636366", // Un peu plus foncé pour une meilleure lisibilité
          muted: "#E5E5EA",
          blueLight: "#E8F0FE", // Pour des accents doux
        }
      },
      borderRadius: {
        '2xl': '18px',
        '3xl': '28px', // Plus arrondi pour les grandes cartes (plus moderne)
        '4xl': '35px',
      },
      boxShadow: {
        // Une ombre un peu plus diffuse et "premium"
        'apple': '0 8px 30px rgba(0, 0, 0, 0.04)',
        'button': '0 4px 12px rgba(42, 82, 138, 0.2)',
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        }
      },
      animation: {
        "fade-in-up": "fade-in-up 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
        "float": "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;