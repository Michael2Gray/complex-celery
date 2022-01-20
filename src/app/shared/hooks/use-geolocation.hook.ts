import { useEffect, useMemo, useState } from 'react';

import { Coords } from '../models';

export const useGeoLocation = (): Coords | null => {
  const [geoLocation, setGeoLocation] = useState<Coords | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => setGeoLocation(coords),
      () => setGeoLocation(null),
      {
        enableHighAccuracy: false,
        timeout: 60000,
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = useMemo(() => geoLocation, [geoLocation]);

  return value;
};
