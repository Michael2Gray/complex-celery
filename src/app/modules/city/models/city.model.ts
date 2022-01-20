import { Coords } from '../../../shared/models';

export type City = {
  name: string;
  country: string;
  coords: Coords | null;
};

export type CityKnownNull = 'valence' | 'besancon' | 'seville';

export type EnhancedCity = {
  /**
   * indicates the distance (km) away from the current user
   */
  distanceAway: number;
} & City;
