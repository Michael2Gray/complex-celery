import { ReactNode } from 'react';

import { Branding } from '../components';

type DefaultLayoutProps = { children: ReactNode };

export const DefaultLayout = ({ children }: DefaultLayoutProps) => (
  <div className="bg-default-pattern flex flex-col">
    <Branding
      className="p-6"
      size="xs"
      variant="white"
      withContent
      withSubTitle
    />

    <main className="flex-1 min-w-0">{children}</main>
  </div>
);
