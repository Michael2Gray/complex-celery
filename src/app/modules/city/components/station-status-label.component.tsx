import { Label } from '../../../shared/components';
import { StationStatus } from '../enums';

type StationStatusLabelProps = { status: StationStatus };

export const StationStatusLabel = ({ status }: StationStatusLabelProps) => (
  <Label variant={status === StationStatus.CLOSED ? 'error' : 'brand'}>
    {status}
  </Label>
);
