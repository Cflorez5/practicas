import Axios from 'axios';

const urlSaleTypesList = `${process.env.BASE_API_URL}/saleTypes`;
const urlProvincesList = `${process.env.BASE_API_URL}/provinces`;
const urlEquipments = `${process.env.BASE_API_URL}/equipments`;
const urlProperty = `${process.env.BASE_API_URL}/properties`;

export const getSaleTypesList = (id) =>
  Axios.get(urlSaleTypesList).then((response) => {
    return response.data;
  });

export const getProvincesList = () =>
  Axios.get(urlProvincesList).then((response) => {
    return response.data;
  });

export const getEquipmentsList = () =>
  Axios.get(urlEquipments).then((response) => {
    return response.data;
  });

export const insertProperty = (properties) =>
  Axios.post(urlProperty, properties).then((response) => {
    return response.data;
  });
