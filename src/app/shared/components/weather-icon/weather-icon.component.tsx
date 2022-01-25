import { motion } from 'framer-motion';

import { WeatherInfo } from '../../models';
import { getSvgSrcFromWeatherInfo } from './weather-icon.util';

type WeatherIconProps = {
  weather?: WeatherInfo;
  isLarge?: boolean;
  className?: string;
};

export const WeatherIcon = ({
  weather,
  isLarge,
  className,
}: WeatherIconProps) => (
  <div className={className}>
    <motion.img
      src={getSvgSrcFromWeatherInfo(weather?.main)}
      alt={`Weather ${weather?.main}`}
    />
  </div>
);
