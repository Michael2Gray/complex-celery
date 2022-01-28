import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  generatePath,
  MemoryRouter,
  MemoryRouterProps,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { render } from '@testing-library/react';

import { DEFAULT_CONFIG } from '../../config';
import { AuthProvider, AuthState, AuthStatus } from '../../modules/auth';
import { NotificationsProvider } from '../../modules/notifications';
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
  },
}: DefaultTestProvidersConfig) => (
  <AxiosProvider baseURL="/mock-api">
    <NotificationsProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider config={DEFAULT_CONFIG} initialState={initialState}>
          {children}
        </AuthProvider>
      </QueryClientProvider>
    </NotificationsProvider>
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

type RenderRouteConfig = {
  path?: string;
  params?: Parameters<typeof generatePath>[1];
} & RenderWithRouterConfig;

export const renderRoute = (
  ui: React.ReactElement,
  {
    path = '/',
    params,
    queryClient,
    initialEntries = [generatePath(path, params)],
    initialState,
  }: RenderRouteConfig = {}
) =>
  renderWithRouter(
    <Routes>
      <Route path={path} element={ui} />
      <Route path="*" element={null} />
    </Routes>,
    { initialEntries, queryClient, initialState }
  );
