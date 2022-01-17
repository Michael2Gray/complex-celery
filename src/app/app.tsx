import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './core/auth';
import { AxiosProvider } from './shared/context';
import { DefaultLayout } from './shared/layouts';
import { AppRoutes } from './routes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const App = () => (
  <AxiosProvider baseURL={import.meta.env.VITE_API_BASE_URL}>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <DefaultLayout>
            <AppRoutes />
          </DefaultLayout>
        </BrowserRouter>

        {import.meta.env.VITE_REACT_QUERY_DEVTOOLS === 'true' && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
      </AuthProvider>
    </QueryClientProvider>
  </AxiosProvider>
);
