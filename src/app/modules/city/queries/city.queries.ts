import { useQuery } from 'react-query';

import { URL_RESOURCE } from '../../../shared/constants';
import { useAxios } from '../../../shared/context';
import { Contract } from '../../../shared/models';
import { getCitiesFromContracts } from '../utils';

export const useCitiesQuery = (enabled: boolean) => {
  const axios = useAxios();

  const query = async () => {
    const { data } = await axios.get<Contract[]>(URL_RESOURCE.CONTRACTS, {
      params: {
        apiKey: import.meta.env.VITE_JCDECAUX_API_KEY,
      },
    });

    return getCitiesFromContracts(data);
  };

  return useQuery(['contracts'], query, { enabled });
};
