import { Page } from '../../../shared/layouts';
import { Countries } from '../components';
import { CountriesProvider } from '../context';

export const CountriesRoute = () => (
  <CountriesProvider>
    <Page>
      <Countries />
    </Page>
  </CountriesProvider>
);
