import axios from 'axios';
import { isString as _isString } from 'lodash';

import { DEFAULT_API_ERROR_MESSAGE } from '../constants';

export const getApiErrorMessage = (error: unknown) => {
  if (error) {
    if (axios.isAxiosError(error) && _isString(error.response?.data)) {
      return error.response!.data;
    }

    return error instanceof Error ? error.message : DEFAULT_API_ERROR_MESSAGE;
  } else {
    return DEFAULT_API_ERROR_MESSAGE;
  }
};
