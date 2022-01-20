import { useState } from 'react';

import { getApiErrorMessage } from '../../../shared/utils';
import { useAuth } from '../../auth';
import { useNotifications } from '../../notifications';
import { LoginBanner, LoginForm, LoginFormSubmitHandler } from '../components';

export const LoginRoute = () => {
  const { login } = useAuth();
  const [loginError, setLoginError] = useState<string>();
  const { addNotification } = useNotifications();

  const handleSubmit: LoginFormSubmitHandler = async (values) => {
    login(values)
      .then(({ name }) => {
        addNotification({
          status: 'success',
          message: <strong>Welcome back! {name}</strong>,
        });
      })
      .catch((error) => {
        setLoginError(getApiErrorMessage(error));
      });
  };

  const handleClearError = () => {
    setLoginError(undefined);
  };

  return (
    <>
      <LoginBanner />

      <LoginForm
        onSubmit={handleSubmit}
        error={loginError}
        onClearError={handleClearError}
      />
    </>
  );
};
