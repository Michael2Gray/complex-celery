import { render, screen } from '@testing-library/react';

import { Coords } from './coords.component';

describe('Coords', () => {
  test('renders positive latitude and longitude', () => {
    render(<Coords coords={{ latitude: 2, longitude: 2 }} icon={<div />} />);

    const directions = screen.getAllByTestId('coords-direction');

    expect(directions.length).toBe(2);
    expect(directions[0]).toHaveTextContent('2.00°N');
    expect(directions[1]).toHaveTextContent('2.00°E');
  });

  test('renders negative latitude and longitude', () => {
    render(<Coords coords={{ latitude: -2, longitude: -2 }} />);

    const directions = screen.getAllByTestId('coords-direction');

    expect(directions.length).toBe(2);
    expect(directions[0]).toHaveTextContent('2.00°S');
    expect(directions[1]).toHaveTextContent('2.00°W');
  });
});
