import { history, routes } from '../../core/router';
import {
  onSubmitForm,
  onSetFormErrors,
  onUpdateField,
} from '../../common/helpers';
import { setAccountOptions } from './transfer.helpers';
import { formValidation } from './transfer.validations';
import { getAccountList } from './transfer.api';

// Sacar el resto de info que no sea ni nombre ni id (eso de la api)
// De aquí sacamos con el id de la cuenta los datos
const params = history.getParams();
const isEditMode = Boolean(params.id);

//Save Data
let transfer = {
  accountId: '',
  iban: '',
  name: '',
  amount: '',
  concept: '',
  notes: '',
  day: '',
  month: '',
  year: '',
  email: '',
};

getAccountList(params.id).then((account) => {
  setAccountOptions(account);
});

onUpdateField('select-account', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    accountId: value,
  };
});

onUpdateField('iban', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, iban: value };

  //Validation
  formValidation.validateField('iban', transfer.iban).then((result) => {
    onSetError('iban', result);
  });
});

onUpdateField('name', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, name: value };
});

onUpdateField('amount', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, amount: value };
});

onUpdateField('concept', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, concept: value };
});

onUpdateField('notes', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, notes: value };
});

onUpdateField('day', (event) => {
  const value = parseInt(event.target.value);
  transfer = { ...transfer, day: value };
});

onUpdateField('month', (event) => {
  const value = parseInt(event.target.value);
  transfer = { ...transfer, month: value };
});

onUpdateField('year', (event) => {
  const value = parseInt(event.target.value);
  transfer = { ...transfer, year: value };
});

onUpdateField('email', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, email: value };
});

//Action button transfer
//Is valid or no
const OnNavigate = (isValid) => {
  if (isValid) {
    history.push(
      routes.accountList + alert('La transferencia se ha realizado con éxito')
    );
  } else {
    alert(
      'La transferencia no se ha podido realizar. Compruebe todos los campos'
    );
  }
};

//Push in send
onSubmitForm('transfer-button', () => {
  //Primero comprobamos que todos los datos sean correctos
  formValidation.validateForm(transfer).then((result) => {
    //Muestro si hay errores
    onSetFormErrors(result);

    //y en caso de no existir error, validamos con el servidor los campos
    if (result.succeeded) {
      isValidTransfer(transfer).then((isValid) => {
        OnNavigate(isValid);
      });
    }
  });
});
