import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { AxiosError } from 'axios';

import { URL_RESOURCE } from '../../shared/constants';
import { useAxios } from '../../shared/context';
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
  const axios = useAxios();
  const loginMutation = useLoginMutation();

  const [authState, setAuthState] = useState<AuthState>(initialState);

  const verifyAuthentication = async () => {
    try {
      const { data } = await axios.get(`${URL_RESOURCE.AUTH}/authenticate`);

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
      token: localStorage.getItem('token'),
      login,
      logout: () => setAuthState({ status: AuthStatus.UNAUTHENTICATED }),
    }),
    [authState, login]
  );

  return (
    <AuthContext.Provider value={value}>
      <Auth>{children}</Auth>
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContextFallback(AuthContext);
