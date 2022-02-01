import { MdLocalAtm, MdStar } from 'react-icons/md';
import clsx from 'clsx';

import { Card, Heading } from '../../../../shared/components';
import { EnhancedStation } from '../../models';
import { StationCardFooter } from './station-card-footer.component';
import { StationCardProperties } from './station-card-properties.component';

type StationCardProps = {
  station: EnhancedStation;
};

export const StationCard = ({
  station: {
    name,
    status,
    banking,
    bonus,
    mainStands,
    distanceAway,
    lastUpdate,
  },
}: StationCardProps) => (
  <Card
    footer={<StationCardFooter status={status} lastUpdate={lastUpdate} />}
    data-testid="station-card"
  >
    <Heading size="xs" level={3} className="flex items-center capitalize">
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

    <StationCardProperties
      mainStands={mainStands}
      distanceAway={distanceAway}
    />
  </Card>
);
