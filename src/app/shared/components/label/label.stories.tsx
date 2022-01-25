import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Label } from './label.component';

export default {
  title: 'Atoms/Label',
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => (
  <div className="flex">
    <Label {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Label',
};
