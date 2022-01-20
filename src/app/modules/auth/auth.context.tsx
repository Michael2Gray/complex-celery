import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import axios, { AxiosError } from 'axios';

import { URL_RESOURCE } from '../../shared/constants';
import { useContextFallback } from '../../shared/hooks';
import { User } from '../../shared/models';
import { Auth } from './auth.component';
import { AuthStatus } from './auth.enum';
import { AuthLoginRequest, AuthState } from './auth.model';
import { useLoginMutation } from './auth.queries';

type AuthContextState = AuthState & {
  token: string | null;
  login: (params: AuthLoginRequest) => Promise<User>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextState | undefined>(undefined);
AuthContext.displayName = 'AuthContext';

type AuthProviderProps = { initialState?: AuthState };

export const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
  initialState = { status: AuthStatus.PENDING },
}) => {
  const loginMutation = useLoginMutation();

  const [authState, setAuthState] = useState<AuthState>(initialState);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('token')
  );

  const verifyAuthentication = async () => {
    try {
      const { data } = await axios.get<string>(
        `${import.meta.env.VITE_API_BASE_URL}${URL_RESOURCE.AUTH}/authenticate`
      );

      setToken(data);
      localStorage.setItem('token', data);
    } catch (error) {
      localStorage.removeItem('token');

      const { response } = error as AxiosError;

      if (response && response.data === 'Unauthenticated User') {
        setAuthState({ status: AuthStatus.UNAUTHENTICATED });
      } else {
        setAuthState({ status: AuthStatus.ERROR, error });
      }
    }
  };

  const login = useCallback(async (params: AuthLoginRequest) => {
    const user = await loginMutation.mutateAsync(params);

    setAuthState({ status: AuthStatus.AUTHENTICATED, user });

    if (user) {
      verifyAuthentication();
    }

    return user;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setAuthState({ status: AuthStatus.UNAUTHENTICATED });
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initialise = useCallback(() => verifyAuthentication(), []);

  useEffect(() => {
    if (authState.status === AuthStatus.PENDING) {
      initialise();
    }

    if (authState.status === AuthStatus.UNAUTHENTICATED) {
      localStorage.removeItem('token');
    }
  }, [initialise, authState.status]);

  const value = useMemo(
    () => ({
      ...authState,
      token,
      login,
      logout,
    }),
    [authState, login, logout, token]
  );

  return (
    <AuthContext.Provider value={value}>
      <Auth>{children}</Auth>
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContextFallback(AuthContext);
