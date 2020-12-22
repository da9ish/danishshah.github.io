/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    colors: {
      primary: {
        900: '#0E3D6F',
        500: '#004186',
        300: '#2D71B9',
        200: '#81B2E7',
        100: '#EBF5FF',
        75: '#F5F6FA',
        DEFAULT: '#004186',
      },
      gray: colors.gray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      yellow: colors.amber,
      purple: colors.violet,
      white: colors.white,
    },
    fontFamily: {
      sans: ['Poppins'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
        '56-px': '56px'
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: (theme) => ({
        'home-1': 'url("https://cdn.dribbble.com/users/882543/screenshots/5986839/shot-cropped-1549652615910.png")'
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
