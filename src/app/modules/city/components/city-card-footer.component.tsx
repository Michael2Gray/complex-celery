import { ReactNode } from 'react';

import { Coords } from '../../../shared/components';
import { Coords as CoordsModel } from '../../../shared/models';

type CityCardFooterProps = {
  link: ReactNode;
  coords?: CoordsModel | null;
};

export const CityCardFooter = ({ coords, link }: CityCardFooterProps) => (
  <div className="flex justify-between">
    {link}
    {coords && <Coords coords={coords} />}
  </div>
);
