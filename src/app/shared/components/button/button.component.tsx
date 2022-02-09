import { forwardRef, ReactElement } from 'react';
import clsx from 'clsx';

import { Loader } from '../loader';
import {
  ButtonBase,
  ButtonBasePublicProps,
  ButtonIconWrapper,
} from './components';

const sizes = {
  sm: 'text-sm p-2',
  md: 'text-base px-4 py-3',
};

type IconProps =
  | { startIcon: ReactElement; endIcon?: never }
  | { endIcon: ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined };

export type ButtonProps = ButtonBasePublicProps & IconProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { size = 'md', isLoading = false, startIcon, endIcon, children, ...props },
    ref
  ) => {
    const isMainLoaderVisible = isLoading && !startIcon && !endIcon;

    return (
      <ButtonBase
        ref={ref}
        className={clsx(sizes[size])}
        isLoading={isLoading}
        {...props}
      >
        {startIcon && (
          <div className="mr-2">
            {isLoading ? (
              <Loader size={size} />
            ) : (
              <ButtonIconWrapper size={size}>{startIcon}</ButtonIconWrapper>
            )}
          </div>
        )}
        <div
          className={clsx({
            invisible: isMainLoaderVisible,
          })}
        >
          {children}
        </div>
        {isMainLoaderVisible && (
          <div className="absolute">
            <Loader size={size} />
          </div>
        )}
        {endIcon && (
          <div className="ml-2">
            {isLoading ? (
              <Loader size={size} />
            ) : (
              <ButtonIconWrapper size={size}>{endIcon}</ButtonIconWrapper>
            )}
          </div>
        )}
      </ButtonBase>
    );
  }
);

Button.displayName = 'Button';
