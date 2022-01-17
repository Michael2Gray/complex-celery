import { setLogger } from 'react-query';
import { toHaveNoViolations } from 'jest-axe';
import { noop as _noop } from 'lodash';

import '@testing-library/jest-dom';

import { server } from './src/api-mocks/server';

expect.extend(toHaveNoViolations);

process.env.VITE_API_URL = '/mock-api';

setLogger({
  // eslint-disable-next-line no-console
  log: console.log,
  // eslint-disable-next-line no-console
  warn: console.warn,
  error: _noop,
});

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
