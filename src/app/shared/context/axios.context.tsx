import { createContext, ReactNode, useMemo } from 'react';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { useAuth } from '../../modules/auth';
import { useContextFallback } from '../hooks';

const AxiosContext = createContext<AxiosInstance | undefined>(axios);
AxiosContext.displayName = 'AxiosContext';

type AxiosProviderProps = {
  children: ReactNode;
};

export const AxiosProvider = ({ children }: AxiosProviderProps) => {
  const { token } = useAuth();

  const value = useMemo(() => {
    const instance = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL,
    });

    const requestInterceptor = async (config: AxiosRequestConfig) => {
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${token}`,
      };

      return config;
    };

    instance.interceptors.request.use(requestInterceptor);

    return instance;
  }, [token]);

  return (
    <AxiosContext.Provider value={value}>{children}</AxiosContext.Provider>
  );
};

export const useAxios = () => useContextFallback(AxiosContext);
