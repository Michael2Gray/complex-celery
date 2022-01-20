import { Coords } from '../shared/models';
import { Config, Formatting } from './config.model';

export const DEFAULT_COORDS: Coords = {
  latitude: 53.35014,
  longitude: -6.266155,
};

export const DEFAULT_FORMATTING: Formatting = {
  date: 'E, d MMM yyyy',
};

export const DEFAULT_CONFIG: Config = {
  coords: DEFAULT_COORDS,
  formatting: DEFAULT_FORMATTING,
};
