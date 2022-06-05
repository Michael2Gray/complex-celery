import { useParams } from 'react-router-dom';

import { useConfig } from '../../../config';
import { Page } from '../../../shared/layouts';
import { City } from '../../city/components';
import { CityProvider } from '../../city/context';
import { DEFAULT_ISO_CODE } from '../../country/constants';
import { CountriesConsumer, CountriesProvider } from '../../country/context';
import { DEFAULT_CITY } from '../constants';

export const CityRoute = () => {
  const { cities } = useConfig();
  const params = useParams();

  const city = cities.find(({ name }) => name === params.city) || DEFAULT_CITY;

  return (
    <CountriesProvider city={city}>
      <CountriesConsumer>
        {(state) => (
          <CityProvider
            city={city}
            location={`${city.name},${state?.isoCode ?? DEFAULT_ISO_CODE}`}
          >
            <Page>
              <City />
            </Page>
          </CityProvider>
        )}
      </CountriesConsumer>
    </CountriesProvider>
  );
};
