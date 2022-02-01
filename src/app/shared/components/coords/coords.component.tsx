import { ReactNode } from 'react';

import { Coords as CoordsModel } from '../../models';
import { CoordsDirection } from './coords-direction.component';

type CoordsProps = {
  coords: CoordsModel;
  icon?: ReactNode;
};

export const Coords = ({
  coords: { latitude, longitude },
  icon,
}: CoordsProps) => (
  <span className="flex items-Center">
    {!!icon && <>{icon}</>}
    <CoordsDirection value={latitude} type="latitude" />,{' '}
    <CoordsDirection value={longitude} type="longitude" />
  </span>
);
