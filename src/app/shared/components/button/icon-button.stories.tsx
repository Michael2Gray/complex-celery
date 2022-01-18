import { MdSave } from 'react-icons/md';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IconButton } from './icon-button.component';

const meta: ComponentMeta<typeof IconButton> = {
  title: 'Atoms/IconButton',
  component: IconButton,
};

export default meta;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: <MdSave />,
  label: 'Save',
};
