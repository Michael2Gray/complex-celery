import { render, screen } from '@testing-library/react';

import { waitForLoading } from './shared/utils';
import { App } from './app';
import { DEFAULT_CONFIG } from './config';

describe('App', () => {
  test('renders', async () => {
    render(<App config={DEFAULT_CONFIG} />);

    await waitForLoading('Verifying User');

    expect(
      screen.getByRole('heading', { name: 'Complex Celery' })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });
});
