module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('@tailwindcss/forms')],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      mono: ['Roboto Mono', 'monospace'],
    },
    extend: {
      colors: {
        brand: {
          100: '#9cda90',
          400: '#2e8856',
          500: '#278255',
          800: '#224e38',
        },
      },
      backgroundImage: {
        'login-pattern': 'linear-gradient(120deg, #278255 55%, #224e38 55%);',
        'default-pattern':
          'linear-gradient(to bottom, #224e38 200px, transparent 0);',
      },
    },
  },
};
