import { DEFAULT_COORDS } from '../../../config';
import { Coords } from '../../../shared/models';
import { City } from '../models';

export const DEFAULT_CITY: City = {
  name: 'dublin',
  commercial_name: 'dublinbikes',
  country: 'Ireland',
  coords: DEFAULT_COORDS,
};

export const CITY_LAT_LNGS: Record<string, Coords> = {
  rouen: { latitude: 49.4432, longitude: 1.1 },
  toulouse: { latitude: 43.6047, longitude: 1.4442 },
  luxembourg: { latitude: 49.8153, longitude: 6.1296 },
  dublin: { latitude: 53.3498, longitude: -6.2603 },
  valence: { latitude: 44.9334, longitude: 4.8924 },
  stockholm: { latitude: 59.3293, longitude: 18.0686 },
  santander: { latitude: 43.4623, longitude: -3.81 },
  lund: { latitude: 55.7047, longitude: 13.191 },
  bruxelles: { latitude: 50.8503, longitude: 4.3517 },
  amiens: { latitude: 49.8941, longitude: 2.2958 },
  mulhouse: { latitude: 47.7508, longitude: 7.3359 },
  lillestrom: { latitude: 59.956, longitude: 11.0504 },
  lyon: { latitude: 45.764, longitude: 4.8357 },
  ljubljana: { latitude: 46.0569, longitude: 14.5058 },
  seville: { latitude: 37.3891, longitude: -5.9845 },
  nancy: { latitude: 48.6921, longitude: 6.1844 },
  namur: { latitude: 50.4674, longitude: 4.872 },
  creteil: { latitude: 48.7904, longitude: 2.4556 },
  'cergy-pontoise': { latitude: 49.0381, longitude: 2.0814 },
  vilnius: { latitude: 54.6872, longitude: 25.2797 },
  toyama: { latitude: 36.6958, longitude: 137.2137 },
  marseille: { latitude: 43.2965, longitude: 5.3698 },
  nantes: { latitude: 47.2184, longitude: 1.5536 },
  brisbane: { latitude: -27.4698, longitude: 153.0251 },
  besancon: { latitude: 47.2378, longitude: 6.0241 },
};
