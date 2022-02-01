import { screen } from '@testing-library/react';

import { renderWithProviders, waitForLoading } from '../../../../shared/utils';
import { COUNTRY_LAT_LNGS } from '../../constants';
import { CountriesProvider } from '../../context';
import { CountryFlag } from './country-flag.component';

describe('CountryFlag', () => {
  const countries = Object.keys(COUNTRY_LAT_LNGS);

  test.each(countries)(
    'the correct flag is rendered for %p',
    async (country) => {
      renderWithProviders(
        <CountriesProvider>
          <CountryFlag country={country} />
        </CountriesProvider>
      );

      await waitForLoading();

      expect(
        screen.getByRole('img', { name: `${country} flag` })
      ).toBeInTheDocument();
    }
  );

  test('renders a default flag', async () => {
    renderWithProviders(
      <CountriesProvider>
        <CountryFlag country="Unknown" />
      </CountriesProvider>
    );

    await waitForLoading();

    expect(
      screen.getByRole('img', { name: 'Unknown flag' })
    ).toBeInTheDocument();
  });

  test('renders an icon if the country is undefined', async () => {
    renderWithProviders(
      <CountriesProvider>
        <CountryFlag country={undefined} />
      </CountriesProvider>
    );

    await waitForLoading();

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
