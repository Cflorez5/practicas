import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;
const urlEquipments = `${process.env.BASE_API_URL}/equipments`;
const urlContact = `${process.env.BASE_API_URL}/contact`;

export const getPropertyDetail = (id) =>
  Axios.get(`${url}/${id}`).then((response) => {
    return response.data;
  });

export const getEquipments = () =>
  Axios.get(urlEquipments).then((response) => {
    return response.data;
  });

export const insertContact = (contact) =>
  Axios.post(urlContact, contact).then((response) => {
    return response.data;
  });
