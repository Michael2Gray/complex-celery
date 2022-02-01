import { DateFormat } from '../../../../shared/components';
import { EnhancedStation } from '../../models';
import { StationStatusLabel } from './station-status-label.component';

type StationCardFooterProps = Pick<EnhancedStation, 'status' | 'lastUpdate'>;

export const StationCardFooter = ({
  status,
  lastUpdate,
}: StationCardFooterProps) => (
  <div className="flex justify-between">
    <DateFormat date={lastUpdate} withTime />

    <StationStatusLabel status={status} />
  </div>
);
