import { ReactNode } from 'react';
import clsx from 'clsx';

type UnauthenticatedLayoutProps = { children: ReactNode; className?: string };

export const UnauthenticatedLayout = ({
  children,
  className,
}: UnauthenticatedLayoutProps) => (
  <div className={clsx('relative', className)}>{children}</div>
);
