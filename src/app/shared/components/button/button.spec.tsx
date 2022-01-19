import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { Button } from './button.component';

describe('button', () => {
  test('has no accessibility violations', async () => {
    const { container } = render(<Button>Label</Button>);

    expect(await axe(container)).toHaveNoViolations();
  });

  test('invokes the callback on click event', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Label</Button>);

    userEvent.click(screen.getByRole('button', { name: 'Label' }));

    expect(onClick).toHaveBeenCalled();
  });

  test('renders an icon to the left of the label', () => {
    render(<Button startIcon={<div data-testid="icon" />}>Label</Button>);

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  test('renders an icon to the right of the label', () => {
    render(<Button endIcon={<div data-testid="icon" />}>Label</Button>);

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  test('disables the button when isLoading is true', () => {
    render(<Button isLoading={true}>Label</Button>);

    expect(screen.getByRole('button', { name: 'Label' })).toBeDisabled();
  });

  test('hides the icon to the left of the label when isLoading is true', async () => {
    render(
      <Button startIcon={<div data-testid="icon" />} isLoading={true}>
        Label
      </Button>
    );

    expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
  });

  test('hides the icon to the right of the label when isLoading is true', () => {
    render(
      <Button endIcon={<div data-testid="icon" />} isLoading={true}>
        Label
      </Button>
    );

    expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
  });
});
