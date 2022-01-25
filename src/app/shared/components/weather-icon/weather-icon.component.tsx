import { motion } from 'framer-motion';

import { WeatherInfo } from '../../models';
import { getSvgSrcFromWeatherInfo } from './weather-icon.util';

type WeatherIconProps = {
  weather?: WeatherInfo;
  className?: string;
};

export const WeatherIcon = ({ weather, className }: WeatherIconProps) => (
  <div className={className}>
    <motion.img
      src={getSvgSrcFromWeatherInfo(weather?.main)}
      alt={`Weather ${weather?.main}`}
    />
  </div>
);
