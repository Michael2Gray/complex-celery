import { motion } from 'framer-motion';

import { WeatherInfoMain } from '../../models';
import { getSvgSrcFromWeatherInfo } from './weather-icon.util';

type WeatherIconProps = {
  weather?: WeatherInfoMain;
  className?: string;
};

export const WeatherIcon = ({ weather, className }: WeatherIconProps) => (
  <div className={className}>
    <motion.img
      src={getSvgSrcFromWeatherInfo(weather)}
      alt={`Weather ${weather}`}
    />
  </div>
);
