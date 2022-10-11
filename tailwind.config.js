/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-orange": "#F59E0B",
        "primary-green": "#22C55E",
        "primary-blue": "#0075FF",
        "primary-gray": "#EEEEEE",
        "primary-red": "#F44336",
        "background-color": "#F1F5F9",
      },
    },
  },
  plugins: [],
};
