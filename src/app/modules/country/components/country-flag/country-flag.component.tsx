import { MdOutlineLocationCity } from 'react-icons/md';

import { Country } from '../../models';
import { CountryIcon } from './country-icon.component';

type CountryFlagProps = {
  country?: Country['name'];
  className?: string;
};

export const CountryFlag = ({ country, className }: CountryFlagProps) => (
  <div className={className}>
    {country ? <CountryIcon country={country} /> : <MdOutlineLocationCity />}
  </div>
);
