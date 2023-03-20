const mapMovementsFromApiToViewModel = (movements) => {
  return {
    ...movements,
    amount: `${movements.amount} €`,
    balance: `${movements.balance} €`,
    transaction: new Date(movements.transaction).toLocaleDateString(),
    realTransaction: new Date(movements.realTransaction).toLocaleDateString(),
  };
};

export const mapMovementsListFromApiToViewModel = (movementsList) => {
  return movementsList.map((movements) =>
    mapMovementsFromApiToViewModel(movements)
  );
};

export const mapAccountDataFromApiToViewModel = (account) => {
  return {
    ...account,
    alias: account.name,
    balance: `${account.balance} €`,
    iban: account.iban,
  };
};

// Si solo me devuelven un dato no hace falta mapear la lista solo los datos (el objeto no un array de objetos)
