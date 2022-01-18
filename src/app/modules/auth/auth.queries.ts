import { useMutation } from 'react-query';
import { AxiosResponse } from 'axios';

import { URL_RESOURCE } from '../../shared/constants';
import { useAxios } from '../../shared/context';
import { User } from '../../shared/models';
import { AuthLoginRequest } from './auth.model';

export const useLoginMutation = () => {
  const axios = useAxios();

  return useMutation({
    mutationFn: async (body: AuthLoginRequest) => {
      const { data } = await axios.post<AuthLoginRequest, AxiosResponse<User>>(
        `${URL_RESOURCE.AUTH}/login`,
        body
      );

      return data;
    },
  });
};
