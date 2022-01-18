import { User } from '../../shared/models';
import { AuthStatus } from './auth.enum';

type PendingState = {
  status: AuthStatus.PENDING;
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
  user: User;
};

export type AuthState =
  | PendingState
  | ErrorState
  | LoginState
  | AuthenticatedState;

export type AuthLoginRequest = {
  email: string;
  password: string;
};
