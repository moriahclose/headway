const darkGray = '#4D5761';
const mediumGray = '#757575';
const lightGray = '#C4C4C4';
const green = '#8DDB95';
const lightBlue = '#558CC2';

const sideNavWidth = '240px';

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        'side-nav': sideNavWidth,
      },
      height: {
        'top-nav': '40px',
      },
      margin: {
        'side-nav': sideNavWidth
      },
      colors: {
        way: {
          'dark-gray': darkGray,
          'medium-gray': mediumGray,
          'light-gray': lightGray,
          'green': green,
          'light-blue': lightBlue,
        }
      },
      fontFamily: {
        title: ['Helvetica Neue'],
        detail: ['Helvetica']
      },
      transitionProperty: {
        height: 'height',
        width: 'width',
      }
    },
  },
  variants: {
    extend: {
      height: ['hover'],
      width: ['hover'],
    },
  },
  plugins: [],
}
