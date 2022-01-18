import { MdSearch } from 'react-icons/md';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Input } from './input.component';

export default {
  title: 'Atoms/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <div className="max-w-xs">
    <Input {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Input placeholder',
  isInvalid: false,
};

export const DefaultWithIcon = Template.bind({});
DefaultWithIcon.args = {
  isInvalid: false,
  isRequired: true,
  icon: <MdSearch />,
  iconPosition: 'start',
  placeholder: 'Input placeholder',
};

export const DefaultWithoutPlaceholder = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  isInvalid: true,
  isRequired: false,
  placeholder: 'Error placeholder',
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Input placeholder',
  isDisabled: true,
};
