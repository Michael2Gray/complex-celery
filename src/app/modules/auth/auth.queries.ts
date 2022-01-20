import { useMutation } from 'react-query';
import axios, { AxiosResponse } from 'axios';

import { URL_RESOURCE } from '../../shared/constants';
import { User } from '../../shared/models';
import { AuthLoginRequest } from './auth.model';

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: async (body: AuthLoginRequest) => {
      const { data } = await axios.post<AuthLoginRequest, AxiosResponse<User>>(
        `${import.meta.env.VITE_API_BASE_URL}${URL_RESOURCE.AUTH}/login`,
        body
      );

      return data;
    },
  });
};
