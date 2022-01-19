import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Heading } from './heading.component';

export default {
  title: 'Atoms/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <div className="max-w-xs">
    <Heading {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Heading',
};
