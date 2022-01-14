import { rest } from 'msw';

import { STATIONS } from '../fixtures';
import { URL_RESOURCE } from '../mocks.constant';

export const getStations = rest.get(URL_RESOURCE.STATIONS, (req, res, ctx) => {
  const {
    url: { searchParams },
  } = req;

  const contract = searchParams.get('contract');

  const filteredStations = contract
    ? STATIONS.filter((station) => station.contractName === contract)
    : STATIONS;

  return res(ctx.status(200), ctx.delay(500), ctx.json(filteredStations));
});

export const getStation = rest.get(
  `${URL_RESOURCE.STATIONS}/:id`,
  (req, res, ctx) => {
    const {
      url: { searchParams },
      params,
    } = req;

    const { id } = params;
    const contract = searchParams.get('contract');

    const filteredStations = contract
      ? STATIONS.filter((station) => station.contractName === contract)
      : STATIONS;

    const station = filteredStations.find(
      ({ number }) => number === Number(id)
    );

    return res(
      ctx.status(station ? 200 : 404),
      ctx.delay(500),
      ctx.json(station)
    );
  }
);

export const handlers = [getStation, getStations];
