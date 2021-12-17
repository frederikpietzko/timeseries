const { guessProductionMode } = require('@ngneat/tailwind');

module.exports = {
  purge: {
    enabled: guessProductionMode(),
    content: ['./apps/**/*.{html,ts}', './libs/**/*.{html,ts}'],
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
