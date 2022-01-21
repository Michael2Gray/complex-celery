import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './modules/auth';
import { NotificationsProvider } from './modules/notifications';
import { Config } from './config';
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
      <AuthProvider config={config}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>

        {import.meta.env.VITE_REACT_QUERY_DEVTOOLS === 'true' && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
      </AuthProvider>
    </NotificationsProvider>
  </QueryClientProvider>
);
