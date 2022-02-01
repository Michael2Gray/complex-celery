import { CONTRACTS } from './../../../../api-mocks/fixtures/contracts.fixture';
import { DEFAULT_COORDS } from './../../../config/config.constant';
import {
  getCitiesFromContracts,
  getCoordsFromCity,
  getNearestCity,
} from './city.util';

describe('City Utils', () => {
  describe('getCoordsFromCity', () => {
    test.each([
      ['dublin', { latitude: 53.3498, longitude: -6.2603 }],
      ['city', null],
    ])('returns the correct result', (city, result) => {
      expect(getCoordsFromCity(city)).toEqual(result);
    });
  });

  describe('getCitiesFromContracts', () => {
    const contracts = [CONTRACTS.find((c) => c.name === 'lyon')!];

    test('returns the correct result', () => {
      expect(getCitiesFromContracts(contracts)).toEqual([
        {
          commercial_name: "Vélo'V",
          coords: {
            latitude: 45.764,
            longitude: 4.8357,
          },
          country: 'France',
          name: 'lyon',
        },
      ]);
    });
  });

  describe('getNearestCity', () => {
    test('returns the correct result', () => {
      expect(
        getNearestCity(DEFAULT_COORDS, getCitiesFromContracts(CONTRACTS))
      ).toEqual({
        commercial_name: 'dublinbikes',
        coords: {
          latitude: 53.3498,
          longitude: -6.2603,
        },
        country: 'Ireland',
        name: 'dublin',
      });
    });
  });
});
