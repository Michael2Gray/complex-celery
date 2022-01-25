import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card } from './card.component';

export default {
  title: 'Atoms/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <div className="text-center p-4">This is a Card</div>,
};
