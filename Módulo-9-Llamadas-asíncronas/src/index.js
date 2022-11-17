import "./styles.css";

import * as utils from "./utils";
import * as DataBusiness from "./data-business";

DataBusiness.getCharacters().then((datos) => {
  const nodesUsers = [];

  for (let character of datos) {
    const result = utils.createCharacterRow(character);

    result.onclick = function () {
      setCharacter(character.char_id);
    };

    nodesUsers.push(result);

    for (let list of nodesUsers) {
      document.getElementById("root").append(list);
    }
  }
});

const setCharacter = (id) => {
  DataBusiness.getCharacterById(id).then((character) => {
    utils.showCharacter(character);
  });
};

