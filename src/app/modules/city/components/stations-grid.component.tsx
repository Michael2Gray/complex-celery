import { orderBy as _orderBy } from 'lodash';

import { Card, Grid, Heading } from '../../../shared/components';
import { Pending } from '../../../shared/layouts';
import { useCity } from '../context';
import { StationCard } from './station-card.component';

export const StationsGrid = () => {
  const { stations, isStationsPending } = useCity();

  if (isStationsPending) {
    return (
      <div className="w-full">
        <Pending>Fetching Stations...</Pending>
      </div>
    );
  }

  if (!stations.length) {
    return (
      <Card>
        <div className="flex text-center">
          <Heading>Uh Oh! this city has no stations.</Heading>
        </div>
      </Card>
    );
  }

  return (
    <Grid>
      {_orderBy(stations, 'distanceAway').map((station) => (
        <StationCard key={station.name} station={station} />
      ))}
    </Grid>
  );
};
