/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      black: "#111827",
      white: "#F9FAFB",
    },
    container: {
      padding: {
        "sm": "2rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
