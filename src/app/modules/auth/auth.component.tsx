import { Config, ConfigProvider } from '../../config';
import { Login } from '../../modules/login';
import { AxiosProvider } from '../../shared/context';
import {
  DefaultLayout,
  FullScreenOverlay,
  Pending,
} from '../../shared/layouts';
import { useAuth } from './auth.context';
import { AuthStatus } from './auth.enum';

type AuthProps = { config: Config; children: React.ReactNode };

export const Auth = ({ config, children }: AuthProps) => {
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

  return (
    <AxiosProvider baseURL={import.meta.env.VITE_API_BASE_URL}>
      <ConfigProvider externalConfig={config}>
        <DefaultLayout>{children}</DefaultLayout>
      </ConfigProvider>
    </AxiosProvider>
  );
};
