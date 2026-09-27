/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#EDE4D3",
        paper: "#F8F5ED",
        ink: "#171512",
        secondary: "#68625A",
        burgundy: "#6F2633",
      },
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"],
        handwritten: ["'Caveat'", "cursive"],
      },
      boxShadow: {
        paper: "2px 4px 16px 0 rgba(23,21,18,0.08), 0 1px 2px 0 rgba(23,21,18,0.06)",
        "paper-lg": "4px 8px 32px 0 rgba(23,21,18,0.10), 0 2px 4px 0 rgba(23,21,18,0.06)",
      },
    },
  },
  plugins: [],
};
