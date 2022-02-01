import { Coords } from '../../../shared/components';
import { Coords as CoordsModel } from '../../../shared/models';

type CityCardFooterProps = {
  coords: CoordsModel;
};

export const CityCardFooter = ({ coords }: CityCardFooterProps) => (
  <Coords coords={coords} />
);
