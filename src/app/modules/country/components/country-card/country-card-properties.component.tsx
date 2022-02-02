import { FaRegBuilding } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr';

import { Grid, Heading, Property } from '../../../../shared/components';
import { Country } from '../../models';
import { CountryFlag } from '../country-flag';

type CountryCardPropertiesProps = {
  country: Omit<Country, 'weather'>;
};

export const CountryCardProperties = ({
  country: { name, cities },
}: CountryCardPropertiesProps) => {
  const providers = cities
    .map(({ commercial_name }) => commercial_name)
    .filter(Boolean);

  return (
    <div className="w-full">
      <Grid className="items-center" xs={2}>
        <div className="flex flex-col p-2">
          <CountryFlag className="h-20 w-20 mr-2" country={name} />
          <Heading>{name}</Heading>
        </div>

        <Property label="Cities">
          <div className="flex items-center">
            <GrMapLocation className="mr-1" /> {cities.length}
          </div>
        </Property>

        <Property label="Providers">
          <div className="flex items-center">
            <FaRegBuilding className="mr-2" />
            {providers.length}
          </div>
        </Property>
      </Grid>
    </div>
  );
};
