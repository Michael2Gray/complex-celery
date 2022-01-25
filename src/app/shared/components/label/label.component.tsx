import { ReactNode } from 'react';
import clsx from 'clsx';

import { AppVariant } from '../../models';
import { LABEL_VARIANTS } from './label.constant';

export type LabelProps = {
  children: ReactNode;
  variant?: AppVariant;
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
