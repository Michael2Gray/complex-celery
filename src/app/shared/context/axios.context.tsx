import React, { createContext, useMemo } from 'react';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { useAuth } from '../../modules/auth';
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
  const { token } = useAuth();

  const value = useMemo(() => {
    const instance = axios.create({ baseURL });

    const requestInterceptor = async (config: AxiosRequestConfig) => {
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${token}`,
      };

      return config;
    };

    instance.interceptors.request.use(requestInterceptor);

    return instance;
  }, [baseURL, token]);

  return (
    <AxiosContext.Provider value={value}>{children}</AxiosContext.Provider>
  );
};

export const useAxios = () => useContextFallback(AxiosContext);
