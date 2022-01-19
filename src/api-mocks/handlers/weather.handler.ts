import { rest } from 'msw';

import { URL_RESOURCE } from '../../app/shared/constants';
import { WEATHER } from '../fixtures';

const baseURL = `/mock-api${URL_RESOURCE.WEATHER}`;

export const getWeather = rest.get(baseURL, (req, res, ctx) => {
  const {
    url: { searchParams },
  } = req;

  const location = searchParams.get('q')?.split(',')[1];

  const weather = WEATHER.find((weather) => weather.sys?.country === location);

  return res(
    ctx.status(weather ? 200 : 404),
    ctx.delay(500),
    ctx.json(weather)
  );
});

export const handlers = [getWeather];
