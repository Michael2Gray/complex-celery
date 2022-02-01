import { GrMapLocation } from 'react-icons/gr';
import { MdOutlineLocationOn } from 'react-icons/md';
import { RiTempColdLine } from 'react-icons/ri';

import {
  Distance,
  Grid,
  Property,
  Temperature,
} from '../../../shared/components';
import { useCity } from '../context';

export const CityCardProperties = () => {
  const {
    city: { name, distanceAway },
    stations,
    weather: { main },
  } = useCity();

  return (
    <div className="w-full">
      <Grid xs={2}>
        <Property label={name} labelClassName="capitalize">
          <Distance
            distance={distanceAway}
            icon={<MdOutlineLocationOn className="mr-1" />}
          />
        </Property>

        <Property label="Temperature">
          <div className="flex items-center">
            <RiTempColdLine className="mr-1" />
            {main?.temp && <Temperature temperature={main.temp} />}
          </div>
        </Property>

        <Property label="Stations">
          <div className="flex items-center">
            <GrMapLocation className="mr-1" /> {stations.length}
          </div>
        </Property>
      </Grid>
    </div>
  );
};
