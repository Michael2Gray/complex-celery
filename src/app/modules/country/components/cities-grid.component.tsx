import { orderBy as _orderBy } from 'lodash';

import { Grid } from '../../../shared/components';
import { Country } from '../models';
import { CityCard } from './city-card';

type CitiesGridProps = {
  country: Omit<Country, 'weather'>;
};

export const CitiesGrid = ({ country: { cities } }: CitiesGridProps) => (
  <Grid>
    {_orderBy(cities, 'distanceAway').map((city) => (
      <CityCard key={city.name} city={city} />
    ))}
  </Grid>
);
