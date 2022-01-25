import clsx from 'clsx';

import { useTimeout } from '../../hooks';
import { Heading } from '../heading';

type AlertProps = {
  title: React.ReactNode;
  variant?: 'info' | 'success' | 'error' | 'warning';
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
        {
          'bg-blue-100 border-blue-800': variant === 'info',
          'bg-brand-100 border-brand-800': variant === 'success',
          'bg-red-100 border-red-800': variant === 'error',
          'bg-yellow-200 border-yellow-700': variant === 'warning',
        },
        className
      )}
      onMouseEnter={stopTimeout}
      onMouseLeave={startTimeout}
    >
      <Heading
        level={2}
        size="sm"
        className={clsx({
          'text-blue-800': variant === 'info',
          'text-brand-800': variant === 'success',
          'text-red-800': variant === 'error',
          'text-yellow-700': variant === 'warning',
        })}
      >
        {title}
      </Heading>
      {message && <p className="text-sm">{message}</p>}
    </div>
  );
};
