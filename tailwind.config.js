/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#111111",
        "dark-50": "#2B3434",
        "dark-gray": "#323232",
        primary: "#007AFF",
        "primary-50": "#04ACEF",
        gray: "#848484",
        "gray-50": "#ABABAB",
        "gray-30": "#D8D7D7",
      },
    },
  },
  plugins: [],
};
