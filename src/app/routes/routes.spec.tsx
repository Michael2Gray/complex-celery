import { screen, waitForElementToBeRemoved } from '@testing-library/react';

import { AuthStatus } from '../modules/auth';
import { renderWithRouter } from '../shared/utils';
import { PATHS } from './paths.constants';
import { AppRoutes } from './routes';

describe('AppRoutes', () => {
  test('renders the initial home route by default', async () => {
    renderWithRouter(<AppRoutes />);

    await waitForElementToBeRemoved(() =>
      screen.getByText('Chopping Celery...')
    );

    expect(screen.getByTestId('pathname')).toHaveValue(PATHS.home);
  });

  test('renders the login if the app has an UNAUTHENTICATED status', async () => {
    renderWithRouter(<AppRoutes />, {
      initialState: { status: AuthStatus.UNAUTHENTICATED },
    });

    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });
});
