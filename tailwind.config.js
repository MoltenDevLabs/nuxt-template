/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fdf3f3",
          100: "#fbe6e5",
          200: "#f9d1cf",
          300: "#f4b0ad",
          400: "#eb827e",
          500: "#de5a55",
          600: "#ca3d38",
          700: "#b5332e", //primary
          800: "#8d2b27",
          900: "#762926",
          950: "#3f1210",
        },
        secondary: {
          50: "#fcf4f4",
          100: "#f9e8e7",
          200: "#f5d4d3",
          300: "#edb6b4",
          400: "#df8683", // secondary
          500: "#d16662",
          600: "#bc4a46",
          700: "#9e3a37",
          800: "#833431",
          900: "#6e302e",
          950: "#3b1514",
        },
        tertiary: {
          50: "#f2fbfa",
          100: "#d2f5f2",
          200: "#a5eae7",
          300: "#70d8d7",
          400: "#43bbbe",
          500: "#2eb0b5", // tertiary
          600: "#1f7b82",
          700: "#1c6469",
          800: "#1b5054",
          900: "#1b4346",
          950: "#0a2429",
        },
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
