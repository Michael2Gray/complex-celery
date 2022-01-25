import { ReactNode } from 'react';
import clsx from 'clsx';

export const LABEL_VARIANTS = {
  default: clsx('bg-neutral-400 text-white'),
  brand: clsx('bg-brand-400 text-white'),
  error: clsx('bg-red-400 text-white'),
  warning: clsx('bg-yellow-400 text-white'),
};

export type LabelProps = {
  children: ReactNode;
  variant?: keyof typeof LABEL_VARIANTS;
  className?: string;
};

export const Label = ({
  variant = 'default',
  children,
  className,
}: LabelProps) => (
  <div
    className={clsx(
      'px-2 py-1 rounded text-xs font-bold',
      LABEL_VARIANTS[variant],
      className
    )}
  >
    {children}
  </div>
);
