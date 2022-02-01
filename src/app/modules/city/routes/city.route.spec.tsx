import { screen, within } from '@testing-library/react';
import { rest } from 'msw';

import { getStations } from '../../../../api-mocks/handlers/stations.handler';
import { server } from '../../../../api-mocks/server';
import { renderRoute, waitForLoading } from '../../../shared/utils';
import { CityRoute } from './city.route';

describe('City', () => {
  test('renders the details of the city', async () => {
    renderRoute(<CityRoute />);

    await waitForLoading();

    expect(
      screen.getByRole('heading', { name: 'dublinbikes' })
    ).toBeInTheDocument();

    await waitForLoading('Prepping the city');

    expect(
      screen.getByRole('img', { name: 'Ireland flag' })
    ).toBeInTheDocument();
    expect(screen.getByText('dublin')).toBeInTheDocument();
  });

  test('renders a list of stations', async () => {
    renderRoute(<CityRoute />);

    await waitForLoading();

    await waitForLoading('Fetching Stations');

    const stations = screen.getAllByTestId('station-card');

    expect(stations.length).toBe(110);

    expect(
      within(stations[0]).getByRole('heading', { name: 'parnell street' })
    ).toBeInTheDocument();
    expect(within(stations[0]).getByText('20')).toBeInTheDocument();
    expect(within(stations[0]).getByText('0')).toBeInTheDocument();
  });

  test('renders an empty message if there are no stations', async () => {
    server.use(
      rest.get(getStations.info.path, (req, res, ctx) =>
        res(ctx.status(200), ctx.json([]))
      )
    );

    renderRoute(<CityRoute />);

    await waitForLoading();

    await waitForLoading('Fetching Stations');

    expect(
      screen.getByRole('heading', { name: 'Uh Oh! this city has no stations.' })
    ).toBeInTheDocument();
  });
});
