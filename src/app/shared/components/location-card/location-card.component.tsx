import { ReactNode } from 'react';
import clsx from 'clsx';

import { WeatherInfo } from '../../models';
import { Card } from '../card';
import { Divider } from '../divider';
import { WeatherIcon } from '../weather-icon';

type LocationCardProps = {
  children: ReactNode;
  footer?: ReactNode;
  weather?: WeatherInfo[];
  hasLargeWeather?: boolean;
  hasDivider?: boolean;
  className?: string;
};

export const LocationCard = ({
  footer,
  weather,
  hasLargeWeather = false,
  hasDivider = false,
  children,
  className,
}: LocationCardProps) => (
  <Card className={className} footer={footer}>
    {weather && (
      <WeatherIcon
        className={clsx('absolute h-10 w-10 -top-4 -right-3', {
          'h-16 w-16 -top-9 -right-6': hasLargeWeather,
        })}
        weather={weather[0].main}
      />
    )}

    {!!children && <>{children}</>}

    {hasDivider && <Divider />}
  </Card>
);
