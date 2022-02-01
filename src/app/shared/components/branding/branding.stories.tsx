import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Branding } from './branding.component';

const meta: ComponentMeta<typeof Branding> = {
  title: 'Molecules/Branding',
  component: Branding,
};

export default meta;

const Template: ComponentStory<typeof Branding> = (args) => (
  <Branding {...args} />
);

export const Default = Template.bind({});
Default.args = {
  withContent: true,
  withSubTitle: true,
};
