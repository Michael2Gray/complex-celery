import clsx from 'clsx';
import { motion } from 'framer-motion';

import { NOTIFICATION_STATUSES } from './notification.constant';
import { NotificationStatus as Status } from './notification.model';
import { NotificationStatusIcon } from './notification-status-icon.component';

export type NotificationStatusProps = {
  status: Status;
};

export const NotificationStatus = ({ status }: NotificationStatusProps) => {
  return (
    <div className="flex items-center space-x-2">
      <motion.div
        className={clsx(
          'flex-none w-4 h-4 rounded-full',
          NOTIFICATION_STATUSES[status]
        )}
        animate={{
          opacity: [1, 0],
        }}
        transition={{
          repeat: Infinity,
          // custom ease function to prevent opacity transition
          ease: (progress) => {
            if (progress < 0.5) {
              return 0;
            }

            if (progress === 1) {
              return 0;
            }

            return 1;
          },
        }}
      />

      <NotificationStatusIcon status={status} />
    </div>
  );
};
