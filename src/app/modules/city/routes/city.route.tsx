import { useConfig } from '../../../config';

export const CityRoute = () => {
  const config = useConfig();

  return <div>{config.city.name}</div>;
};
