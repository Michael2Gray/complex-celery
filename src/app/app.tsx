import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './modules/auth';
import { NotificationsProvider } from './modules/notifications';
import { AxiosProvider } from './shared/context';
import { DefaultLayout } from './shared/layouts';
import { Config, ConfigProvider } from './config';
import { AppRoutes } from './routes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

type AppProps = { config: Config };

export const App = ({ config }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <NotificationsProvider>
      <AuthProvider>
        <AxiosProvider baseURL={import.meta.env.VITE_API_BASE_URL}>
          <ConfigProvider externalConfig={config}>
            <BrowserRouter>
              <DefaultLayout>
                <AppRoutes />
              </DefaultLayout>
            </BrowserRouter>
          </ConfigProvider>

          {import.meta.env.VITE_REACT_QUERY_DEVTOOLS === 'true' && (
            <ReactQueryDevtools initialIsOpen={false} />
          )}
        </AxiosProvider>
      </AuthProvider>
    </NotificationsProvider>
  </QueryClientProvider>
);
