import { CenteredColumn, Heading } from '../../../shared/components';
import { UnauthenticatedLayout } from '../../../shared/layouts';
import { useAuth } from '../../auth';
import { LoginBanner, LoginForm, LoginFormSubmitHandler } from '../components';

export const Login = () => {
  const { login, loginError, clearLoginError } = useAuth();

  const handleSubmit: LoginFormSubmitHandler = async (values) => login(values);

  return (
    <UnauthenticatedLayout className="bg-login-pattern">
      <LoginBanner />

      <CenteredColumn>
        <Heading>Let's prep some Veg!</Heading>

        <LoginForm
          onSubmit={handleSubmit}
          error={loginError}
          onClearError={clearLoginError}
        />
      </CenteredColumn>
    </UnauthenticatedLayout>
  );
};
