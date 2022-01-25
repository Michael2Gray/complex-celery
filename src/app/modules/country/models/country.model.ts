import { Coords, Weather } from '../../../shared/models';
import { City, EnhancedCity } from '../../city';

export type Country = {
  name: string;
  cities: City[];
  coords: Coords;
  weather: Weather;
};

export type EnhancedCountry = {
  /**
   * indicates the distance (km) away from the current user
   */
  distanceAway: number;
  cities: EnhancedCity[];
} & Omit<Country, 'cities'>;
