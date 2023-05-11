/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: "'Pacifico', cursive",
        body: "'Cairo', sans-serif",
      },
      colors: {
        "dark-green": "#73B74C",
        "light-green": "#97CB10",
      },
    },
  },
  plugins: [],
};
