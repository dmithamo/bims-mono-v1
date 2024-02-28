/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#00000080',
          DEFAULT: '#000000',
        },
        link: {
          light: '#5eead4',
          DEFAULT: '#14b8a6',
          dark: '#ff7f50',
        },
        bgcolor: {
          light: '#ffffff',
          DEFAULT: '#f8f4ee',
          dark: '#f8f4ee',
        },
      },
      fontSize: {
        base: '11px',
      },
    },
  },
  plugins: [],
};
