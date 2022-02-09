import { ReactNode } from 'react';
import clsx from 'clsx';

import { useTimeout } from '../../hooks';
import { AppVariant } from '../../models';
import { Heading } from '../heading';
import { ALERT_VARIANTS, HEADING_VARIANTS } from './alert.constant';

type AlertProps = {
  title: ReactNode;
  variant?: AppVariant;
  message?: ReactNode;
  className?: string;
  onClear: () => void;
};

export const Alert = ({
  variant = 'default',
  title,
  message,
  className,
  onClear,
}: AlertProps) => {
  const { startTimeout, stopTimeout } = useTimeout({
    duration: 10000,
    onTimeout: onClear,
  });

  return (
    <div
      className={clsx('rounded-md p-3', ALERT_VARIANTS[variant], className)}
      onMouseEnter={stopTimeout}
      onMouseLeave={startTimeout}
    >
      <Heading level={2} size="sm" className={clsx(HEADING_VARIANTS[variant])}>
        {title}
      </Heading>
      {message && <p className="text-sm">{message}</p>}
    </div>
  );
};
