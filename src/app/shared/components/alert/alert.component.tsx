import clsx from 'clsx';

import { useTimeout } from '../../hooks';
import { Heading } from '../heading';
import { ALERT_VARIANTS } from './alert.constant';
import { AlertVariant } from './alert.model';

type AlertProps = {
  title: React.ReactNode;
  variant?: AlertVariant;
  message?: React.ReactNode;
  className?: string;
  onClear: () => void;
};

export const Alert = ({
  variant = 'info',
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
      className={clsx(
        'rounded-md p-3',
        ALERT_VARIANTS[variant].body,
        className
      )}
      onMouseEnter={stopTimeout}
      onMouseLeave={startTimeout}
    >
      <Heading
        level={2}
        size="sm"
        className={clsx(ALERT_VARIANTS[variant].title)}
      >
        {title}
      </Heading>
      {message && <p className="text-sm">{message}</p>}
    </div>
  );
};
