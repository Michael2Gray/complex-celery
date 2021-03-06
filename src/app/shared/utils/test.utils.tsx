import { ReactElement, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  generatePath,
  MemoryRouter,
  MemoryRouterProps,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';

import { ConfigProvider, DEFAULT_CONFIG } from '../../config';
import { Auth, AuthProvider, AuthState, AuthStatus } from '../../modules/auth';
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
  children: ReactNode;
} & TestRenderConfig;

const DefaultTestProviders = ({
  children,
  queryClient = new QueryClient({ defaultOptions: { queries: { retry: 0 } } }),
  initialState = {
    status: AuthStatus.AUTHENTICATED,
  },
}: DefaultTestProvidersConfig) => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider initialState={initialState}>
      <Auth>
        <AxiosProvider>
          <ConfigProvider externalConfig={DEFAULT_CONFIG}>
            {children}
          </ConfigProvider>
        </AxiosProvider>
      </Auth>
    </AuthProvider>
  </QueryClientProvider>
);

export const renderWithProviders = (
  ui: ReactElement,
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
  ui: ReactElement,
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
  ui: ReactElement,
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

export const waitForLoading = async (loadingText = 'Chopping Celery') =>
  waitForElementToBeRemoved(() => screen.getByText(`${loadingText}...`));
