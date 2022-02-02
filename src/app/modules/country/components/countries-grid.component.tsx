import { orderBy as _orderBy } from 'lodash';

import { Card, Grid, Heading } from '../../../shared/components';
import { useCountries } from '../context';
import { CountriesCard } from './countries-card';

export const CountriesGrid = () => {
  const { countries } = useCountries();

  if (!countries.length) {
    return (
      <Card>
        <div className="flex text-center">
          <Heading>Uh Oh! there are no countries.</Heading>
        </div>
      </Card>
    );
  }

  return (
    <Grid>
      {_orderBy(countries, 'distanceAway').map((station) => (
        <CountriesCard key={station.name} country={station} />
      ))}
    </Grid>
  );
};
