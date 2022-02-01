import { setLogger } from 'react-query';
import { toHaveNoViolations } from 'jest-axe';
import { noop as _noop } from 'lodash';

import '@testing-library/jest-dom';

import { server } from './src/api-mocks/server';
import { DEFAULT_COORDS } from './src/app/config';

expect.extend(toHaveNoViolations);

const geolocationMock = {
  getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
    Promise.resolve(
      success({
        coords: DEFAULT_COORDS,
      })
    )
  ),
};

// @ts-ignore
global.navigator.geolocation = geolocationMock;

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
