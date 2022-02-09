import { AiOutlinePicture } from 'react-icons/ai';

import { PATHS } from '../../../../routes';
import { Coords, NavLink } from '../../../../shared/components';
import { Coords as CoordsModel } from '../../../../shared/models';
import { Country } from '../../models';

type CountriesCardFooterProps = {
  name: Country['name'];
  coords: CoordsModel | null;
};

export const CountriesCardFooter = ({
  name,
  coords,
}: CountriesCardFooterProps) => (
  <div className="flex justify-between">
    <NavLink to={`${PATHS.countries}/${name}`}>
      <AiOutlinePicture className="mr-2" />
      Visit
    </NavLink>
    {coords && <Coords coords={coords} />}
  </div>
);
