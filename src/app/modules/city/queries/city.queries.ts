import { useQuery, UseQueryOptions } from 'react-query';

import { URL_RESOURCE } from '../../../shared/constants';
import { useAxios } from '../../../shared/context';
import { Contract, Weather } from '../../../shared/models';
import { City, Station } from '../models';
import { getCitiesFromContracts } from '../utils';

export const useCitiesQuery = (
  options?: Omit<
    UseQueryOptions<City[], unknown, City[], string[]>,
    'queryKey' | 'queryFn'
  >
) => {
  const axios = useAxios();

  const query = async () => {
    const { data } = await axios.get<Contract[]>(URL_RESOURCE.CONTRACTS, {
      params: {
        apiKey: import.meta.env.VITE_JCDECAUX_API_KEY,
      },
    });

    return getCitiesFromContracts(data);
  };

  return useQuery(['contracts'], query, options);
};

export const useStationsQuery = (city: string) => {
  const axios = useAxios();

  const query = async () => {
    const { data } = await axios.get<Station[]>(URL_RESOURCE.STATIONS, {
      params: {
        apiKey: import.meta.env.VITE_JCDECAUX_API_KEY,
        contract: city,
      },
    });

    return data;
  };

  return useQuery(['stations', city], query);
};

export const useWeatherQuery = (location?: string) => {
  const axios = useAxios();

  const query = async () => {
    const { data } = await axios.get<Weather>(URL_RESOURCE.WEATHER, {
      params: {
        q: location,
        units: 'metric',
        appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
      },
    });

    return data;
  };

  return useQuery(['weather', location], query);
};
