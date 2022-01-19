import { ReactNode } from 'react';

import { Notifications } from '../../modules/notifications';
import { Menu } from './menu.layout';

type DefaultLayoutProps = { children: ReactNode };

export const DefaultLayout = ({ children }: DefaultLayoutProps) => (
  <div className="flex">
    <div className="flex-none">
      <Menu />
    </div>
    <main className="flex-1 min-w-0">
      <div className="sticky top-0 z-10">
        <div className="relative z-10" />
        <div className="absolute w-full">
          <Notifications />
        </div>
      </div>
      {children}
    </main>
  </div>
);
