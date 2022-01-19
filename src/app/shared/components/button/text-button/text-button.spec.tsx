import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { TextButton } from './text-button.component';

describe('TextButton', () => {
  test('has no accessibility violations', async () => {
    const { container } = render(<TextButton>Label</TextButton>);

    expect(await axe(container)).toHaveNoViolations();
  });

  test('invokes the callback on click event', async () => {
    const onClick = jest.fn();
    render(<TextButton onClick={onClick}>Label</TextButton>);

    userEvent.click(screen.getByRole('button', { name: 'Label' }));

    expect(onClick).toHaveBeenCalled();
  });
});
