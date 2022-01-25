import { ReactNode } from 'react';

type PageProps = { children: ReactNode };

export const Page = ({ children }: PageProps) => (
  <div className="mx-auto max-w-5xl px-10 py-12 space-y-10">{children}</div>
);
