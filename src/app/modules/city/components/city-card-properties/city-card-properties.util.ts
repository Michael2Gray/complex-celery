import { TEMPERATURE_VARIANTS } from './city-card-properties.constant';

export const getTempVariant = (
  value: number
): keyof typeof TEMPERATURE_VARIANTS => {
  if (value > 15) {
    return 'high';
  }

  return value < 10 ? 'low' : 'medium';
};
