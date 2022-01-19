import { forwardRef, MouseEventHandler, ReactNode } from 'react';
import clsx from 'clsx';

export type TextButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const TextButton = forwardRef<HTMLButtonElement, TextButtonProps>(
  ({ children, onClick }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={clsx(
          'p-0.5 text-xs uppercase font-bold tracking-widest rounded transition',
          'hover:text-brand-hover active:text-brand-active',
          'focus:outline-none focus-visible:ring focus-visible:ring-brand focus-visible:ring-offset-1'
        )}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
);

TextButton.displayName = 'TextButton';
