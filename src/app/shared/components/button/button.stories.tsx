import { MdSave } from 'react-icons/md';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './button.component';

const meta: ComponentMeta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
};

export default meta;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: 'Button',
  startIcon: <MdSave />,
};
