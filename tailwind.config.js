/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors:{
        primary: "#145da0",
        secondary: "#0c2d48",
        third: "#2e8bc0",
        fourth: "#b1d4e0",
      }
    },
  },
  plugins: [],
};
