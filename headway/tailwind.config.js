const darkGray = '#4D5761';
const mediumGray = '#757575';
const lightGray = '#C4C4C4';
const green = '#8DDB95';

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        'side-nav': '240px',
      },
      height: {
        'top-nav': '40px',
      },
      colors: {
        way: {
          'dark-gray': darkGray,
          'medium-gray': mediumGray,
          'light-gray': lightGray,
          'green': green
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
