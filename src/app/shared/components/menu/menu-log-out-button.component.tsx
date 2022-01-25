import { MouseEventHandler, ReactNode } from 'react';

import { TextButton } from '../button';

export type MenuLogOutButtonProps = {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const MenuLogOutButton = ({
  children,
  onClick,
}: MenuLogOutButtonProps) => (
  <TextButton
    className="-ml-0.5 text-xs text-white leading-none font-mono underline hover:no-underline transition-shadow"
    onClick={onClick}
  >
    {children}
  </TextButton>
);
