import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        charcoal: "#111111",
        "charcoal-soft": "#1a1a1a",
        ink: "#050505",
        crimson: {
          500: '#ef4444', 
          600: '#dc2626',
          900: '#7f1d1d',
          950: '#450a0a',
          DEFAULT: "#8b0000",
          soft: "#a31414",
          fade: "#5a0505",
        },
        muted: "#9ca3af",
        "muted-soft": "#6b7280",
        offwhite: "#e5e7eb",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
      },
    },
  },
  plugins: [],
};

export default config;
