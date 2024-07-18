/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#00000075',
          DEFAULT: '#000000',
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
        muted: {
          DEFAULT: '#00000055',
        },
      },
      fontSize: {
        base: '13px',
      },
    },
  },
  plugins: [],
};
