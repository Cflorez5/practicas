import { mapPropertyDetailFromApiToViewModel } from './property-detail.mappers';
import {
  getPropertyDetail,
  getEquipments,
  insertContact,
} from './property-detail.api';
import { setPropertyValues } from './property-detail.helpers';
import { history } from '../../core/router/history';
import {
  onUpdateField,
  onSubmitForm,
  onSetFormErrors,
  onSetError,
} from '../../common/helpers/element.helpers';
import { formValidation } from './property-detail.validations';

const params = history.getParams();
const isId = Boolean(params.id);

let property = {
  images: '',
  tittle: '',
  city: '',
  rooms: '',
  squareMeter: '',
  bathrooms: '',
  price: '',
  notes: '',
  mainFeatures: [],
  equipmentIds: [],
  saleTypeIds: [],
  locationUrl: '',
  provinceId: '',
};

Promise.all([getPropertyDetail(params.id), getEquipments()]).then(
  ([propertyDetail, equipments]) => {
    const viewModelPropertyDetail = mapPropertyDetailFromApiToViewModel(
      propertyDetail,
      equipments
    );
    setPropertyValues(viewModelPropertyDetail);
  }
);

let form = {
  email: '',
  message: '',
};

onUpdateField('email', (event) => {
  const value = event.target.value;
  form = { ...form, email: value };

  formValidation.validateField('email', form.email).then((result) => {
    onSetError('email', result);
  });
});

onUpdateField('message', (event) => {
  const value = event.target.value;
  form = { ...form, message: value };

  formValidation.validateField('message', form.message).then((result) => {
    onSetError('message', result);
  });
});

onSubmitForm('contact-button', () => {
  // console.log(form);
  formValidation.validateForm(form).then((result) => {
    onSetFormErrors(result);
    if (result.succeeded) {
      // const mapForm = ;
      insertContact(form).then((response) => {
        alert('Su petición se ha realizado con éxito');
      });
    } else {
      alert('Su petición no se ha podido completar con éxito');
    }
  });
});
