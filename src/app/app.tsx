import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { AxiosProvider } from './shared/context';

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
      <h1 className="text-3xl font-bold underline text-teal-600">
        Hello world!
      </h1>

      {import.meta.env.VITE_REACT_QUERY_DEVTOOLS === 'true' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  </AxiosProvider>
);
