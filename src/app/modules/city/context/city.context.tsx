import { createContext, ReactNode, useMemo } from 'react';

import { DEFAULT_COORDS, useConfig } from '../../../config';
import { useContextFallback } from '../../../shared/hooks';
import { Weather } from '../../../shared/models';
import { getDistanceBetweenCoords } from '../../../shared/utils';
import { City, EnhancedCity, EnhancedStation } from '../models';
import { useStationsQuery, useWeatherQuery } from '../queries';

type CityState = {
  city: EnhancedCity;
  stations: EnhancedStation[];
  weather: Weather;
  isStationsPending: boolean;
  isWeatherPending: boolean;
};

const CityContext = createContext<CityState | undefined>(undefined);
CityContext.displayName = 'CityContext';

type CityProviderProps = {
  city: City;
  location: string;
  children: ReactNode;
};

export const CityProvider = ({
  city,
  location,
  children,
}: CityProviderProps) => {
  const {
    config: { coords },
  } = useConfig();

  const { data: stations, isLoading: isStationsPending } = useStationsQuery(
    city.name
  );
  const { data: weather, isLoading: isWeatherPending } =
    useWeatherQuery(location);

  const value = useMemo(
    () => ({
      city: {
        ...city,
        distanceAway: getDistanceBetweenCoords(
          coords,
          city.coords ?? DEFAULT_COORDS
        ),
      },
      stations: (stations ?? []).map((station) => ({
        ...station,
        distanceAway: station.position
          ? getDistanceBetweenCoords(coords, station.position)
          : 9999,
      })),
      weather: weather ?? ({} as Weather),
      isStationsPending,
      isWeatherPending,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isStationsPending, isWeatherPending, stations, weather]
  );

  return <CityContext.Provider value={value}>{children}</CityContext.Provider>;
};

export const useCity = () => useContextFallback(CityContext);
