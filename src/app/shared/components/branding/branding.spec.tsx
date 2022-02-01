import { render, screen } from '@testing-library/react';

import { Branding } from './branding.component';

describe('Branding', () => {
  test('renders the default branding', () => {
    render(<Branding />);

    expect(
      screen.queryByRole('heading', { name: 'Complex Celery' })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText('Is not what it seems...')
    ).not.toBeInTheDocument();
  });

  test('renders the branding heading', () => {
    render(<Branding type="alt" withContent />);

    expect(
      screen.getByRole('heading', { name: 'Complex Celery' })
    ).toBeInTheDocument();
    expect(
      screen.queryByText('Is not what it seems...')
    ).not.toBeInTheDocument();
  });

  test('renders all the branding', () => {
    render(<Branding withContent withSubTitle />);

    expect(
      screen.getByRole('heading', { name: 'Complex Celery' })
    ).toBeInTheDocument();
    expect(screen.getByText('Is not what it seems...')).toBeInTheDocument();
  });
});
