import { render, screen } from '@testing-library/react';

import { Temperature } from './temperature.component';
import { getTempVariant } from './temperature.util';

describe('Temperature', () => {
  test.each([20, 15, 9])('renders the temperature', (temperature) => {
    render(<Temperature temperature={temperature} />);

    expect(screen.getByTestId('temperature')).toHaveTextContent(
      `${temperature}°C`
    );
  });

  test('getTempVariant', () => {
    expect(getTempVariant(20)).toBe('high');
    expect(getTempVariant(15)).toBe('medium');
    expect(getTempVariant(9)).toBe('low');
  });
});
