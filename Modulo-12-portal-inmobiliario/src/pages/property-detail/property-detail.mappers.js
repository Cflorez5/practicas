export const mapPropertyDetailFromApiToViewModel = (property) => {
  return {
    ...property,
    mainImage: '',
    price: `${property.price} €`,
    rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
    squareMeter: `${property.squareMeter}m2`,
    bathrooms: `${property.bathrooms} ${getBathroomWord(property.bathrooms)}`,
  };
};

const getRoomWord = (rooms) => {
  return rooms > 1 ? 'habitaciones' : 'habitacion';
};

const getBathroomWord = (bathrooms) => {
  return bathrooms > 1 ? 'baños' : 'baño';
};
