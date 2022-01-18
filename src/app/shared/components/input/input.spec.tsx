import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { Input } from './input.component';

describe('Input', () => {
  test('has no accessibility violations', async () => {
    const { container } = render(
      <Input isInvalid={false} placeholder="placeholder" id="my-input" />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  test('invokes the callback after on change event', async () => {
    const onChange = jest.fn();
    render(<Input onChange={onChange} placeholder="input" />);
    const input = screen.getByPlaceholderText('input');

    userEvent.type(input, 'text');

    expect(onChange).toHaveBeenCalled();
  });

  test('renders an icon to the left of the label', async () => {
    render(<Input icon={<div data-testid="icon" />} iconPosition="start" />);

    screen.getByTestId('icon');
  });

  test('renders an icon to the right of the label', async () => {
    render(<Input icon={<div data-testid="icon" />} />);

    screen.getByTestId('icon');
  });
});
