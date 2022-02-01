import React from 'react';
import clsx from 'clsx';

export type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'brand' | 'white';
  weight?: 'normal' | 'bold';
  className?: string;
};

export const Heading: React.FC<HeadingProps> = ({
  level = 1,
  size = 'lg',
  variant = 'default',
  weight = 'bold',
  className,
  children,
  ...rest
}) =>
  React.createElement(`h${level}`, {
    children,
    className: clsx(
      'tracking-wide font-mono',
      {
        'font-normal': weight === 'normal',
        'font-bold': weight === 'bold',
      },
      {
        'text-brand-800': variant === 'brand',
        'text-white': variant === 'white',
      },
      {
        'text-3xl': size === 'xl',
        'text-2xl': size === 'lg',
        'text-xl': size === 'md',
        'text-lg': size === 'sm',
        'text-md': size === 'xs',
      },
      className
    ),
    ...rest,
  });
