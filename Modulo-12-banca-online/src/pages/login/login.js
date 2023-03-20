import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
} from '../../common/helpers';
import { isValidLogin } from './login.api';
import { formValidation } from './login.validations';
import { history, routes } from '../../core/router';

let login = {
  user: '',
  password: '',
};

onUpdateField('user', (event) => {
  const value = event.target.value;
  login = {
    ...login,
    user: value,
  };

  formValidation.validateField('user', login.user).then((result) => {
    onSetError('user', result);
  });
});

onUpdateField('password', (event) => {
  const value = event.target.value;
  login = {
    ...login,
    password: value,
  };

  formValidation.validateField('password', login.password).then((result) => {
    onSetError('password', result);
  });
});

const onNavigate = (isValid) => {
  if (isValid) {
    history.push(routes.accountList);
  } else {
    alert('Usuario y/o contraseña no válido');
  }
};

//Cuando clicamos en enviar
onSubmitForm('login-button', () => {
  //Primero comprobamos que todos los datos sean correctos
  formValidation.validateForm(login).then((result) => {
    //Muestro si hay errores
    onSetFormErrors(result);
    //y en caso de no existir error, validamos con el servidor las credenciales
    if (result.succeeded) {
      //succeeded sale de la documentación fonk
      isValidLogin(login).then((isValid) => {
        onNavigate(isValid);
      });
    }
  });
});
