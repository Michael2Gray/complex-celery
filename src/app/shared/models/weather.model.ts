export type WeatherBase = 'stations';

export type WeatherClouds = { all: number };

export type WeatherCoords = { lon: number; lat: number };

export type WeatherMain = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
};

export type WeatherSun = {
  type?: number;
  id?: number;
  country: string;
  message?: number;
  sunrise: number;
  sunset: number;
};

export type WeatherInfoMain =
  | 'Clouds'
  | 'Rain'
  | 'Clear'
  | 'Mist'
  | 'Snow'
  | 'Thunderstorm'
  | 'Fog';

export type WeatherInfoDescription =
  | 'few clouds'
  | 'overcast clouds'
  | 'clear sky'
  | 'broken clouds'
  | 'light rain'
  | 'scattered clouds'
  | 'very heavy rain'
  | 'shower rain'
  | 'mist'
  | 'thunderstorm'
  | 'fog';

export type WeatherInfo = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

export type WeatherWind = {
  speed: number;
  deg: number;
  gust?: number;
};

export type Weather = {
  base: string;
  clouds: WeatherClouds | null;
  cod: number;
  coord: WeatherCoords | null;
  dt: number;
  id: number;
  main: WeatherMain | null;
  name: string;
  sys: WeatherSun | null;
  timezone: number;
  visibility: number;
  weather: WeatherInfo[];
  wind: WeatherWind | null;
};
