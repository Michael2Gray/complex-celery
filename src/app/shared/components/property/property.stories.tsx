import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Property } from './property.component';

export default {
  title: 'Atoms/Property',
  component: Property,
} as ComponentMeta<typeof Property>;

const Template: ComponentStory<typeof Property> = (args) => (
  <Property {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  children: 'Value',
};
