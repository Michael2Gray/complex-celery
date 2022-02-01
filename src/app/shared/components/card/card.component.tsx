import { ReactNode } from 'react';
import clsx from 'clsx';

import { Divider } from '../divider';

type CardProps = {
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
  'data-testid'?: string;
};

export const Card = ({ children, footer, className, ...props }: CardProps) => (
  <section
    className={clsx('relative rounded bg-white p-6 shadow-sm', className)}
    data-testid={props['data-testid'] ?? 'card'}
  >
    {children}

    {!!footer && (
      <footer>
        <Divider className="my-2" />
        <>{footer}</>
      </footer>
    )}
  </section>
);
