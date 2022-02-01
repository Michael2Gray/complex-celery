import { AxiosError } from 'axios';

import { DEFAULT_API_ERROR_MESSAGE } from '../constants';
import { getApiErrorMessage } from './error.util';

describe('Error Util', () => {
  const axiosError: AxiosError = {
    config: {},
    isAxiosError: true,
    toJSON: () => ({}),
    response: {
      data: 'Axios Error',
      status: 200,
      statusText: '',
      headers: {},
      config: {},
    },
    name: 'name',
    message: 'test',
  };

  test.each([
    [null, DEFAULT_API_ERROR_MESSAGE],
    ['test', DEFAULT_API_ERROR_MESSAGE],
    [new Error('Error'), 'Error'],
    [axiosError, 'Axios Error'],
  ])('for %p getApiErrorMessage returns %p', (condition, result) => {
    expect(getApiErrorMessage(condition)).toEqual(result);
  });
});
