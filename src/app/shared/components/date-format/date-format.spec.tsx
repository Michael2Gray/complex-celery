import { screen } from '@testing-library/react';

import { renderWithProviders, waitForLoading } from '../../utils';
import { DateFormat } from './date-format.component';

describe('DateFormat', () => {
  test('renders the date format', async () => {
    renderWithProviders(<DateFormat date={new Date(2020, 0, 1)} />);

    await waitForLoading();

    expect(screen.getByText('Wed, 1 Jan 2020')).toBeInTheDocument();
  });

  test('renders the date and time format', async () => {
    renderWithProviders(<DateFormat date={new Date(2020, 0, 1)} withTime />);

    await waitForLoading();

    expect(screen.getByText('Wed, 1 Jan 2020 00:00:00')).toBeInTheDocument();
  });
});
