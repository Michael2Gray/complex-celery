import { NOTIFICATION_STATUSES } from './notification.constant';

export type Notification = {
  message: React.ReactNode;
  action?: NotificationAction;
  status?: 'success' | 'warning' | 'error';
};

export type NotificationAction = {
  label: string;
  onClick: () => void;
};

export type IdentifiableNotification = Notification & {
  id: string;
};

export type NotificationStatus = keyof typeof NOTIFICATION_STATUSES;
