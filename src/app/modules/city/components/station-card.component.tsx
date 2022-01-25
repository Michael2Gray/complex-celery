import {
  MdLocalAtm,
  MdOutlineLocationOn,
  MdPedalBike,
  MdStar,
} from 'react-icons/md';
import { RiParkingBoxLine } from 'react-icons/ri';
import clsx from 'clsx';
import { isNumber as _isNumber } from 'lodash';

import {
  AvailabilityIndicator,
  Card,
  Distance,
  Heading,
  InlineProperty,
} from '../../../shared/components';
import { EnhancedStation } from '../models';
import { StationStatusLabel } from './station-status-label.component';

type StationCardProps = {
  station: EnhancedStation;
};

export const StationCard = ({
  station: { name, status, banking, bonus, mainStands, distanceAway },
}: StationCardProps) => {
  const bikes = mainStands?.availabilities?.bikes;
  const stands = mainStands?.availabilities?.stands;
  const total = mainStands?.capacity;

  return (
    <Card
      footer={
        <div className="flex">
          {_isNumber(bikes) && (
            <InlineProperty className="mr-2" label={<MdPedalBike />}>
              <AvailabilityIndicator value={bikes} total={total} />
            </InlineProperty>
          )}

          {_isNumber(stands) && (
            <InlineProperty className="mr-2" label={<RiParkingBoxLine />}>
              <AvailabilityIndicator value={stands} total={total} />
            </InlineProperty>
          )}

          <InlineProperty label={<MdOutlineLocationOn />}>
            <Distance distance={distanceAway} />
          </InlineProperty>

          <div className="ml-auto">
            <StationStatusLabel status={status} />
          </div>
        </div>
      }
    >
      <Heading size="xs" className="flex items-center capitalize">
        {name.toLowerCase()}

        <div className="ml-auto flex">
          <MdLocalAtm
            fontSize={20}
            className={clsx({
              'text-brand-400': banking,
              'text-neutral-200': !banking,
            })}
          />

          <MdStar
            fontSize={20}
            className={clsx({
              'text-yellow-400': bonus,
              'text-neutral-200': !bonus,
            })}
          />
        </div>
      </Heading>
    </Card>
  );
};
