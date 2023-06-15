/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './index.html',
      './src/**/*.{vue,js,ts,jsx,tsx}',
      './components/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}'
    ],
    theme: {
      extend: {
        colors: {
            primary: '#96454c'
        },
        fontFamily: {},
      }
    },
    plugins: []
  };