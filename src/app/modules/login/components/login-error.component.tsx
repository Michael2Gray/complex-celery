import { ReactNode } from 'react';

import { Alert } from '../../../shared/components';

type LoginErrorProps = {
  error: ReactNode;
  onClear: () => void;
};

export const LoginError = ({ error, onClear }: LoginErrorProps) => (
  <Alert
    variant="error"
    title={error}
    message="Please try again."
    onClear={onClear}
  />
);
