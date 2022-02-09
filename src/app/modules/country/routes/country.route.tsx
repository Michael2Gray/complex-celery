import { Page } from '../../../shared/layouts';
import { Country } from '../components';
import { CountriesProvider, CountryProvider } from '../context';

export const CountryRoute = () => (
  <CountriesProvider>
    <CountryProvider>
      <Page>
        <Country />
      </Page>
    </CountryProvider>
  </CountriesProvider>
);
