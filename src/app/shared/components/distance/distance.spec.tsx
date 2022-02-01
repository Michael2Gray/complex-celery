import { render, screen } from '@testing-library/react';

import { Distance } from './distance.component';

describe('Distance', () => {
  test('renders distance over 100', () => {
    render(<Distance distance={101} />);
    expect(screen.getByTestId('distance')).toHaveTextContent('101 km');
  });

  test('renders distance under 100', () => {
    render(<Distance distance={99} />);
    expect(screen.getByTestId('distance')).toHaveTextContent('99 km');
  });
});
