import { TEMPERATURE_VARIANTS } from './temperature.constant';

export const getTempVariant = (
  value: number
): keyof typeof TEMPERATURE_VARIANTS => {
  if (value >= 20) {
    return 'high';
  }

  return value < 10 ? 'low' : 'medium';
};
