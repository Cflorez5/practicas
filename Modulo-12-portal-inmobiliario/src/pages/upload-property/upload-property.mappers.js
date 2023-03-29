export const mapNewPropertyFromViewModelToApi = (newProperty) => {
  return {
    ...newProperty,
    price: `${newProperty.price.toLocaleString()} €`,
    squareMeter: `${newProperty.squareMeter}m2`,
    rooms: `${newProperty.rooms} ${getRoomWord(newProperty.rooms)}`,
    bathrooms: `${newProperty.bathrooms} ${getBathroomWord(
      newProperty.bathrooms
    )}`,
  };
};

const getRoomWord = (rooms) => {
  return rooms > 1 ? 'habitaciones' : 'habitacion';
};

const getBathroomWord = (bathrooms) => {
  return bathrooms > 1 ? 'baños' : 'baño';
};
