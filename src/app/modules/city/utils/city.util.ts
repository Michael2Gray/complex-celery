import { isEmpty as _isEmpty } from 'lodash';

import { DEFAULT_COORDS } from '../../../config';
import { Contract, Coords } from '../../../shared/models';
import { getDistanceBetweenCoords } from '../../../shared/utils';
import { getCountryFromIsoCode, getKnownNullCountry } from '../../country';
import { CITY_LAT_LNGS } from '../constants';
import { City, CityKnownNull } from '../models';

export const getCoordsFromCity = (city: string): Coords | null =>
  Object.prototype.hasOwnProperty.call(CITY_LAT_LNGS, city)
    ? CITY_LAT_LNGS[city]
    : null;

export const getCitiesFromContracts = (contracts: Contract[]): City[] =>
  contracts.map((contract) => ({
    name: contract.name,
    commercial_name: contract.commercial_name,
    country: getCountryFromIsoCode(
      !_isEmpty(contract.country_code)
        ? contract.country_code!
        : getKnownNullCountry(contract.name as CityKnownNull)
    ),
    coords: getCoordsFromCity(contract.name),
  }));

export const getNearestCity = (coords: Coords, cities: City[]) => {
  const filteredCities = cities.filter((city) => city.coords !== null);

  const distances: number[] = filteredCities.map((c) =>
    getDistanceBetweenCoords(coords, c.coords ?? DEFAULT_COORDS)
  );

  const nearestCityIndex = distances.reduce(
    (prev, curr, index) => (curr < distances[prev] ? index : prev),
    0
  );

  return filteredCities[nearestCityIndex];
};
