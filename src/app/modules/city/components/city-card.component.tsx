import { AiOutlinePicture } from 'react-icons/ai';
import clsx from 'clsx';

import { PATHS } from '../../../routes';
import { Heading, LocationCard, NavLink } from '../../../shared/components';
import { Pending } from '../../../shared/layouts';
import { CountryFlag } from '../../country/components';
import { useCountries } from '../../country/context';
import { useCity } from '../context';
import { CityCardFooter } from './city-card-footer.component';
import { CityCardProperties } from './city-card-properties.component';

type CityCardProps = {
  hasLargeWeather?: boolean;
  className?: string;
};

export const CityCard = ({ hasLargeWeather, className }: CityCardProps) => {
  const { city, weather, isStationsPending, isWeatherPending } = useCity();
  const { country } = useCountries();

  const isPending = isStationsPending || isWeatherPending;

  return (
    <LocationCard
      className={className}
      weather={weather?.weather}
      hasLargeWeather={hasLargeWeather}
      footer={
        city.coords && (
          <CityCardFooter
            coords={city.coords}
            link={
              <NavLink to={`${PATHS.countries}/${country?.name}`}>
                <AiOutlinePicture className="mr-2" />
                Back to {country?.name}
              </NavLink>
            }
          />
        )
      }
    >
      {city.commercial_name && (
        <Heading className="mb-2">{city.commercial_name}</Heading>
      )}

      <div className="flex items-center p-2">
        {isPending ? (
          <Pending className="w-full">Prepping the city...</Pending>
        ) : (
          <>
            <CountryFlag
              className={clsx('h-20 w-20', { 'mr-2': !isPending })}
              country={country?.name}
            />

            <CityCardProperties />
          </>
        )}
      </div>
    </LocationCard>
  );
};
