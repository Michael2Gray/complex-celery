import { ReactNode } from 'react';

export type LegendProps = { children: ReactNode };

export const Legend = ({ children }: LegendProps) => (
  <legend className="text-lg text-neutral-500 font-bold">{children}</legend>
);
