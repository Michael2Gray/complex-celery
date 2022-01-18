import clsx from 'clsx';

export const BUTTON_BASE_VARIANTS = {
  solid: clsx(
    'bg-zinc-700 text-white border-transparent',
    'hover:bg-zinc-800 active:bg-zinc-900 disabled:bg-zinc-700'
  ),
  ghost: clsx(
    'text-zinc-500 border-zinc-500',
    'hover:text-zinc-600 hover:border-zinc-600',
    'active:text-zinc-700 active:border-zinc-700',
    'disabled:text-zinc-500 disabled:border-zinc-500'
  ),
  brand: clsx(
    'bg-brand text-white border-transparent',
    'hover:bg-brand-hover active:bg-brand-active disabled:bg-brand'
  ),
  transparent: clsx(
    'border-transparent text-zinc-700',
    'hover:text-brand-hover active:text-brand-active disabled:text-zinc-700'
  ),
};
