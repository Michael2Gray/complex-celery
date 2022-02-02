import { FaRegBuilding } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr';

import { Divider, Property } from '../../../../shared/components';
import { City } from '../../../city/models';

type CountriesCardPropertiesProps = {
  cities: City[];
};

export const CountriesCardProperties = ({
  cities,
}: CountriesCardPropertiesProps) => {
  const providers = cities
    .map(({ commercial_name }) => commercial_name)
    .filter(Boolean);

  return (
    <>
      <Divider className="my-2" />
      <div className="flex justify-between">
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
      </div>
    </>
  );
};
