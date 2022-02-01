import { useConfig } from '../../../config';
import { Page } from '../../../shared/layouts';
import {
  CountriesConsumer,
  CountriesProvider,
  DEFAULT_ISO_CODE,
} from '../../country';
import { City } from '../components';
import { CityProvider } from '../context';

export const CityRoute = () => {
  const { city } = useConfig();

  return (
    <CountriesProvider>
      <CountriesConsumer>
        {(state) => {
          const isoCode = state?.isoCode ?? DEFAULT_ISO_CODE;

          return (
            <CityProvider city={city} location={`${city.name},${isoCode}`}>
              <Page>
                <City />
              </Page>
            </CityProvider>
          );
        }}
      </CountriesConsumer>
    </CountriesProvider>
  );
};
