import { Login } from '../../modules/login';
import {
  DefaultLayout,
  FullScreenOverlay,
  Pending,
} from '../../shared/layouts';
import { useAuth } from './auth.context';
import { AuthStatus } from './auth.enum';

type AuthProps = { children: React.ReactNode };

export const Auth = ({ children }: AuthProps) => {
  const auth = useAuth();
  const pendingStatues = [AuthStatus.PENDING, AuthStatus.FETCHING_USER];

  if (pendingStatues.includes(auth.status)) {
    return (
      <FullScreenOverlay>
        <Pending>Verifying User...</Pending>
      </FullScreenOverlay>
    );
  }

  if (auth.status === AuthStatus.UNAUTHENTICATED) {
    return <Login />;
  }

  return <DefaultLayout>{children}</DefaultLayout>;
};
