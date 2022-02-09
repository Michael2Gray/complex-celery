import { createContext, ReactNode, useMemo } from 'react';
import { useParams } from 'react-router';

import { useContextFallback } from '../../../shared/hooks';
import { Country } from '../models';
import { useCountries } from './countries.context';

type CountryContextState = {
  country?: Omit<Country, 'weather'>;
};

const CountryContext = createContext<CountryContextState | undefined>(
  undefined
);
CountryContext.displayName = 'CountryContext';

type CountryProviderProps = { children: ReactNode };

export const CountryProvider = ({ children }: CountryProviderProps) => {
  const params = useParams();
  const { countries } = useCountries();

  const country = countries.find(({ name }) => name === params.country);

  const value = useMemo(
    () => ({
      country,
    }),
    [country]
  );

  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
};

export const useCountry = () => useContextFallback(CountryContext);
