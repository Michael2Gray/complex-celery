import { ReactNode } from 'react';
import clsx from 'clsx';

type Cols = 1 | 2 | 3 | 4;

type GridProps = {
  children: ReactNode;
  xs?: Cols;
  sm?: Cols;
  md?: Cols;
  className?: string;
};

export const Grid = ({
  children,
  xs = 1,
  sm = 2,
  md = 3,
  className,
}: GridProps) => (
  <div
    className={clsx(
      'grid gap-4',
      {
        'xs:grid-cols-1': xs === 1,
        'xs:grid-cols-2': xs === 2,
        'xs:grid-cols-3': xs === 3,
        'xs:grid-cols-4': xs === 4,
        'sm:grid-cols-1': sm === 1,
        'sm:grid-cols-2': sm === 2,
        'sm:grid-cols-3': sm === 3,
        'sm:grid-cols-4': sm === 4,
        'md:grid-cols-1': md === 1,
        'md:grid-cols-2': md === 2,
        'md:grid-cols-3': md === 3,
        'md:grid-cols-4': md === 4,
      },
      className
    )}
  >
    {children}
  </div>
);
