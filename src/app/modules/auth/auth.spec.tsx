import { screen } from '@testing-library/react';

import { renderWithProviders, waitForLoading } from '../../shared/utils';
import { Auth } from './auth.component';
import { AuthStatus } from './auth.enum';

describe('Auth', () => {
  test('renders children', async () => {
    renderWithProviders(<Auth>Test</Auth>);

    await waitForLoading();

    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('renders pending', async () => {
    renderWithProviders(<Auth>Test</Auth>, {
      initialState: { status: AuthStatus.FETCHING_USER },
    });

    expect(screen.getByText('Verifying User...')).toBeInTheDocument();
  });

  test('renders unauthenticated', async () => {
    renderWithProviders(<Auth>Test</Auth>, {
      initialState: { status: AuthStatus.UNAUTHENTICATED },
    });

    expect(
      screen.getByRole('heading', { name: "Let's prep some Veg!" })
    ).toBeInTheDocument();
  });
});
