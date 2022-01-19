const getVariantClasses = (color: 'red' | 'blue' | 'brand' | 'orange') => ({
  body: `bg-${color}-100 border-${color}-800`,
  title: `text-${color}-900`,
});

export const ALERT_VARIANTS = {
  info: getVariantClasses('blue'),
  success: getVariantClasses('brand'),
  error: getVariantClasses('red'),
  warning: getVariantClasses('orange'),
};
