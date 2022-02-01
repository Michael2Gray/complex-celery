import { AuthStatus } from './auth.enum';

type PendingState = {
  status: AuthStatus.PENDING;
};

type FetchingUserState = {
  status: AuthStatus.FETCHING_USER;
};

type ErrorState = {
  status: AuthStatus.ERROR;
  error: any;
};

type LoginState = {
  status: AuthStatus.UNAUTHENTICATED;
};

type AuthenticatedState = {
  status: AuthStatus.AUTHENTICATED;
};

export type AuthState =
  | PendingState
  | FetchingUserState
  | ErrorState
  | LoginState
  | AuthenticatedState;

export type AuthLoginRequest = {
  email: string;
  password: string;
};
