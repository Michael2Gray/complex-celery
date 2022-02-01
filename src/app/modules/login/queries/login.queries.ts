import { useMutation } from 'react-query';

import { URL_RESOURCE } from '../../../shared/constants';
import { useAxios } from '../../../shared/context';
import { LoginRequest } from '../models';

export const useLoginMutation = () => {
  const axios = useAxios();

  return useMutation({
    mutationFn: async (body: LoginRequest) => {
      const { data } = await axios.post(`${URL_RESOURCE.AUTH}/login`, body);

      return data;
    },
  });
};
