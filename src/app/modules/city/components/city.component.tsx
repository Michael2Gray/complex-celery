import { CityCard } from './city-card.component';
import { StationsGrid } from './stations-grid.component';

export const City = () => (
  <>
    <CityCard className="mb-12" hasLargeWeather />

    <StationsGrid />
  </>
);
