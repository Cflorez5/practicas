//Extraer datos con .get [axios.get("https://www.breakingbadapi.com/api/characters")]

import axios from "axios";

function getCharacters() {
  return axios
    .get("https://www.breakingbadapi.com/api/characters")
    .then((response) => {
      return response.data;
    });
}

function getCharacterById(id) {
  return axios
    .get("https://www.breakingbadapi.com/api/characters/" + id)
    .then((response) => {
      console.log(response.data);
      return response.data[0];
    });
}

export { getCharacters, getCharacterById };

