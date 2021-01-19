
const lightGray = '#F6F8F9';
const lightBlue = '#5EB1BF';
const darkGray = '#6F7782';
const inputGray = '#CBD4DB';
const orange = '#EF7B45';
const red = '#D84727';

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
          'dark-gray': darkGray,
          'input-gray': inputGray,
          'light-blue': lightBlue,
          'orange': orange,
          'red': red,
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
