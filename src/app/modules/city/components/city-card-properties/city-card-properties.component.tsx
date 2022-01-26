import { GrMapLocation } from 'react-icons/gr';
import { MdOutlineLocationOn } from 'react-icons/md';
import { RiTempColdLine } from 'react-icons/ri';
import clsx from 'clsx';

import { Distance, Grid, Property } from '../../../../shared/components';
import { useCity } from '../../context';
import { TEMPERATURE_VARIANTS } from './city-card-properties.constant';
import { getTempVariant } from './city-card-properties.util';

export const CityCardProperties = () => {
  const {
    city: { name, distanceAway },
    stations,
    weather,
  } = useCity();

  const temperature = weather.main?.temp;

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
            <RiTempColdLine className="mr-1" />{' '}
            {temperature && (
              <div
                className={clsx(
                  TEMPERATURE_VARIANTS[getTempVariant(temperature)]
                )}
              >
                {Math.round(temperature)}
              </div>
            )}
            °C
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
