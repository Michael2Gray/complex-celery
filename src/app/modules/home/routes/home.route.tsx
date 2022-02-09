import { useConfig } from '../../../config';
import { Page } from '../../../shared/layouts';
import { City } from '../../city/components';
import { CityProvider } from '../../city/context';
import { DEFAULT_ISO_CODE } from '../../country/constants';
import { CountriesConsumer, CountriesProvider } from '../../country/context';

export const HomeRoute = () => {
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
