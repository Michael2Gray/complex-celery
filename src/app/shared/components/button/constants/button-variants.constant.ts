import clsx from 'clsx';

export const BUTTON_BASE_VARIANTS = {
  solid: clsx(
    'bg-neutral-700 text-white border-transparent',
    'hover:bg-neutral-800 active:bg-neutral-900 disabled:bg-neutral-700'
  ),
  ghost: clsx(
    'text-neutral-500 border-neutral-500',
    'hover:text-neutral-600 hover:border-neutral-600',
    'active:text-neutral-700 active:border-neutral-700',
    'disabled:text-neutral-500 disabled:border-neutral-500'
  ),
  brand: clsx(
    'bg-brand-400 text-white border-transparent',
    'hover:bg-brand-500 active:bg-brand-800 disabled:bg-brand-400'
  ),
  transparent: clsx(
    'border-transparent text-neutral-700',
    'hover:text-brand-500 active:text-brand-800 disabled:text-neutral-700'
  ),
};
