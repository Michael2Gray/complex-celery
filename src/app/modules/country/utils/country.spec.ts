import { IsoCode } from '../models';
import {
  getCountriesFromCities,
  getCountryFromIsoCode,
  getIsoCodeFromCountry,
  getKnownNullCountry,
} from './country.util';

describe('Country Utils', () => {
  describe('getCountryFromIsoCode', () => {
    test.each<[IsoCode | string, string]>([
      ['IE', 'Ireland'],
      ['AF', 'Afghanistan'],
      ['test', 'test'],
    ])('returns the correct result', (isoCode, country) => {
      expect(getCountryFromIsoCode(isoCode)).toEqual(country);
    });
  });

  describe('getIsoCodeFromCountry', () => {
    test.each([
      ['Ireland', 'IE'],
      ['Afghanistan', 'AF'],
      ['test', 'IE'],
    ])('returns the correct result', (country, isoCode) => {
      expect(getIsoCodeFromCountry(country)).toEqual(isoCode);
    });
  });

  describe('getKnownNullCountry', () => {
    test.each([
      ['valence', 'France'],
      ['besancon', 'France'],
      ['seville', 'Spain'],
      ['', ''],
    ])('returns the correct result', (city, country) => {
      expect(getKnownNullCountry(city)).toBe(country);
    });
  });

  describe('getCountriesFromCities', () => {
    test('returns cities', () => {
      expect(
        getCountriesFromCities([
          {
            commercial_name: "Vélo'V",
            coords: {
              latitude: 45.764,
              longitude: 4.8357,
            },
            country: 'France',
            name: 'lyon',
          },
        ])
      ).toEqual([
        {
          cities: [
            {
              commercial_name: "Vélo'V",
              coords: {
                latitude: 45.764,
                longitude: 4.8357,
              },
              country: 'France',
              name: 'lyon',
            },
          ],
          coords: {
            latitude: 46.2276,
            longitude: 2.2137,
          },
          name: 'France',
        },
      ]);
    });
  });
});
