import { createFormValidation, Validators } from '@lemoncode/fonk';
import { inputDay, inputMonth, inputYear, inputEmail } from './transfer.custom';

const validationSchema = {
  field: {
    iban: [
      {
        validator: Validators.required,
        message: 'campo requerido',
      },
      {
        validator: iban.validator,
        customArgs: { countryCode: 'ES' },
        message: 'IBAN no válido',
      },
    ],
    name: [
      {
        validator: Validators.required,
        message: 'nombre no válido',
      },
    ],
    amount: [
      {
        validator: Validators.required,
        message: 'campo requerido',
      },
    ],
    concept: [
      {
        validator: Validators.required,
        message: 'campo requerido',
      },
    ],
    notes: [
      {
        validator: Validators.notes,
        message: 'rellene el campo con caracteres válidos',
      },
    ],
    day: [
      {
        validator: Validators.required,
        message: 'campo requerido',
      },
      {
        validator: inputDay,
      },
    ],
    month: [
      {
        validator: Validators.required,
        message: 'campo requerido',
      },
      {
        validator: inputMonth,
      },
    ],
    year: [
      {
        validator: Validators.required,
        message: 'campo requerido',
      },
      {
        validator: inputYear,
      },
    ],
    email: [
      {
        validator: inputEmail,
      },
      {
        validator: Validators.email,
      },
    ],
  },
};

export const formValidation = createFormValidation(validationSchema);
