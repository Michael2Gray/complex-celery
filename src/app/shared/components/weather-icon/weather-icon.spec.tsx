import { render, screen } from '@testing-library/react';

import { WeatherInfoMain } from '../../models';
import { WeatherIcon } from './weather-icon.component';

describe('WeatherIcon', () => {
  const weathers: (WeatherInfoMain | undefined)[] = [
    'Clear',
    'Clouds',
    'Fog',
    'Mist',
    'Rain',
    'Snow',
    'Thunderstorm',
    undefined,
  ];

  test.each(weathers)(
    'the correct weather icon is rendered for %p',
    (weather) => {
      render(<WeatherIcon weather={weather} />);

      expect(
        screen.getByRole('img', { name: `Weather ${weather}` })
      ).toBeInTheDocument();
    }
  );
});
