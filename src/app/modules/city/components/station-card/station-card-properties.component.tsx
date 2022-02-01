import { MdOutlineLocationOn, MdPedalBike } from 'react-icons/md';
import { RiParkingBoxLine } from 'react-icons/ri';
import { isNumber as _isNumber } from 'lodash';

import {
  AvailabilityIndicator,
  Distance,
  Divider,
  InlineProperty,
} from '../../../../shared/components';
import { EnhancedStation } from '../../models';

type StationCardPropertiesProps = Pick<
  EnhancedStation,
  'distanceAway' | 'mainStands'
>;

export const StationCardProperties = ({
  distanceAway,
  mainStands,
}: StationCardPropertiesProps) => {
  const bikes = mainStands?.availabilities?.bikes;
  const stands = mainStands?.availabilities?.stands;
  const total = mainStands?.capacity;

  return (
    <>
      <Divider className="my-2" />

      <div className="flex justify-between">
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
      </div>
    </>
  );
};
