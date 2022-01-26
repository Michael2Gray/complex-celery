import { rest } from 'msw';

import { AuthLoginRequest } from '../../app/modules/auth';
import { URL_RESOURCE } from '../../app/shared/constants';
import { User } from '../../app/shared/models';
import { USERS } from '../fixtures';
import { delayedResponse } from '../utils';

const baseURL = `/mock-api${URL_RESOURCE.AUTH}`;
const unauthenticatedUserMessage = 'Unauthenticated User';
const validLogins = [{ email: 'mgray@email.com', password: 'test' }];

let activeUser: User | null = null;

export const authenticate = rest.get(
  `${baseURL}/authenticate`,
  (req, res, ctx) => {
    console.log('🖐 activeUser', activeUser);

    const token = 'secret_token';

    const [status, data] = [
      activeUser ? 200 : 400,
      activeUser ? token : unauthenticatedUserMessage,
    ];

    return delayedResponse(ctx.status(status), ctx.json(data));
  }
);

export const login = rest.post<AuthLoginRequest>(
  `${baseURL}/login`,
  (req, res, ctx) => {
    const { email, password } = req.body;

    const user = USERS.find((user) => user.email === email);

    const isValid = validLogins.some((login) => login.password === password);

    if (isValid && user) {
      activeUser = user;
      return delayedResponse(ctx.status(200), ctx.json(user));
    }

    return delayedResponse(
      ctx.status(401),
      ctx.json(unauthenticatedUserMessage)
    );
  }
);

export const getCurrentUser = rest.get<User>(
  `${baseURL}/user`,
  (req, res, ctx) => {
    return delayedResponse(ctx.status(200), ctx.json(USERS[0]));
  }
);

export const handlers = [authenticate, login, getCurrentUser];
