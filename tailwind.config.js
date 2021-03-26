const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')


module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Rubik'],
      },
      colors: {
        primary: '#82CAFF',
        secondary: {
          100: '#76169E',
          200: '#8B4FA4',
          300: '#E2AAF5',
        },
        yallow: '#FFD28A',
        teal: colors.teal,
      },
      borderWidth: {
        1: '1px',
        3: '3px',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['visited'],
    },
  },
  plugins: [],
}
