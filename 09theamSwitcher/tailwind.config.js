/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",   // ✅ here it works correctly
  theme: {
    extend: {},
  },
  plugins: [],
}
