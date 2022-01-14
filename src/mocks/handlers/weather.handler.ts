import { rest } from 'msw';

import { WEATHER } from '../fixtures';
import { URL_RESOURCE } from '../mocks.constant';

export const getWeather = rest.get(URL_RESOURCE.WEATHER, (req, res, ctx) => {
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
