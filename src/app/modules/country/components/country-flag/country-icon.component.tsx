import { motion } from 'framer-motion';

import { useCountries } from '../../context';
import { getSvgSrcFromCountry } from './country-icon.util';

type CountryIconProps = {
  country: string;
  className?: string;
};

export const CountryIcon: React.FC<CountryIconProps> = ({ country }) => {
  const { countries } = useCountries();

  return (
    <motion.img
      src={getSvgSrcFromCountry(
        country,
        countries.map(({ name }) => name)
      )}
      alt={`${country} flag`}
    />
  );
};
