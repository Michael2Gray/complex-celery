import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card } from '../card';
import { Grid } from './grid.component';

export default {
  title: 'Atoms/Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Card>Card 1</Card>
      <Card>Card 2</Card>
      <Card>Card 3</Card>
      <Card>Card 4</Card>
      <Card>Card 5</Card>
      <Card>Card 6</Card>
    </>
  ),
};
