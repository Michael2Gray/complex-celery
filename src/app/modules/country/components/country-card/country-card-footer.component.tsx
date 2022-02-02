import { GiWorld } from 'react-icons/gi';

import { PATHS } from '../../../../routes';
import { Coords, NavLink } from '../../../../shared/components';
import { Coords as CoordsModel } from '../../../../shared/models';

type CountryCardFooterProps = { coords: CoordsModel };

export const CountryCardFooter = ({ coords }: CountryCardFooterProps) => (
  <div className="flex justify-between">
    <NavLink to={PATHS.countries}>
      <GiWorld className="mr-2" />
      Back to Countries
    </NavLink>
    <Coords coords={coords} />
  </div>
);
