export const mapPropertyDetailFromApiToViewModel = (
  property,
  equipmentsList
) => {
  return {
    ...property,
    mainImage: Array.isArray(property.images) ? property.images[0] : '',
    rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
    squareMeter: `${property.squareMeter}m2`,
    bathrooms: `${property.bathrooms} ${getBathroomWord(property.bathrooms)}`,
    price: `${property.price} €`,
    equipments: mapEquipments(property.equipmentIds, equipmentsList),
  };
};

const getRoomWord = (rooms) => {
  return rooms > 1 ? 'habitaciones' : 'habitacion';
};

const getBathroomWord = (bathrooms) => {
  return bathrooms > 1 ? 'baños' : 'baño';
};

const mapEquipments = (equipmentIds, equipmentsList) => {
  return equipmentIds.map((equipmentId) => {
    const equipment = equipmentsList.find(
      (equipmentsItem) => equipmentsItem.id === equipmentId
    );
    return equipment.name;
  });
};
