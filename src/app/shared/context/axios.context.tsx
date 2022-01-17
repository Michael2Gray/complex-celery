import React, { createContext, useMemo } from 'react';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { useContextFallback } from '../hooks';

const AxiosContext = createContext<AxiosInstance | undefined>(axios);
AxiosContext.displayName = 'AxiosContext';

type AxiosProviderProps = {
  baseURL?: string;
};

export const AxiosProvider: React.FC<AxiosProviderProps> = ({
  children,
  baseURL,
}) => {
  const value = useMemo(() => {
    const instance = axios.create({ baseURL });

    const authRequestInterceptor = async (config: AxiosRequestConfig) => {
      // TODO: Add auth token to header if needed

      return config;
    };

    instance.interceptors.request.use(authRequestInterceptor);

    return instance;
  }, [baseURL]);

  return (
    <AxiosContext.Provider value={value}>{children}</AxiosContext.Provider>
  );
};

export const useAxios = () => useContextFallback(AxiosContext);
