import { MdCheck, MdClose, MdWarning } from 'react-icons/md';

import { NotificationStatus } from './notification.model';

type NotificationStatusIconProps = { status: NotificationStatus };

export const NotificationStatusIcon = ({
  status,
}: NotificationStatusIconProps) => {
  const className = 'flex-none w-4 h-4 text-mono-700';

  switch (status) {
    case 'success':
      return <MdCheck className={className} />;
    case 'warning':
      return <MdWarning className={className} />;
    case 'error':
      return <MdClose className={className} />;
  }
};
