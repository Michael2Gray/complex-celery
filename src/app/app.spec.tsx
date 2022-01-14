import { render, screen } from '@testing-library/react';

import { App } from './app';

describe('App', () => {
  test('renders', async () => {
    render(<App />);

    expect(screen.getByText('Hello world!')).toBeInTheDocument();
  });
});
