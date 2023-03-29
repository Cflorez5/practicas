import { Validators, createFormValidation } from '@lemoncode/fonk';
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';
import { arrayRequired } from '@lemoncode/fonk-array-required-validator';

const validationSchema = {
  field: {
    title: [
      {
        validator: Validators.required,
        message: 'campo requerido',
      },
    ],
    notes: [
      {
        validator: Validators.required,
        message: 'campo requerido',
      },
    ],
    email: [
      {
        validator: Validators.required,
        message: 'campo requerido',
      },
    ],
    phone: [
      {
        validator: Validators.required,
        message: 'campo requerido',
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^(6|7|8|9)\d{8}$/ },
        message: 'Teléfono no válido',
      },
    ],
    price: [
      {
        validator: Validators.required,
        message: 'campo requerido',
      },
      {
        validator: positiveNumber.validator,
        message: 'Introduce un número correcto',
      },
    ],
    saleTypeIds: [
      {
        validator: arrayRequired.validator,
        message: 'campo requerido',
      },
    ],
    address: [
      {
        validator: Validators.required,
        message: 'campo requerido',
      },
    ],
    city: [
      {
        validator: Validators.required,
        message: 'campo requerido',
      },
    ],
    provinceId: [
      {
        validator: Validators.required,
        message: 'campo requerido',
      },
    ],
    squareMeter: [
      {
        validator: Validators.required,
        message: 'campo requerido',
      },
      {
        validator: positiveNumber.required,
        message: 'Introduce un número correcto',
      },
    ],
    rooms: [
      {
        validator: Validators.required,
        message: 'campo requerido',
      },
    ],
    bathrooms: [
      {
        validator: Validators.required,
        message: 'campo requerido',
      },
    ],
    locationUrl: [
      {
        validator: Validators.required,
        message: 'campo requerido',
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^https:\/\/www\.google\.com\/maps\/embed?/ },
        message: 'URL no válida',
      },
    ],
    mainFeatures: [
      {
        validator: arrayRequired.validator,
        customArgs: { minLength: 1 },
        message: 'campo requerido',
      },
    ],
    equipmentIds: [
      {
        validator: arrayRequired.validator,
        customArgs: { minLength: 1 },
        message: 'campo requerido',
      },
    ],
    images: [
      {
        validator: arrayRequired.validator,
        customArgs: { minLength: 1 },
        message: 'campo requerido',
      },
    ],
  },
};

export const formValidation = createFormValidation(validationSchema);
