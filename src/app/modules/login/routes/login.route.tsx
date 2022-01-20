import { useState } from 'react';

import { CenteredColumn, Heading } from '../../../shared/components';
import { UnauthenticatedLayout } from '../../../shared/layouts';
import { getApiErrorMessage } from '../../../shared/utils';
import { useAuth } from '../../auth';
import { useNotifications } from '../../notifications';
import { LoginBanner, LoginForm, LoginFormSubmitHandler } from '../components';

export const Login = () => {
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
    <UnauthenticatedLayout className="bg-login-pattern">
      <LoginBanner />

      <CenteredColumn>
        <Heading>Let's prep some Veg!</Heading>

        <LoginForm
          onSubmit={handleSubmit}
          error={loginError}
          onClearError={handleClearError}
        />
      </CenteredColumn>
    </UnauthenticatedLayout>
  );
};
