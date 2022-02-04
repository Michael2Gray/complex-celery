import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import axios, { AxiosError } from 'axios';

import { URL_RESOURCE } from '../../shared/constants';
import { useContextFallback } from '../../shared/hooks';
import { User } from '../../shared/models';
import { getApiErrorMessage } from '../../shared/utils';
import { AuthStatus } from './auth.enum';
import { AuthLoginRequest, AuthState } from './auth.model';

type AuthContextState = AuthState & {
  token: string | null;
  user?: User;
  loginError?: string;
  login: (params: AuthLoginRequest) => Promise<unknown>;
  logOut: () => void;
  clearLoginError: () => void;
};

const AuthContext = createContext<AuthContextState | undefined>(undefined);
AuthContext.displayName = 'AuthContext';

type AuthProviderProps = {
  children: ReactNode;
  baseURL?: string;
  initialState?: AuthState;
};

export const AuthProvider = ({
  children,
  baseURL,
  initialState = { status: AuthStatus.PENDING },
}: AuthProviderProps) => {
  const BASE_URL = `${baseURL}${URL_RESOURCE.AUTH}`;
  const [authState, setAuthState] = useState<AuthState>(initialState);
  const [user, setUser] = useState<User | undefined>(undefined);
  const token = localStorage.getItem('token');
  const [loginError, setLoginError] = useState<string>();

  const login = useCallback(async (values: AuthLoginRequest) => {
    try {
      await axios.post(`${BASE_URL}/login`, values);
      authenticate();
    } catch (error) {
      setLoginError(getApiErrorMessage(error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logOut = useCallback(() => {
    setAuthState({ status: AuthStatus.UNAUTHENTICATED });
  }, []);

  const fetchCurrentUser = async () => {
    try {
      setAuthState({ status: AuthStatus.FETCHING_USER });

      const { data: user } = await axios.get(`${BASE_URL}/user`);
      setAuthState({ status: AuthStatus.AUTHENTICATED });
      setUser(user);
    } catch (error) {
      setAuthState({ status: AuthStatus.ERROR, error });
    }
  };

  const authenticate = useCallback(async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/authenticate`);

      localStorage.setItem('token', data);

      await fetchCurrentUser();
    } catch (error) {
      localStorage.removeItem('token');
      const { response } = error as AxiosError;

      if (response && response.data === 'Unauthenticated User') {
        logOut();
      } else {
        setAuthState({ status: AuthStatus.ERROR, error });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const verifyAuthentication = useCallback(async () => {
    if (token) {
      return await fetchCurrentUser();
    }

    return await authenticate();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (authState.status === AuthStatus.PENDING) {
      verifyAuthentication();
    }

    if (authState.status === AuthStatus.UNAUTHENTICATED) {
      setUser(undefined);
      localStorage.removeItem('token');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState.status]);

  const value = useMemo(
    () => ({
      ...authState,
      token,
      user,
      loginError,
      login,
      logOut,
      clearLoginError: () => setLoginError(undefined),
    }),
    [authState, token, user, loginError, login, logOut]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContextFallback(AuthContext);
