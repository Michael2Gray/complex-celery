import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { IconButton } from './icon-button.component';

describe('IconButton', () => {
  test('has no accessibility violations', async () => {
    const { container } = render(
      <IconButton label="Label">
        <div data-testid="icon" />
      </IconButton>
    );

    expect(await axe(container)).toHaveNoViolations();
  });

  test('renders a label for screen readers', async () => {
    render(
      <IconButton label="Label">
        <div data-testid="icon" />
      </IconButton>
    );

    expect(screen.getByRole('button', { name: 'Label' })).toBeInTheDocument();
  });

  test('hides the icon and disables the button when isLoading is true', async () => {
    render(
      <IconButton label="Label" isLoading={true}>
        <div data-testid="icon" />
      </IconButton>
    );

    expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Label' })).toBeDisabled();
  });
});
