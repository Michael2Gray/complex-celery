import { groupBy as _groupBy, orderBy as _orderBy } from 'lodash';

import { City } from '../../city';
import {
  COUNTRY_LAT_LNGS,
  DEFAULT_ISO_CODE,
  ISO_COUNTRIES,
} from '../constants';
import { Country } from '../models';

export const getCountryFromIsoCode = (code: string): string =>
  Object.prototype.hasOwnProperty.call(ISO_COUNTRIES, code)
    ? ISO_COUNTRIES[code]
    : code;

export const getIsoCodeFromCountry = (country: string | undefined): string =>
  country
    ? Object.keys(ISO_COUNTRIES).find(
        (key) => ISO_COUNTRIES[key] === country
      ) ?? DEFAULT_ISO_CODE
    : DEFAULT_ISO_CODE;

export const getKnownNullCountry = (city: string): string => {
  switch (city) {
    case 'valence':
    case 'besancon':
      return 'France';
    case 'seville':
      return 'Spain';
    default:
      return '';
  }
};

export const getCountriesFromCities = (
  cities: City[]
): Omit<Country, 'weather'>[] => {
  const citiesByCountry = _groupBy(cities, 'country');

  const countries: Omit<Country, 'weather'>[] = [];

  for (const [key, value] of Object.entries(citiesByCountry)) {
    countries.push({
      name: key,
      cities: value,
      coords: COUNTRY_LAT_LNGS[key],
    });
  }

  return _orderBy(countries, 'name');
};
