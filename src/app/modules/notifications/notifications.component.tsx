import { AnimatePresence } from 'framer-motion';

import { Notification } from './notification.component';
import { IdentifiableNotification } from './notification.model';
import { useNotifications } from './notifications.context';

/**
 * Component used for rendering (and animating) the "active" notification.
 */
export const Notifications = () => {
  const { notifications, removeNotification } = useNotifications();

  const activeNotification: IdentifiableNotification | undefined =
    notifications[0];

  return (
    <AnimatePresence exitBeforeEnter>
      {activeNotification && (
        <Notification
          key={activeNotification.id}
          {...activeNotification}
          onClear={removeNotification}
        />
      )}
    </AnimatePresence>
  );
};
