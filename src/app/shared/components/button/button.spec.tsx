import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './button.component';

describe('Button', () => {
  test('invokes the callback on click event', async () => {
    const onClick = jest.fn();
    render(<Button label="Label" onClick={onClick} />);

    userEvent.click(screen.getByRole('button', { name: 'Label' }));

    expect(onClick).toHaveBeenCalled();
  });
});
