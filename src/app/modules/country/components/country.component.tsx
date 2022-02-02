import { useCountry } from '../context';
import { CitiesGrid } from './cities-grid.component';
import { CountryCard } from './country-card';

export const Country = () => {
  const { country } = useCountry();

  return (
    <>
      {country && (
        <>
          <CountryCard country={country} className="mb-6" />
          <CitiesGrid country={country} />
        </>
      )}
    </>
  );
};
