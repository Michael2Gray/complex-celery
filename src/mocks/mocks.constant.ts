const BASE_API_URL = '/mock-api';

const buildApiURL = (resource: string) => `${BASE_API_URL}/${resource}`;

export const URL_RESOURCE = {
  CONTRACTS: buildApiURL('contracts'),
  STATIONS: buildApiURL('stations'),
  WEATHER: buildApiURL('weather'),
};
