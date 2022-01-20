import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';

import { AuthStatus, useAuth } from '../modules/auth';
import {
  City,
  DEFAULT_CITY,
  getNearestCity,
  useCitiesQuery,
} from '../modules/city';
import { useContextFallback, useGeoLocation } from '../shared/hooks';
import { FullScreenOverlay, Pending } from '../shared/layouts';
import { DEFAULT_CONFIG } from './config.constant';
import { Config } from './config.model';

type ConfigContextState = {
  config: Config;
  city: City;
  cities: City[];
};

const ConfigContext = createContext<ConfigContextState | undefined>({
  config: DEFAULT_CONFIG,
  city: DEFAULT_CITY,
  cities: [],
});
ConfigContext.displayName = 'ConfigContext';

type ConfigProviderProps = {
  externalConfig: Config;
  children: ReactNode;
};

export const ConfigProvider = ({
  externalConfig,
  children,
}: ConfigProviderProps) => {
  const auth = useAuth();
  const [config, setConfig] = useState<Config>(DEFAULT_CONFIG);
  const geoLocation = useGeoLocation();

  const { data: cities, isLoading: isCitiesLoading } = useCitiesQuery(
    auth.status === AuthStatus.AUTHENTICATED
  );

  useEffect(() => {
    setConfig({
      ...DEFAULT_CONFIG,
      ...externalConfig,
      coords: geoLocation ?? externalConfig.coords ?? DEFAULT_CONFIG.coords,
    });
  }, [externalConfig, geoLocation]);

  const value = useMemo(
    () => ({
      config,
      city: getNearestCity(config.coords, cities ?? []),
      cities: cities ?? [],
    }),
    [config, cities]
  );

  return (
    <ConfigContext.Provider value={value}>
      <>
        {isCitiesLoading ? (
          <FullScreenOverlay>
            <Pending>Chopping Celery...</Pending>
          </FullScreenOverlay>
        ) : (
          children
        )}
      </>
    </ConfigContext.Provider>
  );
};

export const useConfig = () => useContextFallback(ConfigContext);
