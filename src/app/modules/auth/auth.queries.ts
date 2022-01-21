import { useMutation } from 'react-query';
import axios from 'axios';

import { BASE_URL } from './auth.constant';
import { AuthLoginRequest } from './auth.model';

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: async (body: AuthLoginRequest) => {
      const { data } = await axios.post(`${BASE_URL}/login`, body);

      return data;
    },
  });
};
