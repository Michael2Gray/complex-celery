import { Login } from '../../modules/login';
import {
  FullScreenOverlay,
  Pending,
  UnauthenticatedLayout,
} from '../../shared/layouts';
import { useAuth } from './auth.context';
import { AuthStatus } from './auth.enum';

type AuthProps = { children: React.ReactNode };

export const Auth = ({ children }: AuthProps) => {
  const { status } = useAuth();

  if (status === AuthStatus.PENDING) {
    return (
      <FullScreenOverlay>
        <Pending>Verifying User...</Pending>
      </FullScreenOverlay>
    );
  }

  if (status === AuthStatus.UNAUTHENTICATED) {
    return (
      <UnauthenticatedLayout>
        <Login />
      </UnauthenticatedLayout>
    );
  }

  return <>{children}</>;
};
