import { ComponentMeta, ComponentStory } from '@storybook/react';

import { WeatherIcon } from './weather-icon.component';

const meta: ComponentMeta<typeof WeatherIcon> = {
  title: 'Atoms/WeatherIcon',
  component: WeatherIcon,
};

export default meta;

const Template: ComponentStory<typeof WeatherIcon> = (args) => (
  <WeatherIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {};
