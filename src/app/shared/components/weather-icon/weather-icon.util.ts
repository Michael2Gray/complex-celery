import UnknownImageSvg from '../../../assets/unknown-image.svg';
import { WeatherInfoMain } from '../../models';
import CloudsSvg from './assets/clouds.svg';
import MistSvg from './assets/mist.svg';
import RainSvg from './assets/rain.svg';
import SnowSvg from './assets/snow.svg';
import SunSvg from './assets/sun.svg';
import ThunderstormSvg from './assets/thunderstorm.svg';

export const getSvgSrcFromWeatherInfo = (main: WeatherInfoMain | undefined) => {
  switch (main) {
    case 'Clear':
      return SunSvg;
    case 'Rain':
      return RainSvg;
    case 'Snow':
      return SnowSvg;
    case 'Mist':
    case 'Fog':
      return MistSvg;
    case 'Clouds':
      return CloudsSvg;
    case 'Thunderstorm':
      return ThunderstormSvg;
    default:
      return UnknownImageSvg;
  }
};
