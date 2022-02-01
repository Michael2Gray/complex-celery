import clsx from 'clsx';

import { TEMPERATURE_VARIANTS } from './temperature.constant';
import { getTempVariant } from './temperature.util';

type TemperatureProps = { temperature: number };

export const Temperature = ({ temperature }: TemperatureProps) => (
  <div data-testid="temperature">
    <div className={clsx(TEMPERATURE_VARIANTS[getTempVariant(temperature)])}>
      {Math.round(temperature)}
    </div>
    °C
  </div>
);
