export const inputDay = (value) => {
  const succeeded = parseInt(value) > 0 && parseInt(value) <= 31;
  return {
    succeeded,
    message: succeeded ? '' : 'Introduce un número de día correcto',
  };
};

export const inputMonth = (value) => {
  const succeeded = parseInt(value) > 0 && parseInt(value) <= 12;
  return {
    succeeded,
    message: succeeded ? '' : 'Introduce un número de mes correcto',
  };
};

export const inputYear = (value) => {
  const succeeded = parseInt(value) >= 2023;
  return {
    succeeded,
    message: succeeded ? '' : 'Introduce un número de año correcto',
  };
};

export const inputEmail = (value) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(value)) {
    alert('La dirección de email ' + value + ' es correcta.');
  } else {
    alert('La dirección de email es incorrecta');
  }
};
