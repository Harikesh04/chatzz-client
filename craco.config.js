module.exports = {
  important: true,
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  eslint: {
    enable: false,
  },
};
