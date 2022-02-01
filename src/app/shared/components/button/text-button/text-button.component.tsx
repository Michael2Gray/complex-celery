import { forwardRef, MouseEventHandler, ReactNode } from 'react';
import clsx from 'clsx';

export type TextButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export const TextButton = forwardRef<HTMLButtonElement, TextButtonProps>(
  ({ children, onClick, className }, ref) => (
    <button
      ref={ref}
      type="button"
      className={clsx(
        'p-0.5 text-xs uppercase font-bold tracking-widest rounded transition',
        'hover:text-brand-hover active:text-brand-active',
        'focus:outline-none focus-visible:ring focus-visible:ring-brand focus-visible:ring-offset-1',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
);

TextButton.displayName = 'TextButton';
