import { rest } from 'msw';

import { AuthLoginRequest } from '../../app/modules/auth';
import { URL_RESOURCE } from '../../app/shared/constants';
import { User } from '../../app/shared/models';
import { users } from '../fixtures';
import { delayedResponse } from '../utils';

const baseURL = `/mock-api${URL_RESOURCE.AUTH}`;
const unauthenticatedUserMessage = 'Unauthenticated User';
const validLogins = [{ email: 'mgray@email.com', password: 'test' }];

let activeUser: User | null = null;

export const authenticate = rest.get(
  `${baseURL}/authenticate`,
  (req, res, ctx) => {
    const token = 'secret_token';

    if (activeUser) {
      return delayedResponse(ctx.status(200), ctx.json(token));
    }

    return delayedResponse(
      ctx.status(401),
      ctx.json(unauthenticatedUserMessage)
    );
  }
);

export const login = rest.post<AuthLoginRequest>(
  `${baseURL}/login`,
  (req, res, ctx) => {
    const { email, password } = req.body;

    const user = users.find((user) => user.email === email);

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

export const handlers = [authenticate, login];
