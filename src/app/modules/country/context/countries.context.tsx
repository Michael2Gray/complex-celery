import { createContext, ReactNode, useMemo } from 'react';

import { useConfig } from '../../../config';
import { useContextFallback } from '../../../shared/hooks';
import { City } from '../../city/models';
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

type CountriesProviderProps = { city?: City; children: ReactNode };

export const CountriesProvider = ({
  children,
  ...props
}: CountriesProviderProps) => {
  const { cities, city: configCity } = useConfig();
  const city = props.city ?? configCity;
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
