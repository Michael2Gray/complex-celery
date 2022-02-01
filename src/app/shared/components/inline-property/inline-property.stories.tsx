import { ComponentMeta, ComponentStory } from '@storybook/react';

import { InlineProperty } from './inline-property.component';

export default {
  title: 'Atoms/Inline Property',
  component: InlineProperty,
} as ComponentMeta<typeof InlineProperty>;

const Template: ComponentStory<typeof InlineProperty> = (args) => (
  <InlineProperty {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  children: 'Value',
};
