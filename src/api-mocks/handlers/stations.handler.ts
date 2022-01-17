import { rest } from 'msw';

import { URL_RESOURCE } from '../../app/shared/constants';
import { STATIONS } from '../fixtures';

const baseURL = `${import.meta.env.VITE_API_BASE_URL}${URL_RESOURCE.STATIONS}`;

export const getStations = rest.get(baseURL, (req, res, ctx) => {
  const {
    url: { searchParams },
  } = req;

  const contract = searchParams.get('contract');

  const filteredStations = contract
    ? STATIONS.filter((station) => station.contractName === contract)
    : STATIONS;

  return res(ctx.status(200), ctx.delay(500), ctx.json(filteredStations));
});

export const getStation = rest.get(`${baseURL}/:id`, (req, res, ctx) => {
  const {
    url: { searchParams },
    params,
  } = req;

  const { id } = params;
  const contract = searchParams.get('contract');

  const filteredStations = contract
    ? STATIONS.filter((station) => station.contractName === contract)
    : STATIONS;

  const station = filteredStations.find(({ number }) => number === Number(id));

  return res(
    ctx.status(station ? 200 : 404),
    ctx.delay(500),
    ctx.json(station)
  );
});

export const handlers = [getStation, getStations];
