import { useCallback } from 'react';
import { motion } from 'framer-motion';

import { TextButton } from '../../shared/components';
import { useTimeout } from '../../shared/hooks';
import { IdentifiableNotification } from './notification.model';
import { NotificationStatus } from './notification-status.component';

export type NotificationProps = IdentifiableNotification & {
  onClear: () => void;
};

export const Notification = ({
  message,
  action,
  status,
  onClear,
}: NotificationProps) => {
  const { startTimeout, stopTimeout } = useTimeout({
    duration: 10000,
    onTimeout: onClear,
  });

  const handleActionClick = useCallback(() => {
    onClear();
    action?.onClick();
  }, [action, onClear]);

  return (
    <motion.div
      className="flex items-center space-x-2 px-6 py-2 bg-mono-20 border-b border-mono-80"
      initial={{ translateY: '-100%' }}
      animate={{
        translateY: '0px',
        transition: { ease: 'easeOut' },
      }}
      exit={{ translateY: '-100%', transition: { ease: 'easeIn' } }}
      transition={{
        duration: 0.75,
      }}
      onMouseEnter={stopTimeout}
      onMouseLeave={startTimeout}
    >
      {status && (
        <div className="flex-none">
          <NotificationStatus status={status} />
        </div>
      )}
      <div role="alert" className="flex-1 truncate text-sm text-mono-700">
        {message}
      </div>
      <div className="flex-none flex space-x-6">
        {action && (
          <TextButton onClick={handleActionClick}>{action.label}</TextButton>
        )}
        <TextButton onClick={onClear}>Close</TextButton>
      </div>
    </motion.div>
  );
};
