
const lightGray = '#F6F8F9';
const lightBlue = '#5EB1BF';

const loginWidth = '480px';
const loginHeight = '616px';

const primaryFont = 'Comfortaa';
const secondaryFont = 'Montserrat';

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        way: {
          'light-gray': lightGray,
          'light-blue': lightBlue,
        }
      },
      height: {
        'login': loginHeight,
      },
      width: {
        'login': loginWidth,
      },
      fontFamily: {
        primary: [primaryFont],
        secondary: [secondaryFont]
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
