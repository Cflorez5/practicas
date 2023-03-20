import Axios from 'axios';

//Enlazar ruta
const url = `${process.env.BASE_API_URL}/movements`;
const url1 = `${process.env.BASE_API_URL}/account-list`;

// params.id
export const getMovementsList = (id) =>
  Axios.get(url, { params: { accountId: id } }).then((response) => {
    return response.data;
  });

export const getAccount = (id) =>
  Axios.get(`${url1}/${id}`).then((response) => {
    return response.data;
  });
