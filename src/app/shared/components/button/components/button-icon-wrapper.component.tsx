import { ReactNode } from 'react';
import clsx from 'clsx';

type ButtonIconWrapperProps = {
  children: ReactNode;
  size: 'sm' | 'md';
};

export const ButtonIconWrapper = ({
  children,
  size,
}: ButtonIconWrapperProps) => (
  <div
    className={clsx('leading-none', {
      'text-base ': size === 'sm',
      'text-2xl': size === 'md',
    })}
  >
    {children}
  </div>
);
