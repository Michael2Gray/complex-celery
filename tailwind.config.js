/**
 *
 * @param {*} name name of the css variable to define
 * @description go to src/app/index.css to see the css color variables
 * @returns rgba color value
 */
const getCssVariableColorDefinition =
  (name) =>
  ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(--color-${name}), ${opacityValue})`;
    }

    if (opacityVariable !== undefined) {
      return `rgba(var(--color-${name}), var(${opacityVariable}, 1))`;
    }

    return `rgb(var(--color-${name}))`;
  };

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      mono: ['Roboto Mono', 'monospace'],
    },
    extend: {
      colors: {
        brand: getCssVariableColorDefinition('brand'),
        'brand-hover': getCssVariableColorDefinition('brand-hover'),
        'brand-active': getCssVariableColorDefinition('brand-active'),
        'brand-highlight': getCssVariableColorDefinition('brand-highlight'),
      },
    },
  },
  plugins: [],
};
