/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: "#000000",
          900: "#0B0F12",
          850: "#090D10",
          800: "#0D1217",
          750: "#12181F",
          700: "#1A222B",
        },
        datacrumbs: {
          primary: "#10B981",
          deep: "#059669",
          dark: "#064E3B",
          glow: "#34D399",
          mint: "#6EE7B7",
        },
        dark: {
          950: "#000000",
          900: "#0B0F12",
          850: "#090D10",
          800: "#0D1217",
          750: "#12181F",
          700: "#1A222B",
        },
        cyanGlow: "#00f2fe",
        purpleGlow: "#8b5cf6",
        emeraldGlow: "#10b981",
      },
      fontFamily: {
        sans: ["Inter", "Plus Jakarta Sans", "-apple-system", "sans-serif"],
        display: ["Plus Jakarta Sans", "Outfit", "Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        'glow-emerald': '0 0 35px -5px rgba(16, 185, 129, 0.45)',
        'glow-emerald-lg': '0 0 60px -10px rgba(16, 185, 129, 0.35)',
        'glow-cyan': '0 0 30px -5px rgba(0, 242, 254, 0.4)',
        'pill-nav': '0 10px 40px -10px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
