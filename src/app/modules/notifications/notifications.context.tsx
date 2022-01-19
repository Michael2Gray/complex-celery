import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';

import { useContextFallback } from '../../shared/hooks';
import { IdentifiableNotification, Notification } from './notification.model';

let notificationCounter = 0;

export type NotificationsContextState = {
  notifications: IdentifiableNotification[];
  addNotification: (notification: Notification) => void;
  removeNotification: () => void;
};

const NotificationsContext = createContext<
  NotificationsContextState | undefined
>(undefined);
NotificationsContext.displayName = 'NotificationsContext';

export type NotificationsProviderProps = {
  children: ReactNode;
};

export const NotificationsProvider = ({
  children,
}: NotificationsProviderProps) => {
  const [notifications, setNotifications] = useState<
    IdentifiableNotification[]
  >([]);

  const addNotification = useCallback(
    (notification: Notification) =>
      setNotifications((notifications) => [
        ...notifications,
        {
          ...notification,
          id: `${notificationCounter++}`,
        },
      ]),
    []
  );

  const removeNotification = useCallback(
    () => setNotifications((notifications) => notifications.slice(1)),
    []
  );

  const value = useMemo(
    () => ({
      notifications,
      addNotification,
      removeNotification,
    }),
    [notifications, addNotification, removeNotification]
  );

  return (
    <NotificationsContext.Provider value={value}>
      {children}
    </NotificationsContext.Provider>
  );
};

export const useNotifications = () => useContextFallback(NotificationsContext);
