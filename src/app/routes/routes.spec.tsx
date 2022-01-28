import { screen } from '@testing-library/react';

import { AuthStatus } from '../modules/auth';
import { renderWithRouter } from '../shared/utils';
import { PATHS } from './paths.constants';
import { AppRoutes } from './routes';

describe('AppRoutes', () => {
  test('renders the initial city by default', () => {
    renderWithRouter(<AppRoutes />);

    expect(screen.getByTestId('pathname')).toHaveValue(PATHS.city);
  });

  test('renders the login if the app has an UNAUTHENTICATED status', () => {
    renderWithRouter(<AppRoutes />, {
      initialState: { status: AuthStatus.UNAUTHENTICATED },
    });

    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });
});
