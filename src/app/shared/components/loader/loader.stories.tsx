import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Loader } from './loader.component';

const meta: ComponentMeta<typeof Loader> = {
  title: 'Atoms/Loader',
  component: Loader,
};

export default meta;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {};
