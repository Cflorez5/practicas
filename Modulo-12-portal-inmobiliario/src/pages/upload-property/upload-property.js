import { formValidation } from './upload-property.validations';
import { mapNewPropertyFromViewModelToApi } from './upload-property.mappers';
import {
  getSaleTypesList,
  getProvincesList,
  getEquipmentsList,
  insertProperty,
} from './upload-property.api';

import {
  onUpdateField,
  onSetError,
  onSubmitForm,
  onSetFormErrors,
} from '../../common/helpers/element.helpers';

import {
  formatDeleteFeatureButtonId,
  setCheckboxList,
  setOptionList,
  onAddFeature,
  formatCheckboxId,
  onRemoveFeature,
  onAddImage,
} from './upload-property.helpers';

let newProperty = {
  title: '',
  notes: '',
  email: '',
  phone: '',
  price: '',
  saleTypeIds: [],
  address: '',
  city: '',
  provinceId: '',
  squareMeter: '',
  rooms: '',
  bathrooms: '',
  locationUrl: '',
  mainFeatures: [],
  equipmentIds: [],
  images: [],
  newFeature: [],
};

//Ejecutar con promise.all
Promise.all([getSaleTypesList(), getProvincesList(), getEquipmentsList()]).then(
  ([saleTypesList, provincesList, equipmentsList]) => {
    setCheckboxList(saleTypesList, 'saleTypes');
    setCheckboxList(equipmentsList, 'equipments');
    setOptionList(provincesList, 'province');
  }
);

//Campos a rellenar
onUpdateField('title', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    title: value,
  };

  formValidation.validateField('title', newProperty.title).then((result) => {
    onSetError('title', result);
  });
});

onUpdateField('notes', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    notes: value,
  };

  formValidation.validateField('notes', newProperty.notes).then((result) => {
    onSetError('notes', result);
  });
});

onUpdateField('email', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    email: value,
  };

  formValidation.validateField('email', newProperty.email).then((result) => {
    onSetError('email', result);
  });
});

onUpdateField('phone', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    phone: value,
  };

  formValidation.validateField('phone', newProperty.phone).then((result) => {
    onSetError('phone', result);
  });
});

onUpdateField('price', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    price: value,
  };

  formValidation.validateField('price', newProperty.price).then((result) => {
    onSetError('price', result);
  });
});

// onUpdateField("") => No a salesType sino a cada checkbox. Ej. HTLM tiene input 2-comprar
// saleTypeIds;
// Bucle que recorra array y coger las ID de cada elemento
// formatCheckboxId
// cuando tengamos la ID formateada onUpDateField
//Añadir elemento y eliminar elemento

onUpdateField('address', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    address: value,
  };

  formValidation
    .validateField('address', newProperty.address)
    .then((result) => {
      onSetError('address', result);
    });
});

onUpdateField('city', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    city: value,
  };

  formValidation.validateField('city', newProperty.city).then((result) => {
    onSetError('city', result);
  });
});

onUpdateField('provinceId', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    provinceId: value,
  };

  formValidation
    .validateField('provinceId', newProperty.provinceId)
    .then((result) => {
      onSetError('provinceId', result);
    });
});

onUpdateField('squareMeter', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    squareMeter: value,
  };

  formValidation
    .validateField('squareMeter', newProperty.squareMeter)
    .then((result) => {
      onSetError('squareMeter', result);
    });
});

onUpdateField('rooms', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    rooms: value,
  };

  formValidation.validateField('rooms', newProperty.rooms).then((result) => {
    onSetError('rooms', result);
  });
});

onUpdateField('bathrooms', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    bathrooms: value,
  };

  formValidation
    .validateField('bathrooms', newProperty.bathrooms)
    .then((result) => {
      onSetError('bathrooms', result);
    });
});

onUpdateField('locationUrl', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    locationUrl: value,
  };

  formValidation
    .validateField('locationUrl', newProperty.locationUrl)
    .then((result) => {
      onSetError('locationUrl', result);
    });
});

//Botón de insertar característica de la vivienda
onSubmitForm('insert-feature-button', () => {
  const value = document.getElementById('newFeature').value;
  if (value) {
    newProperty = {
      ...newProperty,
      mainFeatures: [...newProperty.mainFeatures, value],
    };

    formatDeleteFeatureButtonId(value);
    onAddFeature(value);
  }
});

//Botón de guardar
onSubmitForm('save-button', () => {
  formValidation.validateForm(newProperty).then((result) => {
    onSetFormErrors(result);
  });

  const apiNewProperty = mapNewPropertyFromViewModelToApi(newProperty);

  if (result.succeeded) {
    insertProperty(apiNewProperty).then((response) => {
      alert('Su petición se ha realizado con éxito');
    });
  } else {
    alert('Su petición no se ha podido completar con éxito');
  }
});
