module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('@tailwindcss/forms')],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      mono: ['Roboto Mono', 'monospace'],
    },
    extend: {
      colors: {
        brand: {
          100: 'rgb(156, 218, 144)',
          400: 'rgb(46, 136, 86)',
          500: 'rgb(39, 130, 85)',
          800: 'rgb(34, 78, 56)',
        },
      },
    },
  },
};
