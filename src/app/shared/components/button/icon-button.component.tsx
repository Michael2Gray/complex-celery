import React from 'react';
import clsx from 'clsx';

import { Loader } from '../loader';
import {
  ButtonBase,
  ButtonBasePublicProps,
  ButtonIconWrapper,
} from './components';

const sizes = {
  sm: 'p-2',
  md: 'p-3',
};

export type IconButtonProps = ButtonBasePublicProps & {
  /**
   * Used for accessible name (using aria-label)
   */
  label: string;
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, size = 'md', label, isLoading, ...props }, ref) => (
    <ButtonBase
      ref={ref}
      aria-label={label}
      isLoading={isLoading}
      className={clsx(sizes[size])}
      {...props}
    >
      {isLoading ? (
        <Loader size={size} />
      ) : (
        <ButtonIconWrapper size={size}>{children}</ButtonIconWrapper>
      )}
    </ButtonBase>
  )
);

IconButton.displayName = 'IconButton';
