import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Distance } from './distance.component';

export default {
  title: 'Atoms/Distance',
  component: Distance,
} as ComponentMeta<typeof Distance>;

const Template: ComponentStory<typeof Distance> = (args) => (
  <Distance {...args} />
);

export const Default = Template.bind({});
Default.args = {
  distance: 10,
};
