import clsx from 'clsx';

type DividerProps = { className?: string };

export const Divider = ({ className }: DividerProps) => (
  <div className={clsx('border-b bg-neutral-100 w-full ', className)} />
);
