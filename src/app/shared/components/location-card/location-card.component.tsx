import { ReactNode } from 'react';
import clsx from 'clsx';

import { WeatherInfo } from '../../models';
import { Card } from '../card';
import { Divider } from '../divider';
import { WeatherIcon } from '../weather-icon';

type LocationCardProps = {
  flag: ReactNode;
  children: ReactNode;
  actions?: ReactNode;
  weather?: WeatherInfo[];
  hasLargeWeather?: boolean;
  hasDivider?: boolean;
};

export const LocationCard = ({
  flag,
  actions,
  weather,
  hasLargeWeather = false,
  hasDivider = false,
  children,
}: LocationCardProps) => (
  <Card actions={actions}>
    {weather && (
      <WeatherIcon
        className={clsx('absolute h-10 w-10 -top-4 -right-3', {
          'h-16 w-16 -top-9 -right-6': hasLargeWeather,
        })}
        weather={weather![0]}
        isLarge={hasLargeWeather}
      />
    )}

    <div className="flex items-center p-2">
      {flag}
      {!!children && <>{children}</>}
    </div>

    {hasDivider && <Divider />}
  </Card>
);
