import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TextButton } from './text-button.component';

const meta: ComponentMeta<typeof TextButton> = {
  title: 'Atoms/TextButton',
  component: TextButton,
};

export default meta;

const Template: ComponentStory<typeof TextButton> = (args) => (
  <TextButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Label',
};
