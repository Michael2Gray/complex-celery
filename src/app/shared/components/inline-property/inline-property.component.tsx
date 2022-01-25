import { ReactNode } from 'react';
import clsx from 'clsx';

type InlinePropertyProps = {
  label: ReactNode;
  children: ReactNode;
  className?: string;
};

export const InlineProperty = ({
  label,
  className,
  children,
}: InlinePropertyProps) => (
  <div className={clsx('flex items-center', className)}>
    <div className="mr-1">{label}</div>
    <strong>{children}</strong>
  </div>
);
