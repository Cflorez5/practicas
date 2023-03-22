import { mapPropertyDetailFromApiToViewModel } from './property-detail.mappers';
import { getPropertyDetail } from './property-detail.api';
import { setPropertyValues } from './property-detail.helpers';
import { history } from '../../core/router/history';

const params = history.getParams();
const isValid = Boolean(params.id);

let property = {
  images: '',
  tittle: '',
  city: '',
  rooms: '',
  squareMeter: '',
  bathrooms: '',
  notes: '',
  mainFeatures: '',
  equipmentId: '',
  locationUrl: '',
};

if (isValid) {
  getPropertyDetail(params.id).then((property) => {
    const viewModelPropertyDetail =
      mapPropertyDetailFromApiToViewModel(property);
    console.log(property);

    setPropertyValues(viewModelPropertyDetail);
  });
}
