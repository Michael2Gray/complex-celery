import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter, MemoryRouterProps, useLocation } from 'react-router-dom';
import { render } from '@testing-library/react';

import { AuthProvider, AuthState, AuthStatus } from '../../modules/auth';
import { AxiosProvider } from '../context';

type TestRenderConfig = {
  queryClient?: QueryClient;
  initialState?: AuthState;
};

const RouteLocation = () => {
  const { pathname, search } = useLocation();

  return (
    <div hidden>
      <input data-testid="pathname" readOnly value={pathname} />
      <input data-testid="search" readOnly value={search} />
    </div>
  );
};

type DefaultTestProvidersConfig = {
  children: React.ReactNode;
} & TestRenderConfig;

const DefaultTestProviders = ({
  children,
  queryClient = new QueryClient({ defaultOptions: { queries: { retry: 0 } } }),
  initialState = {
    status: AuthStatus.AUTHENTICATED,
    user: {
      id: '0',
      name: 'Michael Gray',
      initials: 'MG',
      email: 'michael.gray@email.com',
      defaultLocation: 'Dublin',
    },
  },
}: DefaultTestProvidersConfig) => (
  <AxiosProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider initialState={initialState}>{children}</AuthProvider>
    </QueryClientProvider>
  </AxiosProvider>
);

export const renderWithProviders = (
  ui: React.ReactElement,
  { queryClient, initialState }: TestRenderConfig = {}
) =>
  render(
    <DefaultTestProviders queryClient={queryClient} initialState={initialState}>
      {ui}
    </DefaultTestProviders>
  );

type RenderWithRouterConfig = TestRenderConfig & {
  initialEntries?: MemoryRouterProps['initialEntries'];
};

export const renderWithRouter = (
  ui: React.ReactElement,
  { queryClient, initialEntries, initialState }: RenderWithRouterConfig = {}
) =>
  renderWithProviders(
    <MemoryRouter initialEntries={initialEntries}>
      {ui}
      <RouteLocation />
    </MemoryRouter>,
    { queryClient, initialState }
  );
