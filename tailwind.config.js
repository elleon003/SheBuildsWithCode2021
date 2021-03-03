const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Heebo', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      'body': ['Heebo', 'ui-sans-serif', 'system-ui', 'sans-serif']
    },
    colors: {
      black: {
        DEFAULT: '#080708'
      },
      white: {
        DEFAULT: '#F5F5F5'
      },
      grey: {
        DEFAULT: '#707070'
      },
      red: {
        light: '#E25C6E',
        DEFAULT: '#D7263D',
        dark: '#A31D2F'
      },
      purple: {
        light: '#9040D1',
        DEFAULT: '#68269D',
        dark: '#4D1C75'
      },
      pink: {
        DEFAULT: '#F1DEDC',
        dark: '#D09088'
      }
    },
    boxShadow: {
     '3xl':'10px 10px 10px rgba(0, 0, 0, 0.3)',
    },
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {
    extend: {
      fontWeight: ['hover'],
      fontStyle: ['hover'],
      display: ['dark'],
      borderWidth: ['active', 'focus'],
      borderColor: ['active', 'focus'],
      margin: ['dark'],
      transform: ['hover', 'focus'],
      transitionProperty: ['hover', 'focus']
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
