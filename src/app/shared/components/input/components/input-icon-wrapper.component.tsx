import React from 'react';
import clsx from 'clsx';

export type InputIconWrapperProps = {
  icon: React.ReactElement;
  iconPosition: 'start' | 'end';
};

const iconStyles = {
  left: 'left-1 pl-2',
  right: 'right-1 pr-2',
};

export const InputIconWrapper = ({
  icon,
  iconPosition,
}: InputIconWrapperProps) => {
  const positionStyling =
    iconPosition === 'start' ? iconStyles.left : iconStyles.right;
  return (
    <div
      className={clsx(
        'text-2xl absolute top-3 text-neutral-600 pointer-events-none',
        positionStyling
      )}
    >
      {icon}
    </div>
  );
};
