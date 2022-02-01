import { ReactNode } from 'react';

import { useAuth } from '../../modules/auth';
import { PageTitle } from '../components';

type PageProps = { children: ReactNode };

export const Page = ({ children }: PageProps) => {
  const { user } = useAuth();

  return (
    <div className="mx-auto max-w-5xl px-10 pb-6">
      <PageTitle>{`Welcome back${user ? ` ${user.name}!` : '!'}`}</PageTitle>
      {children}
    </div>
  );
};
