import { useAuth } from '../../auth';
import { LoginBanner, LoginForm, LoginFormSubmitHandler } from '../components';

export const Login = () => {
  const { login } = useAuth();

  const handleSubmit: LoginFormSubmitHandler = async (values) => login(values);

  return (
    <>
      <LoginBanner />
      <LoginForm onSubmit={handleSubmit} />
    </>
  );
};
