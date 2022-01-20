import { forwardRef } from 'react';
import clsx from 'clsx';

import { InputIconWrapper, InputIconWrapperProps } from './components';

export type InputProps = {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  type?: 'text' | 'password' | 'email';
  id?: string;
  name?: string;
  describedby?: string;
  isInvalid?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
} & Partial<InputIconWrapperProps>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      isInvalid,
      isDisabled,
      icon,
      iconPosition = 'end',
      isRequired,
      type = 'text',
      describedby,
      ...props
    },
    ref
  ) => (
    <div className="relative">
      {icon && <InputIconWrapper icon={icon} iconPosition={iconPosition} />}
      <input
        className={clsx(
          'w-full border rounded py-3 px-4 text-slate-700 transition duration-300',
          'focus:outline-none focus:ring-1 disabled:opacity-40 placeholder-slate-200',
          {
            'border-slate-80 focus:border-brand-400 focus:ring-brand-400 hover:border-slate-100 hover:ring-slate-100':
              !isInvalid && !isDisabled,
          },
          {
            'border-red-700 ring-red-700 hover:border-red-900 hover:ring-red-900 focus:border-red-900 focus:ring-red-900':
              isInvalid,
          },
          { 'pl-11': icon && iconPosition === 'start' },
          { 'pr-11': icon && iconPosition === 'end' }
        )}
        disabled={isDisabled}
        ref={ref}
        type={type}
        aria-required={isRequired}
        aria-invalid={isInvalid}
        aria-describedby={describedby}
        {...props}
      />
    </div>
  )
);
