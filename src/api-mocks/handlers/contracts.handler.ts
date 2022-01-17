import { rest } from 'msw';

import { URL_RESOURCE } from '../../app/shared/constants';
import { CONTRACTS } from '../fixtures';

const baseURL = `${import.meta.env.VITE_API_BASE_URL}${URL_RESOURCE.CONTRACTS}`;

const getContracts = rest.get(baseURL, (req, res, ctx) =>
  res(ctx.status(200), ctx.delay(500), ctx.json(CONTRACTS))
);

export const handlers = [getContracts];
