import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Temperature } from './temperature.component';

export default {
  title: 'Atoms/Temperature',
  component: Temperature,
} as ComponentMeta<typeof Temperature>;

const Template: ComponentStory<typeof Temperature> = (args) => (
  <Temperature {...args} />
);

export const Default = Template.bind({});
Default.args = {
  temperature: 10,
};
