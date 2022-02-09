import { LocationCard } from '../../../../shared/components';
import { Country } from '../../models';
import { CountryCardFooter } from './country-card-footer.component';
import { CountryCardProperties } from './country-card-properties.component';

type CountryCardProps = {
  country: Omit<Country, 'weather'>;
  className?: string;
};

export const CountryCard = ({ country, className }: CountryCardProps) => (
  <LocationCard
    className={className}
    footer={country.coords && <CountryCardFooter coords={country.coords} />}
  >
    <CountryCardProperties country={country} />
  </LocationCard>
);
