import Axios from 'axios';

//Enlazar ruta
const urlTransfer = `${process.env.BASE_API_URL}/transfer`;
const urlData = `${process.env.BASE_API_URL}/account-list`;

export const getAccountList = (id) =>
  Axios.get(urlData, { params: { id: id } }).then((response) => {
    return response.data;
  });

export const isValidTransfer = (transfer) =>
  Axios.post(urlTransfer, transfer).then((response) => {
    return response.data;
  });
