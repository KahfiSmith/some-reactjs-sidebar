/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customWhite: "#cbd5e1",
        customGrenn: "#2edfd0",
        primary: "#0f172a",
        secondary: "#1e293b",
        tertiary: "#334155",

      }
    },
  },
  plugins: [],
}

