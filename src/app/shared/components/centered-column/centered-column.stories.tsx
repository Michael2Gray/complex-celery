import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CenteredColumn } from './centered-column.component';

export default {
  title: 'Atoms/Centered Column',
  component: CenteredColumn,
} as ComponentMeta<typeof CenteredColumn>;

const Template: ComponentStory<typeof CenteredColumn> = (args) => (
  <CenteredColumn {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: <div className="text-center p-4">This is a Centered Column</div>,
};
