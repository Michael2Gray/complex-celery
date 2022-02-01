import { useState } from 'react';

import { CenteredColumn, Heading } from '../../../shared/components';
import { UnauthenticatedLayout } from '../../../shared/layouts';
import { getApiErrorMessage } from '../../../shared/utils';
import { useAuth } from '../../auth';
import { LoginBanner, LoginForm, LoginFormSubmitHandler } from '../components';
import { useLoginMutation } from '../queries';

export const Login = () => {
  const { authenticate } = useAuth();
  const loginMutation = useLoginMutation();
  const [loginError, setLoginError] = useState<string>();

  const handleSubmit: LoginFormSubmitHandler = async (values) => {
    try {
      await loginMutation.mutateAsync(values);
      authenticate();
    } catch (error) {
      setLoginError(getApiErrorMessage(error));
    }
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
