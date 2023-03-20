import Axios from 'axios';

//Esto es lo mismo que const url = process.env.BASE_API_URL + '/login';
const url = `${process.env.BASE_API_URL}/login`


export const isValidLogin = login => Axios.post(url , login).then(response => {return response.data;});