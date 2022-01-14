import { rest } from 'msw';

import { CONTRACTS } from '../fixtures';
import { URL_RESOURCE } from '../mocks.constant';

const getContracts = rest.get(URL_RESOURCE.CONTRACTS, (req, res, ctx) =>
  res(ctx.status(200), ctx.delay(500), ctx.json(CONTRACTS))
);

export const handlers = [getContracts];
