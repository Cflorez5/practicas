import { getMovementsList, getAccount } from './movements.api';
import {
  mapMovementsListFromApiToViewModel,
  mapAccountDataFromApiToViewModel,
} from './movements.mappers';
import { addMovementRows } from './movements.helpers';
import { history } from '../../core/router';
import { onSetValues } from '../../common/helpers';

const params = history.getParams();
const isEditMode = Boolean(params.id);

if (isEditMode) {
  getAccount(params.id).then((apiAccount) => {
    const accountData = mapAccountDataFromApiToViewModel(apiAccount);
    onSetValues(accountData);
  });
}

//Método para recuperar nuestro listado de movimientos
getMovementsList(params.id).then((movementsList) => {
  const viewModelMovementsList =
    mapMovementsListFromApiToViewModel(movementsList);
  addMovementRows(viewModelMovementsList);
});
