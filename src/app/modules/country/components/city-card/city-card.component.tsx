import { FaCity } from 'react-icons/fa';
import { MdOutlineLocationOn } from 'react-icons/md';

import { DEFAULT_COORDS, useConfig } from '../../../../config';
import { PATHS } from '../../../../routes';
import {
  Distance,
  Heading,
  Label,
  LocationCard,
  NavLink,
} from '../../../../shared/components';
import { getDistanceBetweenCoords } from '../../../../shared/utils';
import { CityCardFooter } from '../../../city/components';
import { City } from '../../../city/models';

type CityCardProps = { city: City };

export const CityCard = ({ city }: CityCardProps) => {
  const {
    config: { coords },
    city: configCity,
  } = useConfig();

  const distance = getDistanceBetweenCoords(
    coords,
    city.coords ?? DEFAULT_COORDS
  );

  const path =
    city?.name === configCity.name ? PATHS.home : `${PATHS.city}/${city?.name}`;

  return (
    <LocationCard
      footer={
        <CityCardFooter
          coords={city.coords}
          link={
            <NavLink to={path}>
              <FaCity className="mr-2" />
              Visit
            </NavLink>
          }
        />
      }
    >
      <Heading className="capitalize">{city.name}</Heading>

      <div className="flex justify-between">
        <Distance
          distance={distance}
          icon={<MdOutlineLocationOn className="mr-1" />}
        />

        {city.commercial_name && (
          <Label variant="success">{city.commercial_name}</Label>
        )}
      </div>
    </LocationCard>
  );
};
