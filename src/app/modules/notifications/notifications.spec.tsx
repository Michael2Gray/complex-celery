import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Notification } from './notification.model';
import { Notifications } from './notifications.component';
import {
  NotificationsProvider,
  useNotifications,
} from './notifications.context';

const TestComponent = ({
  message,
  action,
  status = 'success',
}: Notification) => {
  const { addNotification } = useNotifications();

  return (
    <button
      type="button"
      data-testid="addNotification"
      onClick={() =>
        addNotification({
          message,
          action,
          status,
        })
      }
    />
  );
};

const renderNotifications = ({
  message = 'Notification message',
  action,
  status,
}: Partial<Notification> = {}) =>
  render(
    <NotificationsProvider>
      <Notifications />
      <TestComponent message={message} action={action} status={status} />
    </NotificationsProvider>
  );

describe('Notifications', () => {
  test('displays the provided notification message', async () => {
    renderNotifications({ status: 'error' });

    userEvent.click(screen.getByTestId('addNotification'));

    expect(screen.getByText('Notification message')).toBeInTheDocument();
  });

  test('displays only one notification at a time', async () => {
    renderNotifications({ status: 'warning' });

    userEvent.click(screen.getByTestId('addNotification'));
    userEvent.click(screen.getByTestId('addNotification'));

    expect(screen.queryAllByText('Notification message').length).toEqual(1);
  });

  test('closes after clicking on the Close button', async () => {
    renderNotifications();

    userEvent.click(screen.getByTestId('addNotification'));

    expect(screen.getByText('Notification message')).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: 'Close' }));

    await waitForElementToBeRemoved(() =>
      screen.queryByText('Notification message')
    );
  });

  test('displays the action button and invokes the handler on click', async () => {
    const onClick = jest.fn();

    renderNotifications({
      action: {
        label: 'Action label',
        onClick,
      },
    });

    userEvent.click(screen.getByTestId('addNotification'));

    userEvent.click(screen.getByRole('button', { name: 'Action label' }));

    expect(onClick).toHaveBeenCalled();
  });
});
