import clsx from 'clsx';

export const BUTTON_BASE_VARIANTS = {
  solid: clsx(
    'bg-slate-700 text-white border-transparent',
    'hover:bg-slate-800 active:bg-slate-900 disabled:bg-slate-700'
  ),
  ghost: clsx(
    'text-slate-500 border-slate-500',
    'hover:text-slate-600 hover:border-slate-600',
    'active:text-slate-700 active:border-slate-700',
    'disabled:text-slate-500 disabled:border-slate-500'
  ),
  brand: clsx(
    'bg-brand-400 text-white border-transparent',
    'hover:bg-brand-500 active:bg-brand-800 disabled:bg-brand-400'
  ),
  transparent: clsx(
    'border-transparent text-slate-700',
    'hover:text-brand-500 active:text-brand-800 disabled:text-slate-700'
  ),
};
