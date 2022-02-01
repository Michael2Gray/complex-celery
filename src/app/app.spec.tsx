import { render } from '@testing-library/react';

import { App } from './app';
import { DEFAULT_CONFIG } from './config';

describe('App', () => {
  test('renders', () => {
    render(<App config={DEFAULT_CONFIG} />);
  });
});
