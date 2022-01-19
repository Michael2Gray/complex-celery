import { UnpackNestedValue, useForm } from 'react-hook-form';

import { Button, TextField } from '../../../shared/components';
import { LoginError } from './login-error.component';

type LoginFormValues = {
  email: string;
  password: string;
};

export type LoginFormSubmitHandler = (
  data: UnpackNestedValue<LoginFormValues>
) => any | Promise<any>;

type LoginFormProps = {
  onSubmit: LoginFormSubmitHandler;
  error?: string;
  onClearError: () => void;
};

export const LoginForm = ({
  onSubmit,
  error,
  onClearError,
}: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>();

  return (
    <form
      className="mx-auto max-w-2xl px-10 py-12 space-y-10 bg-slate-100 rounded-md"
      onSubmit={handleSubmit(async (values) => onSubmit(values))}
    >
      <fieldset className="space-y-6">
        <div className="space-x-6">
          <TextField
            type="email"
            label="Email"
            isRequired
            {...register('email', {
              required: 'Enter email address',
              pattern: {
                value: /\S+@\S+/,
                message: 'Enter a valid email address',
              },
            })}
            errors={errors}
          />
        </div>
        <div className="space-x-6">
          <TextField
            type="password"
            label="Password"
            isRequired
            {...register('password', {
              required: 'Enter password',
            })}
            errors={errors}
          />
        </div>
      </fieldset>

      <div className="flex justify-center space-x-4">
        <Button variant="brand" type="submit" isLoading={isSubmitting}>
          Login
        </Button>
      </div>

      {error && <LoginError error={error} onClear={onClearError} />}
    </form>
  );
};
