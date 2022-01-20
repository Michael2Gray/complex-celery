import { ISO_COUNTRIES } from '../constants';

export const getCountryFromIsoCode = (code: string): string =>
  Object.prototype.hasOwnProperty.call(ISO_COUNTRIES, code)
    ? ISO_COUNTRIES[code]
    : code;

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
