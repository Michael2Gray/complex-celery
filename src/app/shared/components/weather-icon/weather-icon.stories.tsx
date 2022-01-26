import { ComponentMeta, ComponentStory } from '@storybook/react';

import { WeatherIcon } from './weather-icon.component';

const meta: ComponentMeta<typeof WeatherIcon> = {
  title: 'Atoms/Weather Icon',
  component: WeatherIcon,
};

export default meta;

const Template: ComponentStory<typeof WeatherIcon> = (args) => (
  <WeatherIcon className="w-8 h-8" {...args} />
);

export const Default = Template.bind({});
Default.args = {
  weather: {
    id: 800,
    main: 'Clear',
    description: 'clear sky',
    icon: '01n',
  },
};
