/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/utils/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        introduce: "url('/public/introduce.png')",
      },
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      main: '#252529',
      neutral400: '#686E73',
      neutral600: '#030D16',
      grey500: '#3E3E3E',
    }),
    backgroundImage: (theme) => ({
      ...theme('colors'),
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      neutral400: '#686E73',
      neutral600: '#030D16',
      grey500: '#3E3E3E',
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
      main: '#919396',
    }),
  },
  important: '#__next',
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
