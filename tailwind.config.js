/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '530px',
      },
      colors: {
        lightGrey: 'hsl(0, 0%, 98%)',
        darkBlue: 'hsl(200, 15%, 8%)',
        darkModeBg: 'hsl(207, 26%, 17%)',
        darkElement: 'hsl(209, 23%, 22%)',
        lightInput: 'hsl(0, 0%, 52%)',
        lightBlue: '#0197F6'
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      }
    },
  },
  plugins: [],
}