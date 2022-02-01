import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Legend } from './legend.component';

const meta: ComponentMeta<typeof Legend> = {
  title: 'Atoms/Legend',
  component: Legend,
};

export default meta;

const Template: ComponentStory<typeof Legend> = (args) => <Legend {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Personal Details',
};
