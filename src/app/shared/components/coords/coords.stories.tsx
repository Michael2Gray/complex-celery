import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Coords } from './coords.component';

export default {
  title: 'Atoms/Coords',
  component: Coords,
} as ComponentMeta<typeof Coords>;

const Template: ComponentStory<typeof Coords> = (args) => <Coords {...args} />;

export const Default = Template.bind({});
Default.args = {
  coords: { latitude: 10, longitude: 10 },
};
