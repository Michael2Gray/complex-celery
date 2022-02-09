import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';

import { Auth, AuthProvider } from './modules/auth';
import { AxiosProvider } from './shared/context';
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
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Auth>
          <AxiosProvider>
            <ConfigProvider externalConfig={config}>
              <AppRoutes />
            </ConfigProvider>
          </AxiosProvider>
        </Auth>

        {import.meta.env.VITE_REACT_QUERY_DEVTOOLS === 'true' && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
      </AuthProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
