import { toHaveNoViolations } from 'jest-axe';

import '@testing-library/jest-dom';

expect.extend(toHaveNoViolations);

process.env.VITE_API_URL = '/mock-api';
