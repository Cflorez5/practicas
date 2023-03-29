import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationSchema = {
  field: {
    email: [Validators.required],
    message: [Validators.required],
  },
};

export const formValidation = createFormValidation(validationSchema);
