import { rest } from 'msw';

import { URL_RESOURCE } from '../../app/shared/constants';
import { CONTRACTS } from '../fixtures';

const baseURL = `/mock-api${URL_RESOURCE.CONTRACTS}`;

export const getContracts = rest.get(baseURL, (req, res, ctx) =>
  res(ctx.status(200), ctx.delay(500), ctx.json(CONTRACTS))
);

export const handlers = [getContracts];
