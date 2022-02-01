import { ReactNode } from 'react';

type CenteredColumnProps = { children: ReactNode };

export const CenteredColumn = ({ children }: CenteredColumnProps) => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="max-w-md w-full space-y-8">{children}</div>
  </div>
);
