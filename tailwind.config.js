/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        col: "repeat(auto-fill, minmax(250px, 1fr))",
      },
      colors: {
        primary: "#f9f9f9",
      },
    },
  },
  plugins: [],
};
