import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { PATHS } from '../../../routes';
import { renderRoute, waitForLoading } from '../../../shared/utils';
import { Login } from './login.route';

const fillLoginForm = (name: string = 'mgray@email.com') => {
  const emailInput = screen.getByRole('textbox', { name: 'Email' });
  const passwordInput = screen.getByLabelText('Password');

  userEvent.type(emailInput, name);
  userEvent.type(passwordInput, 'test');
};

describe('Login', () => {
  test('logs a user in successfully', async () => {
    renderRoute(<Login />);

    await waitForLoading();

    expect(
      await screen.findByRole('button', { name: 'Login' })
    ).toBeInTheDocument();

    fillLoginForm();

    userEvent.click(screen.getByRole('button', { name: 'Login' }));

    await waitFor(() => {
      expect(screen.getByTestId('pathname')).toHaveValue(PATHS.city);
    });
  });

  test('shows errors and focuses the first invalid input when required fields are not provided', async () => {
    renderRoute(<Login />);

    await waitForLoading();

    expect(
      await screen.findByRole('button', { name: 'Login' })
    ).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: 'Login' }));

    expect(await screen.findByText('Enter email address')).toBeInTheDocument();
    expect(screen.getByText('Enter password')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Email' })).toHaveFocus();
  });

  test('shows error if there is an invalid email', async () => {
    renderRoute(<Login />);

    await waitForLoading();

    expect(
      await screen.findByRole('button', { name: 'Login' })
    ).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox', { name: 'Email' }), 'test');
    userEvent.click(screen.getByRole('button', { name: 'Login' }));

    expect(
      await screen.findByText('Enter a valid email address')
    ).toBeInTheDocument();
  });

  test('handles an unsuccessful login', async () => {
    renderRoute(<Login />);

    await waitForLoading();

    expect(
      await screen.findByRole('button', { name: 'Login' })
    ).toBeInTheDocument();

    fillLoginForm('test@test');

    userEvent.click(screen.getByRole('button', { name: 'Login' }));

    expect(await screen.findByText('Unauthenticated User')).toBeInTheDocument();
    expect(await screen.findByText('Please try again.')).toBeInTheDocument();
  });
});
