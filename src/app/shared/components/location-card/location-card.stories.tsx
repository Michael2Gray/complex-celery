import { ComponentMeta, ComponentStory } from '@storybook/react';
import { motion } from 'framer-motion';

import { getSvgSrcFromCountry } from '../../../modules/country/components/country-flag/country-icon.util';
import { Grid } from '../grid';
import { LocationCard } from './location-card.component';

export default {
  title: 'Molecules/Location Card',
  component: LocationCard,
} as ComponentMeta<typeof LocationCard>;

const Template: ComponentStory<typeof LocationCard> = (args) => (
  <Grid>
    <LocationCard {...args} />
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  children: <div>Location Card</div>,
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01n',
    },
  ],
  flag: (
    <div className="h-20 w-20 mr-2">
      <motion.img src={getSvgSrcFromCountry('Sweden', ['Sweden'])} />
    </div>
  ),
};
