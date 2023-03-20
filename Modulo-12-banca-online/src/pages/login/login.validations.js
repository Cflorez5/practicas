import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationSchema = {
  field: {
    user: [
      {
        validator: Validators.required,
        message: 'campo requerido',
      },
      {
        validator: Validators.email,
        message: 'email no válido',
      },
    ],

    password: [
      {
        validator: Validators.required,
        message: 'campo requerido',
      },
    ],
  },
};

export const formValidation = createFormValidation(validationSchema);
