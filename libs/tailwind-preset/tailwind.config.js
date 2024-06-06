/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#00007075',
          DEFAULT: '#000070',
        },
        link: {
          light: '#5eead4',
          DEFAULT: '#14b8a6',
          dark: '#ff7f50',
        },
        bgcolor: {
          light: '#ffffff',
          DEFAULT: '#fffff',
          dark: '#fffff',
        },
      },
      fontSize: {
        base: '12px',
      },
    },
  },
  plugins: [],
};
