import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DateFormat } from './date-format.component';

export default {
  title: 'Atoms/DateFormat',
  component: DateFormat,
} as ComponentMeta<typeof DateFormat>;

const Template: ComponentStory<typeof DateFormat> = (args) => (
  <DateFormat {...args} />
);

export const Default = Template.bind({});
Default.args = {
  date: new Date(2020, 0, 1),
};
