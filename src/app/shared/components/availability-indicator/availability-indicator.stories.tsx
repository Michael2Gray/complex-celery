import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AvailabilityIndicator } from './availability-indicator.component';

export default {
  title: 'Atoms/Availability Indicator',
  component: AvailabilityIndicator,
} as ComponentMeta<typeof AvailabilityIndicator>;

const Template: ComponentStory<typeof AvailabilityIndicator> = (args) => (
  <div className="max-w-xs">
    <AvailabilityIndicator {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = { value: 10 };
