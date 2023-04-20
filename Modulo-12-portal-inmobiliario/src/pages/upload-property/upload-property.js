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
  onAddFile,
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
  saleTypes: [],
  address: '',
  city: '',
  province: '',
  squareMeter: '',
  rooms: '',
  bathrooms: '',
  locationUrl: '',
  mainFeatures: [],
  equiptmentIds: [],
  images: [],
};

//Añadir y quitar elementos checkbox
const addElementCheckbox = (value) => {
  newProperty = {
    ...newProperty,
    saleTypes: [...newProperty.saleTypes, value],
  };
};

const removeElementCheckbox = (value) => {
  const index = newProperty.saleTypes.indexOf(value);
  newProperty.saleTypes.splice(index, 1);
};

const setEventsCheckbox = (checkboxList) => {
  checkboxList.forEach((element) => {
    const elementId = formatCheckboxId(element);
    onUpdateField(elementId, (event) => {
      const value = event.target.value;

      if (event.target.checked) {
        addElementCheckbox(value);
      } else {
        removeElementCheckbox(value);
      }
    });
  });
};

//equipments
const addElementEquipments = (value) => {
  newProperty = {
    ...newProperty,
    equipmentsIds: [...newProperty.equipmentsIds, value],
  };
};

const removeElementEquipments = (value) => {
  const index = newProperty.equipmentsIds.indexOf(value);
  newProperty.equipmentsIds.splice(index, 1);
};

const setEventsEquipments = (equipmentsList) => {
  equipmentsList.forEach((element) => {
    const elementId = formatCheckboxId(element);
    onUpdateField(elementId, (event) => {
      const value = event.target.value;

      if (event.target.checked) {
        addElementEquipments(value);
      } else {
        removeElementEquipments(value);
      }
    });
  });
};

//Ejecutar con promise.all
Promise.all([getSaleTypesList(), getProvincesList(), getEquipmentsList()]).then(
  ([saleTypesList, provincesList, equipmentsList]) => {
    setCheckboxList(saleTypesList, 'saleTypes');
    setEventsCheckbox(saleTypesList);
    setCheckboxList(equipmentsList, 'equipments');
    setEventsEquipments(equipmentsList);
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

onUpdateField('province', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    province: value,
  };

  formValidation
    .validateField('province', newProperty.province)
    .then((result) => {
      onSetError('province', result);
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
    onAddFeature(value);

    const formartId = formatDeleteFeatureButtonId(value);
    onSubmitForm(formartId, () => {
      //eliminar del HTML
      onRemoveFeature(value);

      //eliminar del array
      const index = newProperty.mainFeatures.indexOf(value);
      newProperty.mainFeatures.splice(index, 1);
    });
  }
});

//Añadir imagen
//onUpdateField convierte la imagen en base 64. La imagen = el value del input.
//añadir el value que te devuelve el método a tu array
onAddFile('add-image', (img) => {
  onAddImage(img);
  newProperty = {
    ...newProperty,
    images: [...newProperty.images, img],
  };
});

//Botón de guardar
onSubmitForm('save-button', () => {
  formValidation.validateForm(newProperty).then((result) => {
    onSetFormErrors(result);
    console.log(result);

    const apiNewProperty = mapNewPropertyFromViewModelToApi(newProperty);

    if (result.succeeded) {
      insertProperty(apiNewProperty).then((response) => {
        alert('Su petición se ha realizado con éxito');
      });
    } else {
      alert('Su petición no se ha podido completar con éxito');
    }
  });
});
