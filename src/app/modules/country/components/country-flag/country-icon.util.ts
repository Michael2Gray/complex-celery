import AustraliaSvg from './assets/australia.svg';
import BelgiumSvg from './assets/belgium.svg';
import DefaultSvg from './assets/default.svg';
import FranceSvg from './assets/france.svg';
import IrelandSvg from './assets/ireland.svg';
import JapanSvg from './assets/japan.svg';
import LithuaniaSvg from './assets/lithuania.svg';
import LuxembourgSvg from './assets/luxembourg.svg';
import NorwaySvg from './assets/norway.svg';
import SloveniaSvg from './assets/slovenia.svg';
import SpainSvg from './assets/spain.svg';
import SwedenSvg from './assets/sweden.svg';

export const getSvgSrcFromCountry = (
  country: string,
  countries: string[]
): string => {
  if (countries.includes(country)) {
    switch (country) {
      case 'Australia':
        return AustraliaSvg;
      case 'Belgium':
        return BelgiumSvg;
      case 'France':
        return FranceSvg;
      case 'Ireland':
        return IrelandSvg;
      case 'Japan':
        return JapanSvg;
      case 'Lithuania':
        return LithuaniaSvg;
      case 'Luxembourg':
        return LuxembourgSvg;
      case 'Norway':
        return NorwaySvg;
      case 'Slovenia':
        return SloveniaSvg;
      case 'Spain':
        return SpainSvg;
      case 'Sweden':
        return SwedenSvg;
      default:
        return DefaultSvg;
    }
  }

  return DefaultSvg;
};
