import { screen } from '@testing-library/react';

import { AuthStatus } from '../modules/auth';
import { renderWithRouter } from '../shared/utils';
import { PATHS } from './paths.constants';
import { AppRoutes } from './routes';

describe('AppRoutes', () => {
  test('renders the dashboard by default', () => {
    renderWithRouter(<AppRoutes />);

    expect(screen.getByTestId('pathname')).toHaveValue(PATHS.dashboard);
  });

  test('renders the login if the app has an UNAUTHENTICATED status', () => {
    renderWithRouter(<AppRoutes />, {
      initialState: { status: AuthStatus.UNAUTHENTICATED },
    });

    expect(screen.getByText('This is the Login')).toBeInTheDocument();
  });
});
