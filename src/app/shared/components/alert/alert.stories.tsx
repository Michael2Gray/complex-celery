import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Alert } from './alert.component';

export default {
  title: 'Molecules/Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => (
  <div className="max-w-xs">
    <Alert {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Alert Title',
  message: 'Alert message...',
};
