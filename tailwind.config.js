module.exports = {
  content: [
    './**/*.{razor,html,cshtml}',
    './wwwroot/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // require('@tailwindcss/animations'), // Not an official plugin, do not use
  ],
};
