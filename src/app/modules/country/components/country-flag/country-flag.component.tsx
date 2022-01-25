import { MdOutlineLocationCity } from 'react-icons/md';

import { Country } from '../../models';
import { CountryIcon } from './country-icon.component';

type CountryFlagProps = {
  country?: Omit<Country, 'weather'>;
  className?: string;
};

export const CountryFlag: React.FC<CountryFlagProps> = ({
  country,
  className,
}) => (
  <div className={className}>
    {country ? (
      <CountryIcon country={country.name} />
    ) : (
      <MdOutlineLocationCity />
    )}
  </div>
);