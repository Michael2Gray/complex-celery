import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { FormField } from './form-field.component';

describe('FormField', () => {
  test('has no accessibility violations', async () => {
    const { container } = render(<FormField name="id" label="label" />);

    expect(await axe(container)).toHaveNoViolations();
  });

  test('shows error message', () => {
    const errorMessage = 'Error message';
    render(
      <FormField
        label="label"
        name="id"
        isInvalid={true}
        helpText={errorMessage}
      />
    );

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  test('has label', () => {
    const label = 'Label';
    render(<FormField label={label} name="id" />);

    expect(screen.getByText(label)).toBeInTheDocument();
  });

  test('invokes the callback after on change event', async () => {
    const onChange = jest.fn();
    render(
      <FormField
        name="form-field-id"
        label="label"
        onChange={onChange}
        placeholder="input"
      />
    );
    const input = screen.getByPlaceholderText('input');

    userEvent.type(input, 'text');

    expect(onChange).toHaveBeenCalled();
  });
});
