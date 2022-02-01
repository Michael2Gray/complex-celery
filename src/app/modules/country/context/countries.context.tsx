import { createContext, ReactNode, useMemo } from 'react';

import { useConfig } from '../../../config';
import { useContextFallback } from '../../../shared/hooks';
import { Country } from '../models';
import { getCountriesFromCities, getIsoCodeFromCountry } from '../utils';

type CountriesContextState = {
  countries: Omit<Country, 'weather'>[];
  isoCode: string;
  country?: Omit<Country, 'weather'>;
};

const CountriesContext = createContext<CountriesContextState | undefined>(
  undefined
);
CountriesContext.displayName = 'CountriesContext';

type CountriesProviderProps = { children: ReactNode };

export const CountriesProvider = ({ children }: CountriesProviderProps) => {
  const { city, cities } = useConfig();
  const countries = getCountriesFromCities(cities);
  const country = countries.find((country) =>
    country.cities.map(({ name }) => name).includes(city.name.toLowerCase())
  );
  const isoCode = getIsoCodeFromCountry(country?.name);

  const value = useMemo(
    () => ({
      countries: getCountriesFromCities(cities),
      isoCode,
      country,
    }),
    [cities, isoCode, country]
  );

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
};

export const CountriesConsumer = CountriesContext.Consumer;

export const useCountries = () => useContextFallback(CountriesContext);
