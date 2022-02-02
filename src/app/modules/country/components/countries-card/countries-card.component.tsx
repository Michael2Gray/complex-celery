import { Heading, LocationCard } from '../../../../shared/components';
import { Country } from '../../models';
import { CountryFlag } from '../country-flag';
import { CountriesCardFooter } from './countries-card-footer.component';
import { CountriesCardProperties } from './countries-card-properties.component';

type CountriesCardProps = {
  country: Omit<Country, 'weather'>;
  className?: string;
};

export const CountriesCard = ({
  country: { name, coords, cities },
  className,
}: CountriesCardProps) => (
  <LocationCard
    className={className}
    footer={<CountriesCardFooter name={name} coords={coords} />}
  >
    <div className="flex flex-col items-center p-2">
      <CountryFlag className="h-20 w-20 mr-2" country={name} />
      <Heading>{name}</Heading>
    </div>

    <CountriesCardProperties cities={cities} />
  </LocationCard>
);
