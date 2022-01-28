import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { AxiosError } from 'axios';

import { Config } from '../../config';
import { useAxios } from '../../shared/context';
import { useContextFallback } from '../../shared/hooks';
import { User } from '../../shared/models';
import { Auth } from './auth.component';
import { BASE_URL } from './auth.constant';
import { AuthStatus } from './auth.enum';
import { AuthLoginRequest, AuthState } from './auth.model';
import { useLoginMutation } from './auth.queries';

type AuthContextState = AuthState & {
  token: string | null;
  user?: User;
  login: (params: AuthLoginRequest) => Promise<void>;
  logOut: () => void;
};

const AuthContext = createContext<AuthContextState | undefined>(undefined);
AuthContext.displayName = 'AuthContext';

type AuthProviderProps = { config: Config; initialState?: AuthState };

export const AuthProvider: React.FC<AuthProviderProps> = ({
  config,
  initialState = { status: AuthStatus.PENDING },
  children,
}) => {
  const axios = useAxios();
  const loginMutation = useLoginMutation();
  const [authState, setAuthState] = useState<AuthState>(initialState);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('token')
  );
  const [user, setUser] = useState<User | undefined>(undefined);

  const fetchCurrentUser = async () => {
    setAuthState({ status: AuthStatus.FETCHING_USER });

    try {
      const { data: user } = await axios.get(`${BASE_URL}/user`);
      setAuthState({ status: AuthStatus.AUTHENTICATED });
      setUser(user);
    } catch (error) {
      setAuthState({ status: AuthStatus.ERROR, error });
    }
  };

  const authenticate = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/authenticate`);

      localStorage.setItem('token', data);
      setToken(data);

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
  };

  const verifyAuthentication = useCallback(async () => {
    if (token) {
      return await fetchCurrentUser();
    }

    return await authenticate();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = useCallback(async (params: AuthLoginRequest) => {
    loginMutation
      .mutateAsync(params)
      .then(async () => await verifyAuthentication())
      .catch((error) => setAuthState({ status: AuthStatus.ERROR, error }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logOut = useCallback(() => {
    setAuthState({ status: AuthStatus.UNAUTHENTICATED });
    setToken(null);
    setUser(undefined);
    localStorage.removeItem('token');
  }, []);

  useEffect(() => {
    if (authState.status === AuthStatus.PENDING) {
      verifyAuthentication();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState.status]);

  const value = useMemo(
    () => ({
      ...authState,
      token,
      user,
      login,
      logOut,
    }),
    [authState, login, logOut, token, user]
  );

  return (
    <AuthContext.Provider value={value}>
      <Auth config={config}>{children}</Auth>
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContextFallback(AuthContext);
