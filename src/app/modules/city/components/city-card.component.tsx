import clsx from 'clsx';

import { LocationCard } from '../../../shared/components';
import { Pending } from '../../../shared/layouts';
import { CountryFlag, useCountries } from '../../country';
import { useCity } from '../context';
import { CityCardProperties } from './city-card-properties';

type CityCardProps = {
  hasLargeWeather?: boolean;
  className?: string;
};

export const CityCard = ({ hasLargeWeather, className }: CityCardProps) => {
  const { city, weather, isStationsPending, isWeatherPending } = useCity();
  const { countries } = useCountries();
  const isPending = isStationsPending || isWeatherPending;
  const country = countries.find(({ cities }) =>
    cities.map(({ name }) => name).includes(city.name.toLowerCase())
  );

  return (
    <LocationCard
      className={className}
      weather={weather?.weather}
      hasLargeWeather={hasLargeWeather}
    >
      {isPending ? (
        <Pending className="w-full">Prepping the city...</Pending>
      ) : (
        <>
          <CountryFlag
            className={clsx('h-20 w-20', { 'mr-2': !isPending })}
            country={country}
          />
          <CityCardProperties />
        </>
      )}
    </LocationCard>
  );
};
