import { forwardRef } from 'react';
import { FieldErrors } from 'react-hook-form';

import { FormField, FormFieldProps } from '../form-field';

export type TextFieldProps = FormFieldProps & { errors: FieldErrors };

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ name, errors, ...rest }, ref) =>  (
      <FormField
        ref={ref}
        name={name}
        helpText={errors[name]?.message}
        isInvalid={Boolean(errors[name])}
        {...rest}
      />
    )
);

TextField.displayName = 'TextField';
