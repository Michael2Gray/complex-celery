import { MdNotifications } from 'react-icons/md';
import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../../shared/components';
import { Notification } from './notification.component';
import { Notifications } from './notifications.component';
import {
  NotificationsProvider,
  useNotifications,
} from './notifications.context';

const meta: ComponentMeta<typeof Notification> = {
  title: 'Molecules/Notification',
  component: Notification,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <NotificationsProvider>
        <Story />
      </NotificationsProvider>
    ),
  ],
};

export default meta;

const Template: ComponentStory<typeof Notification> = (args) => (
  <Notification {...args} />
);

export const Default = Template.bind({});
Default.args = {
  message: 'Notification message',
};

export const WithStatusIndicator = Template.bind({});
WithStatusIndicator.args = {
  message: 'Notification message with a success status indicator',
  status: 'success',
};

export const WithAction = Template.bind({});
WithAction.args = {
  message: 'Notification message with an action button',
  action: {
    label: 'Edit',
    onClick: action('onActionClick'),
  },
};

export const Multiple = () => {
  const { addNotification } = useNotifications();

  return (
    <div>
      <div className="absolute w-full">
        <Notifications />
      </div>
      <div className="p-4 pt-16">
        <Button
          startIcon={<MdNotifications />}
          onClick={() =>
            addNotification({
              status: 'success',
              message: 'Notification message',
            })
          }
        >
          Add notification
        </Button>
      </div>
    </div>
  );
};
