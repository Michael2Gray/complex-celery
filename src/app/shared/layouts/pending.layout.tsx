import { ReactNode } from 'react';
import clsx from 'clsx';

import { Loader } from '../components';

type PendingProps = {
  children: ReactNode;
  className?: string;
};

export const Pending = ({ children, className }: PendingProps) => (
  <div className={clsx('flex flex-col items-center', className)}>
    <Loader />
    {children}
  </div>
);
