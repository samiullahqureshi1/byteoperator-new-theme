/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f3f2eb",
        surface: "#eae8df",
        card: "#ffffff",
        border: "rgba(15, 29, 7, 0.08)",
        foreground: "rgb(15, 29, 7)",
        brand: {
          cyan: "#34d399",
          pink: "#f43f5e",
          blue: "#38bdf8",
          purple: "#a855f7",
          green: "#48c774",
          yellow: "#fbbf24",
          orange: "#f97316",
        },
      },
      fontFamily: {
        sans: ['neueMontreal', '"neueMontreal Fallback"', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
