/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('tailwindcss-preset-email'),
  ],
  content: [
    './components/**/*.html',
    './emails/**/*.html',
    './layouts/**/*.html',
  ],
  theme: {
    screens:{
      'sm':'350px',
      'md':'480px',
    },
    extend: {
      colors: {
        'custom-gray': '#E7ECF2',
      },
    },
  },
};
