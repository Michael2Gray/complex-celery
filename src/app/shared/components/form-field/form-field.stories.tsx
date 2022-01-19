import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormField } from './form-field.component';

export default {
  title: 'Molecules/FormField',
  component: FormField,
} as ComponentMeta<typeof FormField>;

const Template: ComponentStory<typeof FormField> = (args) => (
  <div className="max-w-xs">
    <FormField {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Input label',
  id: 'input-id',
};

export const WithBottomText = Template.bind({});
WithBottomText.args = {
  label: 'Input label',
  helpText: 'Help text',
  id: 'input-id',
};

export const Invalid = Template.bind({});
Invalid.args = {
  label: 'Input label',
  helpText: 'Error message',
  isInvalid: true,
  id: 'input-id',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Input label',
  helpText: 'Help text',
  isDisabled: true,
  id: 'input-id',
};
